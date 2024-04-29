import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Product() {
  const products = await getData("products")
//   const data = items.map(obj => {
//     return{
//       title: obj.title,
//     };
//   });
  const columns = ["title", "quantity", "price"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Products" newLink="/dashboard/sales/products/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={products} columns={columns}/>
      </div>
    </div>
  )
}

