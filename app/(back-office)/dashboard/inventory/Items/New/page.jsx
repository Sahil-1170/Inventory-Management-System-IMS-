import React from 'react'
import { getData } from '@/lib/getData'; 
import NewItem from '@/components/dashboard/NewItem';

export default async function Update() {
    const data = {};
    console.log(data);
  return (
    <div>
      <NewItem initialData={data} isUpdate={true} />
    </div>
  )
}
