import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { orderId, customerId, totalAmount} = await request.json();
        const parsedTotalAmount = parseFloat(totalAmount);
        const invoices = await db.invoice.create({
            data: {
                orderId,
                customerId, 
                totalAmount: parsedTotalAmount 
            }
        });
        console.log(invoices);
        return NextResponse.json(invoices)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Invoice"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const invoices = await db.invoice.findMany({
            orderBy:{
                createdAt: 'desc' // Latest Supplier 
            },
        });
        return NextResponse.json(invoices);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Invoice"
        }, {
            status: 500
        })
    }
}