"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Diff, Factory, LayoutGrid, LayoutPanelTop, Scale,  Slack, Warehouse } from 'lucide-react'
import React from 'react'

export default function Inventory() {
  const  OptionCards = [
    {
      title:"Items",
      description:"Create Standalone items and services that you buy and sell",
      link:"/dashboard/inventory/Items/New",
      linkTitle:"New Item",
      enabled:true,
      icon: LayoutGrid,
    }, 
    {
      title:"Categories",
      description:"Bundle Different items together and sell them as kits",
      link:"/dashboard/inventory/categories/new",
      linkTitle:"New Category",
      enabled:true,
      icon: LayoutPanelTop,
    },
    {
      title:"Brands",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"/dashboard/inventory/brands/new",
      linkTitle:"New Brands",
      enabled:true,
      icon: Slack,
    },
    {
      title:"Warehouse",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"/dashboard/inventory/warehouse/new",
      linkTitle:"New Warehouse",
      enabled:true,
      icon: Warehouse,
    },
    {
      title:"Units",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"/dashboard/inventory/units/new",
      linkTitle:"New Unit",
      enabled:true,
      icon: Scale,
    },
    {
      title:"Suppliers",
      description:"Tweak your item prices for specific contacts or transactions",
      link:"/dashboard/inventory/Supplier/new",
      linkTitle:"New Supplier",
      enabled:true,
      icon: Factory,
    },
    {
      title:"Inventory Adjustment",
      description:"Transfer Stock from the Main Warehouse",
      link:"/dashboard/inventory/adjustments/new",
      linkTitle:"New Adjustment",
      enabled:true,
      icon: Diff,
    },
  ]
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/Items/New" />
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">
        {
          OptionCards.map((card,i) => {
            return(
              <OptionCard OptionData={card} key={i}/>
            )
          })
        }
      </div>
    </div>
  )
}
