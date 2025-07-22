'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform">
              <Image src={product.image || '/globe.svg'} alt={product.name} className="h-48 w-full object-cover rounded-md mb-6" width={192} height={192} />
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <p className="text-xl font-bold text-blue-400">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}