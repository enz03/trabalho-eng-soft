import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { id, quantitySold } = await request.json();
    console.log('Received data:', { id, quantitySold }); 

    if (!id || !quantitySold) {
      console.log('Missing id or quantitySold');
      return new Response(JSON.stringify({ error: 'Missing id or quantitySold' }), { status: 400 });
    }

    const product = await prisma.product.findUnique({ where: { id } });
    console.log('Fetched product:', product);

    if (product && product.quantity >= quantitySold) {
      const updatedProduct = await prisma.product.update({
        where: { id },
        data: {
          quantity: product.quantity - quantitySold,
          recentSoldAmount: quantitySold,
          totalSoldAmount: product.totalSoldAmount + quantitySold,
        },
      });
      console.log('Product updated:', updatedProduct);
      return new Response(JSON.stringify(updatedProduct), { status: 200 });
    } else {
      console.log('Quantidade insuficiente ou produto não encontrado');
      return new Response(JSON.stringify({ error: 'Quantidade insuficiente ou produto não encontrado' }), { status: 400 });
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

