import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* 頁面標題 */}
      <section className="pt-32 pb-10 bg-gradient-to-b from-lavender-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-lavender-800 mb-6">服務項目</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            為你提供專業且個人化的心理諮商服務
          </p>
        </div>
      </section>
      
      {/* 服務類型 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-medium text-center text-lavender-700 mb-12">專業服務內容</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* 個別諮商 */}
            <div className="bg-mistgray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-lavender-200 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-lavender-300/30 to-lavender-400/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-lavender-700">
                  <p className="text-sm">個別諮商示意圖</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-lavender-700 mb-4">個別諮商</h3>
                <p className="text-gray-600 mb-6">
                  一對一的深度陪伴與專業支持，協助你探索自我、處理情緒、解決困擾，促進個人成長與轉變。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-lavender-600 mr-2" />
                    <span className="text-gray-700">親密關係與情感議題</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-lavender-600 mr-2" />
                    <span className="text-gray-700">自我探索與成長</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-lavender-600 mr-2" />
                    <span className="text-gray-700">創傷修復與療癒</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-lavender-600 mr-2" />
                    <span className="text-gray-700">情緒管理</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-lavender-600 mr-2" />
                    <span className="text-gray-700">生涯發展與職場適應</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Link href="/contact" className="btn-primary">
                    立即預約
                  </Link>
                </div>
              </div>
            </div>
            
            {/* 伴侶諮商 */}
            <div className="bg-mistgray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-milktea-200 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-milktea-300/30 to-milktea-400/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-milktea-700">
                  <p className="text-sm">伴侶諮商示意圖</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-milktea-700 mb-4">伴侶諮商</h3>
                <p className="text-gray-600 mb-6">
                  為伴侶關係提供專業協助，改善溝通模式，處理衝突，增進彼此理解與連結，共同經營更健康的關係。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-milktea-600 mr-2" />
                    <span className="text-gray-700">溝通障礙與衝突處理</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-milktea-600 mr-2" />
                    <span className="text-gray-700">信任與親密度議題</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-milktea-600 mr-2" />
                    <span className="text-gray-700">依附風格探索</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-milktea-600 mr-2" />
                    <span className="text-gray-700">重大生活轉變的適應</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-milktea-600 mr-2" />
                    <span className="text-gray-700">關係修復與連結重建</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Link href="/contact" className="bg-milktea-400 hover:bg-milktea-500 text-white px-6 py-2 rounded-md transition-colors">
                    立即預約
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* 線上/實體服務 */}
          <div className="bg-mistgray-50 rounded-xl p-8 shadow-sm mb-16">
            <h3 className="text-2xl font-medium text-center text-lavender-700 mb-6">服務方式</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-medium text-lavender-600 mb-3">線上諮商</h4>
                <p className="text-gray-600 mb-4">
                  透過安全的視訊平台進行，提供舒適且便利的諮商體驗，無地域限制。適合行動不便或偏好在熟悉環境中進行諮商的朋友。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-lavender-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">使用Zoom或Google Meet等安全平台</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-lavender-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">需要穩定的網路連線與私密空間</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-medium text-milktea-600 mb-3">實體諮商</h4>
                <p className="text-gray-600 mb-4">
                  在安靜舒適的諮商室進行，提供面對面的互動與支持。適合喜歡直接接觸或需要離開日常環境的朋友。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-milktea-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">地點：台北市信義區○○路123號</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-milktea-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">環境安靜舒適，注重隱私保護</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* EAP合作 */}
          <div className="bg-lavender-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-medium text-center text-lavender-700 mb-6">企業員工協助方案 (EAP)</h3>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              提供企業客製化的員工心理健康服務，包含個別諮商、團體工作坊、主題講座等，協助企業建立健康的職場環境與文化。
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-primary">
                洽詢合作細節
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 預約方式 */}
      <section className="section-padding bg-mistgray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-medium text-center text-lavender-700 mb-12">預約流程</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-lavender-100 text-lavender-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-medium">1</span>
                </div>
                <h3 className="text-xl font-medium text-lavender-700 mb-3">填寫預約表單</h3>
                <p className="text-gray-600">
                  填寫線上預約表單，簡要說明你想諮詢的議題和期望的時段。
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-lavender-100 text-lavender-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-medium">2</span>
                </div>
                <h3 className="text-xl font-medium text-lavender-700 mb-3">確認諮商時間</h3>
                <p className="text-gray-600">
                  收到你的表單後，我會在24小時內與你聯繫，確認第一次會談的時間與方式。
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-lavender-100 text-lavender-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-medium">3</span>
                </div>
                <h3 className="text-xl font-medium text-lavender-700 mb-3">開始諮商旅程</h3>
                <p className="text-gray-600">
                  依約定時間進行第一次會談，共同評估需求並討論後續諮商計畫。
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/contact" className="btn-primary">
                立即預約
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 費用說明 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-medium text-center text-lavender-700 mb-12">費用說明</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-mistgray-50 rounded-xl p-8 shadow-sm border-t-4 border-lavender-400">
              <h3 className="text-2xl font-medium text-lavender-700 mb-2">個別諮商</h3>
              <p className="text-3xl font-bold text-lavender-800 mb-6">NT$ 2,000 <span className="text-base font-normal text-gray-500">/ 50分鐘</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-lavender-600 mr-2" />
                  <span className="text-gray-700">一對一專業諮商</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-lavender-600 mr-2" />
                  <span className="text-gray-700">線上或實體皆可</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-lavender-600 mr-2" />
                  <span className="text-gray-700">預約制</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-mistgray-50 rounded-xl p-8 shadow-sm border-t-4 border-milktea-400">
              <h3 className="text-2xl font-medium text-milktea-700 mb-2">伴侶諮商</h3>
              <p className="text-3xl font-bold text-milktea-800 mb-6">NT$ 3,000 <span className="text-base font-normal text-gray-500">/ 80分鐘</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-milktea-600 mr-2" />
                  <span className="text-gray-700">雙方共同參與</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-milktea-600 mr-2" />
                  <span className="text-gray-700">線上或實體皆可</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-milktea-600 mr-2" />
                  <span className="text-gray-700">預約制</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-lavender-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-medium text-lavender-700 mb-4">補充說明</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-lavender-500 mr-2">•</span>
                <span>首次會談可能需要較長時間（約60-90分鐘），費用依實際時間調整。</span>
              </li>
              <li className="flex items-start">
                <span className="text-lavender-500 mr-2">•</span>
                <span>如有經濟困難，可向我討論其他收費方案。</span>
              </li>
              <li className="flex items-start">
                <span className="text-lavender-500 mr-2">•</span>
                <span>若需取消或更改預約，請提前24小時通知，否則可能需支付50%費用。</span>
              </li>
              <li className="flex items-start">
                <span className="text-lavender-500 mr-2">•</span>
                <span>可使用現金或電子轉帳付款。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 