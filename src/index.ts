import { User } from "./models/User";

const user = new User({name: "Dawid", age: 31});
console.log(user.get('name'));
console.log(user.get('age'));