"use client"
import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBasket, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import CollapsibleLink from './CollapsibleLink'
import SidebarDropDownLink from './SidebarDropDownLink'


export default function Sidebar({ showSidebar, setShowSidebar }) {
    // console.log(showSidebar);
    const InventoryLinks = [
        {
            title: "All",
            href: "/dashboard/inventory"
        },
        {
            title: "Items",
            href: "/dashboard/inventory/Items"
        },
        {
            title: "Categories",
            href: "/dashboard/inventory/categories"
        },
        {
            title: "Brands",
            href: "/dashboard/inventory/brands"
        },
        {
            title: "Units",
            href: "/dashboard/inventory/units"
        },
        {
            title: "Warehouse",
            href: "/dashboard/inventory/warehouse"
        },
        {
            title: "Inventory Adjustments",
            href: "/dashboard/inventory/adjustments"
        },
        {
            title: "Supplier",
            href: "/dashboard/inventory/Supplier"
        },
    ]
    const SalesLinks = [
        {
            title: "All",
            href: "/dashboard/sales"
        },
        {
            title: "Customers",
            href: "/dashboard/sales/customers"
        },
        {
            title: "Sales Orders",
            href: "/dashboard/sales/orders"
        },
        {
            title: "Packages",
            href: "/dashboard/sales/packages"
        },
        {
            title: "Shipments",
            href: "/dashboard/sales/shipments"
        },
        {
            title: "Invoices",
            href: "/dashboard/sales/invoices"
        },
        {
            title: "Sales Receipts",
            href: "/dashboard/sales/receipt"
        },
        {
            title: "Payment Received",
            href: "/dashboard/sales/received"
        },
        {
            title: "Sales Returns",
            href: "/dashboard/sales/return"
        },
        {
            title: "Credit Notes",
            href: "/dashboard/sales/notice"
        },
    ]

    return (
        <div className={`${showSidebar ? "w-60 min-h-screen bg-slate-800  text-slate-50 fixed lg:block z-50" : "w-60 min-h-screen bg-slate-800  text-slate-50 fixed hidden lg:block z-50"}`}>
            {/* Top Part */}
            <div className="flex flex-col">
                {/* Logo */}
                <div className="flex justify-between">
                    <Link href="" className=" bg-slate-950 flex space-x-2 items-center py-3 px-2 w-full">
                        <ShoppingCart />
                        <span className="font-semibold text-xl">Inventory</span>
                    </Link>
                    <button className="px-4 py-3 bg-slate-950 lg:hidden" onClick={() => setShowSidebar(false)}>
                        <X className="h-6 w-6 text-white" />
                    </button>
                </div>
                {/* Links */}
                <nav className="flex flex-col gap-3 px-3 py-6">
                    <Link className="flex itens-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
                        href="/dashboard/home/overview">
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>
                    <SidebarDropDownLink items={InventoryLinks} title="Inventory" icon={BaggageClaim} setShowSidebar={setShowSidebar} />
                    <SidebarDropDownLink items={SalesLinks} title="Sales" icon={ShoppingBasket} setShowSidebar={setShowSidebar} />
                    <button className="p-2 flex itens-center space-x-2" >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Purchases</span>
                    </button>
                    <Link className="p-2 flex itens-center space-x-2"
                        href="#">
                        <Cable className="w-4 h-4" />
                        <span>Integrations</span>
                    </Link>
                    <Link className="p-2 flex itens-center space-x-2"
                        href="#">
                        <BarChart4 className="w-4 h-4" />
                        <span>Reports</span>
                    </Link>
                    <Link className="p-2 flex itens-center space-x-2"
                        href="#">
                        <Files className="w-4 h-4" />
                        <span>Documents</span>
                    </Link>
                </nav>
                <SubscriptionCard />
            </div>

            {/* Bottom Part */}
            <div className="flex flex-col">
                <button className=" bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2"onClick={() => setShowSidebar(false)}>
                    <ChevronLeft />
                </button>
            </div>
        </div>              
    )
}
