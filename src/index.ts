import { User } from './models/User';

const user = new User({ name: 'Rob', age: 36 });

// how this works on in js
console.log(user.get('name'));

user.on('change', () => {
  console.log('user was changed');
});

user.set({ name: 'Same Name' });
console.log(user.get('name'));
