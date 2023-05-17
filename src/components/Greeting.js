/* eslint-disable import/no-extraneous-dependencies */
import { AiFillDashboard } from 'react-icons/ai';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  console.log(greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>
        Hooray!!!
        {' '}
        <AiFillDashboard />
      </h1>
      <Card style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card&#39;s content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Greeting;
