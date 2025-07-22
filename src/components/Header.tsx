import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">GEGA & MEGA</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-400 transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-gray-400 transition-colors">Products</Link></li>
            <li><Link href="/services" className="hover:text-gray-400 transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;