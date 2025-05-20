'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: '初次來談會遇到什麼？',
    answer: '初次會談主要是建立關係和了解你的需求。我會詢問你目前面臨的困擾、過往經歷以及你對諮商的期待。這是一個相互認識的過程，你也可以提出任何關於諮商的疑問。初次會談通常需要60-90分鐘，之後我們會共同討論是否繼續諮商及諮商計畫。',
  },
  {
    question: '什麼時候適合尋求心理諮商？',
    answer: '當你感到情緒困擾（如持續性焦慮、憂鬱）、人際關係問題、生活適應困難、自我成長迷惑，或是經歷重大生活變化或創傷事件時，都很適合尋求專業協助。其實不必等到問題嚴重才尋求協助，及早諮詢可以更有效地處理問題並促進個人成長。',
  },
  {
    question: '諮商的頻率和療程長短如何決定？',
    answer: '一般而言，初期建議每週一次，每次50分鐘，以建立穩定的諮商關係和持續性的工作。隨著情況改善，可能調整為每兩週一次。諮商期程依個人需求而異，短期可能6-10次，長期則可能數月甚至一年以上。我們會定期評估進展並調整計畫。',
  },
  {
    question: '心理諮商和心理治療有什麼區別？',
    answer: '心理諮商主要專注於協助處理當前的情緒困擾、壓力、人際或生活適應問題，傾向支持性和成長導向。心理治療則可能更深入探討潛意識、過往經驗與模式，處理更複雜的心理問題或精神疾患。兩者有重疊之處，諮商心理師會根據你的需求提供適合的服務。',
  },
  {
    question: '我需要心理師還是只是想找人聊聊？',
    answer: '與朋友聊天和專業諮商是不同的。專業諮商提供安全、保密且不評判的空間，心理師受過專業訓練能協助你探索深層議題、識別模式並發展解決策略。如果困擾影響日常生活、與他人交流後仍無改善，或需要專業客觀的引導，建議尋求專業諮商。',
  },
  {
    question: '諮商內容會保密嗎？',
    answer: '是的，諮商內容嚴格保密，這是心理專業的倫理準則。但有幾種例外情況：當你有傷害自己或他人的立即危險、涉及兒童或老人虐待、或法院命令等情況，我有法律責任通報相關單位。這些例外情況會在初次會談時詳細說明。',
  },
  {
    question: '線上諮商和實體諮商有什麼不同？',
    answer: '線上諮商提供便利性和彈性，不受地理限制，適合行動不便或偏好在熟悉環境中進行諮商的朋友。實體諮商則提供面對面互動，有些人認為更容易建立連結。兩種方式的諮商效果研究顯示相當，主要取決於個人偏好和需求。',
  },
  {
    question: '可否取消或更改預約時間？',
    answer: '可以，但請提前24小時通知，以便我能安排其他時段給需要的朋友。若未提前24小時取消或未出席，可能需支付50%的諮商費用。當然，突發狀況我們可以另行討論。',
  },
  {
    question: '如何評估諮商是否有效？',
    answer: '有效的諮商通常表現為情緒改善、思考方式更靈活、行為模式改變、人際關係提升等。我們會定期回顧目標和進展，你的主觀感受也是重要指標。請記住，改變是個過程，有時在感到更好之前，可能會先經歷不適或挑戰。',
  },
  {
    question: '如何最大化諮商效果？',
    answer: '誠實表達你的感受和想法，主動參與諮商過程，願意嘗試新的視角和行為，並在諮商外練習和應用所學。同時，保持耐心和寬容，心理成長需要時間。定期出席諮商並與心理師討論你的感受和期待也很重要。',
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };
  
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* 頁面標題 */}
      <section className="pt-32 pb-10 bg-gradient-to-b from-lavender-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-lavender-800 mb-6">常見問題</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            對心理諮商有疑問？以下是一些常見問答，希望能幫助你更了解諮商過程
          </p>
        </div>
      </section>
      
      {/* FAQ 列表 */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div 
                key={index}
                className="bg-mistgray-50 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-lavender-600 transition-transform ${
                      openItems.includes(index) ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`px-6 pb-4 overflow-hidden transition-all duration-300 ${
                    openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">還有其他問題？歡迎直接與我聯繫</p>
            <Link href="/contact" className="btn-primary">
              聯絡我
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA 區塊 */}
      <section className="py-16 bg-lavender-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-lavender-700 mb-6">準備好開始你的心理諮商之旅了嗎？</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            若你對心理諮商仍有疑慮，可以先安排一次初談，了解更多關於諮商過程的資訊。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              預約諮詢
            </Link>
            <Link 
              href="/services" 
              className="border border-lavender-400 text-lavender-600 hover:bg-lavender-50 px-6 py-2 rounded-md transition-colors"
            >
              了解服務項目
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 