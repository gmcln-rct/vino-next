import {useState } from "react";

import GRAPE_TOP_100_ORIGINS from "@/data/grape-top-100-origins";


function RegionsTop100GrapesPage() {

    const grapeList = GRAPE_TOP_100_ORIGINS.map((grape) => {
        return {
            id: grape.id,
            itemName: grape.itemName,
            countryOriginName: grape.countryOriginName,
        }
    });


    return (
        <section>
            <h1>Regions Top 100 Grapes</h1>
        </section>
    );
}

export default RegionsTop100GrapesPage;
