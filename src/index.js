import '../src/styles/index.scss'

const user = {
    name: "shubham",
    age: 23,
    city: "Moradabad"
};

const updatedUser = {
    ...user,
    city: "Gurugram",
    state: "Haryana"
}

console.log("user", user);
console.log("updatedUser", updatedUser);