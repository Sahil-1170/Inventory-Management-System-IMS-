import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}) {
    try {
        const order = await db.SalesOrder.findUnique({
            where:{
                id 
            },
        });
        return NextResponse.json(unit);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Sales Order"
        }, {
            status: 500
        })
    }
}

export async function PUT(request, {params:{id}}) {
    try {
        const { customerId, totalAmount, salesOrderId, productId, quantity } = await request.json
        const order = await db.SalesOrder.update({
            where:{
                id 
            },
            data: {
                customerId, 
                totalAmount, 
                salesOrderId, 
                productId, 
                quantity
            }
        });
        console.log(order);
        return NextResponse.json(order);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Update the Sales Order"
        }, {
            status: 500
        })
    }
}

