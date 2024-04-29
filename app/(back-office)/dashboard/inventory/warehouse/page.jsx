import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Brands() {
  const warehouses = await getData("warehouse")
  // const data = items.map(obj => {
  //   return{
  //     title: obj.title,
  //     description: obj.description,
  //   };
  // });
  const columns = ["title", "location", "description"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Warehouse" newLink="/dashboard/inventory/warehouse/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={warehouses} columns={columns} resourceTitle="warehouse"/>
      </div>
    </div>
  )
}
