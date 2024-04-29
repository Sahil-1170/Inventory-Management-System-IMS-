import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export default function FixedHeader({newLink, title}) {
  return (
    <div className="flex items-center justify-between py-5 px-4 bg-white">
      <button className="text-2xl">{title}</button>
      <div className="flex gap-4">
        {/* New */}
        <Link href={newLink} className='px-3 text-white p-1 bg-blue-600 rounded-sm flex items-center space-x-2'>
          <Plus className=' w-4 h-4' />
          <span>New</span>
        </Link> 
        {/* Layout */}
        <div className="flex rounded-md overflow-hidden">
          <button className="bg-gray-300 p-2 border-r border-gray-400">
            <List className="w-4 h-4"/>
          </button>
          <button className="bg-gray-100 p-2">
            <LayoutGrid className="w-4 h-4"/>
          </button>
        </div>
        {/* More */}
        <button className="bg-gray-100 p-2 rounded-md">
          <MoreHorizontal className="w-4 h-4"/>
        </button>
        {/* Help */}
        <button className="bg-orange-500 text-white p-2 rounded-md">
          <HelpCircle className="w-4 h-4"/>
        </button>
      </div>
    </div>
  )
}
