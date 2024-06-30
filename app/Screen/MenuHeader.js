import React from 'react'
import { FiX } from "react-icons/fi";

export default function MenuHeader({ className, onClick, children  }) {

    return (
        <>
            <div className={className}>
                <div className='flex items-center'>
                    <div className='bg-macOS-red mr-4 w-4 h-4 rounded-full'>
                        <FiX onClick={onClick} />
                    </div>
                    <div className='bg-macOS-orange mr-4 w-4 h-4 rounded-full'></div>
                    <div className='bg-macOS-gray mr-4 w-4 h-4 rounded-full'></div>
                    {children}
                </div>
            </div>
        </>
    )
}
