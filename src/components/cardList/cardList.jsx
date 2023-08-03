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

import React, {useState} from "react";
import Card from "@/components/Card";
import { mockData } from "@/mocks/mock";
import styles from "./cardList.module.scss";


    const ViewModes= {
        ShowAll: "Show All", 
        ShowByPort: "Show By Port",
    };

    const CardList = () => {
        const [ViewMode, SetViewMode] = useState(ViewModes.ShowAll);
        
        const handleViewModeChange = (e) =>{
            SetViewMode(e.target.value);
        };

    return(
        <>
        <div className={styles.container}>
        <select className={styles.ShowBox} onChange={handleViewModeChange}>
            <option value={ViewMode.ShowAll}>Mostra tutti</option>
            <option value={ViewMode.ShowByPort}>Mostra per porto di partenza</option>
        </select>
        </div>
        <div> ciao </div>
        </>
    );

}
export default CardList;

