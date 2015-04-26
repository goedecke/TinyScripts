db.people.find(
{
  "name": {$regex:".*fis"}
},
{name:1});

db.people.find(
{
  "name": {$regex:".*Fis"}
},
{name:1});