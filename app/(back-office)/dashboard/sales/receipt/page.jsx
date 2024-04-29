import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Receipt() {
  const receipts = await getData("receipt")
  // const data = items.map(obj => {
  //   return{
  //     title: obj.title,
  //     phone: obj.phone,
  //     email: obj.email,
  //     address: obj.address,
  //   };
  // });
  const columns = ["invoiceId", "paymentId", "amount"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Sales Receipts" newLink="/dashboard/sales/receipt/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={receipts} columns={columns}/>
      </div>
    </div>
  )
}

