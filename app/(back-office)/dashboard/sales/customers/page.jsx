import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Customers() {
  const customer = await getData("customer")
  // const data = items.map(obj => {
  //   return{
  //     title: obj.title,
  //     phone: obj.phone,
  //     email: obj.email,
  //     address: obj.address,
  //   };
  // });
  const columns = ["title", "phone", "email", "address"]
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Customers" newLink="/dashboard/sales/customers/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={customer} columns={columns}/>
      </div>
    </div>
  )
}

