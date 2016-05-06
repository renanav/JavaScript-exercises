// In the game of golf each hole has a `par` for the average number of `strokes` needed to sink the ball. Depending on how far above or below par your strokes are, there is a different nickname.
// The function will pass par and strokes arguments and return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

function golfScore(par, strokes) {

  if (strokes==1){
    return "Hole-in-one!";
  }

  else if (strokes <= par-2){
    return "Eagle";
  }

  else if (strokes == par-1){
    return "Birdie";
  }

  else if (strokes == par){
    return "Par";
  }

  else if (strokes == par+1){
    return "Bogey";
  }

  else if (strokes == par+2){
    return "Double Bogey";
  }

  else if (strokes >= par+3){
    return "Go Home!";
  }

  return "Change Me";
}

// Change these values to test
golfScore(5, 4);
