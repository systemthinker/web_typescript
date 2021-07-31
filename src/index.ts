import { User } from './models/User';

const user = new User({ name: 'Rob', age: 36 });

user.attributes.get('id');
user.attributes.get('name');
user.attributes.get('age');
