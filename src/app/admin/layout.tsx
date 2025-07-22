'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import AuthWrapper from './AuthWrapper';

function AdminNav() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link href="/admin/products" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Products
          </Link>
          <Link href="/admin/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Services
          </Link>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthWrapper>
      <div>
        <AdminNav />
        <main className="p-4">{children}</main>
      </div>
    </AuthWrapper>
  );
}