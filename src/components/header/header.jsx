import React from 'react';
import Image from 'next/image';
import styles from './header.module.scss';

// Import Hero image
import HeroImage from "@/assets/images/hero.jpeg"

const Header = () => {
  return (
    <header className={styles.Header}>
      <Image
        src={HeroImage}
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem Ipsum Dolor<br/>Sit Amet</h1>
      </div>
    </header>
  );
};

export default Header;
