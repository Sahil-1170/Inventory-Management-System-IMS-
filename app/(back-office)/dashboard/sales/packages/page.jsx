import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Product() {
  const packages = await getData("packages")
//   const data = items.map(obj => {
//     return{
//       title: obj.title,
//     };
//   });
  const columns = ["orderId", "status"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Packages" newLink="/dashboard/sales/packages/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={packages} columns={columns}/>
      </div>
    </div>
  )
}

