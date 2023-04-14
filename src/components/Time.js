import { useEffect, useState } from "react"

export default function Time(){
    const [time, setTime] = useState(new Date());
    const currentTime = time.toLocaleTimeString([], { hour: "numeric", minute: "numeric", hour12: false })
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000);

        return () => clearInterval(interval);
    },[])

    return(
        <span>{currentTime}</span>
    )
}