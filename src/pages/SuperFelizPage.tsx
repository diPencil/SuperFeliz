import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Send, ArrowRight, Zap, Brain, Cpu, MessageSquare, ChevronDown, X, Rocket, Crown, Key, TrendingUp, BarChart3, Target, CheckCircle2, Clock, FileText, Sun, Moon, Lock } from 'lucide-react';

interface SuperFelizPageProps {
    direction: 'rtl' | 'ltr';
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    toggleDirection: () => void;
    t: any;
}

interface Message {
    type: 'ai' | 'user';
    content: string;
    timestamp: Date;
}

interface UserData {
    projectName: string;
    businessType: string;
    description: string;
    targetLocation: string;
    sector: string;
    budget: string;
    stage: string;
    goal: string;
}

const SuperFelizPage = ({ direction, theme, toggleTheme, toggleDirection, t }: SuperFelizPageProps) => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentInput, setCurrentInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [userData, setUserData] = useState<Partial<UserData>>({});
    const [showResults, setShowResults] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    // Model Configuration
    const models = [
        { id: 'feliz-oper-beta', name: 'Feliz Oper V1.0 Beta', tier: 'free', type: 'business' },
        { id: 'feliz-tech-beta', name: 'Feliz Tech V1.0 Beta', tier: 'free', type: 'technical' },
        { id: 'feliz-pro', name: 'Feliz V1.0 Beta', tier: 'pro', type: 'business-ai' },
        { id: 'superfeliz', name: 'SuperFeliz V1.0 Beta', tier: 'pro', type: 'technical-ai' },
    ];

    // Dropdown States
    const [showModelMenu, setShowModelMenu] = useState(false);
    const [showPlanMenu, setShowPlanMenu] = useState(false);
    const [selectedModel, setSelectedModel] = useState('Feliz Oper V1.0 Beta');
    const [selectedPlan, setSelectedPlan] = useState('project_plan');
    const [showProModal, setShowProModal] = useState(false);
    const [showModelChangeConfirm, setShowModelChangeConfirm] = useState(false);
    const [pendingModel, setPendingModel] = useState<string | null>(null);

    // Analytics & Stats States
    const [completionPercentage, setCompletionPercentage] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [totalQuestions] = useState(20);
    const [estimatedTime, setEstimatedTime] = useState(5);
    const [projectScore, setProjectScore] = useState(0);

    // Tokens State
    const [tokensRemaining, setTokensRemaining] = useState(100); // 100 daily tokens
    const TOKENS_PER_MESSAGE = 1; // 1 token per message

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const language = direction === 'rtl' ? 'ar' : 'en';

    const scrollToBottom = (force = false) => {
        if (messagesContainerRef.current) {
            const container = messagesContainerRef.current;
            const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 150;

            if (force || isNearBottom) {
                setTimeout(() => {
                    if (messagesEndRef.current) {
                        messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    }
                }, 50);
            }
        }
    };

    useEffect(() => {
        // Auto-scroll only if user hasn't scrolled up
        scrollToBottom();
    }, [messages]);

    // Update analytics based on chat progress
    useEffect(() => {
        const answered = Object.keys(userData).filter(key => userData[key as keyof UserData]?.trim()).length;
        setQuestionsAnswered(answered);
        setCompletionPercentage(Math.round((answered / totalQuestions) * 100));

        // Calculate estimated time remaining (1-2 min per question)
        const remaining = totalQuestions - answered;
        setEstimatedTime(remaining * 1.5);

        // Calculate project score based on completeness
        const score = Math.min(100, Math.round((answered / totalQuestions) * 100));
        setProjectScore(score);
    }, [userData, totalQuestions]);

    // Update selectedPlan when model changes
    useEffect(() => {
        const model = models.find(m => m.name === selectedModel);
        if (model?.type === 'technical' || model?.type === 'technical-ai') {
            setSelectedPlan('system_analysis');
        } else {
            setSelectedPlan('project_plan');
        }
    }, [selectedModel]);

    // Typewriter effect for placeholder
    // Typewriter effect for placeholder
    const [placeholderText, setPlaceholderText] = useState('');

    useEffect(() => {
        const messagesToType = language === 'ar'
            ? ['صف مشروعك أو فكرتك هنا...', 'دعنا نبني شيئاً مذهلاً...', 'دعنا نطلق مشروعك القادم...']
            : ['Describe your project or idea here...', 'Let\'s build something amazing...', 'Let\'s launch your next project...'];

        let messageIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId: NodeJS.Timeout;

        const type = () => {
            const currentMessage = messagesToType[messageIndex];

            if (isDeleting) {
                setPlaceholderText(currentMessage.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setPlaceholderText(currentMessage.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentMessage.length) {
                // Determine pause duration at end of typing
                isDeleting = true;
                timeoutId = setTimeout(type, 2000); // Wait 2s before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                messageIndex = (messageIndex + 1) % messagesToType.length;
                timeoutId = setTimeout(type, 500); // Wait 0.5s before typing next
            } else {
                const speed = isDeleting ? 50 : 100;
                timeoutId = setTimeout(type, speed);
            }
        };

        timeoutId = setTimeout(type, 500);

        return () => clearTimeout(timeoutId);
    }, [language]);

    const addAIMessage = (content: string) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'ai', content, timestamp: new Date() }]);
            setIsTyping(false);
            // AI messages are free - no token deduction
        }, 800);
    };

    const addUserMessage = (content: string, deductTokens: boolean = true) => {
        setMessages(prev => [...prev, { type: 'user', content, timestamp: new Date() }]);
        // Deduct tokens only if specified (for valid messages)
        if (deductTokens) {
            setTokensRemaining(prev => Math.max(0, prev - TOKENS_PER_MESSAGE));
        }
    };

    // Call AI API for Pro models
    const callAI = async (userMessage: string): Promise<string | null> => {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    conversationHistory: messages.slice(-5).map(msg => ({
                        role: msg.type === 'user' ? 'user' : 'assistant',
                        content: msg.content
                    }))
                }),
            });

            if (!response.ok) {
                console.error('AI API error:', response.status);
                return null;
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('Error calling AI API:', error);
            return null;
        }
    };

    // Dynamic questions based on selected model
    const model = models.find(m => m.name === selectedModel);
    const isTechnical = model?.type === 'technical' || model?.type === 'technical-ai';

    const questions = isTechnical
        ? (language === 'ar' ? [
            // أسئلة SuperFeliz - الأنظمة (20 سؤال)
            'ما نوع النظام الذي تحتاجه؟ (CRM / ERP / HRM / PMS / نظام فواتير / نظام قانوني / نظام عقارات / أخرى)',
            'ما هو حجم شركتك؟ (صغيرة: 1-10 موظفين / متوسطة: 11-50 / كبيرة: 51-200 / مؤسسة: 200+)',
            'ما هي المميزات الأساسية التي تحتاجها في النظام؟',
            'كم عدد المستخدمين المتوقع للنظام؟',
            'هل تفضل نظام سحابي (Cloud) أم محلي (On-Premise)؟',
            'ما هي الأنظمة الحالية التي تستخدمها وتحتاج التكامل معها؟',
            'ما هي الميزانية التقريبية للمشروع؟',
            'ما هي الأقسام التي ستستخدم النظام؟ (المبيعات / التسويق / المحاسبة / الموارد البشرية / أخرى)',
            'هل تحتاج تقارير وتحليلات متقدمة؟ وما نوعها؟',
            'هل تحتاج تطبيق موبايل للنظام؟ (iOS / Android / كلاهما / لا)',
            'ما هي لغات الواجهة المطلوبة؟ (عربي / إنجليزي / كلاهما / أخرى)',
            'هل تحتاج صلاحيات ومستويات وصول مختلفة للمستخدمين؟',
            'ما هو الجدول الزمني المتوقع للتنفيذ؟ (شهر / 3 أشهر / 6 أشهر / سنة)',
            'هل تحتاج تدريب للموظفين على النظام؟',
            'هل تحتاج دعم فني مستمر بعد التسليم؟',
            'ما هي متطلبات الأمان والخصوصية للبيانات؟',
            'هل تحتاج نسخ احتياطي تلقائي للبيانات؟',
            'هل تحتاج إشعارات (Notifications) عبر البريد الإلكتروني أو SMS؟',
            'ما هي طريقة الدفع المفضلة؟ (دفعة واحدة / أقساط / اشتراك شهري)',
            'هل لديك أي متطلبات خاصة أو مميزات إضافية؟'
        ] : [
            // SuperFeliz - Systems (20 questions)
            'What type of system do you need? (CRM / ERP / HRM / PMS / Invoices / Legal / Real Estate / Other)',
            'What is your company size? (Small: 1-10 employees / Medium: 11-50 / Large: 51-200 / Enterprise: 200+)',
            'What are the main features you need in the system?',
            'How many users are expected to use the system?',
            'Do you prefer Cloud or On-Premise deployment?',
            'What existing systems do you use that need integration?',
            'What is the approximate budget for the project?',
            'Which departments will use the system? (Sales / Marketing / Accounting / HR / Other)',
            'Do you need advanced reports and analytics? What type?',
            'Do you need a mobile app for the system? (iOS / Android / Both / No)',
            'What interface languages are required? (Arabic / English / Both / Other)',
            'Do you need different user roles and access levels?',
            'What is the expected timeline for implementation? (1 month / 3 months / 6 months / 1 year)',
            'Do you need employee training on the system?',
            'Do you need ongoing technical support after delivery?',
            'What are your data security and privacy requirements?',
            'Do you need automatic data backup?',
            'Do you need notifications via email or SMS?',
            'What is your preferred payment method? (One-time / Installments / Monthly subscription)',
            'Do you have any special requirements or additional features?'
        ])
        : (language === 'ar' ? [
            // أسئلة Feliz - المشاريع العامة (20 سؤال)
            'ما هو اسم مشروعك أو فكرتك التجارية؟',
            'ما نوع المشروع؟ (خدمة / محتوى / منتج / SaaS / سوق إلكتروني / أخرى)',
            'صف لي باختصار: ما المشكلة التي يحلها مشروعك؟ ولمن؟',
            'ما هي الدولة/المدينة المستهدفة والقطاع الرئيسي؟',
            'ما هو رأس المال المتاح أو الميزانية التقريبية؟',
            'في أي مرحلة المشروع؟ (فكرة فقط / ما قبل الإطلاق / تم الإطلاق حديثاً / يعمل منذ 6+ أشهر / يعمل منذ سنة+)',
            'ما هو هدفك الرئيسي للـ 6-12 شهر القادمة؟',
            'من هم منافسوك الرئيسيون؟ وما الذي يميزك عنهم؟',
            'ما هي الفئة العمرية المستهدفة؟ (18-25 / 25-35 / 35-50 / 50+)',
            'هل لديك فريق عمل؟ كم عدد الأعضاء؟',
            'ما هي قنوات التسويق التي تخطط لاستخدامها؟',
            'هل تحتاج موقع إلكتروني أو تطبيق؟ أم كلاهما؟',
            'ما هو نموذج الإيرادات؟ (بيع مباشر / اشتراكات / إعلانات / عمولات)',
            'هل تحتاج تمويل خارجي؟ كم المبلغ المطلوب؟',
            'ما هي التحديات الرئيسية التي تواجهك حالياً؟',
            'هل لديك عملاء حاليون؟ كم عددهم؟',
            'ما هي خطتك للنمو والتوسع؟',
            'هل تحتاج شركاء أو مستثمرين؟',
            'ما هي المقاييس (KPIs) التي تستخدمها لقياس النجاح؟',
            'هل لديك أي متطلبات قانونية أو تراخيص خاصة؟'
        ] : [
            // Feliz - General Projects (20 questions)
            'What is your business or project name?',
            'What type of business? (Service / Content / Product / SaaS / Marketplace / Other)',
            'Briefly describe: What problem does it solve, and for whom?',
            'Target country/city and main sector?',
            'Available startup capital or approximate budget?',
            'Current stage? (Idea only / Pre-launch / Just launched / Running 6+ months / Running 1+ year)',
            'Main goal for the next 6-12 months?',
            'Who are your main competitors? What makes you different?',
            'Target age group? (18-25 / 25-35 / 35-50 / 50+)',
            'Do you have a team? How many members?',
            'What marketing channels do you plan to use?',
            'Do you need a website or app? Or both?',
            'What is your revenue model? (Direct sales / Subscriptions / Ads / Commissions)',
            'Do you need external funding? How much?',
            'What are the main challenges you currently face?',
            'Do you have current customers? How many?',
            'What is your growth and expansion plan?',
            'Do you need partners or investors?',
            'What KPIs do you use to measure success?',
            'Do you have any legal requirements or special licenses?'
        ]);

    const startConsultation = () => {
        if (!currentInput.trim()) return;

        // Save the initial input as the first user message
        const initialInput = currentInput.trim();
        addUserMessage(initialInput);

        // Save it as project name
        setUserData(prev => ({ ...prev, projectName: initialInput }));

        // Clear input and start chat
        setCurrentInput('');
        setIsStarted(true);

        setTimeout(() => {
            addAIMessage(
                language === 'ar'
                    ? 'مرحباً! أنا Super 👋 مساعدك الذكي من Pencil Studio. سأساعدك في تحليل مشروعك وتقديم أفضل التوصيات. دعنا نبدأ!'
                    : 'Hello! I\'m Super 👋 your intelligent assistant from Pencil Studio. I\'ll help you analyze your project and provide the best recommendations. Let\'s get started!'
            );
            setTimeout(() => {
                askNextQuestion();
            }, 1500);
        }, 500);
    };

    const handleModelChange = (modelName: string) => {
        const selectedModelObj = models.find(m => m.name === modelName);

        // Check if Pro model and user doesn't have Pro
        // TEMPORARILY DISABLED FOR TESTING
        /*
        if (selectedModelObj?.tier === 'pro') {
            // TODO: Check if user has Pro subscription
            // For now, show Pro modal
            setShowProModal(true);
            setShowModelMenu(false);
            return;
        }
        */

        if (isStarted && messages.length > 0) {
            // Show confirmation if chat has started
            setPendingModel(modelName);
            setShowModelChangeConfirm(true);
            setShowModelMenu(false);
        } else {
            // Change directly if chat hasn't started
            setSelectedModel(modelName);
            // selectedPlan will be updated by useEffect
            setShowModelMenu(false);
        }
    };

    const confirmModelChange = () => {
        if (pendingModel) {
            // Reset chat
            setMessages([]);
            setUserData({});
            setCurrentStep(0);
            setCurrentInput('');

            // Change model
            setSelectedModel(pendingModel);
            // Update selectedPlan based on the new model
            setSelectedPlan(pendingModel === 'SuperFeliz V1.0 Beta' ? 'system_analysis' : 'project_plan');

            // Close modal
            setShowModelChangeConfirm(false);
            setPendingModel(null);

            // Restart chat with welcome message
            setTimeout(() => {
                addAIMessage(
                    language === 'ar'
                        ? 'مرحباً! أنا Super 👋 مساعدك الذكي من Pencil Studio. سأساعدك في تحليل مشروعك وتقديم أفضل التوصيات. دعنا نبدأ!'
                        : 'Hello! I\'m Super 👋 your intelligent assistant from Pencil Studio. I\'ll help you analyze your project and provide the best recommendations. Let\'s get started!'
                );
                setTimeout(() => {
                    askNextQuestion();
                }, 1500);
            }, 500);
        }
    };

    const cancelModelChange = () => {
        setShowModelChangeConfirm(false);
        setPendingModel(null);
    };

    const askNextQuestion = async () => {
        if (currentStep < questions.length) {
            // Check if this is a Pro model
            const currentModel = models.find(m => m.name === selectedModel);
            const isProModel = currentModel?.tier === 'pro';

            if (isProModel) {
                // Use AI for Pro models
                try {
                    // Show loading message
                    setTimeout(() => {
                        addAIMessage(language === 'ar' ? '🤔 جاري التفكير...' : '🤔 Thinking...');
                    }, 300);

                    // Get AI response
                    const lastUserMessage = messages[messages.length - 1]?.content || '';
                    const aiResponse = await callAI(lastUserMessage);

                    if (aiResponse) {
                        // Remove loading message and add AI response
                        setTimeout(() => {
                            setMessages(prev => prev.slice(0, -1)); // Remove loading
                            addAIMessage(aiResponse);
                        }, 800);
                    } else {
                        // Fallback to predefined question if AI fails
                        setTimeout(() => {
                            setMessages(prev => prev.slice(0, -1)); // Remove loading
                            addAIMessage(questions[currentStep]);
                        }, 800);
                    }
                } catch (error) {
                    console.error('Error in AI question:', error);
                    // Fallback to predefined question
                    setTimeout(() => {
                        addAIMessage(questions[currentStep]);
                    }, 500);
                }
            } else {
                // Use predefined questions for Free models
                setTimeout(() => {
                    addAIMessage(questions[currentStep]);
                }, 500);
            }
        }
    };

    // Smart validation for meaningful answers
    const isValidAnswer = (text: string): boolean => {
        // 1. Minimum length check (at least 2 characters)
        if (text.length < 2) return false;

        // 2. Check for gibberish - too many consonants without vowels
        const vowels = text.match(/[aeiouAEIOUاأإآةوي]/g);

        // If text has more than 3 characters and no vowels at all, likely gibberish
        if (text.length > 3 && (!vowels || vowels.length === 0)) {
            return false;
        }

        // 3. Check for repeated characters (like "aaaa" or "سسسس")
        const repeatedPattern = /(.)\1{3,}/;
        if (repeatedPattern.test(text)) return false;

        // 4. Check for random special characters pattern
        const specialCharsRatio = (text.match(/[^\w\s\u0600-\u06FF]/g) || []).length / text.length;
        if (specialCharsRatio > 0.3) return false; // More than 30% special chars

        return true;
    };

    const handleSendMessage = () => {
        if (!currentInput.trim()) return;

        const userMessage = currentInput.trim();

        // Validate the answer using smart validation
        if (!isValidAnswer(userMessage)) {
            // Add message WITHOUT deducting tokens (invalid answer)
            addUserMessage(userMessage, false);
            setCurrentInput('');

            // Reject short answer without consuming tokens or moving to next question
            setTimeout(() => {
                addAIMessage(
                    language === 'ar'
                        ? '⚠️ يبدو أن هذه الإجابة غير واضحة. من فضلك، اكتب إجابة مفهومة ومفيدة لنتمكن من مساعدتك بشكل أفضل.'
                        : '⚠️ This answer seems unclear. Please provide a clear and meaningful answer so we can help you better.'
                );
            }, 800);
            return;
        }

        // Valid answer - proceed normally
        addUserMessage(userMessage);
        setCurrentInput('');
        scrollToBottom(true);

        const keys: (keyof UserData)[] = ['projectName', 'businessType', 'description', 'targetLocation', 'sector', 'budget', 'stage', 'goal'];
        if (currentStep < keys.length) {
            setUserData(prev => ({ ...prev, [keys[currentStep]]: userMessage }));
            setCurrentStep(prev => prev + 1);
            askNextQuestion();
        }
    };

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'} relative overflow-hidden transition-colors duration-300`} dir={direction}>
            {/* Custom Header for SuperFeliz - IDE Style */}
            <header className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-[#0f1117] border-gray-800' : 'bg-white border-gray-200'} border-b`}>
                <div className="max-w-full mx-auto px-4 sm:px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {/* Favicon */}
                            <div className={`w-8 h-8 ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'} rounded-lg flex items-center justify-center`}>
                                <Brain className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                            </div>
                            {/* Project Name or Default */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                                        {userData.projectName?.trim() || (language === 'ar' ? 'SuperFeliz - مساعدك الذكي' : 'SuperFeliz - Your AI Assistant')}
                                    </h1>
                                    <Lock className={`w-3 h-3 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`} />
                                </div>
                                {userData.projectName?.trim() && (
                                    <p className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                                        {language === 'ar' ? 'جاري التحليل...' : 'Analyzing...'}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
                            >
                                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Spiral Grid */}
                <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}>
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(0deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
                        backgroundSize: '100% 100%, 50px 50px, 50px 50px',
                        animation: 'gridPulse 4s ease-in-out infinite'
                    }}></div>
                </div>

                {/* Floating Orbs */}
                <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-400/20'} rounded-full blur-3xl animate-float`}></div>
                <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl animate-float-delayed`}></div>
                <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-400/20'} rounded-full blur-3xl animate-pulse`}></div>
            </div>

            {/* Main Content Area */}
            <div className="pt-16">
                {isStarted ? (
                    // Bolt-Style Chat Interface
                    <div className="flex h-[calc(100vh-4rem)]">
                        {/* Left: Chat Area */}
                        <div className={`flex-1 flex flex-col ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
                            {/* Chat Messages */}
                            <div
                                ref={messagesContainerRef}
                                className="flex-1 overflow-y-auto p-6 space-y-3"
                            >
                                {messages.map((msg, idx) => (
                                    <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[85%] ${msg.type === 'user'
                                            ? 'bg-blue-600 text-white'
                                            : theme === 'dark' ? 'bg-[#1a1a1a] text-gray-200 border border-gray-800' : 'bg-white text-gray-900 border border-gray-200'
                                            } rounded-xl px-4 py-3 shadow-lg`}>
                                            <p className="whitespace-pre-wrap leading-relaxed text-sm">{msg.content}</p>
                                        </div>
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className={`${theme === 'dark' ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'} border rounded-xl px-4 py-3 shadow-lg`}>
                                            <div className="flex gap-1.5">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Bolt-Style Input Area */}
                            <div className={`border-t ${theme === 'dark' ? 'border-gray-800 bg-[#0f1117]' : 'border-gray-200 bg-white'} p-4`}>
                                {/* Tokens Display */}
                                <div className="mb-3 flex items-center justify-between text-xs">
                                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                        <Zap className="w-3 h-3 inline mr-1 text-yellow-500" />
                                        {tokensRemaining} daily tokens remaining.
                                    </span>
                                    <button
                                        onClick={() => setShowProModal(true)}
                                        className={`${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition`}
                                    >
                                        Switch to Pro for 5x more usage
                                    </button>
                                </div>

                                {/* Input Field */}
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={currentInput}
                                        onChange={(e) => setCurrentInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        placeholder={language === 'ar' ? 'كيف يمكن لـ Super مساعدتك اليوم؟ (أو /أمر)' : 'How can Super help you today? (or /command)'}
                                        className={`w-full px-4 py-3 ${theme === 'dark' ? 'bg-[#1a1a1a] border-gray-800 text-gray-200 placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm`}
                                        autoFocus
                                    />
                                </div>

                                {/* Controls Row */}
                                <div className="flex items-center justify-between">
                                    {/* Left: Actions & Selectors */}
                                    <div className="flex items-center gap-2">
                                        {/* Attachment Button */}
                                        <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                            </svg>
                                        </button>

                                        {/* Model Selector */}
                                        <div className="relative">
                                            <button
                                                onClick={() => setShowModelMenu(!showModelMenu)}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 ${theme === 'dark' ? 'bg-[#1a1a1a] border-gray-800 text-gray-300 hover:bg-gray-800' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'} border rounded-lg text-xs font-medium transition`}
                                            >
                                                <Sparkles className="w-3 h-3 text-purple-400" />
                                                <span>{selectedModel}</span>
                                                <ChevronDown className="w-3 h-3 opacity-50" />
                                            </button>

                                            {showModelMenu && (
                                                <div className={`absolute bottom-full left-0 mb-2 w-64 rounded-xl border p-2 shadow-xl z-[9999] max-h-80 overflow-y-auto ${theme === 'dark' ? 'border-gray-800 bg-[#1a1a1a]' : 'border-gray-200 bg-white'}`}>
                                                    {/* Free Models */}
                                                    <div className={`text-[9px] font-semibold px-2 py-0.5 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                                                        FREE MODELS
                                                    </div>
                                                    {models.filter(m => m.tier === 'free').map((model) => (
                                                        <button
                                                            key={model.id}
                                                            onClick={() => handleModelChange(model.name)}
                                                            className={`w-full text-left px-3 py-1 rounded-lg text-xs transition-colors flex items-center justify-between ${selectedModel === model.name ? (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50')}`}
                                                        >
                                                            <span>{model.name}</span>
                                                            <span className="text-[9px] text-green-500 font-medium">FREE</span>
                                                        </button>
                                                    ))}

                                                    {/* Pro Models */}
                                                    <div className={`text-[9px] font-semibold px-2 py-0.5 mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                                                        PRO MODELS
                                                    </div>
                                                    {models.filter(m => m.tier === 'pro').map((model) => (
                                                        <button
                                                            key={model.id}
                                                            onClick={() => handleModelChange(model.name)}
                                                            className={`w-full text-left px-3 py-1 rounded-lg text-xs transition-colors flex items-center justify-between ${selectedModel === model.name ? (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50')}`}
                                                        >
                                                            <span>{model.name}</span>
                                                            <span className="text-[9px] text-purple-500 font-medium">PRO</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Service Selector */}
                                        <div className="relative">
                                            <button
                                                onClick={() => setShowPlanMenu(!showPlanMenu)}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 ${theme === 'dark' ? 'bg-[#1a1a1a] border-gray-800 text-gray-300 hover:bg-gray-800' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'} border rounded-lg text-xs font-medium transition`}
                                            >
                                                <Brain className="w-3 h-3 text-blue-400" />
                                                <span>
                                                    {isTechnical ? (
                                                        <>
                                                            {selectedPlan === 'system_analysis' && (language === 'ar' ? 'تحليل النظام' : 'System Analysis')}
                                                            {selectedPlan === 'features_planning' && (language === 'ar' ? 'تخطيط المميزات' : 'Features Planning')}
                                                            {selectedPlan === 'technical_architecture' && (language === 'ar' ? 'البنية التقنية' : 'Technical Architecture')}
                                                            {selectedPlan === 'cost_estimation' && (language === 'ar' ? 'تقدير التكلفة' : 'Cost Estimation')}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {selectedPlan === 'project_plan' && (language === 'ar' ? 'خطة مشروع' : 'Project Plan')}
                                                            {selectedPlan === 'business_model' && (language === 'ar' ? 'نموذج عمل' : 'Business Model')}
                                                            {selectedPlan === 'marketing_strategy' && (language === 'ar' ? 'استراتيجية تسويق' : 'Marketing Strategy')}
                                                        </>
                                                    )}
                                                </span>
                                                <ChevronDown className="w-3 h-3 opacity-50" />
                                            </button>

                                            {showPlanMenu && (
                                                <div className={`absolute bottom-full left-0 mb-2 w-48 rounded-xl border p-1 shadow-xl z-50 ${theme === 'dark' ? 'border-gray-800 bg-[#1a1a1a]' : 'border-gray-200 bg-white'}`}>
                                                    {isTechnical ? (
                                                        [
                                                            { id: 'system_analysis', label: language === 'ar' ? 'تحليل النظام' : 'System Analysis' },
                                                            { id: 'features_planning', label: language === 'ar' ? 'تخطيط المميزات' : 'Features Planning' },
                                                            { id: 'technical_architecture', label: language === 'ar' ? 'البنية التقنية' : 'Technical Architecture' },
                                                            { id: 'cost_estimation', label: language === 'ar' ? 'تقدير التكلفة' : 'Cost Estimation' }
                                                        ].map((plan) => (
                                                            <button
                                                                key={plan.id}
                                                                onClick={() => {
                                                                    setSelectedPlan(plan.id);
                                                                    setShowPlanMenu(false);
                                                                }}
                                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedPlan === plan.id ? (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50')}`}
                                                            >
                                                                {plan.label}
                                                            </button>
                                                        ))
                                                    ) : (
                                                        [
                                                            { id: 'project_plan', label: language === 'ar' ? 'خطة مشروع' : 'Project Plan' },
                                                            { id: 'business_model', label: language === 'ar' ? 'نموذج عمل' : 'Business Model' },
                                                            { id: 'marketing_strategy', label: language === 'ar' ? 'استراتيجية تسويق' : 'Marketing Strategy' }
                                                        ].map((plan) => (
                                                            <button
                                                                key={plan.id}
                                                                onClick={() => {
                                                                    setSelectedPlan(plan.id);
                                                                    setShowPlanMenu(false);
                                                                }}
                                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedPlan === plan.id ? (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50')}`}
                                                            >
                                                                {plan.label}
                                                            </button>
                                                        ))
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right: Send Button */}
                                    <button
                                        onClick={handleSendMessage}
                                        disabled={!currentInput.trim()}
                                        className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${!currentInput.trim()
                                            ? (theme === 'dark' ? 'bg-gray-800 text-gray-600' : 'bg-gray-200 text-gray-400') + ' cursor-not-allowed opacity-50'
                                            : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                                            }`}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right: Analytics & Insights Sidebar */}
                        <div className={`w-80 border-l ${theme === 'dark' ? 'border-gray-800 bg-[#0f1117]' : 'border-gray-200 bg-gray-50'} p-6 overflow-y-auto`}>
                            {/* Super AI Assistant Header */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <Brain className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                            Super AI Assistant
                                        </h3>
                                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                                            {language === 'ar' ? 'جاري التحليل...' : 'Analyzing...'}
                                        </p>
                                    </div>
                                </div>
                                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                                    {language === 'ar'
                                        ? 'مرحباً! أنا Super 👋 مساعدك الذكي من Pencil Studio. سأساعدك في تحليل مشروعك وتقديم أفضل التوصيات. دعنا نبدأ!'
                                        : 'Hello! I\'m Super 👋 your intelligent assistant from Pencil Studio. I\'ll help you analyze your project and provide the best recommendations. Let\'s get started!'}
                                </p>
                            </div>

                            {/* Analytics & Insights */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <BarChart3 className={`w-4 h-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
                                    <h4 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        {language === 'ar' ? 'التحليلات والرؤى' : 'Analytics & Insights'}
                                    </h4>
                                </div>
                                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} mb-3`}>
                                    {language === 'ar' ? 'التحديثات المباشرة' : 'Live Updates'}
                                </p>
                            </div>

                            {/* Consultation Progress */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Target className={`w-4 h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                                    <h5 className={`text-xs font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        {language === 'ar' ? 'تقدم الاستشارة' : 'Consultation Progress'}
                                    </h5>
                                </div>
                                <div className="text-right mb-2">
                                    <span className={`text-3xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                                        {completionPercentage}%
                                    </span>
                                </div>
                                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                                    {questionsAnswered} / {totalQuestions} {language === 'ar' ? 'أسئلة تمت الإجابة عليها' : 'questions answered'}
                                </p>
                            </div>

                            {/* Project Score */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className={`w-4 h-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
                                    <h5 className={`text-xs font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        {language === 'ar' ? 'نقاط المشروع' : 'Project Score'}
                                    </h5>
                                </div>
                                <div className="text-right mb-2">
                                    <span className={`text-3xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                                        {projectScore}
                                    </span>
                                </div>
                            </div>

                            {/* Time Remaining */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Clock className={`w-4 h-4 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`} />
                                    <h5 className={`text-xs font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        {language === 'ar' ? 'الوقت المتبقي' : 'Time Remaining'}
                                    </h5>
                                </div>
                                <div className="text-right mb-2">
                                    <span className={`text-3xl font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
                                        ~{Math.ceil(estimatedTime)}
                                    </span>
                                </div>
                                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                                    {language === 'ar' ? 'دقيقة' : 'min'}
                                </p>
                            </div>

                            {/* Questions Checklist */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <FileText className={`w-4 h-4 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                                    <h5 className={`text-xs font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        {language === 'ar' ? 'قائمة الأسئلة' : 'Questions Checklist'}
                                    </h5>
                                </div>
                                <div className="space-y-2">
                                    {questions.map((question, idx) => {
                                        const keys: (keyof UserData)[] = ['projectName', 'businessType', 'description', 'targetLocation', 'sector', 'budget', 'stage', 'goal'];
                                        const isAnswered = userData[keys[idx]]?.trim();
                                        return (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isAnswered
                                                    ? (theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600')
                                                    : (theme === 'dark' ? 'bg-gray-800 text-gray-600' : 'bg-gray-200 text-gray-400')
                                                    }`}>
                                                    {isAnswered ? (
                                                        <CheckCircle2 className="w-3 h-3" />
                                                    ) : (
                                                        <div className="w-2 h-2 rounded-full bg-current"></div>
                                                    )}
                                                </div>
                                                <p className={`text-xs leading-relaxed ${isAnswered
                                                    ? (theme === 'dark' ? 'text-gray-300' : 'text-gray-700')
                                                    : (theme === 'dark' ? 'text-gray-500' : 'text-gray-500')
                                                    }`}>
                                                    {question.length > 60 ? question.substring(0, 60) + '...' : question}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Hero Landing Page
                    <div className="relative min-h-[90vh] flex items-center justify-center px-4 pt-24 pb-20">
                        <div className="relative z-10 max-w-6xl mx-auto text-center">

                            {/* AI Badge */}
                            <div className={`mt-32 inline-flex items-center gap-2 bg-gradient-to-r ${theme === 'dark' ? 'from-blue-500/10 to-purple-500/10' : 'from-blue-100 to-purple-100'} backdrop-blur-xl border ${theme === 'dark' ? 'border-blue-500/20 text-blue-400' : 'border-blue-300 text-blue-600'} px-5 py-2 rounded-full mb-6 animate-fade-in shadow-lg ${theme === 'dark' ? 'shadow-blue-500/10' : 'shadow-blue-200/50'}`}>
                                <Brain className="w-4 h-4 animate-pulse" />
                                <span className="text-xs font-semibold tracking-wide">
                                    {language === 'ar' ? 'مدعوم بالذكاء الاصطناعي SuperFeliz' : 'Powered by SuperFeliz AI'}
                                </span>
                                <Sparkles className="w-3 h-3" />
                            </div>

                            {/* Main Heading with Gradient */}
                            {/* Main Heading with Gradient */}
                            <h1 className={`${language === 'ar' ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'} md:text-7xl font-black mb-6 leading-tight`}>
                                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                                    {language === 'ar' ? 'ابنِ مشروعك مع ' : 'Build with '}
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-gradient">
                                    {language === 'ar' ? 'سوبر' : 'Super'}
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className={`text-xs sm:text-base md:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed`}>
                                {language === 'ar'
                                    ? 'مساعدك الذكي لتحليل المشاريع وتقديم توصيات مخصصة من خبراء Pencil Studio'
                                    : 'Your intelligent assistant for project analysis and personalized recommendations from Pencil Studio experts'}
                            </p>

                            {/* Pro Version Link - Mobile Only (Below Subtitle) */}
                            <div className="md:hidden flex justify-center mb-8">
                                <div
                                    onClick={() => setShowProModal(true)}
                                    className="flex items-center gap-2 text-blue-500 cursor-pointer hover:text-blue-400 transition-colors text-xs font-medium"
                                >
                                    <span>{language === 'ar' ? 'النسخة الاحترافية قريباً' : 'Pro Version Coming Soon'}</span>
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>

                            {/* Interactive Input Area - Bolt Style */}
                            <div className="max-w-3xl mx-auto mb-10 w-full relative z-20">
                                <div className={`relative group rounded-3xl overflow-hidden transition-all duration-300 ${isTyping ? 'shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]' : 'shadow-2xl'}`}>

                                    {/* Glow Border Animation */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30 group-hover:opacity-100 transition duration-500 animate-gradient-xy p-[1px] rounded-3xl pointer-events-none">
                                        <div className={`w-full h-full ${theme === 'dark' ? 'bg-[#0f1117]' : 'bg-white'} rounded-3xl`}></div>
                                    </div>

                                    <div className={`relative ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'} rounded-3xl flex flex-col ${isStarted ? 'min-h-[600px]' : 'min-h-[160px]'}`}>

                                        {/* Top Status Bar */}
                                        <div className={`flex items-center justify-between px-6 py-3 text-xs font-medium ${theme === 'dark' ? 'text-gray-400 bg-[#15171f]' : 'text-gray-500 bg-gray-50'} border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
                                            <div className="flex items-center gap-2">
                                                <Zap className="w-3 h-3 text-yellow-500" />
                                                <span>
                                                    {language === 'ar'
                                                        ? `${tokensRemaining} tokens remaining. Switch to Pro for 5x more usage`
                                                        : `${tokensRemaining} tokens remaining. Switch to Pro for 5x more usage`}
                                                </span>
                                            </div>
                                            <div
                                                onClick={() => setShowProModal(true)}
                                                className="hidden md:flex items-center gap-2 text-blue-500 cursor-pointer hover:text-blue-400 transition-colors"
                                            >
                                                <span>{language === 'ar' ? 'النسخة الاحترافية قريباً' : 'Pro Version Coming Soon'}</span>
                                                <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </div>

                                        {/* Chat Messages Area - Shows when started */}
                                        {isStarted && (
                                            <div
                                                ref={messagesContainerRef}
                                                className="flex-1 overflow-y-auto p-6 space-y-4 min-h-[300px] max-h-[400px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
                                            >
                                                {messages.map((msg, idx) => (
                                                    <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                        <div className={`max-w-[85%] ${msg.type === 'user'
                                                            ? 'bg-blue-600 text-white'
                                                            : `${theme === 'dark' ? 'bg-[#15171f] text-gray-200 border border-gray-800' : 'bg-gray-50 text-gray-900 border border-gray-200'}`
                                                            } rounded-lg px-4 py-2.5`}>
                                                            <p className="whitespace-pre-wrap leading-relaxed text-sm">{msg.content}</p>
                                                        </div>
                                                    </div>
                                                ))}

                                                {isTyping && (
                                                    <div className="flex justify-start">
                                                        <div className={`${theme === 'dark' ? 'bg-[#15171f] border-gray-800' : 'bg-gray-50 border-gray-200'} border rounded-lg px-4 py-2.5`}>
                                                            <div className="flex gap-1.5">
                                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <div ref={messagesEndRef} />
                                            </div>
                                        )}

                                        {/* Main Input Area */}
                                        {!isStarted ? (
                                            <div className="flex-1 px-6 py-4">
                                                <textarea
                                                    value={currentInput}
                                                    onChange={(e) => setCurrentInput(e.target.value)}
                                                    onKeyPress={(e) => {
                                                        if (e.key === 'Enter' && !e.shiftKey) {
                                                            e.preventDefault();
                                                            if (currentInput.trim()) startConsultation();
                                                        }
                                                    }}
                                                    placeholder={placeholderText}
                                                    className={`w-full h-full min-h-[80px] bg-transparent resize-none focus:outline-none text-lg ${theme === 'dark' ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'} scrollbar-hide`}
                                                    style={{ lineHeight: '1.5' }}
                                                />
                                            </div>
                                        ) : (
                                            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800">
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={currentInput}
                                                        onChange={(e) => setCurrentInput(e.target.value)}
                                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                                        placeholder={language === 'ar' ? 'اكتب إجابتك...' : 'Type your answer...'}
                                                        className={`flex-1 px-4 py-2.5 ${theme === 'dark' ? 'bg-[#0a0a0f] border-gray-800 text-gray-200 placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm`}
                                                        autoFocus
                                                    />
                                                    <button
                                                        onClick={handleSendMessage}
                                                        disabled={!currentInput.trim()}
                                                        className={`px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${!currentInput.trim()
                                                            ? (theme === 'dark' ? 'bg-gray-800 text-gray-600 cursor-not-allowed opacity-50' : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50')
                                                            : (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20')
                                                            }`}
                                                    >
                                                        <Send className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Bottom Actions Bar */}
                                        <div className="px-5 pb-5 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                {/* Attachment Button */}
                                                <button className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-800 hover:text-white' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'}`}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                                                </button>

                                                {/* Model/Type Selector */}
                                                <div className="relative">
                                                    <button
                                                        onClick={() => setShowModelMenu(!showModelMenu)}
                                                        className={`flex items-center gap-1.5 px-2 py-1.5 md:px-3 rounded-lg text-[10px] md:text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
                                                    >
                                                        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-500" />
                                                        <span>{selectedModel}</span>
                                                        <ChevronDown className="w-3 h-3 opacity-50" />
                                                    </button>

                                                    {showModelMenu && (
                                                        <div className={`absolute bottom-full left-0 mb-2 w-64 rounded-xl border p-2 shadow-xl z-[9999] max-h-80 overflow-y-auto ${theme === 'dark' ? 'bg-[#15171f] border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}>
                                                            {/* Free Models */}
                                                            <div className={`text-[9px] font-semibold px-2 py-0.5 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                                                                FREE MODELS
                                                            </div>
                                                            {models.filter(m => m.tier === 'free').map((model) => (
                                                                <button
                                                                    key={model.id}
                                                                    onClick={() => handleModelChange(model.name)}
                                                                    className={`w-full text-left px-3 py-1 rounded-lg text-xs transition-colors flex items-center justify-between ${selectedModel === model.name ? (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') : (theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50')}`}
                                                                >
                                                                    <span>{model.name}</span>
                                                                    <span className="text-[9px] text-green-500 font-medium">FREE</span>
                                                                </button>
                                                            ))}

                                                            {/* Pro Models */}
                                                            <div className={`text-[9px] font-semibold px-2 py-0.5 mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                                                                PRO MODELS
                                                            </div>
                                                            {models.filter(m => m.tier === 'pro').map((model) => (
                                                                <button
                                                                    key={model.id}
                                                                    onClick={() => handleModelChange(model.name)}
                                                                    className={`w-full text-left px-3 py-1 rounded-lg text-xs transition-colors flex items-center justify-between ${selectedModel === model.name ? (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') : (theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50')}`}
                                                                >
                                                                    <span>{model.name}</span>
                                                                    <span className="text-[9px] text-purple-500 font-medium">PRO</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                {/* Plan Toggle Dropdown */}
                                                <div className="relative hidden md:block">
                                                    <button
                                                        onClick={() => setShowPlanMenu(!showPlanMenu)}
                                                        className={`flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'}`}
                                                    >
                                                        <Brain className="w-3.5 h-3.5" />
                                                        <span>
                                                            {isTechnical ? (
                                                                <>
                                                                    {selectedPlan === 'system_analysis' && (language === 'ar' ? 'تحليل النظام' : 'System Analysis')}
                                                                    {selectedPlan === 'features_planning' && (language === 'ar' ? 'تخطيط المميزات' : 'Features Planning')}
                                                                    {selectedPlan === 'technical_architecture' && (language === 'ar' ? 'البنية التقنية' : 'Technical Architecture')}
                                                                    {selectedPlan === 'cost_estimation' && (language === 'ar' ? 'تقدير التكلفة' : 'Cost Estimation')}
                                                                </>
                                                            ) : (
                                                                <>
                                                                    {selectedPlan === 'project_plan' && (language === 'ar' ? 'خطة مشروع' : 'Project Plan')}
                                                                    {selectedPlan === 'business_model' && (language === 'ar' ? 'نموذج عمل' : 'Business Model')}
                                                                    {selectedPlan === 'marketing_strategy' && (language === 'ar' ? 'استراتيجية تسويق' : 'Marketing Strategy')}
                                                                </>
                                                            )}
                                                        </span>
                                                        <ChevronDown className="w-3 h-3" />
                                                    </button>

                                                    {showPlanMenu && (
                                                        <div className={`absolute bottom-full right-0 mb-2 w-48 rounded-xl border p-1 shadow-xl z-50 ${theme === 'dark' ? 'bg-[#15171f] border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}>
                                                            {isTechnical ? (
                                                                [
                                                                    { id: 'system_analysis', label: language === 'ar' ? 'تحليل النظام' : 'System Analysis' },
                                                                    { id: 'features_planning', label: language === 'ar' ? 'تخطيط المميزات' : 'Features Planning' },
                                                                    { id: 'technical_architecture', label: language === 'ar' ? 'البنية التقنية' : 'Technical Architecture' },
                                                                    { id: 'cost_estimation', label: language === 'ar' ? 'تقدير التكلفة' : 'Cost Estimation' }
                                                                ].map((plan) => (
                                                                    <button
                                                                        key={plan.id}
                                                                        onClick={() => {
                                                                            setSelectedPlan(plan.id);
                                                                            setShowPlanMenu(false);
                                                                        }}
                                                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedPlan === plan.id ? (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') : (theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50')}`}
                                                                    >
                                                                        {plan.label}
                                                                    </button>
                                                                ))
                                                            ) : (
                                                                [
                                                                    { id: 'project_plan', label: language === 'ar' ? 'خطة مشروع' : 'Project Plan' },
                                                                    { id: 'business_model', label: language === 'ar' ? 'نموذج عمل' : 'Business Model' },
                                                                    { id: 'marketing_strategy', label: language === 'ar' ? 'استراتيجية تسويق' : 'Marketing Strategy' }
                                                                ].map((plan) => (
                                                                    <button
                                                                        key={plan.id}
                                                                        onClick={() => {
                                                                            setSelectedPlan(plan.id);
                                                                            setShowPlanMenu(false);
                                                                        }}
                                                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedPlan === plan.id ? (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') : (theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50')}`}
                                                                    >
                                                                        {plan.label}
                                                                    </button>
                                                                ))
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Build Button */}
                                                <button
                                                    onClick={startConsultation}
                                                    disabled={!currentInput.trim()}
                                                    className={`flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-xl font-semibold text-[10px] md:text-sm transition-all duration-300 ${!currentInput.trim()
                                                        ? (theme === 'dark' ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-100 text-gray-400 cursor-not-allowed')
                                                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:scale-105'}`}
                                                >
                                                    <span>{language === 'ar' ? 'ابدأ التحليل' : 'Start Analysis'}</span>
                                                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Suggestions styled as quick actions below */}
                                <div className="mt-4 flex flex-wrap justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                    {[
                                        language === 'ar' ? 'تطبيق SaaS' : 'SaaS Application',
                                        language === 'ar' ? 'متجر إلكتروني' : 'E-commerce Store',
                                        language === 'ar' ? 'موقع شركة' : 'Company Website'
                                    ].map((suggestion, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentInput(suggestion)}
                                            className={`px-3 py-1 bg-transparent border ${theme === 'dark' ? 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300' : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'} rounded-lg text-xs transition-colors`}
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Feature Grid */}
                            {/* Feature Section - Reference Style */}
                            <div className="mt-20 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto text-left">
                                {/* Left Text Content */}
                                <div className="flex-1 space-y-6">
                                    <h2 className={`text-4xl md:text-5xl font-black leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        {language === 'ar' ? 'تحليل ذكي \u27F6' : 'Smart Analysis \u2192'} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                                            {language === 'ar' ? 'قرارات أسرع' : 'Faster Decisions'}
                                        </span>
                                    </h2>
                                    <p className={`text-lg leading-relaxed max-w-md ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {language === 'ar'
                                            ? 'احصل على أفضل أدوات التحليل والتوصيات لبناء مشروعك بنجاح من أي مكان.'
                                            : 'Get the best analysis tools and recommendations to build your project successfully from anywhere.'}
                                    </p>
                                    {/* Smart Benefits Checklist */}
                                    <div className="mt-6 space-y-3">
                                        {[
                                            language === 'ar' ? '1 مليون توكن يومياً مجاناً' : '1M Free Tokens Daily',
                                            language === 'ar' ? 'تصدير PDF فوري' : 'Instant PDF Export',
                                            language === 'ar' ? 'يدعم جميع اللغات' : 'Supports All Languages'
                                        ].map((text, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Cards - 4 Grid Layout */}
                                <div className="flex-1 grid grid-cols-2 gap-4">
                                    {/* Column 1 */}
                                    <div className="space-y-4 pt-8">
                                        {/* Card 1 - Light */}
                                        <div className={`p-6 rounded-3xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-xl shadow-blue-500/5'}`}>
                                            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                                                <Brain className="w-5 h-5" />
                                            </div>
                                            <h3 className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                                {language === 'ar' ? 'تحليل ذكي' : 'Smart Analysis'}
                                            </h3>
                                            <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {language === 'ar' ? 'فهم عميق للمشروع' : 'Deep project understanding'}
                                            </p>
                                        </div>

                                        {/* Card 3 - Light */}
                                        <div className={`p-6 rounded-3xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-xl shadow-blue-500/5'}`}>
                                            <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-white mb-4">
                                                <Cpu className="w-5 h-5" />
                                            </div>
                                            <h3 className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                                {language === 'ar' ? 'توصيات' : 'Recommendations'}
                                            </h3>
                                            <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {language === 'ar' ? 'حلول مخصصة لك' : 'Tailored solutions for you'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Column 2 */}
                                    <div className="space-y-4">
                                        {/* Card 2 - Dark (Highlighted) */}
                                        <div className={`p-6 rounded-3xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-[#1e2025] text-white shadow-2xl'} min-h-[180px] flex flex-col justify-between`}>
                                            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-green-500/30">
                                                <Zap className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl mb-2 text-white">
                                                    {language === 'ar' ? 'نتائج فورية' : 'Instant Results'}
                                                </h3>
                                                <p className="text-sm leading-relaxed text-gray-400">
                                                    {language === 'ar' ? 'خطط عمل كاملة.' : 'Full action plans.'}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Card 4 - Light (New) */}
                                        <div className={`p-6 rounded-3xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-xl shadow-blue-500/5'}`}>
                                            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                                                <Rocket className="w-5 h-5" />
                                            </div>
                                            <h3 className={`font-bold text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                                {language === 'ar' ? 'نمو سريع' : 'Fast Growth'}
                                            </h3>
                                            <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {language === 'ar' ? 'استراتيجيات توسع' : 'Expansion strategies'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
                                {[
                                    { value: '10K+', label: language === 'ar' ? 'مشروع تم تحليله' : 'Projects Analyzed' },
                                    { value: '95%', label: language === 'ar' ? 'دقة التوصيات' : 'Accuracy Rate' },
                                    { value: '24/7', label: language === 'ar' ? 'متاح دائماً' : 'Always Available' }
                                ].map((stat, idx) => (
                                    <div key={idx} className="px-6">
                                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                                            {stat.value}
                                        </div>
                                        <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>


            {/* Custom Footer for SuperFeliz - Simple */}
            <footer className={`${theme === 'dark' ? 'bg-[#0f1117] border-gray-800' : 'bg-white border-gray-200'} border-t mt-auto`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <Brain className={`w-4 h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                SuperFeliz AI
                            </span>
                        </div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                            {language === 'ar'
                                ? 'مدعوم بالذكاء الاصطناعي من Pencil Studio'
                                : 'Powered by AI from Pencil Studio'}
                        </div>
                    </div>
                </div>
            </footer>


            <style>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        
        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
        .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 0.5);
        }
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
            {/* Pro Version Modal */}
            {showProModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowProModal(false)}></div>
                    <div className={`relative w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-fade-in-up ${theme === 'dark' ? 'bg-[#15171f] border border-gray-800' : 'bg-white'}`}>
                        <button
                            onClick={() => setShowProModal(false)}
                            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <Crown className="w-10 h-10 text-white" />
                            </div>
                            <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {language === 'ar' ? 'النسخة الاحترافية قادمة قريباً! 🚀' : 'Pro Version Coming Soon! 🚀'}
                            </h3>
                            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-lg leading-relaxed`}>
                                {language === 'ar'
                                    ? 'نحن نعمل حالياً على إعداد باقات مميزة بميزات حصرية ستساعدك في نقل مشروعك لمستوى آخر.'
                                    : 'We are currently crafting premium plans with exclusive features to help you take your project to the next level.'}
                            </p>
                        </div>

                        <div className="grid gap-4 mb-8">
                            {[
                                { icon: Brain, text: language === 'ar' ? 'تحليل أعمق وقدرات ذكاء اصطناعي متقدمة' : 'Deeper analysis & advanced AI capabilities' },
                                { icon: Rocket, text: language === 'ar' ? 'وصول غير محدود وأولوية في المعالجة' : 'Unlimited access & priority processing' },
                                { icon: Key, text: language === 'ar' ? 'أدوات تخطيط استراتيجي احترافية' : 'Professional strategic planning tools' }
                            ].map((item, idx) => (
                                <div key={idx} className={`flex items-center gap-4 p-4 rounded-2xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                                    <div className={`p-2 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-blue-100'}`}>
                                        <item.icon className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                                    </div>
                                    <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowProModal(false)}
                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-[1.02]"
                        >
                            {language === 'ar' ? 'أخبرني عند الإطلاق' : 'Notify Me When Launched'}
                        </button>
                    </div>
                </div>
            )}

            {/* Model Change Confirmation Modal */}
            {showModelChangeConfirm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
                    <div className={`max-w-md w-full rounded-3xl ${theme === 'dark' ? 'bg-[#0f1117]' : 'bg-white'} p-8 shadow-2xl animate-scale-in`}>
                        {/* Icon */}
                        <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Sparkles className="w-8 h-8 text-yellow-500" />
                        </div>

                        {/* Title */}
                        <h3 className={`text-2xl font-bold text-center mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {language === 'ar' ? 'تغيير النموذج؟' : 'Change Model?'}
                        </h3>

                        {/* Description */}
                        <p className={`text-center mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {language === 'ar'
                                ? `سيتم تجديد المحادثة بناءً على النموذج المختار (${pendingModel}). سيتم حذف جميع الرسائل الحالية.`
                                : `The chat will be reset based on the selected model (${pendingModel}). All current messages will be deleted.`}
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={cancelModelChange}
                                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                            >
                                {language === 'ar' ? 'إلغاء' : 'Cancel'}
                            </button>
                            <button
                                onClick={confirmModelChange}
                                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                            >
                                {language === 'ar' ? 'تأكيد' : 'Confirm'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SuperFelizPage;
