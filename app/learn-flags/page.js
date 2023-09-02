import { Fragment } from "react";
import Image from "next/image";
import { Flags } from "../database/flags";
import styles from "./page.module.css";


export default function LearnFlags(){

    const flags = Flags.sort((a, b) => {
        const nameA = a.name.toLowerCase(); // Convert names to lowercase for case-insensitive sorting
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1; // a should come before b
        }
        if (nameA > nameB) {
          return 1; // a should come after b
        }
        return 0; // names are the same
      });
    return <main className={styles.containment}>

        <section className={styles.screen}>

            {
                flags.map((flag, _)=>{
                    return <section className={styles.scrollbox} key={flag._id}>
                        <div className={styles.imageBox}>
                            <Image 
                                src={flag.image}
                                alt={`The ${flag.name} maritime signal flag`}
                                width={360}
                                height={360}

                            />
                        </div>
                        <div className={styles.props}>
                            <h2 id={`${flag.name}`}>{flag.name.substring(0,1)} - {flag.name}</h2>
                            <div className={styles.highlight}>
                                <span>it means</span>
                                <p>{flag.meaning[0]}</p>
                            </div>
                        </div>
                    </section>
                })
            }

            

        </section>

        <section className={styles.control}>
            {
                flags.map((flag, _)=>{
                    return <a key={flag._id} href={`#${flag.name}`}>{flag.name.substring(0,1)}</a>
                })
            }

        </section>

    </main>
}