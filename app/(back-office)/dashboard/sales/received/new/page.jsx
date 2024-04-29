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

export default function NewReceived({ initialData = {}, isUpdate = false }) {
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
    router.push("/dashboard/sales/received")
  }
  async function onSubmit(data) {
    console.log(data);
    const baseUrl = "http://localhost:3000"
    if(isUpdate){
      // Update Request
      makePutRequest(setLoading,`${baseUrl}/api/received/${initialData.id}`, data, "Received", redirect, reset)
    }else
    makePostRequest(setLoading, `${baseUrl}/api/received`, data, "Received", reset)
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Payment Received":"New Payment Received"} href="/dashboard/sales/received" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Invoice Id" name="invoiceId" register={register} errors={errors} className="w-full" />
          <TextInput label="Payment Method" name="paymentMethod" register={register} errors={errors} className="w-full" />
          <TextInput label="Amount" name="amount" type='number' register={register} errors={errors} />
          {/* <TextInput label="Customers Email" name="email" type='email' register={register} errors={errors} className="w-full" />
          <TextAreaInput label="Customers Address" name="address" register={register} errors={errors} /> */}
          {/* <TextInput label="Supplier Contact Person" name="contactPerson" register={register} errors={errors} className="w-full" />
          <TextInput label="Supplier Code" name="supplierCode" register={register} errors={errors} className="w-full" />
          <TextInput label="Supplier TIN" name="taxID" register={register} errors={errors} />
          <TextAreaInput label="Supplier Payment Terms" name="paymentTerms" register={register} errors={errors} />
          <TextAreaInput label="Notes" name="notes" register={register} errors={errors} /> */}
        </div>
        <SubmitButton isLoading={loading} title={isUpdate?"Updated Payments Received":"New Payments Received"} />
      </form>
    </div>
  )
}

