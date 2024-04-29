import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, phone, email, address } = await request.json();
        const customer = await db.customer.create({
            data: {
                title, phone, email, address 
            }
        });
        console.log(customer);
        return NextResponse.json(customer)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Customer"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const customer = await db.customer.findMany({
            orderBy:{
                createdAt: 'desc' // Latest Customer
            },
        });
        return NextResponse.json(customer);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Customers"
        }, {
            status: 500
        })
    }
}