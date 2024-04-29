"use client"
import React, { useState } from 'react'
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/TextInput';
import FormHeader from '@/components/dashboard/FormHeader'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

export default function NewUnit({initialData={}, isUpdate=false}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false)
  function redirect(){
    router.push("/dashboard/inventory/units")
  }
  async function onSubmit(data){
    console.log(data);
    setLoading(true)
    const baseUrl = "http://localhost:3000"
    if(isUpdate){
        // Update Request
        makePutRequest(setLoading,`${baseUrl}/api/units/${initialData.id}`, data, "Units", redirect, reset)
    } else {
        makePostRequest(setLoading,`${baseUrl}/api/units`, data, "Unit", reset)
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Unit":"New Unit"} href="/dashboard/inventory/units" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Unit Title" name="title" register={register} errors={errors} className="w-full" placeholder="Type the Unit Title" />
          <TextInput label="Unit Abbreviation" name="abbreviation" register={register} errors={errors} className="w-full" placeholder="Type the Unit Abbreviation" />
        </div>
        <SubmitButton isLoading={loading} title={isUpdate?"Updated Unit":"New Unit"}/>
      </form>
    </div>
  );
}
