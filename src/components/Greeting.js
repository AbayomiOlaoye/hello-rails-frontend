/* eslint-disable import/no-extraneous-dependencies */
import { AiFillDashboard } from 'react-icons/ai';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  const handleClick = () => dispatch(fetchRandomGreeting());

  return (
    <div className="container">
      <h1>
        Hooray!!!
        {' '}
        <AiFillDashboard />
      </h1>
      <Card style={{ width: '28rem' }} className="card">
        <Card.Body>
          <Card.Title className="text-muted">I have some nice greetings for you</Card.Title>
          <Card.Text className="text">
            {greeting}
          </Card.Text>
          <Button className="p-2" variant="primary" onClick={handleClick}>Click me for a random greeting</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Greeting;
