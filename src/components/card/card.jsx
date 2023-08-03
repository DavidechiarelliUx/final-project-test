import React from 'react';
import styles from './card.module.scss';

const Card = ({ data }) => {
    const {
        budget: { value, costType },
        title,
        departure: { Port },
        departureDate,
        reservations,
        reservationsType,
        reservationsAvailable,
    } = data;

    return (
        <div className={styles.Card}>
            <div className={styles.TextCard}>
            <h3>  {value} € {costType}</h3>
            <h2>{title}</h2>
            <p>partenza da</p>
            <h3>{Port}</h3>
            <p>{new Date(departureDate).toLocaleDateString()}</p>
            <p>{new Date(departureDate).toLocaleTimeString()}</p>
            <p>{reservations} {reservationsType}</p>
            <h4>Disponibilità {reservationsAvailable} </h4>
            </div>
            <div className={styles.containerButton}>
                <button className={styles.button}> Prenota </button>
            </div>
        </div>
    );
};

export default Card;



