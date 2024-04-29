import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { customerId, totalAmount, salesOrderId, productId, quantity } = await request.json();
        const parsedTotalAmount = parseFloat(totalAmount);
        const parsedQuantity = parseInt(quantity)
        const SalesOrder = await db.SalesOrder.create({
            data: {
                customerId, 
                totalAmount: parsedTotalAmount,
                salesOrderId,
                productId,
                quantity: parsedQuantity, 
            }
        });
        console.log(SalesOrder);
        return NextResponse.json(SalesOrder)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Order"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const SalesOrder = await db.SalesOrder.findMany({
            orderBy:{
                createdAt: 'desc' // Latest Supplier 
            },
        });
        return NextResponse.json(SalesOrder);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Orders"
        }, {
            status: 500
        })
    }
}