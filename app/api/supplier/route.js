import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, phone, email, address, contactPerson, supplierCode, taxID, paymentTerms, notes } = await request.json();
        const supplier = await db.supplier.create({
            data: {
                title, phone, email, address, contactPerson, supplierCode, taxID, paymentTerms, notes
            }
        });
        console.log(supplier);
        return NextResponse.json(supplier)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a Supplier"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const supplier = await db.supplier.findMany({
            orderBy:{
                createdAt: 'desc' // Latest Supplier 
            },
        });
        return NextResponse.json(supplier);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Suppliers"
        }, {
            status: 500
        })
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        const deletedSupplier = await db.supplier.delete({
            where: {
                id
            }
        });
        console.log(deletedSupplier);
        return NextResponse.json(deletedSupplier, {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Delete the Supplier"
        }, {
            status: 500
        });
    }
}