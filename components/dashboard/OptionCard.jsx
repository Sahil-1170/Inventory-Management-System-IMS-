"use client"
import Link from 'next/link'
import React from 'react'

export default function OptionCard({ OptionData }) {
    const { title, description, link, linkTitle, enabled, icon:Icon } = OptionData;
    return (
        <div className="shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded">
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="">
                <Icon strokeWidth="0.5px" className="w-32 h-32" />
            </div>
            <p className="line-clamp-1">
                {description}
            </p>
            {
                enabled ? (
                    <Link href={link} className='px-3 text-white py-2 bg-blue-600 rounded-sm inline-flex items-center space-x-2'>
                        {linkTitle}
                    </Link>
                ) : (
                    <button className="px-3 text-white py-2 bg-blue-600 rounded-sm inline-flex items-center space-x-2">Enable</button>
                )
            }
        </div>
    )
}
