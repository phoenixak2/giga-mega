import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const services = await prisma.service.findMany();
  return NextResponse.json(services);
}

export async function POST(request: NextRequest) {
  const { name, description, price, imageUrl, category } = await request.json();
  const service = await prisma.service.create({
    data: {
      name,
      description,
      price,
      imageUrl,
      category,
    },
  });
  return NextResponse.json(service, { status: 201 });
}