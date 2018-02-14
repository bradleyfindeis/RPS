/*User selects rock, paper, or scissors
Computer randomly chooses
hint: have your choices in an array and randomly choose 
Display the user and computers choice on the screen
Display the winner */
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
            return tied
        } else if (computer === 'Paper') {
            return lost
        } else {
            return won
        }
    case "Paper":
    if (computer === 'Rock') {
        return won
    } else if (computer === 'Paper') {
        return tied
    } else {
        return lost
    }
    case "Scissors":
    if (computer === 'Rock') {
        return lost
    } else if (computer === 'Paper') {
        return won
    } else {
        return tied
    }
  }
    
 }
  

  

  /*compare computer to user */
  


