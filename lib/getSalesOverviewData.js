
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getSalesOrdersData = async () => {
    try {
        // Fetch all sales orders with quantity data
        const salesOrdersData = await prisma.salesOrder.findMany({
            select: {
                id: true,
                customerId: true,
                totalAmount: true,
                salesOrderId: true,
                productId: true,
                quantity: true, // Include quantity field
                createdAt: true
            }
        });
        return salesOrdersData;
    } catch (error) {
        throw new Error('Error fetching sales orders data: ' + error.message);
    }
};

export default getSalesOrdersData;
