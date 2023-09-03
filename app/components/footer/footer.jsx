"use client" //cos of the onclick event handler
import { notifyUnreadiness } from "@/app/utility/notice";

export default function FootNote({pin=false}){

    let thisYear = new Date().getFullYear();

    return <footer className={pin?"pin":""}>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/learn-flags">Learn Flags</a></li>
                <li><a href="/" onClick={notifyUnreadiness} >Take Test</a></li>
                <li><a href="/about">Credit</a></li>
            </ul>
        </nav>
        
        <p className="tiny">{thisYear} &copy; ALL RIGHTS RESERVED. This App is Developed & Maintained by <a href="https://www.ioweb.pro">developers at ioweb</a></p>

    </footer>
}