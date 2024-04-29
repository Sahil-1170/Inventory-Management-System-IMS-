"use client"
import SelectInput from '@/components/FormInputs/SelectInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextAreaInput from '@/components/FormInputs/TextAreaInput';
import TextInput from '@/components/FormInputs/TextInput';
import FormHeader from '@/components/dashboard/FormHeader'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

export default function NewWarehouse({ initialData = {}, isUpdate = false }) {
  // const router = useRouter()
  const selectOptions = [
    {
      title: "Main",
      id: "main"
    },
    {
      title: "Branch",
      id: "branch"
    },
  ]
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData
  });
  const [loading, setLoading] = useState(false)
  function redirect(){
    router.push("/dashboard/inventory/warehouse")
  }
  async function onSubmit(data) {
    console.log(data);
    setLoading(true)
    const baseUrl = "http://localhost:3000"
    if(isUpdate){
      // Update Request
      makePutRequest(setLoading,`${baseUrl}/api/warehouse/${initialData.id}`, data, "Warehouse", redirect, reset)
    }else
    makePostRequest(setLoading, `${baseUrl}/api/warehouse`, data, "Warehouse", reset)
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Warehouse":"New Warehouse"} href="/dashboard/inventory/warehouse" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <SelectInput name="type" label="Select the Warehouse Type" register={register} className="w-full" options={selectOptions} />
          <TextInput label="Warehouse Title" name="title" register={register} errors={errors} className="w-full" />
          <TextInput label="Warehouse Location" name="location" register={register} errors={errors} className="w-full" />
          <TextAreaInput label="Warehouse Description" name="description" register={register} errors={errors} />
        </div>
        <SubmitButton isLoading={loading} title={isUpdate?"Updated Warehouse":"New Warehouse"} />
      </form>
    </div>
  )
}