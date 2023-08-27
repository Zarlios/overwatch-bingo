import React from "react";
import { Col } from "react-bootstrap";
import "../style/cell.css"

function Cell({row, column, data}) {
    const { image } = data || {};
    return (
       <Col className="cell">
        {(row === 2 && column === 2) ? (
            <div>Free</div>
        ) : (
           <div><img src={image} /></div>)}
       </Col>
    )
}

export default Cell