db.people.find(
  {
    age:{$in:[25,30,35]}
  },
  {
    name:1,
    age:1
  }
);