"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, CheckCheck, CornerDownLeft, ListOrdered, PackageSearch, Receipt, Shell,  Shield, Truck, Users, } from 'lucide-react'
import React from 'react'

export default function Sales() {
  const  OptionCards = [
    {
      title:"Customers",
      description:"Manage customer information and relationships for personalized service",
      link:"/dashboard/sales/customers/new",
      linkTitle:"New Customer",
      enabled:true,
      icon: Users,
    }, 
    {
      title:"Invoices",
      description:"Generate detailed invoices for sales transactions",
      link:"/dashboard/sales/invoices/new",
      linkTitle:"New Invoice",
      enabled:true,
      icon: Shield,
    },
    {
      title:"Notice",
      description:"Communicate important updates to stakeholders with notices",
      link:"/dashboard/sales/notice/new",
      linkTitle:"New Notice",
      enabled:true,
      icon: Shell,
    },
    {
      title:"Orders",
      description:"Place and track orders for products or services",
      link:"/dashboard/sales/orders/new",
      linkTitle:"New Order",
      enabled:true,
      icon: ListOrdered,
    },
    {
      title:"Packages",
      description:"Create bundled packages for convenience and value",
      link:"/dashboard/sales/packages/new",
      linkTitle:"New Package",
      enabled:true,
      icon: Boxes,
    },
    {
      title:"Products",
      description:"Manage inventory and track product details",
      link:"/dashboard/sales/products/new",
      linkTitle:"New Product",
      enabled:true,
      icon: PackageSearch,
    },
    {
      title:"Sales Receipt",
      description:"Document payments received and stock transfers",
      link:"/dashboard/sales/receipt/new",
      linkTitle:"New Receipt",
      enabled:true,
      icon: Receipt,
    },
    {
      title:"Sales Received",
      description:"Log received payments or stock transfers",
      link:"/dashboard/sales/received/new",
      linkTitle:"New Received",
      enabled:true,
      icon: CheckCheck,
    },
    {
      title:"Sales Returns",
      description:"Process returns of items or services efficiently",
      link:"/dashboard/sales/return/new",
      linkTitle:"New Returns",
      enabled:true,
      icon: CornerDownLeft,
    },
    {
      title:"Sales Shipment",
      description:"Manage shipments for timely delivery",
      link:"/dashboard/sales/shipments/new",
      linkTitle:"New Shipment",
      enabled:true,
      icon: Truck,
    },
  ]
  return (
    <div>
      {/* <FixedHeader newLink="/dashboard/sales/customers/new" /> */}
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
