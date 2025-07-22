import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: context.params.id },
  });
  if (product) {
    return NextResponse.json(product);
  }
  return new NextResponse('Product not found', { status: 404 });
}

export async function PUT(request: NextRequest, context: { params: { id: string } }) {
  const data = await request.json();
  const product = await prisma.product.update({
    where: { id: context.params.id },
    data,
  });
  return NextResponse.json(product);
}

export async function DELETE(request: NextRequest, context: { params: { id: string } }) {
  const product = await prisma.product.delete({
    where: { id: context.params.id },
  });
  return NextResponse.json(product);
}