"use client"

import { useState } from "react"
import ClipboardIcon from "./icons/clipboard";
import CopiedIcon from "./icons/done";


export default function CopyToClipboard({url="https://www.ioweb.pro"}){
    let [copyPressed, setCopyPressed] = useState(false);

    const handleClick = () =>{
        if(copyPressed){
            return;
        }

        navigator.clipboard.writeText(url).then(()=>{
            setCopyPressed(true);
            setTimeout(()=>alert("link to app copied!"), 600);
            //I delayed the alert for better user experience
            setTimeout(()=>setCopyPressed(false), 4000);
        }).catch(err=>console.log(err))
    }
    return <button onClick={handleClick} style={{background: "none", border:"none", cursor:"pointer"}}>{copyPressed ? <CopiedIcon /> : <ClipboardIcon /> }</button>
}