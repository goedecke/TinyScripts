db.people.find(
  {
    age:{$lt:30}
  },
  {
    name:1,
    age:1
  }
);