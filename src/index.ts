import { User } from './models/User';

const user = new User({ name: 'Rob', age: 36 });

user.on('change', () => {
  console.log('user was changed');
});
