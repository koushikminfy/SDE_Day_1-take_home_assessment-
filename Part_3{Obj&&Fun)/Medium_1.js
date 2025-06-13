const user = {
  name: "Byrapuneni Venkata Kowshik",
  email: "koushikbyrapuneni@gmail.com",
  age: 20
};

function printUserDetails({ name, email, age }) {
  console.log(`User's name is ${name}, and He is ${age} years old.`);
}
printUserDetails(user);
