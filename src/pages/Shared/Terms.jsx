import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse fuga rerum laborum libero quo error voluptates eaque sapiente harum saepe?</p>
            <p>go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;