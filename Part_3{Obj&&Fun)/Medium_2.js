const users = [
  { id: 10, username: 'jai' },
  { id: 25, username: 'lava' },
  { id: 20, username: 'kusa' }
];


const foundUser = users.find(function(user) {
  return user.id === 20;
});

console.log(foundUser);
