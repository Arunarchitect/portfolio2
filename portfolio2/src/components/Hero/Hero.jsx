import { useEffect, useState } from 'react';


import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
        fetch('/api/list')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data); // Log the data to the console
                setData(data);
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []);

     const profile = data.length > 0 ? data[0] : {};



  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,{profile.name}</h1>
        <p className={styles.description}>
          {profile.about}
        </p>
        <a href="mailto:anumolregi998@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

