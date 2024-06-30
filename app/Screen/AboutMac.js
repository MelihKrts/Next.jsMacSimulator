"use client"
import React, { useState } from 'react'
import Draggable from 'react-draggable'
import MenuHeader from './MenuHeader';


export default function AboutMac() {

    const letter = "x"

    const [close, setClose] = useState(false)
    const closed = () => {
        setClose(!close)
    }

    return (
        !close && (
            <Draggable>
                <div className=' w-2/5 m-auto'>
                    <div className='container flex'>
                        <MenuHeader className='w-full  bg-macOS-header rounded-tl-lg rounded-tr-lg p-3 ' onClick={closed}>
                        </MenuHeader>
                    </div>
                    <div className='w-full bg-macOS-content rounded-bl-lg rounded-b-lg'>
                        <div className='container mx-auto flex items-center justify-around'>
                            <div className='w-[150px] h-[150px] my-4 rounded-full border-border-style border-4 border-solid bg-macOS-Sierra bg-cover'>
                            </div>
                            <div className='w-1/2'>

                                <div className='w-full flex flex-col'>

                                    <ul className='flex items-center mt-4'>
                                        <li className='maison-title text-3xl'>macOS</li>
                                        <li className='maison-medium block ml-2 text-2xl' >Mojave</li>
                                    </ul>

                                    <ul className='text-left'>
                                        <li className='maison-medium text-sm ml-0.5 my-2'>Version 10.14</li>
                                    </ul>

                                    <div className='mt-4 flex'>
                                        <ul>
                                            <li><span className='maison-light font-bold'>Mac Pro (2024)</span></li>
                                            <li><span className='maison-demi font-bold mr-4 my-2'>Processor</span>3.3 Ghz</li>
                                            <li><span className='maison-demi font-bold mr-4 my-2'>Memory</span>16 GB 3200 Mhz DRAM</li>
                                            <li><span className='maison-demi font-bold mr-4 my-2'>Graphics</span>AMD Radeon Pro Vega II </li>
                                            <li><span className='maison-light font-bold mr-4 my-2'>Serial Number</span> {letter.toUpperCase().repeat(12)}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='flex mt-2 mb-10'>
                                        <button className='bg-white mr-2 rounded-lg negative p-1 border-solid border-2 border-button-border'>System Report</button>

                                        <button className='bg-white rounded-lg p-1 border-solid border-2 border-button-border'>Software Update</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className='w-full'>
                            <p className=' mb-2 maison-medium p-2 text-copyright-text text-center'>™ and © 1983-2024 Apple Inc. All Right Reserved. License and Warranty</p>
                        </div>
                    </div>
                </div>
            </Draggable>
        )

    )
}
