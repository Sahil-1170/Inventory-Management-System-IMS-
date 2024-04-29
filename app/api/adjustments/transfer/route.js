import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { transferStockQty, itemId, referenceNumber, notes,  givingWarehouseId , receivingWarehouseId} = await request.json();

        // The Giving Warehouse 
        const givingWarehouse = await db.warehouse.findUnique({
            where:{
                id: receivingWarehouseId
            }
        })
        // Get Current Stock 
        const currentGivingWarehouseStock = givingWarehouse.stockQty;

        if(parseInt(currentGivingWarehouseStock) > parseInt(transferStockQty)){
            const newStockForGivingWarehouse = parseInt(currentGivingWarehouseStock) - parseInt(transferStockQty)
            const updatedGivingWarehouse = await db.warehouse.update({
                where:{
                    id: givingWarehouseId,
                },
                data:{
                    stockQty: newStockForGivingWarehouse,
                },

            })
                    // Get the Receiving Warehouse
        const receivingWarehouse = await db.warehouse.findUnique({
            where:{
                id: givingWarehouseId
            }
        })

        // Get Current Stock 
        const currentReceivingWarehouseStock = receivingWarehouse.stockQty;
        const newStockForReceivingWarehouse = parseInt(currentReceivingWarehouseStock) + parseInt(transferStockQty)
        const updatedReceivingWarehouse = await db.warehouse.update({
            where:{
                id: receivingWarehouseId,
            },
            data:{
                stockQty: newStockForReceivingWarehouse,
            },
        })
        const adjustment = await db.transferStockAdjustment.create({
            data:{
                transferStockQty:parseInt(transferStockQty), 
                itemId, 
                referenceNumber, 
                notes,  
                givingWarehouseId , 
                receivingWarehouseId
            }
        });
        console.log(adjustment);
        return NextResponse.json(adjustment)
        } else{
            return NextResponse.json({
                data: null,
                message: "Giving Warehouse does not have enough stock"
            }, {status:409})
        }
    } catch (error) {
        return NextResponse.json({
            error,
            message:"Failed to create a Adjustment"
        },{
            status:500
        })
    }
}

export async function GET(request) {
    try {
        const adjustments = await db.transferStockAdjustment.findMany({
            orderBy:{
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

        const deletedAdjustment = await db.transferStockAdjustment.delete({
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