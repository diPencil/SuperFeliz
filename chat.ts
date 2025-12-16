import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    req: VercelRequest,
    res: VercelResponse,
) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message, conversationHistory = [] } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get API key from environment variables
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error('GEMINI_API_KEY not found in environment variables');
            return res.status(500).json({ error: 'API key not configured' });
        }

        // Build conversation context
        const contents = [
            {
                role: 'user',
                parts: [{
                    text: `You are Super, an AI assistant specialized in analyzing projects and systems. 
You help users by asking intelligent follow-up questions to understand their needs better.
Be concise, professional, and helpful. Ask one question at a time.

Current user message: ${message}`
                }]
            }
        ];

        // Add conversation history if available
        if (conversationHistory.length > 0) {
            conversationHistory.forEach((msg: any) => {
                contents.push({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text: msg.content }]
                });
            });
        }

        // Call Gemini API
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents,
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024,
                    },
                    safetySettings: [
                        {
                            category: 'HARM_CATEGORY_HARASSMENT',
                            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                        },
                        {
                            category: 'HARM_CATEGORY_HATE_SPEECH',
                            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                        },
                        {
                            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                        },
                        {
                            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                        }
                    ]
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API error:', errorData);
            return res.status(response.status).json({
                error: 'AI service error',
                details: errorData
            });
        }

        const data = await response.json();

        // Extract the AI response
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!aiResponse) {
            return res.status(500).json({ error: 'No response from AI' });
        }

        return res.status(200).json({
            response: aiResponse,
            model: 'gemini-pro'
        });

    } catch (error) {
        console.error('Error in chat API:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
