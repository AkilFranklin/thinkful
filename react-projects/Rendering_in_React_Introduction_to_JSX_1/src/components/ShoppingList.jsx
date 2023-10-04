import React from "react";

function ShoppingList({shirts=0, pants=0, website="example.com"}) {
    return (
    <>
    <p className="paragraph">
        Purchased {shirts} shirts and {pants} pants for a total 
        of {shirts + pants} items
    </p>
    <a href={website}>Website</a>
    </>
    )
}

export default ShoppingList;