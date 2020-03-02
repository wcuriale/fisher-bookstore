import React from "react";
import { Card } from "react-bootstrap";

export function AuthorCard(props) {
    return(
        <Card style ={{ width:  "16em" }}>
            <Card.Body>
                <Card.Title> {props.author.author}</Card.Title>
            </Card.Body>
        </Card>
    );
}
