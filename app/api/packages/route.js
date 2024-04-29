import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { orderId, item, status } = await request.json();
        const product = await db.package.create({
            data: {
                orderId, item, status 
            }
        });
        console.log(product);
        return NextResponse.json(product)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Package"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const packages = await db.package.findMany({
            orderBy:{
                createdAt: 'desc' // Latest Supplier 
            },
        });
        return NextResponse.json(packages);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Packages"
        }, {
            status: 500
        })
    }
}