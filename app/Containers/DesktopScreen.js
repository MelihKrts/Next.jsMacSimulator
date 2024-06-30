"use client"

import Image from "next/image"
import React, { useEffect, useState } from 'react'
import apple from "@/public/image/apple_logo.png"
import { AppStore, AboutMac, TimeInfo, SystemPref, ShutdownBox } from "../desktop/DesktopExport";
import { useRouter } from "next/navigation";
import Dock from "../Screen/Dock";



const initialState = {
    isMenuVisible: false,
    isFinderMenuVisible: false,
    isFileMenuVisible: false,
    isEditMenuVisible: false,
    isViewMenuVisible: false,
    isGoMenuVisible: false,
    isWindowsMenuVisible: false,
    isHelpMenuVisible: false,


    isAboutVisible: false,
    isSystemPreferenceVisible: false,
    isAppStoreVisible: false,
    isSleepMode: false,
    isShutDownVisible: false,

    isCalculatorVisible: false,
}

export default function DesktopScreen() {

    const [state, setState] = useState(initialState)
    const router = useRouter()

    const toggleVisibility = (key) => {
        setState(prevState => ({
            ...initialState,
            [key]: !prevState[key]
        }))
    }

    const handleSleep = () => {
        setState(prevState => ({
            ...prevState,
            isSleepMode: true
        }))
    }

    const handleWakeUp = (e) => {
        if (e.key === "w" || e.key === "W") (
            setState(prevState => ({
                ...prevState,
                isSleepMode: false
            }))
        )
    }

    const handleRestart = () => {
        router.push("/Screen")
    }

    const handleShutdown = () => {
        router.push("/Shutdown")
    }

    const handleCancel = () => {
        toggleVisibility("isShutDownVisible")
    }

    useEffect(() => {
        window.addEventListener("keydown", handleWakeUp)
        return () => {
            window.removeEventListener("keydown", handleWakeUp)
        }
    }, [])

    return (
        <section className={`w-full relative h-full ${state.isSleepMode ? 'bg-black' : 'bg-image'}`}>

            {!state.isSleepMode && (
                <>
                    <header className="w-full ">
                        <div className="menubar w-full">
                            <nav className="container flex justify-between">

                                <ul className="flex mt-2">
                                    <li className='mr-4' onClick={() => toggleVisibility("isMenuVisible")}>
                                        <Image src={apple} alt="apple logo" width={2} height={2} priority={true} className='auto' />
                                    </li>

                                    {state.isMenuVisible && (
                                        <ul className='dropdown-menu left-auto top-10 w-48 bg-white shadow-lg rounded-md absolute'>
                                            <li className='option-li' onClick={() => toggleVisibility("isAboutVisible")}>About The Mac</li>
                                            <li className='option-li' onClick={() => toggleVisibility("isSystemPreferenceVisible")}>System Preferences</li>
                                            <li className='option-li' onClick={() => toggleVisibility("isAppStoreVisible")}>App Store</li>
                                            <li className='option-li disabled'>Recent Items</li>
                                            <li className='option-li disabled'>Force Quit</li>
                                            <li className='option-li' onClick={handleSleep}>Sleep</li>
                                            <li className='option-li' onClick={handleRestart}>Restart</li>
                                            <li className='option-li' onClick={() => toggleVisibility("isShutDownVisible")}>Shut Down</li>
                                            <li className='option-li disabled'>Lock Screen</li>
                                            <li className='option-li disabled'>Log Out User</li>
                                        </ul>
                                    )}

                                    <li className='mr-4' onClick={() => toggleVisibility("isFinderMenuVisible")}><span className='font-medium'>Finder</span></li>
                                    {state.isFinderMenuVisible && (
                                        <ul className='dropdown-menu left-auto top-10 w-48 bg-white shadow-lg rounded-md absolute'>
                                            <li className='option-li'>About Finder</li>
                                            <li className='option-li'>Preferences</li>
                                            <li className='option-li disabled'>Empty Trash</li>
                                            <li className='option-li '>Hide Finder</li>
                                            <li className='option-li disabled'>Hide Others</li>
                                        </ul>
                                    )}

                                    <li className='mr-4' onClick={() => toggleVisibility("isFileMenuVisible")}><span>File</span></li>
                                    {state.isFileMenuVisible && (
                                        <ul className='dropdown-menu left-auto top-10 w-48 bg-white shadow-lg rounded-md absolute'>

                                            <li className='option-li'>New Finder Window</li>
                                            <li className='option-li'>New Folder</li>
                                            <li className='option-li disabled h-[50px!important]'>New Folder with Selection</li>
                                            <li className='option-li'>New Smart Folder</li>
                                            <li className='option-li'>New Tab</li>
                                            <li className="option-li disabled">Open</li>
                                            <li className="option-li disabled">Open With</li>
                                            <li className="option-li disabled">Print</li>
                                            <li className="option-li disabled">Close Window</li>
                                            <li className="option-li">Get Info</li>

                                            <li className="option-li disabled">Rename</li>
                                            <li className="option-li disabled">Compress</li>
                                            <li className="option-li disabled">Duplicate</li>
                                            <li className="option-li disabled">Make Alia</li>
                                            <li className="option-li disabled">Quick Look</li>
                                            <li className="option-li disabled">Show Original</li>
                                            <li className="option-li disabled">Add to Sidebar</li>


                                            <li className="option-li disabled">Move to Trash</li>
                                            <li className="option-li disabled">Eject</li>

                                            <li className="option-li"><span>Find</span></li>

                                            <li className="option-li">Tags</li>

                                        </ul>
                                    )}
                                    <li className='mr-4' onClick={() => toggleVisibility("isEditMenuVisible")}><span>Edit</span></li>
                                    {state.isEditMenuVisible && (
                                        <ul className='dropdown-menu left-auto top-10 w-48 bg-white shadow-lg rounded-md absolute'>

                                            <li className="option-li disabled">Undo</li>
                                            <li className="option-li disabled">Redo</li>


                                            <li className="option-li disabled">Cut</li>
                                            <li className="option-li disabled">Copy</li>
                                            <li className="option-li disabled">Paste</li>
                                            <li className="option-li disabled">Select All</li>


                                            <li className="option-li">Show Clipboard</li>


                                            <li className="option-li">Start Dictation...</li>
                                            <li className="option-li">Emoji & Symbols</li>

                                        </ul>
                                    )}


                                    <li className='mr-4' onClick={() => toggleVisibility("isViewMenuVisible")}><span>View</span></li>

                                    {state.isViewMenuVisible && (
                                        <ul className='dropdown-menu left-auto top-10 w-48 bg-white shadow-lg rounded-md absolute'>

                                            <li className="option-li disabled">As Icons</li>
                                            <li className="option-li disabled">As List</li>
                                            <li className="option-li disabled">As Columns</li>
                                            <li className="option-li disabled">As Gallery</li>

                                            <li className="option-li"><span>Use Stacks</span></li>
                                            <li className="option-li"><span>Sort By</span></li>
                                            <li className="option-li disabled"><span>Clean Up</span></li>
                                            <li className="option-li disabled"><span>Clean Up By</span></li>


                                            <li className="option-li disabled"><span>Hide Sidebar</span></li>
                                            <li className="option-li disabled"><span>Show Preview</span></li>

                                            <li className="option-li disabled"><span>Hide Toolbar</span></li>
                                            <li className="option-li disabled"><span>Show All Tabs</span></li>
                                            <li className="option-li disabled"><span>Show Tab Bar</span></li>
                                            <li className="option-li disabled"><span>Show Path Bar</span></li>
                                            <li className="option-li disabled"><span>Show Status Bar</span></li>


                                            <li className="option-li disabled"><span>Customize Toolbar</span></li>


                                            <li className="option-li "><span>Show View Options</span></li>
                                            <li className="option-li disabled h-[50px!important]"><span>Show Preview Options</span></li>



                                            <li className="option-li disabled"><span>Enter Full Screen</span></li>

                                        </ul >
                                    )
                                    }

                                    <li className='mr-4' onClick={() => toggleVisibility("isGoMenuVisible")}><span>Go</span></li>

                                    {
                                        state.isGoMenuVisible && (
                                            <ul className='dropdown-menu left-auto top-10 w-48 bg-white shadow-lg rounded-md absolute'>

                                                <li className="option-li disabled">Back</li>
                                                <li className="option-li disabled">Forward</li>
                                                <li className="option-li">Enclosing Folder</li>

                                                <li className="option-li">Recents</li>
                                                <li className="option-li">Documents</li>
                                                <li className="option-li">Desktop</li>
                                                <li className="option-li">Downloads</li>
                                                <li className="option-li">Home</li>
                                                <li className="option-li">Computer</li>
                                                <li className="option-li">Airdrop</li>
                                                <li className="option-li">Network</li>
                                                <li className="option-li">iCloud Drive</li>
                                                <li className="option-li">Applications</li>
                                                <li className="option-li">Utilities</li>

                                                <li className="option-li">Bring All to Front</li>
                                                <li className="option-li">Connect to Server</li>

                                            </ul>
                                        )
                                    }

                                    <li className='mr-4' onClick={() => toggleVisibility("isWindowsMenuVisible")}><span>Window</span></li>

                                    {
                                        state.isWindowsMenuVisible && (
                                            <ul className='dropdown-menu left-auto top-10 w-48 bg-white shadow-lg rounded-md absolute'>

                                                <li className="option-li disabled">Minimize</li>
                                                <li className="option-li disabled">Zoom</li>
                                                <li className="option-li disabled h-[50px!important]">Move Window to Left Side of Screen</li>
                                                <li className="option-li disabled h-[50px!important]">Move Window to Right Side of Screen</li>
                                                <li className="option-li h-[50px!important]">Cycle Through Windows</li>

                                                <li className="option-li disabled">Show Previous Tab</li>
                                                <li className="option-li disabled">Show Next Tab</li>
                                                <li className="option-li disabled h-[50px!important]">Move Tab to New Window</li>
                                                <li className="option-li disabled">Merge all Windows</li>

                                                <li className="option-li">Bring All to Front</li>
                                                <li className="option-li">Connect to Server</li>

                                            </ul>
                                        )
                                    }

                                    <li onClick={() => toggleVisibility("isHelpMenuVisible")}><span>Help</span></li>

                                    {
                                        state.isHelpMenuVisible && (
                                            <ul className='dropdown-menu right-auto top-10 w-48 bg-white shadow-lg rounded-md absolute'>

                                                <li className="option-li">send Finder Feedback</li>
                                                <li className="option-li">macOS Help</li>

                                            </ul>
                                        )
                                    }
                                </ul >
                                <TimeInfo />
                            </nav >
                        </div >

                        {state.isAboutVisible && <AboutMac />}
                        {state.isSystemPreferenceVisible && <SystemPref />}
                        {state.isAppStoreVisible && <AppStore />}
                        {
                            state.isShutDownVisible && (
                                <ShutdownBox
                                    onCancel={handleCancel}
                                    onRestart={handleRestart}
                                    onSleep={handleSleep}
                                    onShutDown={handleShutdown}
                                />
                            )
                        }
                    </header >
                    <div className="relative  w-screen">
                        <section className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-1/2 mx-auto rounded-md dock-bg">
                            <Dock />
                        </section>
                    </div>
                </>
            )}




        </section >
    )
}


