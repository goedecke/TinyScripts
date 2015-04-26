db.people.find(
{
  "name": {$regex:".*fis", $options:"i"}
},
{name:1});