"use client"
import Image from "next/image";
import React, { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";


import MenuHeader from "./MenuHeader";
import { AppleId, Profile, familySharing } from "./IconExport";
import { settingData } from "./Settings";
import Draggable from "react-draggable";

export default function SystemPref() {
    const [close, setClose] = useState(false)
    const closed = () => {
        setClose(!close)
    }
    return (
        !close && (
            <Draggable>
                <div className="w-6/12 mx-auto animation">

                    <div className="container flex">
                        <MenuHeader className="w-full  bg-macOS-header rounded-tl-lg rounded-tr-lg p-3 mt-1" onClick={closed}>
                            <div className="w-6 h-6 mr-[0.09rem] flex items-center justify-center rounded bg-button-bg border-1 border-solid border-[#DFDDDF]">

                                <FiChevronLeft className="text-[#808080] text-lg" />
                            </div>

                            <div className="w-6 h-6 flex items-center mr-2 justify-center rounded bg-button-bg border-1 border-solid border-[#DFDDDF]">
                                <FiChevronRight className="text-[#808080] text-lg" />
                            </div>

                            <div className="w-12 h-6 flex items-center  justify-center rounded bg-button-bg border-1 border-solid border-[#DFDDDF]">
                                <TbGridDots className="text-[#808080] text-lg" />
                            </div>

                            <div className="mx-auto text-center maison-medium flex justify-center">System Preferences</div>
                        </MenuHeader>
                    </div>

                    <div className="w-full  bg-[#F6F6F6] border-2 border-solid ">
                        <div className="container flex items-center justify-between">
                            <div className="w-full flex items-center justify-around border-[#d0d0d0] border-b border-t border-solid">
                                <div className="w-16 h-16 mr-2 ml-4 my-4 rounded-full overflow-hidden">
                                    <Image
                                        src={Profile}
                                        alt="Apple ID profile image"
                                        width={80}
                                        height={80}

                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="maison-medium">Suricata Jots</h4>
                                    <h5>Apple ID, iCloud+, Media & App Store</h5>
                                </div>


                                <div className="flex-row flex mr-0 my-2">

                                    <div className="flex flex-col items-center justify-center">
                                        <Image
                                            src={AppleId}
                                            alt="apple ID logo"
                                            width={40}
                                            height={40}
                                            className="rounded-md"
                                        />
                                        <h5 className="text-center">Apple ID</h5>
                                    </div>

                                    <div className="flex flex-col items-center ml-4 justify-center">
                                        <Image
                                            src={familySharing}
                                            alt="family sharing logo"
                                            width={40}
                                            height={40}
                                            className="rounded-md"
                                        />
                                        <h5 className="text-center">Family Sharing</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-macOS-content rounded-bl-lg rounded-br-lg">
                        <div className="container flex flex-row flex-wrap">
                            {settingData.map((setting) => (
                                <div key={setting.id} className="w-2/12 mt-1 mb-4 flex flex-col items-center ">
                                    <Image
                                        alt={setting.name}
                                        src={setting.src}
                                        width={60}
                                        height={60}
                                        className="flex"
                                    />
                                    <h5 className="text-center">{setting.name}</h5>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Draggable>
        )
    )
}

