const plantNeedsWater = function (day)
{
  if (day === 'Wednesday')
    return true;
    else
    return false;
}
const waterCheck = plantNeedsWater ('Tuesday');
console.log(waterCheck);

const plantNeedsWate2 = day => day === 'Wednesday' ? true : false;
