
import React, { useState } from "react";

const Tabs = ({ arr }) => {
    let [tabArr, setTabArr] = useState([]);

    function clickTab(value){
        setTabArr(value.content);
    }

    return (
        <div>
            <ul>
                {
                arr.map((value, index) => (
                <li key={index} onClick={() => clickTab(value)}>{value.title}</li>
                ))
                }
            </ul>
            <p>{tabArr}</p>
        </div>
    )
}

export default Tabs;