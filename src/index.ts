import { User } from './models/User';

const user = new User({ name: 'Robbert', age: 36 });

console.log(user.get('name'));

user.set({ name: 'Rob' });

console.log(user.get('name'));
console.log(user.get('age'));
