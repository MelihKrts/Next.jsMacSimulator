import React from 'react'
import { GrPowerShutdown } from "react-icons/gr";
import Button from './Button';


export default function ShutdownBox({ onRestart, onSleep, onCancel, onShutDown }) {
    return (
        <div className='w-1/3 bg-[#EAE9EA] rounded-md mx-auto mt-8'>
            <div className='container'>
                <div className='w-full flex flex-row items-center'>
                    <div className='rounded-full w-8 h-8 flex justify-center items-center my-4 mx-4 bg-[#969899] text-white'>
                        <GrPowerShutdown className='text-xl' />
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <h5 className='font-bold my-2'>Are you sure you want to shut down your computer now?</h5>

                        <div className='w-full flex mb-4 '>
                            <input type='checkbox' checked id='reopen windows when logging back in' name='reopen windows when logging back in' className='rounded-sm border-none outline-0' />
                            <p className='ml-1'>Reopen windows when logging back in</p>
                        </div>

                    </div>

                </div>


                <div className='w-full'>
                    <div className='container mx-auto justify-center flex flex-row items-center'>
                        <Button className="bg-white rounded-md mb-4 px-4 border-button-border border border-solid " onClick={onRestart}>Restart</Button>
                        <Button className="bg-white rounded-md ml-4 mb-4 px-4 border-button-border border border-solid " onClick={onSleep}>Sleep</Button>
                        <Button className="bg-white rounded-md ml-4 mb-4 px-4 border-button-border border border-solid " onClick={onCancel}>Cancel</Button>
                        <Button className="bg-[#1486FF] text-white rounded-md ml-4 mb-4 px-4 border-button-border border border-solid" onClick={onShutDown}>Shutdown</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
