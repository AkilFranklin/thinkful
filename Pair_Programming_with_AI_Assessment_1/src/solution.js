/*
  Write each function according to the instructions.
  
  When a function's parameters reference `games`, it references an object that looks like the one that follows.
  {
    "Magic The Gathering Arena": { wins: 44, lost: 99 },
    "Black Jack": { wins: 34, lost: 29 }
  }
*/


/* Use an AI assistant to debug the following function */
function getTotalWins(games) {
  let totalWins = 0;

  for (let key in games) {
    totalWins += games[key].wins;
  }

  return totalWins;
}

/* Use an AI assistant to help you write the following function */
function printWinLossStatus(games) {
  const statuses = [];
if (!games) {
  return statuses;
}
  for (let key in games) {
    if (games[key].wins > games[key].lost) {
      statuses.push("has more wins")
    } else if (games[key].wins < games[key].lost) {
      statuses.push("has more losses")
    } else {
      statuses.push("has the same number of wins and losses")
    }
  };
  
  return statuses;
 }

module.exports = {
  getTotalWins,
  printWinLossStatus,
};
