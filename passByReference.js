let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy = spaceship => {
    spaceship['Fuel Type'] = 'avocado oil';
  };
  
  let remotelyDisable = spaceship => {
   spaceship.disabled = true;
  };
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship)