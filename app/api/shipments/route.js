import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { orderId, carrier, trackingId, status } = await request.json();
        const shipments = await db.Shipment.create({
            data: {
                orderId, carrier, trackingId, status
            }
        });
        console.log(shipments);
        return NextResponse.json(shipments)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Shipment"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const shipments = await db.Shipment.findMany({
            orderBy:{
                createdAt: 'desc' // Latest Supplier 
            },
        });
        return NextResponse.json(shipments);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Shipments"
        }, {
            status: 500
        })
    }
}