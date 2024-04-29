"use client"
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CollapsibleLink from './CollapsibleLink'
import { BaggageClaim, ChevronRight } from 'lucide-react'

export default function SidebarDropDownLink({ title, items, icon, setShowSidebar }) {
    const Icon = icon
    return (
        <Collapsible>
            <CollapsibleTrigger className="flex itens-center justify-between w-full">
                <div className="flex p-2 items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{title}</span>
                </div>
                <ChevronRight className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent>
                {
                    items.map((item, i) => {
                        return (
                            <CollapsibleLink setShowSidebar={setShowSidebar} key={i} href={item.href} title={item.title} />
                        )
                    })
                }                
            </CollapsibleContent>
        </Collapsible>
    )
}
