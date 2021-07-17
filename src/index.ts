import { User } from './models/User';

const user = new User({ name: 'Robbert', age: 36 });

user.on('change', () => {
  console.log('c1');
});
user.on('change', () => {
  console.log('c2');
});
user.on('asdf', () => {
  console.log('this is a test');
});

user.trigger('asdf');
