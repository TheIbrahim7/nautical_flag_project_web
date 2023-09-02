import ShareApp from "./components/share/share";
import styles from "./page.module.css";


export default function HomePage(){

  let thisYear = new Date().getFullYear();

  return <main>
    
    <div className="board">
      <h1>Welcome! This is a warm greetings that ease users to use the app</h1>
    </div>

    <section className={styles.btnGrp}>
      <a className="buttonUp" href="/learn-flags">Learn Nautical Flags</a>
      <a className="buttonUp" href="/quiz-flags">Nautical Flags Quiz</a>
      <a className="buttonUp" href="/about-app">About This App</a>
      <div>
        <p className="tiny">Share This App</p>
        
        <div style={{display: "flex", width:"300px", justifyContent:"space-around"}}>

        <ShareApp />


        </div>
      </div>
    </section>

  <footer>
    <p className="tiny"> {thisYear} &copy; ALL RIGHTS RESERVED. This App is Developed & Maintained by <a href="https://www.ioweb.pro">Ibrahim Oduola</a></p>
  </footer>
  </main>
}