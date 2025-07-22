import Link from 'next/link';

// Mock data for featured products - will be replaced with API call
const featuredProducts = [
  { id: 1, name: 'Gaming PC', description: 'High-performance gaming rig', image: '/globe.svg' },
  { id: 2, name: 'Laptop', description: 'Portable and powerful', image: '/window.svg' },
  { id: 3, name: 'Custom Build', description: 'Tailored to your needs', image: '/file.svg' },
];

export default function Home() {
  return (
    <div className="bg-gray-800 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-900">
        <h1 className="text-5xl font-bold mb-4">Welcome to GEGA & MEGA</h1>
        <p className="text-xl mb-8">Your ultimate destination for cutting-edge tech and expert services.</p>
        <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105">
          Explore Products
        </Link>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-gray-700 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform">
                <img src={product.image} alt={product.name} className="h-24 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">PC & Laptop Repair</h3>
              <p>Expert diagnosis and repair for all your devices. We handle everything from hardware issues to software glitches.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Custom Builds</h3>
              <p>We build custom PCs tailored to your exact specifications, whether for gaming, professional work, or everyday use.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
