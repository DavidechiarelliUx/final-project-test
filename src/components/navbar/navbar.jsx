import React from 'react';
import Image from 'next/image';
import styles from "./navbar.module.scss";

// import logo
import Logo from "@/assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
           <Image
            src={Logo}
            alt="company logo"
            objectFit="cover"
            className={styles.image}
            width="40"
            height="40"
          />
    </div>
  );
};

export default Navbar;
