import React from "react";

function Product({ spanText, imageSource, imageAlt, productName, price}) {
    return (
        <article>
            <span>{spanText}</span>
            <img src={imageSource} alt={imageAlt} />
            <p>{productName}</p>
            <h4>€{price},-</h4>
        </article>
    );
}

export default Product;