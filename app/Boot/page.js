"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import apple from "@/public/image/apple_logo.png"
import { useRouter } from 'next/navigation'



export default function page() {
    const [progress, setProgress] = useState(0)
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 100) {
                setProgress(prevProgress => prevProgress + 1)
            }
            else {
                clearInterval(interval)
                router.push("/desktop")
            }
        }, 12)
        return () => clearInterval(interval)
    }, [progress, router])
    return (

        <div className="bg-black h-screen relative w-full">
            <div className="container h-full mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col w-full h-full justify-center items-center my-0">
                    <Image
                        src={apple}
                        alt="Apple.Inc Logo"
                        width={45}
                        height={45}
                        priority={true}
                        className="object-cover auto filters"
                    />
                    <label className=" w-48 rounded-full overflow-hidden h-[13px]  my-16">
                        <progress className="w-full h-full progress-bar" value={progress} max={100}></progress>
                    </label>
                </div>
            </div>
        </div>
    )
}
