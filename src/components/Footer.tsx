import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">GEGA & MEGA</h3>
          <p>Your one-stop shop for tech products and services.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>📍 3 شارع صعب صالح عين شمس</p>
          <p>📞 Eng. Mina: 01551652641</p>
          <p>📞 Eng. Beshoy: 01200510270</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/people/GEGA-MEGA/61556049603580/" target="_blank" className="hover:text-gray-400 transition-colors">Facebook</Link>
            <Link href="https://wa.me/201551652641" target="_blank" className="hover:text-gray-400 transition-colors">WhatsApp (Mina)</Link>
            <Link href="https://wa.me/201200510270" target="_blank" className="hover:text-gray-400 transition-colors">WhatsApp (Beshoy)</Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} GEGA & MEGA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;