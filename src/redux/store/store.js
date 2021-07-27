import { createStore } from 'redux';
import clientList from '../reducers/clientList';

const store = createStore(clientList);

export default store;
