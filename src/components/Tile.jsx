import React from "react";

function Tile({ containsImage, imageSource, imageAlt, tileHeading, children}) {
    if (containsImage === true) {
        return (
            <section>
                <img src={imageSource} alt={imageAlt}/>
            </section>
        );
    } else if (containsImage === false) {
        return (
            <section>
                <h2>{tileHeading}</h2>
                {children}
            </section>
        );
    }
}

export default Tile;