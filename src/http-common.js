import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://murmuring-castle-44317.herokuapp.com:8081/',
  headers: {
    'Content-type': 'application/json',
  },
});
