/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let value = 0;
  let aces = 0;

  for (i in hand){
    let card = hand[i];
    if (card === "J" || card === "Q" || card === "K") {
      value += 10;
    } else if (card === "A") {
      aces ++;
      value += 11;
    } else {
      value += parseInt(card, 10);
    }
  }

  if (value > 21) {
    value -= aces * 10;
  }
  return value;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
