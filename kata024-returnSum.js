// ************************************************************************************
// https://www.codewars.com/kata/55f73be6e12baaa5900000d4
// Description: Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions.
// Complete the goals function to return his total goals (the sum) for all three leagues.

// Note: the parameter for this function will always be a valid number.

// Ex:
// goals(5,10,2) == 5+10+2 = 17 between 0 and 100. Theres is no need to check for negative values or values greater than 100.esired Principal 'D' is always greater than the initial principal, however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
// ************************************************************************************


//////// my solution: ////////
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//////// the best solution: ////////
// const goals = (...a) => a.reduce((s, v) => s + v, 0);
