import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { invoiceId, paymentId, amount} = await request.json();
        const parsedAmount = parseFloat(amount);
        const receipts = await db.SalesReceipt.create({
            data: {
                invoiceId, 
                paymentId, 
                amount: parsedAmount 
            }
        });
        console.log(receipts);
        return NextResponse.json(receipts)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Sales Receipts"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const receipts = await db.SalesReceipt.findMany({
            orderBy:{
                createdAt: 'desc' // Latest Supplier 
            },
        });
        return NextResponse.json(receipts);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Sales Receipts"
        }, {
            status: 500
        })
    }
}