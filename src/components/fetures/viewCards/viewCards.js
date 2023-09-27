import React from "react";
import { Link } from "react-router-dom";
import './viewCard.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ViewCard = (props) => {
    return (
        <Card>
            <Card.Img className='imgStyle' variant="top" src="/images/img.JFIF" />
            <Card.Body>
                <Card.Title>Food ID - {props.data.fdcId}</Card.Title>
                <Card.Text>
                    {props.data.description}
                </Card.Text>
                <Link  to={`/detailView/${props.data.fdcId}`}>
                    <Button className='btn-success' variant="primary">View Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}
export default ViewCard;