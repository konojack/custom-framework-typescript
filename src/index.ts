import { Collection } from './models/Collection';
const collection = new Collection('http://localhost:3000/users');

collection.on('change', () => {
  console.log(
    '🚀 ~ file: index.ts ~ line 5 ~ collection.on ~ collection',
    collection
  );
});

collection.fetch();
