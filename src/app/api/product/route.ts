import { NextResponse, type NextRequest } from "next/server";
import { db } from "~/server/db";

export async function GET(_req: NextRequest) {
    try {
        const products = await db.product.findMany();
        return NextResponse.json({ message: "OK", products });
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message: "Error",
                    err: err.message,
                },
                {
                    status: 500,
                }
            );
        }
        return NextResponse.json(
            {
                message: "Unexpected Error",
            },
            {
                status: 500,
            }
        );
    }
}

export async function POST(_req: NextRequest) {
    try {
        const { name, description, price, quantity } = await _req.json() as { name: string, description?: string, price: number, quantity: number };
        const product = await db.product.create({
            data: {
                name,
                description,
                price,
                quantity,
            },
        });
        return NextResponse.json({ message: "OK", product });
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message: "Error",
                    err: err.message,
                },
                {
                    status: 500,
                }
            );
        }
        return NextResponse.json(
            {
                message: "Unexpected Error",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(_req: NextRequest) {
    try {
        const { id, name, description, price, quantity } = await _req.json() as { id: string, name?: string, description?: string, price?: number, quantity?: number };
        const product = await db.product.update({
            where: { id },
            data: {
                name,
                description,
                price,
                quantity,
            },
        });
        return NextResponse.json({ message: "OK", product });
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message: "Error",
                    err: err.message,
                },
                {
                    status: 500,
                }
            );
        }
        return NextResponse.json(
            {
                message: "Unexpected Error",
            },
            {
                status: 500,
            }
        );
    }
}

export async function DELETE(_req: NextRequest) {
    try {
        const { id } = await _req.json() as { id: string };
        await db.product.delete({
            where: { id },
        });
        return NextResponse.json({ message: "OK" });
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message: "Error",
                    err: err.message,
                },
                {
                    status: 500,
                }
            );
        }
        return NextResponse.json(
            {
                message: "Unexpected Error",
            },
            {
                status: 500,
            }
        );
    }
}
