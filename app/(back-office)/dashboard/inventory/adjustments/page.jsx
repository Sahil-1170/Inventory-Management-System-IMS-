import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Adjustments() {
  const addAdjustmentsData = await getData("adjustments/add")
  const transferAdjustmentsData = await getData("adjustments/transfer")
  // const data = items.map(obj => {
  //   return{
  //     title: obj.title,
  //     description: obj.description,
  //   };
  // });
  const [addAdjustments, transferAdjustments] = await Promise.all([addAdjustmentsData, transferAdjustmentsData])
  const addColumns = ["referenceNumber", "addStockQty", "createdAt"]
  const transferColumns = ["referenceNumber", "transferStockQty", "createdAt"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Adjustments" newLink="/dashboard/inventory/adjustments/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <h2 className="py-4 text-xl font-semibold">Stock Increments Adjustments</h2>
        <DataTable data={addAdjustments} columns={addColumns} resourceTitle="adjustments/add"/>
      </div>
      <div className="my-4 p-8">
        <h2 className="py-4 text-xl font-semibold">Stock Transfer Adjustments</h2>
        <DataTable data={transferAdjustments} columns={transferColumns} resourceTitle="adjustments/transfer"/>
      </div>
    </div>
  )
}
