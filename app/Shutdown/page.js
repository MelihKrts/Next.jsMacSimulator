"use client"
import React, { useEffect }  from 'react'
import { RotatingLines } from "react-loader-spinner"
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter()

    const handleKeyPress = (e) => {
        if (e.key === 'o' || e.key === 'O') {
            router.push("/Boot")
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress)
        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [])

    return (
        <div className='w-full h-full bg-black flex justify-center items-center'>
            <div className='mt-4'>
                <RotatingLines
                    visible={true}
                    height="36"
                    width="36"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    strokeColor='gray'
                    wrapperStyle={{}}
                    wrapperClass=""
                    style={{ stroke: '#fff' }}
                    className="text-white stroke-white"
                />
            </div>

        </div>
    )
}
