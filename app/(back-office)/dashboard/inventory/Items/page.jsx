import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Items() {
  const items = await getData("items")
  // const data = items.map(obj => {
  //   return{
  //     title: obj.title,
  //     description: obj.description,
  //   };
  // });
  const columns = ["title", "warehouse.title", "category.title", "quantity"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Items" newLink="/dashboard/inventory/Items/New" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={items} columns={columns} resourceTitle="Items"/>
      </div>
    </div>
  )
}
