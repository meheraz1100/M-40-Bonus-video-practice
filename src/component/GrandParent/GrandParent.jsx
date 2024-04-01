import React, { useState } from "react";
import Parent from "../Parent/Parent";

const GrandParent = () => {
    const [property, setProperty] = useState(100)
    return (
        <div>
            <h1>Grand Parent</h1>
            <Parent property={property}></Parent>
        </div>
    );
};

export default GrandParent;