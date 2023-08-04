import React from 'react';
import styles from "./card.module.scss";

const Card = ({ data }) => {
    const {
        budget: { value, costType },
        title,
        departure: { Port },
        departureDate,
        arrivalDate,
        boatType,
        numberOfDays,
        reservations,
        reservationsType,
        reservationsAvailable,
    } = data;
    

    return (
        <div className={styles.Card}>
            <div className={styles.TextCard}>
                <div className={styles.priceSection}>
                    <p className={styles.price}>€ {value} </p>
                    <p>{costType}</p>
                </div>
                <h2 className={`${styles.title} ${styles.marginTop}`}>{title}</h2>
                <p className={`${styles.tertiaryColor} ${styles.marginTop}`}>PARTENZA DA</p>
                <p className={styles.marginTop}>{boatType}</p>
                <h3 className={styles.marginTop}>{Port}</h3>
                <p className={styles.marginTop}>{numberOfDays} giorni</p>
                <p className={styles.marginTop}>{new Date(departureDate).toLocaleDateString()}</p>
                <p className={styles.marginTop}>{new Date(arrivalDate).toLocaleDateString()}</p>
                <p className={`${styles.tertiaryColor} ${styles.marginTop}`}>{new Date(departureDate).toLocaleTimeString()}</p>
                <p className={`${styles.tertiaryColor} ${styles.marginTop}`}>{new Date(arrivalDate).toLocaleTimeString()}</p>
                <div className={styles.reservationSection}>
                    <p className={styles.marginTop}>{reservations} {reservationsType}</p>
                    <p className={`${styles.tertiaryColor} ${styles.marginTop}`}>Disponibilità: {reservationsAvailable}</p>
                </div>
                <div className={styles.containerButton}>
                    <button className={`${styles.button} ${styles.marginTop}`}>Prenota</button>
                </div>
            </div>
        </div>
    );
    
};

export default Card;



