import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsites from './EditorsInsites/EditorsInsites';

const News = () => {
    const news = useLoaderData();
    const { _id, details, Title, image_url, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
        <EditorsInsites></EditorsInsites>
        </div>
    );
};

export default News;