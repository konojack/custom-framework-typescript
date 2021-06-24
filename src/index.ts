import axios from 'axios';
import { User } from './models/User';

const user = new User({ name: 'Dawid', age: 23 });
console.log(user.get('name'));
