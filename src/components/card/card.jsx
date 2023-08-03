import React from 'react';
import styles from './card.module.scss';

const Card = () => {
    return (
        <div className={styles.Card}>
            <h3>480€ Per cabina</h3>
            <h2>Isole Egadi</h2>
            <p>partenza da</p>
            <h3>Favignana</h3>
            <p>07/07/2023</p>
            <p>7.50</p>
            <p>4 cabine</p>
            <h4>Disponibilità 2 </h4>
            <div className={styles.containerButton}>
            <button className={styles.button}> Prenota </button>
            </div>
            
        </div>
    );
};

export default Card;
