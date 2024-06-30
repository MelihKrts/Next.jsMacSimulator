"use client"
import React, { useState } from 'react'
import { dockImages } from './DockIconImage'
import Image from 'next/image'
import Calculator from './Calculator'
import Draggable from 'react-draggable'

export default function Dock() {

    const [showCalculator, setShowCalculator] = useState(false)
    const handleClick = (id) => {
        if (id === 6) {
            setShowCalculator(!showCalculator)
        }
    }

    return (
        <>
            <div className='container flex flex-row items-center '>
                {dockImages.map((docks) => (
                    <div className='my-2 mx-2 dock-area' key={docks.id}>
                        <Image
                            alt={docks.alt}
                            src={docks.src}
                            onClick={() => handleClick(docks.id)}
                            width={60}
                            height={60}
                            className='icon-dock'
                            priority={true}
                        />
                    </div>
                ))}

            </div>
            {showCalculator && (
                <Calculator />
            )}
        </>

    )
}
