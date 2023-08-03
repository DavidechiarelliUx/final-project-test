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
import styles from "./cardList.module.scss";

const ViewModes = {
    ShowAll: "Show All", 
    ShowByPort: "Show By Port",
};

const CardList = () => {
    const [viewMode, setViewMode] = useState(ViewModes.ShowAll);
    let groupedData;
    if (viewMode === ViewModes.ShowByPort) {
        groupedData = mockData.reduce((grouped, data) => {
            (grouped[data.departure.Port] = grouped[data.departure.Port] || []).push(data);
            return grouped;
        }, {});
        console.log(groupedData);
    }
    
    const handleViewModeChange = (e) =>{
        setViewMode(e.target.value);
    };

    return(
        <>
        <div className={styles.container}>
            <select className={styles.ShowBox} onChange={handleViewModeChange}>
                <option value={ViewModes.ShowAll}>Mostra tutti</option>
                <option value={ViewModes.ShowByPort}>Mostra per porto di partenza</option>
            </select>
        </div>
        <div> ciao </div>
        </>
    );
}

export default CardList;

