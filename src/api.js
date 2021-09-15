import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/vZktZ3MzbMpqwTxxtoa1bcvnrMupcIKm',
});
const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
