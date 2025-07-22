import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const service = await prisma.service.findUnique({
    where: { id },
  });
  if (service) {
    return NextResponse.json(service);
  }
  return new NextResponse('Service not found', { status: 404 });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const data = await request.json();
  const service = await prisma.service.update({
    where: { id },
    data,
  });
  return NextResponse.json(service);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const service = await prisma.service.delete({
    where: { id },
  });
  return NextResponse.json(service);
}
