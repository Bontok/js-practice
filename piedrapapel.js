const getUserChoice = userInput => 
{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
  {
    return userInput;
    }
    else
    {
 console.log('Error de selección');
}
};
const getComputerChoice = () => 
{
  const randomNumber = Math.floor(Math.random () * 3);
  switch (randomNumber)
  {
    case 0:
    return  'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
};

//onsole.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) =>
{
  if (userChoice === computerChoice){
    return 'Empate';
  }
  else if (userChoice === 'rock' && computerChoice === 'paper' ){
    return 'Computer Won';
  }
  else if (userChoice === 'scissors' && computerChoice === 'rock' ){
    return 'Computer Won';
  }
  else if (userChoice === 'paper' && computerChoice === 'scissors' ){
    return 'Computer Won';
  }
  else
  {
    return 'You Won!!'
  }
};


const playGame = () =>
{
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log(`Tu selección ${userChoice}`);
  console.log(`Computadora ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();