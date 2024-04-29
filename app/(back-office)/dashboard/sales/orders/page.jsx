import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Orders() {
  const order = await getData("orders")
  // const data = order.map(obj => {
  //   return{
  //     title: obj.title,
  //     phone: obj.phone,
  //     email: obj.email,
  //     address: obj.address,
  //   };
  // });
  const columns = ["customerId", "totalAmount"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Orders" newLink="/dashboard/sales/orders/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={order} columns={columns}/>
      </div>
    </div>
  )
}

