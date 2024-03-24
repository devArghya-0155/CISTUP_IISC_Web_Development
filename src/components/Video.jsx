import styles from "./Video.module.scss";
const Video = ({ link }) => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.mainBlock__overlay} />
      <video
        className={styles.mainBlock__video}
        src={link}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;
