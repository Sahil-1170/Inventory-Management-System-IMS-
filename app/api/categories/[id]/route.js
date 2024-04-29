import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    try {
        const { id } = params;
        const item = await db.item.findUnique({
            where:{
                id 
            },
        });
        return NextResponse.json(item);
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

export async function PUT(request, {params}) {
    try {
        const { id } = params;
        const {title, description} = await request.json
        const category = await db.category.update({
            where:{
                id 
            },
            data: {
                title,
                description
            }
        });
        console.log(category);
        return NextResponse.json(category);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Update the Category"
        }, {
            status: 500
        })
    }
}