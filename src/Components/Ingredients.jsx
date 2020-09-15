// this will be the component that generates a list of cosmetic products based on the specific ingredient chosen from the dropdown list
// kind of like a product filter / FilterBox

/**Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * 
 * don't really need this component, but will keep it in this application as a reminder how to pass props to a child component
 */

import React from "react";

function Ingredients ( props ) {

    return (
        <li>
            {props.product.name}
        </li>
    )
}


export default Ingredients;