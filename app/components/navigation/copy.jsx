"use client";

import { useState } from "react";
import styles from "./styles/copy.module.css";

export default function CopyAppLink({url="https://www.ioweb.pro"}){

    let [pressed, setPressed] = useState(false);

    let handleClick = function(){
        if(pressed)return;
        setPressed(true);
        
        navigator.clipboard.writeText(url).then(()=>{
            setTimeout(()=>setPressed(false), 3000);
        })
    };

    return <button onClick={handleClick} className={styles.copyBTN}>
        {pressed ? "copied!" : "Copy App Link"}
    </button>
}