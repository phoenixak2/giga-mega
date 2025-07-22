import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = await prisma.service.findUnique({
    where: { id },
  });
  if (service) {
    return NextResponse.json(service);
  }
  return new NextResponse('Service not found', { status: 404 });
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { name, description, price, imageUrl, category } = await request.json();
  const service = await prisma.service.update({
    where: { id },
    data: {
      name,
      description,
      price,
      imageUrl,
      category,
    },
  });
  return NextResponse.json(service);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = await prisma.service.delete({
    where: { id },
  });
  return NextResponse.json(service);
}
