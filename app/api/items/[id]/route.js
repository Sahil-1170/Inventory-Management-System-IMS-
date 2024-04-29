import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}) {
    try {
        const items = await db.Item.findUnique({
            where:{
                id 
            },
        });
        return NextResponse.json(items);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Item"
        }, {
            status: 500
        })
    }
}

export async function PUT(request, {params:{id}}) {
    try {
        const {title, categoryId, sku, barcode, quantity, brandId, unitId, supplierId, buyingPrice, sellingPrice, reOrderPoint, warehouseId, imageUrl, weight, dimensions, taxRate, description, notes } = await request.json
        const updatedItem = await db.Item.update({
            where:{
                id: id 
            },
            data: {
                title,
                categoryId, 
                sku, 
                barcode, 
                quantity, 
                brandId, 
                unitId, 
                supplierId, 
                buyingPrice, 
                sellingPrice, 
                reOrderPoint, 
                warehouseId, 
                imageUrl, 
                weight, 
                dimensions, 
                taxRate, 
                description, 
                notes,
            }
        });
        console.log(updatedItem);
        return NextResponse.json(updatedItem);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Update the Item"
        }, {
            status: 500
        })
    }
}