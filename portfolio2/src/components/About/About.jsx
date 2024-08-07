import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Building Architect</h3>
              <p>
                I'm a building architect certified by the Council of Architecture (COA) in Kerala, specializing in designing functional and aesthetically pleasing structures.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Design Integration Expert</h3>
              <p>
                I integrate sustainable design principles and cutting-edge technologies to enhance the efficiency and sustainability of my projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Project Management icon" />
            <div className={styles.aboutItemText}>
              <h3>Project Management Specialist</h3>
              <p>
                I manage architectural projects from concept to completion, ensuring timely delivery and adherence to budget constraints.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
