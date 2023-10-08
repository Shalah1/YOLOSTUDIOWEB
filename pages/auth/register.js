import { useForm } from 'react-hook-form';
import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function AddUser() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [success, setSuccess] = useState('');

    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('nameU', data.name); 
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('address', data.address);

        try {
            const response = await axios.post("http://localhost:3000/users/signup", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            setSuccess('User added successfully');
            reset();
        } catch (error) {
            console.log(error.response.data.message);
            setSuccess('Unsuccessful. Please register again: ' + error.response.data.message);
        }
    };

    return (
        <>
            <div className="pt-44">
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    User Registration
                                </h1>
                                <p id="filled_success_help" className="mt-2 text-xs text-green-600 dark:text-green-400">
                                    <span className="font-medium">{success}</span>
                                </p>
                                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Name"
                                            required=""
                                            {...register('name', { required: true })}
                                        />
                                        {errors.name &&
                                            <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
                                                <span className="font-medium">Name is required</span>
                                            </p>
                                        }
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            required=""
                                            {...register('email', { required: true })}
                                        />
                                        {errors.email && (
                                            <p>
                                                {errors.email.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
                                                        <span className="font-medium">Email is required</span>
                                                    </p>
                                                    :
                                                    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
                                                        <span className="font-medium">Invalid email address</span>
                                                    </p>
                                                }
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                            {...register('password', { required: true, minLength: 2 })}
                                        />
                                        {errors.password && (
                                            <p>
                                                {errors.password.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
                                                        <span className="font-medium">Password is required</span>
                                                    </p>
                                                    :
                                                    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
                                                        <span className="font-medium">Invalid password pattern</span>
                                                    </p>
                                                }
                                            </p>
                                        )
                                            }
                                        </div>
                                        <div>
                                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                            <textarea
                                                id="address"
                                                rows="4"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Full Address here...."
                                                {...register('address', { required: true })}
                                            />
                                            {errors.address && <p className="text-red-500">Address is required</p>}
                                        </div>
                                        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
