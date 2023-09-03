import Navigation from "../components/navigation/navigation";
import styles from "./styles/page.module.css";
import me from "./img/me.png";
import Image from "next/image";
import FootNote from "../components/footer/footer";

export default function AboutPage(){
    return <main style={{padding: "10px 0"}}>
        <section style={{margin: "10px 10px 20px"}}>
            <Navigation />
        </section>

        <section className={styles.aboutOuter}>           
            <div className={styles.aboutInner}>
                <h1>About The Nautical Flag App</h1>
                <p>
                    One of the most important things for deck officers and ratings is the knowledge of the international maritime signal flags. These flags are used for communication. <br/><br/>The goal of this very lightweight app is to cover all flags including the pedants for learning purposes as well for quick referencing.      
                </p>
            </div>

            <div className={styles.details}>
                <div className={styles.picFrame}>
                    <Image 
                        src={me}
                        alt="The Developer Team Lead @ ioweb"
                    />
                </div>
                <h2>Development And Maintenance</h2>
                <p>
                    This app, first built in 2020, is developed and maintained by <a href="https://www.ioweb.pro">Ibrahim, the tech lead at ioweb</a>. <br/><br/>
                    Ibrahim is a deck officer and tech guru making the best use of both worlds. With a repertoire spanning coding and artificial intelligence, Ibrahim is exploring opportunities lurking beneath the shipping and logistics industry. But ofcourse, Rome was not built in a day.
                    For suggestions or partnership, please <a href="mailto:ibrahim.oduola007@gmail.com?subject=Message%20About%20The%20Maritime%20Flag%20App&body=Hello!%20My%20name%20is%20...." rel="nofollow">leave me a message!</a>                    
                </p>
            </div>

        </section>

        <FootNote />
    </main>
}