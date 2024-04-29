import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { addStockQty, referenceNumber, itemId, notes, receivingWarehouseId, supplierId } = await request.json();

        // Get the Item 
        const itemToUpdate = await db.Item.findUnique({
            where: {
                id: itemId
            }
        })
        // Current Item Quantity 
        const currentItemQty = itemToUpdate.quantity;
        const newQty = parseInt(currentItemQty) + parseInt(addStockQty);
        console.log(itemId)

        // Modify the Item to New Qty
        const updatedItem = await db.Item.update({
            where: {
                id: itemId,
            },
            data: {
                quantity: newQty,
            }
        });
        // Get the Warehouse
        const warehouse = await db.warehouse.findUnique({
            where: {
                id: receivingWarehouseId,
            },
        });
        // Current Stock of the Warehouse
        const currentWarehouseStock = warehouse.stockQty;
        const newStockQty = parseInt(currentWarehouseStock) + parseInt(addStockQty)
        // Update the Stock on the Warehouse 
        const updatedWarehouse = await db.warehouse.update({
            where: {
                id: receivingWarehouseId,
            },
            data: {
                stockQty: newStockQty,
            }
        })
        // console.log(updatedItem)
        const adjustment = await db.addStockAdjustment.create({
            data: {
                addStockQty: parseInt(addStockQty),
                itemId,
                referenceNumber,
                notes,
                receivingWarehouseId,
                supplierId,
            }
        })
        return NextResponse.json(adjustment)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Adjustment"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const adjustments = await db.addStockAdjustment.findMany({
            orderBy: {
                createdAt: 'desc' // Latest Adjustment 
            },
        });
        return NextResponse.json(adjustments);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Adjustments"
        }, {
            status: 500
        })
    }
}

export async function DELETE(request) {
    try {
        const id = request.query.id;

        const deletedAdjustment = await db.addStockAdjustment.delete({
            where: {
                id: parseInt(id), 
            },
        });
        return NextResponse.json(deletedAdjustment);
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            error,
            message: "Failed to Delete the Adjustment"
        }, {
            status: 500
        });
    }
}

