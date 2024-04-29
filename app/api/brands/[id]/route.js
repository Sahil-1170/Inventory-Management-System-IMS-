import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}) {
    try {
        const brands = await db.brand.findUnique({
            where:{
                id 
            },
        });
        return NextResponse.json(brands);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Fetch the Brand"
        }, {
            status: 500
        })
    }
}

export async function PUT(request, {params:{id}}) {
    try {
        const {title} = await request.json
        const brands = await db.brand.update({
            where:{
                id 
            },
            data: {
                title
            }
        });
        console.log(brands);
        return NextResponse.json(brands);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to Update the Brand"
        }, {
            status: 500
        })
    }
}