"use client"
import React, { useState, useEffect } from "react";
export default function TimeInfo() {
    const timeInfo = () => {
        const timeClass = new Date();
        const dayName = timeClass.toLocaleDateString("en-EN", { weekday: "short" })
        const month = timeClass.toLocaleDateString("en-EN", { month: "short" })
        const day = timeClass.getDate()
        const PM = timeClass.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true })
        return `${dayName} ${month} ${day} ${PM}`

    }
    const [currentTime, setCurrentTime] = useState('')


    useEffect(() => {
        setCurrentTime(timeInfo())
        const intervalId = setInterval(() => {
            setCurrentTime(timeInfo())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="flex flex-1 items-center justify-end mt-2">{currentTime || "Loading..."}</div>
    )
}