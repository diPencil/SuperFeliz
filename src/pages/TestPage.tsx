import { useState } from 'react';
export default function TestPage() {
  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center">
      <div className="text-center text-black">
        <h1 className="text-6xl font-bold mb-4">صفحة الاختبار تعمل! ✅</h1>
        <p className="text-2xl">إذا شفت ده معناها النظام شغال</p>
        <p className="text-xl mt-4">المشكلة في الصفحات الأخرى</p>
      </div>
    </div>
  );
}
