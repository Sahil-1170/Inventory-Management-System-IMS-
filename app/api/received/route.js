import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { invoiceId, paymentMethod, amount} = await request.json();
        const parsedAmount = parseFloat(amount);
        const receiveds = await db.PaymentReceived.create({
            data: {
                invoiceId, 
                paymentMethod, 
                amount: parsedAmount 
            }
        });
        console.log(receiveds);
        return NextResponse.json(receiveds)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Payment Received"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const receiveds = await db.PaymentReceived.findMany({
            orderBy:{
                receivedAt: 'desc' // Latest Payment Received
            },
        });
        return NextResponse.json(receiveds);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Payments Received"
        }, {
            status: 500
        })
    }
}