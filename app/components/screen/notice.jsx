"use client"
import { closeIcon } from "./svgs/x";
import styles from "./styles/notice.module.css";
// import { successTickIcon } from "./svgs/mark";
import { downloadIcon } from "./svgs/install";
import { useEffect, useRef } from "react";

export default function InstallationNotice(){

    const reasonsToIntsall = [
        "the mobile experience",
        "quick-referencing any anytime",
        "no internet, no problem!",
        "...and the app size is just 280kb"
    ];

    const overscreen = useRef();

    let defferedPrompt;

    const activeDownloadPrompt = function(){
        overscreen.current.classList.add("overScreenActive");
    };
    
    const deactivateDownloadPrompt = function(reference){
        reference.current.classList.remove("overScreenActive");
    };

    const downloadApp = function(ovs){
        deactivateDownloadPrompt(ovs);
        defferedPrompt.prompt();
        // defferedPrompt.userChoice.then((choice)=>{
        //     if(choice.outcome === 'accepted'){
        // incase you want to test what the user chose!
        //     }
        // })

    }

    useEffect(()=>{
        
        window.addEventListener('beforeinstallprompt', (e)=>{
            e.preventDefault();
            defferedPrompt=e;
            activeDownloadPrompt();
        })


    }, [])
    
    
    return <section className={`${styles.pageAlert}`} ref={overscreen}>

        <button className={styles.closer} onClick={()=>deactivateDownloadPrompt(overscreen)}>
            {closeIcon}
        </button>

        <div className={styles.content}>

            <div className={styles.upside}>
                
                <div className={styles.headline}>
                    <h2><span style={{fontSize: "26px", fontWeight:"800", textTransform: "uppercase"}}>Great News!</span> Your device can install our nautical flags web app! </h2>
                </div>

                <div className={styles.subs}>
                    <p> If you choose to install it, you get: </p>

                    <ul>
                        {reasonsToIntsall.map((reason, index)=>{
                            return <li key={index}> {reason} </li>
                        })}
                    </ul>
                
                </div>

            </div>



            <div className={styles.thumbside}>

                <p>So what do you say?</p>

                <button onClick={()=>downloadApp(overscreen)} > {downloadIcon} Install</button>

            </div>


        </div>

    </section>
};