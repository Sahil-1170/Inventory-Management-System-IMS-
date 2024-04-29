import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Received() {
  const received = await getData("received")
  // const data = items.map(obj => {
  //   return{
  //     title: obj.title,
  //     phone: obj.phone,
  //     email: obj.email,
  //     address: obj.address,
  //   };
  // });
  const columns = ["invoiceId", "paymentMethod", "amount"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Payment Received" newLink="/dashboard/sales/received/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={received} columns={columns}/>
      </div>
    </div>
  )
}

