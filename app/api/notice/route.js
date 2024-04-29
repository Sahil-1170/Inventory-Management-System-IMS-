import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { orderId, customerId, totalAmount } = await request.json();
        const parsedtotalAmount = parseFloat(totalAmount);
        const notice = await db.CreditNote.create({
            data: {
                orderId, 
                customerId, 
                totalAmount: parsedtotalAmount 
            }
        });
        console.log(notice);
        return NextResponse.json(notice)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Credit Note"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const notice = await db.CreditNote.findMany({
            orderBy:{
                createdAt: 'desc' // Latest Supplier 
            },
        });
        return NextResponse.json(notice);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Credit Note"
        }, {
            status: 500
        })
    }
}