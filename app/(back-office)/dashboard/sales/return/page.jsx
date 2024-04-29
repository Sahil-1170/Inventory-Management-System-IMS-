import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Return() {
  const SalesReturn = await getData("return")
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
      <FixedHeader title="Sales Return" newLink="/dashboard/sales/return/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={SalesReturn} columns={columns}/>
      </div>
    </div>
  )
}

