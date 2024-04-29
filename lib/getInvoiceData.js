
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getInvoicesData = async () => {
    try {
        // Fetch all invoices with total amount data
        const invoicesData = await prisma.invoice.findMany({
            select: {
                id: true,
                orderId: true,
                customerId: true,
                totalAmount: true, // Include totalAmount field
                createdAt: true
            }
        });
        return invoicesData;
    } catch (error) {
        throw new Error('Error fetching invoices data: ' + error.message);
    }
};

export default getInvoicesData;
