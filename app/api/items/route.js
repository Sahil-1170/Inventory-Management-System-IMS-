import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const itemData = await request.json();

        // Ensure that imageUrl is provided and is a string
        const imageUrl = typeof itemData.imageUrl === "string" ? itemData.imageUrl : "";

        // Get the Warehouse
        const warehouse = await db.warehouse.findUnique({
            where: {
                id: itemData.warehouseId,
            },
        });

        if (!warehouse) {
            throw new Error("Warehouse not found");
        }

        // Current Stock of the Warehouse
        const currentWarehouseStock = warehouse.stockQty;
        const newStockQty = parseInt(currentWarehouseStock || 0) + parseInt(itemData.qty || 0);

        // Update the Stock on the Warehouse 
        await db.warehouse.update({
            where: {
                id: itemData.warehouseId,
            },
            data: {
                stockQty: newStockQty,
            }
        });

        console.log('Item Data:', itemData);

        const item = await db.Item.create({
            data: {
                title: itemData.title,
                category: {
                    connect: { id: itemData.categoryId }
                },
                sku: itemData.sku,
                barcode: itemData.barcode,
                quantity: parseInt(itemData.quantity),
                unit: { 
                    connect: { id: itemData.unitId }
                },    
                brand: { 
                    connect: { id: itemData.brandId }
                },
                supplier: { 
                    connect: { id: itemData.supplierId }
                },
                buyingPrice: parseFloat(itemData.buyingPrice),
                sellingPrice: parseFloat(itemData.sellingPrice),
                reOrderPoint: parseInt(itemData.reOrderPoint),
                warehouse: { 
                    connect: { id: itemData.warehouseId }
                },
                imageUrl: imageUrl, 
                weight: parseFloat(itemData.weight),
                dimensions: itemData.dimensions,
                taxRate: parseFloat(itemData.taxRate),
                description: itemData.description,
                notes: itemData.notes,
            }
        });

        return NextResponse.json(item);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Create an Item"
        }, {
            status: 500
        });
    }
}


export async function GET(request) {
    try {
        const items = await db.Item.findMany({
            orderBy: {
                createdAt: 'desc' // Latest Item
            },
            include: {
                category: true,
                warehouse: true,
            },
        });
        return NextResponse.json(items);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Items"
        }, {
            status: 500
        });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        const deletedItem = await db.Item.delete({
            where: {
                id
            }
        });
        console.log(deletedItem);
        return NextResponse.json(deletedItem, {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Delete the Item"
        }, {
            status: 500
        });
    }
}
