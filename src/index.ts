import { User } from './models/User';

const user = new User({ name: 'Rob', age: 36 });
user.save();
user.events.on('change', () => {
  console.log('works');
});

user.events.trigger('change');
