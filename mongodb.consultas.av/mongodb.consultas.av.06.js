db.people.find(
  {
    company:{$exists:true}
  },
  {
    name:1,
    age:1,
    company:1
  }
);