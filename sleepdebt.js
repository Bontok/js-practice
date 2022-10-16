const getSleepHours = day =>
{
  if (day === 'Monday')
  {
    return 8;
  }
  else if ( day === 'Martes')
  {
    return 6;
  }
  else if ( day === 'Miercoles')
  {
    return 5;
  }
  else if ( day === 'Jueves')
  {
    return 7;
  }
  else if ( day === 'Viernes')
  {
    return 4;
  }
  else if ( day === 'Sábado')
  {
    return 6;
  }
  else if ( day === 'domingo')
  {
    return 8;
  }
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Martes') + getSleepHours('Miercoles') + getSleepHours('Jueves') + getSleepHours('Viernes') + getSleepHours('Sábado') + getSleepHours('domingo');
 
const getIdealSleepHours = () => 
{
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () =>
{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours)
  {
    return 'Ha dormido la cantidad justa de horas ';
  }
  else if (actualSleepHours > idealSleepHours)
  {
    return 'Eres un dormilón puedes dormir menos';
  }
  else if (actualSleepHours < idealSleepHours)
  {
    return 'Tomate un respiro y decansa más te faltan : ' + (idealSleepHours - actualSleepHours) + ' horas de sueño esta semana';
  }
}

console.log(calculateSleepDebt());