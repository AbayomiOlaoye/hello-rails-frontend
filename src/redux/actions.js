/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { baseUrl } from './baseUrl';

export const FETCH_RANDOM_GREETING = 'FETCH_RANDOM_GREETING';

export const fetchRandomGreeting = () => async (dispatch) => {
  const response = await axios.get(`${baseUrl}api/v1/greetings`);
  dispatch({
    type: FETCH_RANDOM_GREETING,
    payload: response.data.greeting,
  });
  return response;
};
