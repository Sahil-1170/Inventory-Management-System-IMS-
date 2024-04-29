"use client"
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextAreaInput from '@/components/FormInputs/TextAreaInput';
import TextInput from '@/components/FormInputs/TextInput';
import FormHeader from '@/components/dashboard/FormHeader'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';

import { useRouter } from 'next/router';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

export default function NewCategory({ initialData = {}, isUpdate = false }) {
  // const router = useRouter()
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
    router.push("/dashboard/inventory/categories")
  }
  async function onSubmit(data) {
    console.log(data);
    setLoading(true)
    const baseUrl = "http://localhost:3000"
    if(isUpdate){
      // Update Request
      makePutRequest(setLoading,`${baseUrl}/api/categories/${initialData.id}`, data, "Category", redirect, reset)
  }else
    makePostRequest(setLoading, `${baseUrl}/api/categories`, data, "Category", reset)
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Category":"New Category"} href="/dashboard/inventory/categories" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Category Title" name="title" register={register} errors={errors} />
          <TextAreaInput label="Category Description" name="description" register={register} errors={errors} />
        </div>
        <SubmitButton isLoading={loading} title={isUpdate?"Updated Category":"New Category"} />
      </form>
    </div>
  )
}
