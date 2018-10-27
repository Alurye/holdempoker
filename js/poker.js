let playerId = 1;
const handsDealt = [];
const players = [];
const muckPile = [];
const highCards = [];
const communityCards = [];
const cardRef = {2: 2,
                3:3,
                4:4,
                5:5,
                6:6,
                7: 7,
                8: 8,
                9: 9,
                1: 10,
                "J": 11,
                "Q": 12,
                "K": 13,
                "A": 14}

class Player {
    constructor(name){
      this.id = playerId++;
      this.name = name;
      this.hand = [];
      this.buyIn = 0;
      this.chipCount = 0;
      this.position = null;
      this.bigBlind = false;
      this.smallBlind = false;
      this.dealerButton = false;
      this.highCard = null;
      players.push(this);

    }

    raise(){

    }

    check() {

    }

    call(){

    }

    fold(){

    }
}

let arturo = new Player('Arturo');
let jon = new Player('Jon');
let helen = new Player('Helen');
let igor = new Player('Igor');
let jeff = new Player('Jeff');
// console.log('players', players.length);

function buildDeck() {
  const deck = [];
  const suits = ["s","h","c","d"];
  const cards = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

      suits.forEach((suit) => {
          return cards.forEach((card) => {
              return deck.push(card + suit);
           }) ;
      });
return deck;
}
function randomCard() {
  return Math.floor(Math.random() * (deck.length));

}

// take an array of items

function shuffleDeck() {
      const shuffledDeck = [];
        // console.log('hi',  blah, blah.length,);
          //  console.log(blah.splice(randomCard(),1)[0]);
              while(deck.length !== 0) {
                  // console.log(deck.length);
                 shuffledDeck.push(deck.splice(randomCard(),1)[0]);
              }

            return shuffledDeck;

}

function dealHand(){
      const hand = [];
     while (hand.length < 2) {

             hand.push(shuffledDeck.pop());
          //   const randoCard = deck[randomCard()];
          //   const dealtCard = deck.find((card,i) => {
          //        if (card === randoCard) {
          //          return deck.splice(i,1)[0];
          //        }
          //   });

          //   deck.push(dealtCard);
          //  hand.push(deck.pop());
         }
                    //  console.log(deck.length)

      return hand;

}

function dealToPlayers(){

  if (players.length !== 0) {
     return players.map((player) => {
      //  console.log(deck.length);
            return player.hand = dealHand();
              // player.hand.push(dealHand());
        });
  }
}

function dealForHighCard(){
   return players.map((player,i,arr) => {
                      // console.log(shuffledDeck)
                  //  return player.highCard = deck[randomCard()];

              return player.highCard = shuffledDeck.pop();
        // console.log(player.highCard)
    });
}

function checkForDealerButton(){
        const cardH = {};
       players.forEach((player) => {
             highCards.push(player.highCard);
      });
      //  console.log(highCards);

let sortedHighCards = highCards.map((card,i,arr) => {
                // console.log(card);
         cardH[cardRef[card[0]]] = card
        //  console.log(cardH);
         return cardRef[card[0]];

}).sort((a,b) => {
    return b - a;
}).map((key,i) => {
    return cardH[key];
});
// console.log(sortedHighCards);
}
//  console.log(players);

function dealFlop() {
  let i = 0;
        while (communityCards.length < 3) {
              communityCards.push(shuffledDeck.pop());
              i++
        }
        return communityCards;

    console.log(shuffledDeck);
}

function dealTurn(){
  let i = 0;
  while (communityCards.length < 4) {
      communityCards.push(shuffledDeck.pop());
              i++;
  }
          return communityCards;

}

function dealRiver(){
  let i = 0;
  while (communityCards.length < 5) {
      communityCards.push(shuffledDeck.pop());
              i++;
  }
          return communityCards;

}



function startGame(){
    dealForHighCard();
    // console.log(players);
    checkForDealerButton();
    dealToPlayers();
}

const deck = buildDeck();
const shuffledDeck = shuffleDeck();
// console.log(shuffledDeck, shuffledDeck.length);

startGame();


console.log(players);
// dealHand();
// dealFlop();
// dealTurn();
// dealRiver();
  // console.log(deck.length);






// console.log(cardH);
// console.log(Object.keys(cardH));
// console.log(deck.length);
