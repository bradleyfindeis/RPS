/* keep track of wins, losses, & ties
remember this is only going to be until the user refreshes the browser. We don't have anything fetching from or posting to a database yet!
Use images to make a choice
hint: you can listen for the click event on any HTML element!
Be able to start a new game without refreshing
Track the percentage of times the user has won/lost / tied
Color a win differently than a loss so it is easy to tell if the user won.
hint: add and remove classes: http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript (Links to an external site.) */

var computer = null;
var choice = null;
var tied = 'You tied'
var won = 'You won!'
var lost = 'You lost... bummer'

function startGame(e) {
    var choice = e.target.id
    generate()
    console.log(choice)
    console.log(computer, choice)
    console.log(logic(computer, choice))
  
}
  
  var choices = document.getElementsByClassName('choice')
  for (var i in choices) {
    try {
      choices[i].addEventListener('click', startGame)
    } catch(err) {
      //First load
    }
  }
  function generate() {
      computer = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)]
  }


 function logic(computer, choice) {
   switch (choice) { 

    case "Rock":
        if (computer === 'Rock') {
            alert(tied) ;
            break;
        } else if (computer === 'Paper') {
            alert(lost) ;
            break;
        } else {
            alert(won) ;
            break;
        }
    case "Paper":
    if (computer === 'Rock') {
        alert(won) ;
        break;
    } else if (computer === 'Paper') {
        alert(tied) ;
        break;
    } else {
        alert(lost) ;
        break;
    }
    case "Scissors":
    if (computer === 'Rock') {
        alert(lost) ;
        break;
    } else if (computer === 'Paper') {
        alert(won) ;
        break;
    } else {
        alert(tied) ;
        break;
    }
  } 
 }


