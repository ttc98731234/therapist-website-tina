import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* 頁面標題 */}
      <section className="pt-32 pb-10 bg-gradient-to-b from-lavender-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-lavender-800 mb-6">關於陳莉婷心理師</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            從理解自己開始，到與他人建立更健康的關係
          </p>
        </div>
      </section>
      
      {/* 專業背景 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-lavender-200">
                {/* 心理師照片區 */}
                <div className="absolute inset-0 bg-gradient-to-b from-lavender-300/30 to-lavender-400/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-lavender-700">
                  <p className="text-sm">心理師專業形象照</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-medium text-lavender-700 mb-6">專業背景</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-lavender-600 mb-2">學歷</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>國立○○大學 心理學研究所 碩士</li>
                    <li>國立○○大學 心理學系 學士</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-lavender-600 mb-2">證照</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>臺灣諮商心理師執照</li>
                    <li>○○國際認證心理治療師</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-lavender-600 mb-2">擅長議題</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-lavender-100 text-lavender-700 rounded-full text-sm">親密關係</span>
                    <span className="px-3 py-1 bg-milktea-100 text-milktea-700 rounded-full text-sm">自我探索</span>
                    <span className="px-3 py-1 bg-calmblue-100 text-calmblue-700 rounded-full text-sm">情緒調節</span>
                    <span className="px-3 py-1 bg-gentlegreen-100 text-gentlegreen-700 rounded-full text-sm">創傷療癒</span>
                    <span className="px-3 py-1 bg-lavender-100 text-lavender-700 rounded-full text-sm">依附議題</span>
                    <span className="px-3 py-1 bg-milktea-100 text-milktea-700 rounded-full text-sm">生涯發展</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-lavender-600 mb-2">治療取向</h3>
                  <p className="text-gray-600">
                    主要結合人本主義、依附理論、焦點解決短期治療等多元取向，依據個案需求調整介入方式。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 個人故事 */}
      <section className="section-padding bg-mistgray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-medium text-center text-lavender-700 mb-12">我的故事</h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm">
            <p className="text-lg text-gray-600 mb-6">
              從小對人際互動與情感連結充滿好奇，我總是敏感地察覺人們間的微妙情緒變化。大學期間修習心理學後，我深深著迷於探索人類內在世界的複雜性。
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              在研究所期間，我專注於依附理論與關係動力的研究，並在實習過程中看見許多人因關係中的傷痛而掙扎。這些經歷堅定了我成為一名心理師的決心——我想成為那個能陪伴他人探索自我、療癒傷痛並重建健康連結的人。
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              執業○年來，我持續進修並整合多元治療理論，不斷精進自我以提供更有效的心理服務。我深信每個人都有自我療癒的潛能，而我的角色是陪伴你找到內在的力量與智慧。
            </p>
            
            <p className="text-lg text-gray-600">
              在工作之餘，我喜歡閱讀、寫作、與大自然接觸，也會定期進行個人心理督導與自我照顧，以維持良好的專業狀態。
            </p>
          </div>
        </div>
      </section>
      
      {/* 諮商風格 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-medium text-center text-lavender-700 mb-12">我的諮商風格</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-mistgray-50 rounded-xl p-6 shadow-sm">
              <div className="w-16 h-16 bg-lavender-100 text-lavender-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center text-lavender-700 mb-3">溫柔同理</h3>
              <p className="text-gray-600 text-center">
                我會以溫暖且不評判的態度，真誠地理解你的感受與經歷，為你創造一個安全且被接納的空間。
              </p>
            </div>
            
            <div className="bg-mistgray-50 rounded-xl p-6 shadow-sm">
              <div className="w-16 h-16 bg-milktea-100 text-milktea-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center text-milktea-700 mb-3">深度探索</h3>
              <p className="text-gray-600 text-center">
                我善於引導你探索內在模式與信念，協助你看見盲點，連結過往經驗與當下困擾，尋找突破的可能。
              </p>
            </div>
            
            <div className="bg-mistgray-50 rounded-xl p-6 shadow-sm">
              <div className="w-16 h-16 bg-calmblue-100 text-calmblue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center text-calmblue-700 mb-3">賦能成長</h3>
              <p className="text-gray-600 text-center">
                我注重培養你的自我覺察與內在資源，協助你找到屬於自己的解方，建立更健康的生活方式與關係模式。
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact" className="btn-primary">
              預約諮詢
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 