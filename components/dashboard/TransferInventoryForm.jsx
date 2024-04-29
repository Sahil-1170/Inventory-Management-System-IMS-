"use client"

import SelectInput from '@/components/FormInputs/SelectInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextAreaInput from '@/components/FormInputs/TextAreaInput';
import TextInput from '@/components/FormInputs/TextInput';
import FormHeader from '@/components/dashboard/FormHeader'
import { makePostRequest } from '@/lib/apiRequest';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function TransferInventoryForm({items, warehouses}) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false)
    async function onSubmit(data) {
        console.log(data);
        setLoading(true)
        const baseUrl = "http://localhost:3000"
        makePostRequest(setLoading, `${baseUrl}/api/adjustments/transfer`, data, "Stock Adjustment", reset)
    }
    return (
        <>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput label="Reference Number" name="referenceNumber" register={register} errors={errors} placeholder="Type the Reference Number" />
                    <SelectInput name="itemId" label="Select the Item" register={register} className="w-full" options={items} />
                    <TextInput label="Enter Quantity of Stock to Transfer" type='number' name="transferStockQty" register={register} errors={errors} className="w-full" placeholder="Type Quantity of Stock to Transfer"/>
                    <SelectInput name="givingWarehouseId" label="Select the Warehouse that will give the Stock" register={register} className="w-full" options={warehouses} />
                    <SelectInput name="receivingWarehouseId" label="Select the Warehouse that will receive the Stock" register={register} className="w-full" options={warehouses} />
                    <TextAreaInput label="Adjustment Notes" name="notes" register={register} errors={errors} placeholder="Type the Adjustment Notes" />
                </div>
                <SubmitButton isLoading={loading} title="Adjustment" />
            </form>
        </>

    )
}