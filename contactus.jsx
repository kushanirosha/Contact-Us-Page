import React from 'react';
import Image from 'next/image';
import contactImg from '@/public/contactImg.jpg';
import { Input } from '@nextui-org/input';
import { Button } from "@nextui-org/button";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
const Contact = () => {
    return (
        <div>
            <div className="relative w-full h-screen flex items-center justify-center">
                <Image
                    src={contactImg}
                    alt="Contact Image"
                    className="w-full h-full object-cover"
                />
                <div className="absolute right-0 top-0 w-full lg:w-7/12 p-5 flex justify-center lg:justify-end items-center h-full">
                    <div className="rounded-xl w-full max-w-7xl md:w-11/12 lg:w-5/6 xl:w-4/6 shadow-lg mt-10">
                        <h1 className="text-2xl md:text-4xl text-black font-bold">
                            How Can We
                            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                                &nbsp;Assist You?
                            </span>
                        </h1>
                        <form className="space-y-4 rounded-3xl mt-9 bg-white p-10">
                            <div>
                                <label className="block mb-2 text-sm" style={{ color: "rgba(107, 114, 128, 1)" }}>Full Name</label>
                                <Input className='light' type="full name" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm" style={{ color: "rgba(107, 114, 128, 1)" }}>Email</label>
                                <Input className='light' type="eamil" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm" style={{ color: "rgba(107, 114, 128, 1)" }}>Phone</label>
                                <Input className='light' type="phone number" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm" style={{ color: "rgba(107, 114, 128, 1)" }}>Message</label>
                                <Input className="light" type="massage" />
                            </div>
                            <div className="text-center">
                                <Button color="primary" radius='full' className='w-48'>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Footer Section */}
            <div className="bg-white w-full flex flex-col items-center lg:items-start justify">
                <div className="w-full max-w-7x1 lg:w-5/6 xl:w-4/6 mt-10 px-5 sm:px-10 lg:px-20 2xl:px-24">
                    <h1 className="text-3xl font-bold  mb-4 text-black">We'd Love To Hear From You.</h1>
                    <div>
                        <p className="relative text-lg text-gray-700 mb-6 ">
                            Have Questions, Need Support, or Want to Share Feedback? Our Team is Here to Assist You Every Step of the Way. Reach Out and Connect with Us Today!
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-7/8 xl:w-7/8 mt-6 px-5 sm:px-10 lg:px-20 2xl:px-24 py-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 text-black">
                        <div className="flex flex-col">
                            <Button size='lg' radius='full' isIconOnly variant='flat' color="primary" className='mb-4'>
                                <IoCallOutline size={20}/>
                            </Button>
                            <h1 className="font-bold mb-2">Call Us Directly</h1>
                            <p className='text-gray-500 mb-6'>Available during working hours</p>
                            <a class="mt-2 font-medium text-blue-600 hover:underline">011 0987 000</a>
                        </div>
                        <div className="flex flex-col">
                            <Button size='lg' radius='full' isIconOnly variant='flat' color="primary" className='mb-4'>
                                <IoLocationOutline size={20}/>
                            </Button>
                            <h1 className="font-bold mb-2">Visit Our Office</h1>
                            <p className='text-gray-500 mb-6'>Visite our location in real life</p>
                            <a class="mt-2 font-medium text-blue-600 hover:underline">Colombo, Sri Lanka</a>
                        </div>
                        <div className="flex flex-col">
                            <Button size='lg' radius='full' isIconOnly variant='flat' color="primary" className='mb-4'>
                                <MdOutlineEmail size={20}/>
                            </Button>
                            <h1 className="font-bold mb-2">Email Support</h1>
                            <p className='text-gray-500 mb-6'>Our team can response in real time</p>
                            <a class="mt-2 font-medium text-blue-600 hover:underline">contact@technook.lk</a>
                        </div>
                        <div className="flex flex-col">
                            <Button size='lg' radius='full' isIconOnly variant='flat' color="primary" className='mb-4'>
                                <Ri24HoursLine size={20}/>
                            </Button>
                            <h1 className="font-bold mb-2">24/7 Support</h1>
                            <p className='text-gray-500 mb-6'>Our team can response in real time</p>
                            <a class="mt-2 font-medium text-blue-600 hover:underline">contact@technook.lk</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;













