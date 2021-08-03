import { User } from './models/User';
const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(
    '🚀 ~ file: index.ts ~ line 5 ~ collection.on ~ collection',
    collection
  );
});

collection.fetch();
