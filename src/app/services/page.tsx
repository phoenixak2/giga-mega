'use client';

import { useEffect, useState } from 'react';

interface Service {
  id: number;
  name: string;
  description: string;
}

const staticServices = [
  { id: 101, name: 'Windows Installation', description: 'Fresh installations and upgrades of all Windows versions.' },
  { id: 102, name: 'Programs & Games Downloads', description: 'We can download and install any software or game you need.' },
];

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        if (!res.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await res.json();
        setServices(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  const allServices = [...services, ...staticServices];

  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allServices.map((service) => (
            <div key={service.id} className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}