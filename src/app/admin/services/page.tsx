'use client';

import { useState, useEffect } from 'react';

interface Service {
  id: number;
  name: string;
  price: number;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const res = await fetch('/api/services');
    const data = await res.json();
    setServices(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceData = { name, price: parseFloat(price) };

    if (editingId) {
      await fetch(`/api/services/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData),
      });
    } else {
      await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData),
      });
    }
    resetForm();
    fetchServices();
  };

  const handleEdit = (service: Service) => {
    setName(service.name);
    setPrice(service.price.toString());
    setEditingId(service.id);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/services/${id}`, { method: 'DELETE' });
    fetchServices();
  };

  const resetForm = () => {
    setName('');
    setPrice('');
    setEditingId(null);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Services</h1>
      <form onSubmit={handleSubmit} className="mb-8 p-4 border rounded">
        <h2 className="text-xl mb-2">{editingId ? 'Edit Service' : 'Add Service'}</h2>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingId ? 'Update' : 'Create'}
        </button>
        {editingId && (
          <button onClick={resetForm} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        )}
      </form>

      <div>
        <h2 className="text-xl font-bold mb-4">Service List</h2>
        <ul>
          {services.map((service) => (
            <li key={service.id} className="flex justify-between items-center p-2 border-b">
              <span>{service.name} - ${service.price}</span>
              <div>
                <button onClick={() => handleEdit(service)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(service.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}