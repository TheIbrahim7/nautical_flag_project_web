import FootNote from "./components/footer/footer";
import ShareApp from "./components/share/share";
import Special from "./components/special";
import styles from "./page.module.css";


export default function HomePage(){

  return <main style={{padding: "50px 0"}}>
    
    <div className="board">
      <h1> Welcome to Maritime Signal Flags Learning Platform. Our nautical signal flags app is the perfect way to get started and be a pro in no time</h1>
    </div>

    <section className={styles.btnGrp}>
      <a className="buttonUp" href="/learn-flags">Learn Nautical Flags</a>
      <Special />
      <a className="buttonUp" href="/about">About This App</a>
      <div>
        <p className="tiny">Share This App</p>
        
        <div style={{display: "flex", width:"300px", justifyContent:"space-around"}}>

        <ShareApp />


        </div>
      </div>
    </section>

    <FootNote pin={false}/>
  </main>
}