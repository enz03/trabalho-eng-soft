import { NextResponse, type NextRequest } from "next/server";
import {db} from "~/server/db"

export async function GET(req : NextRequest) {
    try{
        const products = await db.product.findMany()
        return NextResponse.json({message: "OK",products})
    } catch(err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message:"error",
                    err: err.message
                },
                {
                    status:500
                }
            )
        }
    }
}
