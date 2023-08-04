import React from 'react';
import styles from './info.module.scss';
import Image from 'next/image';

import Banner from "@/assets/images/Banner.jpeg"
const Info = () => {
  return (

    <div className={styles.container}>
          <Image
        src={Banner}
        alt="Banner Image"
        className={styles.image}
        />
      <div className={styles.item}>
        <h1>+20</h1>
        <h2>Destinazioni</h2>
      </div>
      <div className={styles.item}>
        <h1>+15</h1>
        <h2>Imbarcazioni</h2>
      </div>
      <div className={styles.item}>
        <h1>+40</h1>
        <h2>Itinerari</h2>
      </div>
    </div>

  );
};

export default Info;
