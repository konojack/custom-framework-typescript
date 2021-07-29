import axios from 'axios';
import { User } from './models/User';

const user = User.buildUser({ id: 2, name: 'Dawid', age: 23 });
console.log(user.get('name'));
console.log(user.getAll());
