import React, {useState} from "react";
import Card from "@/components/Card";
import { mockData } from "@/mocks/mock";
import styles from "./cardList.module.scss";

const CardList = () => {

    const [numCardsToShow, setNumCardsToShow] = useState(8);

    
    const handleShowMoreClick = () => {
        setNumCardsToShow(numCardsToShow + 8);  
    };

    return (
        <>
        <div className={styles.cardList}>
            {mockData.slice(0, numCardsToShow).map((data) => (
                <Card key={data.id} data={data} /> 
                ))}
        </div>
            <div className={styles.containerButton}>
                <button className={styles.button} onClick={handleShowMoreClick}>Mostra Altro</button>
            </div>
        </>
    );
};

export default CardList;




