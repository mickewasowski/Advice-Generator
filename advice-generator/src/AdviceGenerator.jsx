import DividerSvg from "./DividerSvg";
import DiceSvg from "./DiceSvg";
import { useEffect, useState } from "react";

function AdviceGenerator() {
    const [adviceData, setAdviceData] = useState({});

    useEffect(() => {
        getAdviceData();
    }, []);

    const getAdviceData = () => {
        fetch("https://api.adviceslip.com/advice")
        .then((res) => {
           return res.json()
        })
        .then((result) => { setAdviceData(result.slip) } )
        .catch(err => { console.log(err) });
    }

    return(
        <div id="adviceWrapper">
            <p id="adviceHeading">Advice #{adviceData.id}</p>
            <h3 id="adviceContent">&#8220;{adviceData.advice}&#8221;</h3>
            <DividerSvg />
            <button id="adviceBtn" onClick={() => { getAdviceData() }}>
                <DiceSvg />
            </button>
        </div>
    )
}

export default AdviceGenerator;