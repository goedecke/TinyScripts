db.people.find(
  {
    tags:
    {
      $in:["laborum","sunt","nisi"]
    }
  },
{tags:{$slice:[2,3]},name:1});