import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { mockData } from "@/mocks/mock";
import styles from "./cardAdventure.module.scss";

const CardAdventure = () => {
  const [selectedAdventures, setSelectedAdventures] = useState([]);

  useEffect(() => {
    const adventures = [...mockData];
    adventures.sort(() => Math.random() - 0.5);
    setSelectedAdventures(adventures.slice(0, 8)); 
  }, []);

  return (
    <div>
      <h1 className={styles.title} >Avventure da scoprire</h1>
      <div className={styles.cardList}>
        {selectedAdventures.map((adventure) => (
          <Card key={adventure.id} data={adventure} />
        ))}
      </div>
    </div>
  );
};

export default CardAdventure;
