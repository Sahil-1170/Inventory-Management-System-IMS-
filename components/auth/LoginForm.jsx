"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import toast from "react-hot-toast"

export default function LoginForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);
    console.log(loading)
    async function onSubmit(data) {
        try { 
            console.log(data.email, data.password);
            setLoading(true)
            const loginData = await signIn("credentials", {
                ...data,
                redirect: false
            });
            if (loginData) {
                setLoading(false)
                router.push("/dashboard/home/overview");
            }
        } catch (error) {
            setLoading(false);
            console.error("Network Error:", error);
            toast.error("It seems Something is wrong with your Network")
    }
}

return(
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
        <div>
            <label 
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Your Email
            </label>
            <input 
            {...register("email", { required: true })}
            type="email" 
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="name@company.com"
            required=""
            />
            {errors.email && (
                <small className="text-red-600 text-sm">
                    This Field is Required
                </small>
            )}
        </div>
        <div>
            <label 
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Your Password
            </label>
            <input 
            {...register("password", { required: true })}
            type="password" 
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="********"
            required=""
            />
            {errors.email && (
                <small className="text-red-600 text-sm">
                    This Field is Required
                </small>
            )}
        </div>
        {loading ? (
                <button
                    disabled
                    type="button"
                    className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 inline-flex items-center"
                >
                    <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67266 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                        />
                        <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 "
                        fill="currentColor"
                        />
                    </svg>
                    Logging In Please Wait
                </button>
            ) : (
                <button
                type="submit"
                className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 inline-flex items-center text-center"
                >
                    Sign In
                </button>
            )}

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Dont have an Account?{" "} 
                <a
                href="/register"
                className="font-medium text-purple-600 hover:underline dark:text-purple-500"
                >
                    Sign Up
                </a>
            </p>
    </form>
    )
}