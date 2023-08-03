import React from 'react';
import Card from '@/components/Card';
import { mockData } from '@/mocks/mock';
import styles from './cardList.module.scss';

const CardList = () => {
    return (
        <div className={styles.cardList}>
            {mockData.map((data) => (
                <Card key={data.id} data={data} /> 
            ))}
        </div>
    );
};

export default CardList;




