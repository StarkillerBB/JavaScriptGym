let suits = ["hearts", "spades", "clubs", "diamonds"];
let ranks = ["ez", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let kortspil = new Array();

var players = {
    player1:{handCount: 0},
    player2:{handCount: 0},
}


function CreateDeck(){

    kortspil = new Array();

    for (let i = 0; i < ranks.length; i++) {

        for (let z = 0; z < suits.length; z++) {
            let cardValues = parseInt(ranks[i]);
            if (ranks[i] == "J" || ranks[i] == "Q" || ranks[i] == "K") {
                cardValues = 10;
            }
            if (ranks[i] == "ez"){
                if (players.handCount >= 11) {
                    cardValues = 1
                }
                else{
                    cardValues = 11
                }
            }
            let card = {Rank: ranks[i], Suit: suits[i], CardValues: cardValue};
            
            kortspil.push(card)
            
        }
        
    }
    
}
