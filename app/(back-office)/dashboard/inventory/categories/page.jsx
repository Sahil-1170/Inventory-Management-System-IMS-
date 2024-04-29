import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Categories() {
  const categories = await getData("categories")
  const data = categories.map(obj => {
    return{
      title: obj.title,
      description: obj.description,
    };
  });
  const columns = ["title", "description"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Categories" newLink="/dashboard/inventory/categories/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={data} columns={columns} resourceTitle="categories"/>
      </div>
    </div>
  )
}
