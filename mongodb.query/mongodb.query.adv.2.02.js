db.people.find(
{
  tags:
  {
    $all:["laborum","sunt"]
  }
},
{name:1,tags:1});