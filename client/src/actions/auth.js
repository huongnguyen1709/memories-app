import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { AUTH } from '../constants/actionTypes';

export const createOrGetUser = (response) => async (dispatch) => {
  try {
    const decoded = jwt_decode(response.credential);
    const { name, picture, sub } = decoded;
    console.log(decoded);
    dispatch({
      type: AUTH,
      data: decoded,
    });
  } catch (error) {
    console.log(error);
  }
};
