db.people.find(
{
  tags:
  {
    $nin:["laborum","sunt","nisi"]
  }
},
{name:1,tags:1}); 