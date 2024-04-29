import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}) {
    try {
        const warehouse = await db.warehouse.findUnique({
            where:{
                id 
            },
        });
        return NextResponse.json(warehouse);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Warehouse"
        }, {
            status: 500
        })
    }
}

export async function PUT(request, {params:{id}}) {
    try {
        const {title, type, location, description} = await request.json
        const warehouse = await db.warehouse.update({
            where:{
                id 
            },
            data: {
                title,
                type,
                location,
                description
            }
        });
        console.log(warehouse);
        return NextResponse.json(warehouse);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Update the Warehouse"
        }, {
            status: 500
        })
    }
}