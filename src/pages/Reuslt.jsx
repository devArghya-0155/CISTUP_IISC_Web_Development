import styles from "./Result.module.scss";

function Reuslt({ origImg, newImg }) {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.original}>
        <img src={origImg} />
        <span>Original Image</span>
      </div>
      <div className={styles.new}>
        <img src={newImg} />
        <span>Image after processing</span>
      </div>
    </div>
  );
}

export default Reuslt;
