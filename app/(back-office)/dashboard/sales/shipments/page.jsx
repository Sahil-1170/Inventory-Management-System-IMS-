import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Shipments() {
  const shipments = await getData("shipments")
  // const data = items.map(obj => {
  //   return{
  //     title: obj.title,
  //     phone: obj.phone,
  //     email: obj.email,
  //     address: obj.address,
  //   };
  // });
  const columns = ["orderId", "carrier", "trackingId", "status"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Shipments" newLink="/dashboard/sales/shipments/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={shipments} columns={columns}/>
      </div>
    </div>
  )
}

