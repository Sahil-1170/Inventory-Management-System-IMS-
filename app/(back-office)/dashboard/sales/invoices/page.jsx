import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Invoices() {
  const invoices = await getData("invoices")
  // const data = items.map(obj => {
  //   return{
  //     title: obj.title,
  //     phone: obj.phone,
  //     email: obj.email,
  //     address: obj.address,
  //   };
  // });
  const columns = ["orderId", "customerId", "totalAmount"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Invoices" newLink="/dashboard/sales/invoices/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={invoices} columns={columns}/>
      </div>
    </div>
  )
}

