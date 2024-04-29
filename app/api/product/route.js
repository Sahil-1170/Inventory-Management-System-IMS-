import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, quantity, price } = await request.json();
        const parsedPrice = parseFloat(price)
        const parsedQuantity = parseInt(quantity);
        const product = await db.package.create({
            data: {
                title, 
                quantity: parsedQuantity, 
                price: parsedPrice
            }
        });
        console.log(product);
        return NextResponse.json(product)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Product"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const product = await db.product.findMany({
            orderBy:{
                createdAt: 'desc' // Latest Supplier 
            },
        });
        return NextResponse.json(product);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Products"
        }, {
            status: 500
        })
    }
}