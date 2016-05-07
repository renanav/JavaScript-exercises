// In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
//
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
//
// Cards         --> Count Change
// 2, 3, 4, 5, 6 --> +1
// 7, 8, 9 --> 0
// 10, 'J', 'Q', 'K','A' --> -1
// The function will receive a card parameter and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. The current count and the player's decision


var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    // if any of the cards above shows up, it will ADD one point the `count` variable
      count += 1;
      break;

    case 7:
    case 8:
    case 9:
    // if any of the cards above shows up, it will have no effect on the point value of `count` variable
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    // if any of the cards above shows up, it will DEDUCT one point the `count` variable
      count -= 1;
  }
    // if the total value of `count` is greater than zero the player with receive an outoput of the current points value and a recommendation to Bet Otherwise, a value will be showed plus a recommendation to "Hold"
      if (count>0){
        return count + " Bet";
      }
        return count + " Hold";
  }

// Add/remove calls to test your function.
cc(2); cc(3); cc(7); cc('K'); cc('A');
