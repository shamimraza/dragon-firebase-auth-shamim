import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGofore, FaGithub, FaFacebook , FaTwitter, FaInstagram} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Qzon from '../Qzone/Qzon';
import bg from "../../../assets/bg.png"

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-2' variant="outline-primary"><FaGofore /> Login with google</Button>
            <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
            <div>
                <h4 className='mt-5'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='ml-2'></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzon></Qzon>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>

    );
};

export default RightNav;