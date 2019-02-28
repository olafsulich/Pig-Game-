/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

 var scores,roundScore,activePlayer,gamePlaying;
 init();

//dice = Math.floor(Math.random() * 6) + 1; // Random number

//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' activePlayer).innerHTML = '<em>' + dice '</em>';


//var x = document.querySelector('#score-0').textContent; // Wyciągnięcie clasy



document.querySelector('.btn-roll').addEventListener('click', function(){ // Funkcja przycisku
      
      if(gamePlaying){
          
     //1. Random number

      var dice = Math.floor(Math.random() * 6) + 1;

     //2. Display the result 

     var diceDom = document.querySelector('.dice');
     diceDom.style.display = 'block';
     diceDom.src = 'dice-' + dice + '.png';

     //3.Update the round score IF rhe rolled number was NOT one

     if(dice !== 1) {
         // Add score
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;

     }else {
        
        nextPlayer();
     
                 } 
      }

     
});

 document.querySelector('.btn-hold').addEventListener('click',function(){
     
    if(gamePlaying){//Add CURRENT SCORE to GLOBAL SCORE + USTAWIAMY GRE NA AKTYWNA

        scores[activePlayer] += roundScore;
        
   
   
   
        // Update interface
   
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //Chech if player won the game
   
          if(scores[activePlayer] >= 100) {
              document.querySelector('#name-' + activePlayer).textContent = 'Winner!'; // Jeżeli player przekroczy 100 pk zmieni się napis na winner
              document.querySelector('.dice').style.display = 'none'; // Schowanie klasy gdy mamy powyzej 100 pkt
              document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // Dodanie klasy winner
              document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // Usunięcie klasy active
              gamePlaying = false; // gra nie jest juz akywna
          }else {
              nextPlayer(); // wywołanie funkcji na zmiane playera
          }
        }  
    });


function nextPlayer(){
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;// Prostsza wersja zmiany playera
    
    /*if(activePlayer === 0){ // Normalne If 

       activePlayer=1;

    }else {
        activePlayer=0;
    }
*/

   roundScore=0;


   document.getElementById('current-0').textContent = '0'; // Ustawienie dla playerów wyniku zero 
   document.getElementById('current-1').textContent = '0';


   //document.querySelector('.player-0-panel').classList.remove('active'); // Usunięcie klasy active z 1 playera (wygląd css )
   //document.querySelector('.player-1-panel').classList.add('active'); // Dodanie klasy active dla 2 playera ( wygląd css)

   document.querySelector('.player-0-panel').classList.toggle('active'); // Usunięcie lub dodanie  klasy active z 1 playera (wygląd css )
   document.querySelector('.player-1-panel').classList.toggle('active'); // Dodanie klasy lub usunięcie  active dla 2 playera ( wygląd css)

   // Usunięcie dice przy zmianie playera

   document.querySelector('.dice').style.display = 'none';
}



   document.querySelector('.btn-new').addEventListener('click', init);



function init(){  // Gdy clickamy new game co ma sie wydarzyć: 
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'; // Ustawienie id na display;none

    document.getElementById('score-0').textContent = '0'; // Ustawienie wartości (teksu z html) na 0 
    document.getElementById('score-1').textContent = '0'; // Ustawienie wartości (teksu z html) na 0 
    document.getElementById('current-0').textContent = '0'; // Ustawienie wartości (teksu z html) na 0 
    document.getElementById('current-1').textContent = '0'; // Ustawienie wartości (teksu z html) na 0 
    document.getElementById('name-0').textContent = 'Player 1'; // Ustawienie znowu nazw zamiast winner to player 1 & 2
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}






