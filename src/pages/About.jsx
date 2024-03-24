import styles from "./About.module.scss";
import img from "../assets/about-img.jpg";

const About = () => {
  return (
    <section id="about" className={styles.mainBlock}>
      <div className={styles.mainBlock__textBlock}>
        <div className={styles.mainBlock__textBlock__tagLine}>About</div>
        <p className={styles.mainBlock__textBlock__content}>
          PYRADAR is an object detection project assigned to me by C<i>i</i>STUP
          IISc Bangalore. This project uses <span>React, Sass</span> in the
          front end. It uses <span>Flask</span> in the backend to handle routing
          and image submission. In order to perform object detection, I have
          used
          <span> OpenCV, YOLO</span> python libraries. Test out the project by
          submitting an image in the section below!
        </p>
      </div>
      <div className={styles.mainBlock__imgBlock}>
        <img src={img} />
      </div>
    </section>
  );
};

export default About;
