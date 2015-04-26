db.people.find(
  {
    age:{$not:{$gt:30}}
  }
);