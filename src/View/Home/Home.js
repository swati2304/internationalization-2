import React, { useState } from "react";
import "./Home.css";
import i18n from "../../Utility/i18n";

export default function Home(){
    const [lang, setLang] = useState('mr');

    return(
        <div>
            <h1>{i18n("welcomeMassage")}</h1>
            <h3>{i18n("helpingMassage")}</h3>
            <h3>{i18n("helpMassage")}</h3>
            <h3>{i18n("massage")}</h3>
            <select className="select-container"
            defaultValue={localStorage.getItem("lang")}
            onChange={(e)=>{
                localStorage.setItem("lang", e.target.value)
                window.location.reload();
            }}>
                <option value="en">English</option>
                <option value="mr">Marathi</option>
                <option value="hn">Hindi</option>
            </select>
        </div>
    )
}