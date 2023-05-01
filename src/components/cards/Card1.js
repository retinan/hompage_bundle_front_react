import React from 'react';
import {Button, Card} from "react-bootstrap";

const Card1 = ({img}) => {
    return (
        <Card className="w-100 my-2">
            <div className={"bg-common"} style={{height:"16em", backgroundImage:`url(${img})`}}>
                {/*<Card.Img variant="top" src={img} />*/}
            </div>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="py-2">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Card1;