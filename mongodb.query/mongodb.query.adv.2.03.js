db.people.find(
{
  tags:
  {
    $in:["laborum","sunt","nisi"]
  }
},
{name:1,tags:1});