const team = {
    _players: [
      {firstName: 'Leo', lastName: 'Messi', age: 36},
      {firstName: 'Diego', lastName: 'Maradona', age: 60},
      {firstName: 'Guido', lastName: 'Runina', age: 25}
      ],
    _games: [
      {opponent: 'River', teamPoints: 15, opponentPoints: 5},
      {opponent: 'Boca', teamPoints: 5, opponentPoints: 10},
      {opponent: 'Racing', teamPoints: 10, opponentPoints: 15}
    ],
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
  addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
  addGame(newOpponent, newTeamPoints, newPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newPoints,
   };
   this.games.push(game);
  }
  };
  team.addPlayer('Riquelme', 'Fernando', 90);
  team.addGame('Moron', 100, 98);
  console.log(team.players);
  console.log(team.games);
  