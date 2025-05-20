'use client';

import Link from 'next/link';

const navigation = {
  main: [
    { name: '首頁', href: '/' },
    { name: '關於我', href: '/about' },
    { name: '服務項目', href: '/services' },
    { name: '心理專欄', href: '/blog' },
    { name: '活動與課程', href: '/events' },
    { name: '預約與聯絡', href: '/contact' },
    { name: '常見問題', href: '/faq' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LINE',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19.365 9.89c.50 0 .906.41.906.91s-.406.91-.906.91H17.47v1.306h1.895c.5 0 .906.41.906.91s-.406.91-.906.91H16.56c-.5 0-.91-.41-.91-.91V9.89c0-.5.41-.91.91-.91h2.805zm-5.282 0c.5 0 .906.41.906.91v4.046c0 .5-.406.91-.906.91s-.906-.41-.906-.91V10.8c0-.5.406-.91.906-.91zm-2.903.01c.5 0 .905.41.905.91 0 .19-.08.39-.14.52l-1.33 2.74h1.47c.5 0 .91.41.91.91s-.41.91-.91.91h-2.81c-.5 0-.91-.41-.91-.91 0-.16.06-.36.14-.53l1.34-2.74H8.28c-.5 0-.906-.41-.906-.91s.407-.91.906-.91h2.9zm-5.28-.01c.5 0 .91.41.91.91v4.046c0 .5-.41.91-.91.91s-.91-.41-.91-.91V10.8c0-.5.41-.91.91-.91z"/>
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-mistgray-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium text-lavender-700 mb-4">陳莉婷心理師</h3>
            <p className="text-gray-600 mb-4">
              在關係中迷路，也能找到自己的路。<br />
              陪你理解情緒，走向自我接納與療癒。
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-lavender-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-lavender-700 mb-4">網站導覽</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-lavender-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-lavender-700 mb-4">聯絡資訊</h3>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> contact@example.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>LINE:</strong> @chenliiting
            </p>
            <p className="text-gray-600">
              <strong>地址:</strong> 台北市信義區○○路123號
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 陳莉婷心理師. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 