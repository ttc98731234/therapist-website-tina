import Image from "next/image";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-lavender-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-medium text-lavender-800 mb-6">
                陳莉婷<span className="text-lavender-600">心理師</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-handwriting">
                在關係中迷路，也能找到自己的路。<br />
                陪你理解情緒，走向自我接納與療癒。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="btn-primary text-center"
                >
                  預約諮詢
                </Link>
                <Link 
                  href="/about" 
                  className="border border-lavender-400 text-lavender-600 hover:bg-lavender-50 px-6 py-2 rounded-md transition-colors text-center"
                >
                  了解更多
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-lavender-200">
                {/* 這裡放置心理師形象照，先用佔位元素 */}
                <div className="absolute inset-0 bg-gradient-to-b from-lavender-300/30 to-lavender-400/30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-lavender-700">
                  <p className="text-sm">心理師形象照</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 服務區塊 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-medium text-center text-lavender-700 mb-12">專業服務</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 個別諮商 */}
            <div className="bg-mistgray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-lavender-100 text-lavender-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center text-lavender-700 mb-3">個別諮商</h3>
              <p className="text-gray-600 text-center mb-6">提供一對一專業心理諮商服務，聆聽你的故事，陪伴你探索自我、解決困擾與成長蛻變。</p>
              <div className="text-center">
                <Link href="/services" className="inline-flex items-center text-lavender-600 hover:text-lavender-800">
                  了解更多 <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* 關係成長講座 */}
            <div className="bg-mistgray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-milktea-100 text-milktea-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center text-milktea-700 mb-3">關係成長講座</h3>
              <p className="text-gray-600 text-center mb-6">透過專業講座與工作坊，幫助你更深入理解關係動力，建立健康連結，提升溝通技巧。</p>
              <div className="text-center">
                <Link href="/events" className="inline-flex items-center text-milktea-600 hover:text-milktea-800">
                  了解更多 <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* 心理內容創作 */}
            <div className="bg-mistgray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-calmblue-100 text-calmblue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-center text-calmblue-700 mb-3">心理內容創作</h3>
              <p className="text-gray-600 text-center mb-6">分享實用心理知識與洞見，透過文章、Podcast，讓心理學融入你的日常生活。</p>
              <div className="text-center">
                <Link href="/blog" className="inline-flex items-center text-calmblue-600 hover:text-calmblue-800">
                  了解更多 <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 最新活動 */}
      <section className="section-padding bg-mistgray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-medium text-center text-lavender-700 mb-12">最新活動</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 活動卡片1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-lavender-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-lavender-700">
                  <p className="text-sm">活動圖片</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-lavender-600 mb-2">2023年6月15日</p>
                <h3 className="text-xl font-medium text-gray-800 mb-3">「療癒關係中的傷痕」工作坊</h3>
                <p className="text-gray-600 mb-4">探索關係中的創傷模式，學習建立健康邊界與連結，療癒過往傷痕。</p>
                <Link href="/events" className="text-lavender-600 hover:text-lavender-800 font-medium">
                  查看詳情
                </Link>
              </div>
            </div>
            
            {/* 活動卡片2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-milktea-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-milktea-700">
                  <p className="text-sm">活動圖片</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-milktea-600 mb-2">2023年7月10日</p>
                <h3 className="text-xl font-medium text-gray-800 mb-3">「愛的依附風格」線上講座</h3>
                <p className="text-gray-600 mb-4">了解你的依附風格如何影響親密關係，從認識自我到改變互動模式。</p>
                <Link href="/events" className="text-milktea-600 hover:text-milktea-800 font-medium">
                  查看詳情
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/events" className="btn-primary inline-flex items-center">
              查看所有活動 <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA 區塊 */}
      <section className="py-16 md:py-24 bg-lavender-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">開始你的療癒之旅</h2>
          <p className="text-lg md:text-xl text-lavender-100 mb-10 max-w-2xl mx-auto">
            無論你正經歷什麼困擾，我都願意陪伴你一起面對並尋找解方。<br />
            讓我們一起探索、一起成長。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-lavender-700 hover:bg-lavender-50 px-6 py-3 rounded-md font-medium transition-colors">
              預約諮詢
            </Link>
            <Link href="/blog" className="border border-white text-white hover:bg-lavender-500 px-6 py-3 rounded-md font-medium transition-colors">
              探索心理專欄
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
