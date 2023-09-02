import CopyToClipboard from "./clipboard";
import FacebookIcon from "./icons/facebook";
import MailIcon from "./icons/mail";
import TwitterIcon from "./icons/twitter";
import WhatsappIcon from "./icons/whatsapp";

export default function ShareApp(){
    const pretextToShare = "Please Share This For Me!"
    const url = "https://www.ioweb.pro";

    const links = [
        "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmaritime-flag-app.vercel.app%2F&amp;src=sdkpreparse",
        //facebook,
        `whatsapp://send?text=${pretextToShare}%0a%0a${url}`,
        "https://twitter.com/intent/tweet?text=" + escape(pretextToShare + "\n\n" + url),
        `mailto:?subject=I found an app to help you learn the maritime flags conveniently&body=${pretextToShare, url}`
    ]

    const icons = [
        <FacebookIcon />,
        <WhatsappIcon />,
        <TwitterIcon />,
        <MailIcon />,

    ]
    
    return <>
        {
            [1,2,3,4].map((num,ind)=>{
                return <a key={num} href={links[ind]}>{icons[ind]}</a>
            })
        }

        <CopyToClipboard />
    
    </>
}