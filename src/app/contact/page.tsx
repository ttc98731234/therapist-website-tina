'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredTime: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 這裡在實際應用中應該連接到後端API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        preferredTime: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* 頁面標題 */}
      <section className="pt-32 pb-10 bg-gradient-to-b from-lavender-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-lavender-800 mb-6">預約與聯絡</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            無論你有任何疑問或想進行預約，都歡迎與我聯繫
          </p>
        </div>
      </section>
      
      {/* 聯絡表單與資訊 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 聯絡表單 */}
            <div className="bg-mistgray-50 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-medium text-lavender-700 mb-6">預約諮詢</h2>
              
              {isSubmitted ? (
                <div className="bg-lavender-100 text-lavender-800 p-6 rounded-md">
                  <h3 className="text-xl font-medium mb-2">感謝您的預約申請！</h3>
                  <p className="mb-4">我已收到您的諮詢需求，將在24小時內與您聯繫確認詳情。</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-lavender-600 hover:text-lavender-800 font-medium"
                  >
                    再次填寫
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender-400"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        電子郵件 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender-400"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        聯絡電話
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender-400"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                        服務類型 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender-400"
                      >
                        <option value="">請選擇...</option>
                        <option value="individual">個別諮商</option>
                        <option value="couple">伴侶諮商</option>
                        <option value="eap">企業EAP合作</option>
                        <option value="other">其他諮詢</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                        希望的時段
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender-400"
                      >
                        <option value="">請選擇...</option>
                        <option value="weekday-morning">平日上午</option>
                        <option value="weekday-afternoon">平日下午</option>
                        <option value="weekday-evening">平日晚上</option>
                        <option value="weekend">週末</option>
                        <option value="flexible">彈性配合</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      諮詢內容簡述 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender-400"
                      placeholder="請簡單描述您想諮詢的問題或需求..."
                    ></textarea>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    <p>* 為必填欄位</p>
                    <p>所有資料僅用於預約聯繫，將嚴格保密。</p>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary py-3 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? '提交中...' : '送出預約'}
                  </button>
                </form>
              )}
            </div>
            
            {/* 聯絡資訊 */}
            <div>
              <h2 className="text-2xl font-medium text-lavender-700 mb-6">聯絡方式</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-lavender-100 text-lavender-600 rounded-full flex items-center justify-center">
                    <EnvelopeIcon className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">電子郵件</h3>
                    <p className="text-gray-600">contact@chenliiting.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-lavender-100 text-lavender-600 rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">電話</h3>
                    <p className="text-gray-600">02-1234-5678（週一至週五 10:00-18:00）</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-lavender-100 text-lavender-600 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">地址</h3>
                    <p className="text-gray-600">台北市信義區○○路123號</p>
                    <p className="text-sm text-gray-500 mt-1">（僅接受預約，不接受直接來訪）</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">社群媒體</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-lavender-100 text-lavender-600 hover:bg-lavender-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-lavender-100 text-lavender-600 hover:bg-lavender-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-lavender-100 text-lavender-600 hover:bg-lavender-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <span className="sr-only">LINE</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.365 9.89c.50 0 .906.41.906.91s-.406.91-.906.91H17.47v1.306h1.895c.5 0 .906.41.906.91s-.406.91-.906.91H16.56c-.5 0-.91-.41-.91-.91V9.89c0-.5.41-.91.91-.91h2.805zm-5.282 0c.5 0 .906.41.906.91v4.046c0 .5-.406.91-.906.91s-.906-.41-.906-.91V10.8c0-.5.406-.91.906-.91zm-2.903.01c.5 0 .905.41.905.91 0 .19-.08.39-.14.52l-1.33 2.74h1.47c.5 0 .91.41.91.91s-.41.91-.91.91h-2.81c-.5 0-.91-.41-.91-.91 0-.16.06-.36.14-.53l1.34-2.74H8.28c-.5 0-.906-.41-.906-.91s.407-.91.906-.91h2.9zm-5.28-.01c.5 0 .91.41.91.91v4.046c0 .5-.41.91-.91.91s-.91-.41-.91-.91V10.8c0-.5.41-.91.91-.91z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-milktea-50 rounded-xl">
                <h3 className="text-lg font-medium text-milktea-700 mb-3">預約說明</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-milktea-500 mr-2">•</span>
                    <span>首次會談建議預留90分鐘，以便充分了解你的需求。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-milktea-500 mr-2">•</span>
                    <span>工作時間為週一至週五 10:00-20:00，週六 10:00-18:00。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-milktea-500 mr-2">•</span>
                    <span>若有緊急狀況，請聯繫緊急心理諮詢熱線：1925。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 