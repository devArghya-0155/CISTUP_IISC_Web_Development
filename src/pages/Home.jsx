import Video from "../components/Video";
import styles from "./Home.module.scss";

function Home() {
  return (
    <section className={styles.main} id="main">
      <div className={styles.main__overlay}>
        <h1 className={styles.headingPrimary}>PyRadar</h1>
        <div className={styles.headingSecondary}>
          <p>An object detection project</p>
          <p>
            Undertaken by{" "}
            <span>
              C<i>i</i>STUP
            </span>
            , IISc Bangalore
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
