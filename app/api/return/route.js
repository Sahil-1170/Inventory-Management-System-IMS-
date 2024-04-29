import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { orderId, customerId, totalAmount } = await request.json();
        const parsedTotalAmount = parseFloat(totalAmount);
        const SalesReturn = await db.SalesReturn.create({
            data: {
                orderId,
                customerId, 
                totalAmount: parsedTotalAmount 
            }
        });
        console.log(SalesReturn);
        return NextResponse.json(SalesReturn)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Sales Return"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const SalesReturn = await db.SalesReturn.findMany({
            orderBy:{
                createdAt: 'desc' // Latest Supplier 
            },
        });
        return NextResponse.json(SalesReturn);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Sales Return"
        }, {
            status: 500
        })
    }
}