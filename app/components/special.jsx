"use client"
import { notifyUnreadiness } from "../utility/notice"
//This component is to avoid problems 
// but when the quiz page is done, return the button back, and delete this

export default function Special(){
    return <a onClick={notifyUnreadiness} className="buttonUp" href="/quiz-flags">Nautical Flags Quiz</a>
}