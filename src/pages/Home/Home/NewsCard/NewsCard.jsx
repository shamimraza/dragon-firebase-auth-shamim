import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaShareAlt } from 'react-icons/fa';
import Rating from 'react-rating';


const NewsCard = ({ news }) => {
  // console.log(news);
  const { _id, details, Title, image_url, author, rating, total_view } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className='d-flex align-items-center'>
          <Image style={{height: '40px'}} src={author?.img} roundedCircle />
          <div className='ps-2 flex-grow-1'>
            <p>{author?.name}</p>
            <p><small>{moment().subtract(10, 'days').calendar()}</small></p>
          </div>
          <div>
            <FaBookmark></FaBookmark> <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? <>{details}</> :
              <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className='flex-grow-1'>
            <Rating><Rating
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
            /></Rating>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;