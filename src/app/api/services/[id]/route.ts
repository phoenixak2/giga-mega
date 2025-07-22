import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const service = await prisma.service.findUnique({
    where: { id: context.params.id },
  });
  if (service) {
    return NextResponse.json(service);
  }
  return new NextResponse('Service not found', { status: 404 });
}

export async function PUT(request: NextRequest, context: { params: { id: string } }) {
  const data = await request.json();
  const service = await prisma.service.update({
    where: { id: context.params.id },
    data,
  });
  return NextResponse.json(service);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const service = await prisma.service.delete({
    where: { id: params.id },
  });
  return NextResponse.json(service);
}