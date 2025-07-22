import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">Contact Us</h1>
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="text-left space-y-4">
            <p>
              <span className="font-bold">Address:</span> 3 شارع صعب صالح عين شمس
            </p>
            <p>
              <span className="font-bold">Eng. Mina:</span> 
              <a href="tel:01551652641" className="ml-2 hover:text-blue-400 transition-colors">01551652641</a>
            </p>
            <p>
              <span className="font-bold">Eng. Beshoy:</span> 
              <a href="tel:01200510270" className="ml-2 hover:text-blue-400 transition-colors">01200510270</a>
            </p>
            <div className="flex items-center">
              <span className="font-bold">Facebook:</span>
              <Link href="https://www.facebook.com/people/GEGA-MEGA/61556049603580/" target="_blank" className="ml-2 hover:text-blue-400 transition-colors">
                GEGA & MEGA
              </Link>
            </div>
            <div className="flex items-center">
              <span className="font-bold">WhatsApp (Mina):</span>
              <Link href="https://wa.me/201551652641" target="_blank" className="ml-2 hover:text-blue-400 transition-colors">
                Chat with Eng. Mina
              </Link>
            </div>
            <div className="flex items-center">
              <span className="font-bold">WhatsApp (Beshoy):</span>
              <Link href="https://wa.me/201200510270" target="_blank" className="ml-2 hover:text-blue-400 transition-colors">
                Chat with Eng. Beshoy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}