var reduce = function(keys,values)
{
    var reduced =
    {
        totalPeople:0,
        totalAge:0
    };

    for (var i=0; i < values.length;i++)
    {
        reduced.totalPeople+=values[i].totalPeople;
        reduced.totalAge+=values[i].totalAge;
    }
    
    return reduced;
};
