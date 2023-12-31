// Step 2
// import React, {useState} from "react";
// import Card from "@/components/Card";
// import { mockData } from "@/mocks/mock";
// import styles from "./cardList.module.scss";

// const CardList = () => {

//     const [numCardsToShow, setNumCardsToShow] = useState(8);

    
//     const handleShowMoreClick = () => {
//         setNumCardsToShow(numCardsToShow + 8);  
//     };

//     return (
//         <>
//         <div className={styles.cardList}>
//             {mockData.slice(0, numCardsToShow).map((data) => (
//                 <Card key={data.id} data={data} /> 
//                 ))}
//         </div>
//             <div className={styles.containerButton}>
//                 <button className={styles.button} onClick={handleShowMoreClick}>Mostra Altro</button>
//             </div>
//         </>
//     );
// };

// export default CardList;

// step 4
import React, {useState} from "react";
import Card from "@/components/Card";
import { mockData } from "@/mocks/mock";
import FilterPort from "../filterPort";
import styles from "./cardList.module.scss";

const ViewModes = {
    ShowAll: "Show All", 
    ShowByPort: "Show By Port",
};

const CardList = () => {
    const [viewMode, setViewMode] = useState(ViewModes.ShowAll);
    const [selectedPort, setSelectedPort] = useState("");
    const [numCardsToShow, setNumCardsToShow] = useState(8);

    let groupedData = {};
    if (viewMode === ViewModes.ShowByPort) {
        groupedData = mockData.reduce((grouped, data) => {
            (grouped[data.departure.Port] = grouped[data.departure.Port] || []).push(data);
            return grouped;
        }, {});
    }
    
    const handleViewModeChange = (e) => {
        setViewMode(e.target.value);
    };

    const handlePortSelected = (port) => {
        setSelectedPort(port);
    };

    const handleShowMoreClick = () => {
        setNumCardsToShow(numCardsToShow + 8);  
    };

    return (
        <>
            <div className={styles.selectContainer}>
                <div className={styles.container}>
                    <select className={styles.ShowBox} onChange={handleViewModeChange}>
                        <option value={ViewModes.ShowAll}>Mostra tutti</option>
                        <option value={ViewModes.ShowByPort}>Mostra per porto di partenza</option>
                    </select>
                </div>
                {viewMode === ViewModes.ShowByPort && (
                    <div className={styles.container}>
                        <FilterPort ports={Object.keys(groupedData)} onPortSelected={handlePortSelected} />
                    </div>
                )}
            </div>
            <div className={styles.cardList}>
                {viewMode === ViewModes.ShowByPort ? (
                    selectedPort ? (
                        <div key={selectedPort} className={styles.portGroup}>
                            <h2 className={styles.portTitle}>{selectedPort}</h2>
                            <div className={styles.cardList}>
                                {groupedData[selectedPort].map(cardData => (
                                    <Card key={cardData.id} data={cardData} />
                                ))}
                            </div>
                        </div>
                    ) : 
                    Object.keys(groupedData).map(port => (
                        <div key={port} className={styles.portGroup}>
                            <h2 className={styles.portTitle}>{port}</h2>
                            <div className={styles.cardList}>
                                {groupedData[port].map(cardData => (
                                    <Card key={cardData.id} data={cardData} />
                                ))}
                            </div>
                        </div>
                    ))
                ) : 
                mockData.slice(0, numCardsToShow).map(cardData => (
                    <Card key={cardData.id} data={cardData} />
                ))}
            </div>
            {viewMode === ViewModes.ShowAll && (
                <div className={styles.containerButton}>
                    <button className={styles.button} onClick={handleShowMoreClick}>Mostra Altro</button>
                </div>
            )}
        </>
    );
}

export default CardList;
