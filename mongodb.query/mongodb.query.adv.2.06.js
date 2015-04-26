db.people.find(
{
  tags:
  {
      $in:["laborum","sunt","nisi"]
  }
},
{"tags.$":1,name:1});