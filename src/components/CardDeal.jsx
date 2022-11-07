import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/>in a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Just enter your name and contact information, and our team will take care of everyting
          then we will reach back to you in order to dicuss the better card deals in less than
          3 business days.</p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )

export default CardDeal