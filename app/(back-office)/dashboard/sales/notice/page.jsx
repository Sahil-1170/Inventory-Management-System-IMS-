import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Notice() {
  const notice = await getData("notice")
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
      <FixedHeader title="Credit Notes" newLink="/dashboard/sales/notice/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={notice} columns={columns}/>
      </div>
    </div>
  )
}

