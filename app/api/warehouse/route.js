import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, location, type, description } = await request.json();
        const warehouse = await db.warehouse.create({
            data: {
                title,
                location,
                warehouseType: type,
                description,
            }
        });
        console.log(warehouse);
        return NextResponse.json(warehouse)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Warehouse"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const warehouse = await db.warehouse.findMany({
            orderBy:{
                createdAt: 'desc' // Latest warehouse 
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

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        const deletedWarehouse = await db.warehouse.delete({
            where: {
                id
            },
            include: {
                item: true
            }
        });
        console.log(deletedWarehouse);
        return NextResponse.json(deletedWarehouse, {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Delete the Warehouse"
        }, {
            status: 500
        });
    }
}