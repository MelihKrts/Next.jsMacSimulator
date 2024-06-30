"use client"
import React, { useState } from 'react'
import MenuHeader from './MenuHeader'
import { FaSearch, FaStar } from "react-icons/fa";
import { BiSolidBrush } from "react-icons/bi";
import { SiApplearcade } from "react-icons/si";
import { LuDownload } from "react-icons/lu";
import { IoHammerOutline, IoGridOutline } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import Image from 'next/image';
import { Profile } from './IconExport';
import { FaChevronLeft } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import shazam from "@/public/image/shazam.png"
import firstImg from "@/public/image/shazam_one.jpg"
import secondImg from "@/public/image/shazam_two.webp"


const StoreMenu = () => {
    const MenuArray = [
        {
            "id": 1,
            "icon": <FaStar />,
            "name": "Discover"
        },
        {
            "id": 2,
            "icon": <SiApplearcade />,
            "name": "Arcade"
        },
        {
            "id": 3,
            "icon": <BiSolidBrush />,
            "name": "Create"
        },
        {
            "id": 4,
            "icon": <PiPaperPlaneTiltFill />,
            "name": "Work"
        },
        {
            "id": 5,
            "icon": <IoIosRocket />,
            "name": "Play"
        },
        {
            "id": 6,
            "icon": <IoHammerOutline />,
            "name": "Develop"
        },
        {
            "id": 7,
            "icon": <IoGridOutline />,
            "name": "Categories"
        },
        {
            "id": 8,
            "icon": <LuDownload />,
            "name": "Update"
        }
    ]

    return (
        <ul className='ml-2 mt-2 w-full'>
            {MenuArray.map((item) => (
                <li key={item.id} className='w-full flex items-center my-4'>
                    <div className="text-[#1C79F9]">
                        {item.icon}
                    </div>
                    <h5 className='ml-2 text-[#404040] paul-light font-bold'>{item.name}</h5>
                </li>
            ))}
        </ul>
    )
}

const StarRating = ({ rating }) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<FaStar key={i} fill='#8D8D91' className='star' />)
        }
        else {
            stars.push(<FaStar key={i} color='#D6D6D8' className='star' />)
        }
    }
    return <div className='flex flex-row text-sm'>{stars}</div>
}

export default function AppStore() {
    const [close, setClose] = useState(false)
    const closed = () => {
        setClose(!close)
    }
    return (
        !close && (
            <div className='w-4/5 mx-auto my-4  h-auto rounded-md overflow-hidden'>
                <div className='container flex'>
                    <div className='w-1/5 bg-[#EAEAEA] flex  flex-col'>
                        <MenuHeader onClick={closed} className="pl-4 py-2" />
                        <div className='w-full '>
                            <div className='w-4/5 mx-4 mb-2 mt-4 bg-[#DDDDDD] rounded-md h-8 flex items-center'>
                                <FaSearch className='ml-2 text-sm' />
                            </div>
                            <div className='w-full flex items-center mb-5'>
                                <StoreMenu />
                            </div>

                            <div className='w-full'>
                                <div className=' mb-4 ml-2 flex flex-row items-center'>
                                    <Image
                                        src={Profile}
                                        alt='Suricata Jots'
                                        height={48}
                                        width={48}
                                        className='overflow-hidden rounded-full'
                                    />
                                    <h5 className='text-center ml-2 text-[#3D3D3D] font-semibold'>Suricata Jots</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-4/5 bg-white'>
                        <div className='w-full flex justify-between items-center'>
                            <FaChevronLeft className='my-4 mx-4 text-md' />
                            <FiUpload className='my-4 text-md mr-5' />
                        </div>

                        <div className='w-full'>
                            <div className='container mx-auto flex items-center'>
                                <div className='ml-10 mt-8'>
                                    <Image
                                        src={shazam}
                                        alt="Shazam logo"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div className='w-full flex flex-col mt-8 ml-8'>
                                    <h5 className='font-bold mb-2'>Shazam: Identify Songs</h5>
                                    <h6>Discover music, video & lyrics</h6>
                                    <button className='w-16 text-white bg-[#3478F6] rounded-lg mt-4 '>GET</button>
                                </div>
                            </div>
                            <div className='w-11/12 my-4 mx-auto'>
                                <hr className='bg-[#EEEEEE]' />
                            </div>

                            <div className='container grid grid-cols-6'>

                                <div className='text-[#BABABA] flex items-center justify-between flex-col maison-medium app-info relative'>
                                    <h5 className='uppercase font-medium'>3 ratings</h5>
                                    <h5 className='font-semibold'>4.3</h5>
                                    <StarRating rating={4} />
                                </div>

                                <div className='text-[#BABABA] flex items-center justify-between flex-col maison-medium app-info relative'>
                                    <h5 className='uppercase font-medium'>age</h5>
                                    <h5 className='font-semibold'>12+</h5>
                                    <h5>Years Old</h5>
                                </div>

                                <div className='text-[#BABABA] flex items-center justify-between flex-col maison-medium app-info relative'>
                                    <h5 className='uppercase font-medium'>chart</h5>
                                    <h5 className='font-semibold'>No. 7</h5>
                                    <h5>Music</h5>
                                </div>

                                <div className='text-[#BABABA] flex items-center justify-between flex-col maison-medium app-info relative'>
                                    <h5 className='uppercase font-medium'>developer</h5>
                                    <CgProfile className='text-sm'/>
                                    <h5>Shazam</h5>
                                </div>

                                <div className='text-[#BABABA] flex items-center justify-between flex-col maison-medium app-info relative'>
                                    <h5 className='uppercase font-medium'>language</h5>
                                    <h5 className='font-semibold'>EN</h5>
                                    <h5>+ 14 More</h5>
                                </div>

                                <div className='text-[#BABABA] flex items-center justify-between flex-col maison-medium app-info relative'>
                                    <h5 className='uppercase font-medium'>size</h5>
                                    <h5 className='font-semibold'>9.1</h5>
                                    <h5>MB</h5>
                                </div>

                            </div>

                            <div className="container flex flex-row">
                                <div className='w-1/2 my-4 ml-4'>
                                <Image
                                src={firstImg}
                                alt='Shazam with one click straight from menu bar'
                                className='rounded-md mx-4'
                                width={400}
                                height={400}
                                />
                                </div>

                                <div className='w-1/2 my-4'>
                                <Image
                                src={secondImg}
                                alt='Access lyrics & videos, or listen on Apple Music'
                                className='rounded-md mx-1'
                                width={400}
                                height={400}
                                />
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    )
}
