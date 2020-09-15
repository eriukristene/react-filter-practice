// this will be the page that holds the components
// will also have the functionality for sorting the generated products list via a dropdown menu
// like the <select> in Category.jsx

import React from "react";
import { useState } from "react";

function FrontPage ({ productData }) {

    const [filter, setFilter] = useState('');

    function handleSelectValue (event) {
        setFilter(event.target.value);
        console.log(event.target.value + " DOG");
        console.log(filter + " PIG");
    }

    productData = [
        {
            name: "Kjær Weis Lip Tint",
            id: "1",
            ingredients: "castor seed oil, coconut oil",
            price: "279.00",
            rating: "2"
        }, 
        {
            name: "Rituel de Fille Enchanted Lip Sheer",
            id: "2",
            ingredients: "castor seed oil, carnuba wax",
            price:"270.00",
            rating: "3"
        },
        {
            name: "Miild Beauty Facial Oil",
            id: "3",
            ingredients: "castor seed oil, tocopherol",
            price:"520.00",
            rating: "1"
        }
    ]; 


    // Filter functions
    let testFilter = productData.filter(product => product.id === "1").map( (filteredProduct) => (
        <div key={filteredProduct.id}>{filteredProduct.name}</div>
    ));

    let chosenFilter = "";

    if (filter === "atoz" ) {
        chosenFilter = productData.sort((p1, p2) => p1.name.localeCompare(p2.name)).map(
            (filteredProduct) => (
                <div key={filteredProduct.id}>{filteredProduct.name}</div>
        ));
    }

    if (filter === "hightolow") {
        chosenFilter = productData.sort((p1, p2) => p2.price - p1.price).map(
            (filteredProduct) => (
                <div key={filteredProduct.id}>{filteredProduct.name}</div>
        ));
    }

    if (filter === "lowtohigh") {
        chosenFilter = productData.sort((p1, p2) => p1.price - p2.price).map(
            (filteredProduct) => (
                <div key={filteredProduct.id}>{filteredProduct.name}</div>
        ));
    }

    if (filter === "sustain"){
        chosenFilter = productData.sort((p1, p2) => p1.rating - p2.rating).map(
            (filteredProduct) => (
                <div key={filteredProduct.id}>{filteredProduct.name}</div>
        ));
    }

    return (
        <div>
            <div className="toolbar-box col-xs-6 col-md-4 col-lg-3 icon-arrow-down">
                <select className="sort-select col-xs-12" value={filter} onChange={handleSelectValue}>
                    <option value="">How do you want to sort your products?</option>
                    <option value="atoz">A to Z</option>
                    <option value="hightolow">Highest price to lowest price</option>
                    <option value="lowtohigh">Lowest price to highest price</option>
                    <option value="sustain">Sustainability rating</option>
                </select>
            </div>
            <div>
                {productData.map((product, index) =>
                    <div key={index}>
                        <li>
                            {product.name}
                        </li>
                    </div>
                    
                    )
                }
            </div>
            <div className="filterContent">{chosenFilter}</div>
        </div>
    );
}


export default FrontPage;