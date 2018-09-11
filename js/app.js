//Getting a username - if the user hits enter without typing anything, it's an empty string;
// if they hit cancel, it's a null value. Repeat this cycle until there's valid input.
var username = '';
while(username === '' || username === null){
  username = prompt('Hello there! Please tell me your name.');
  if(username === ''){
    console.log('User failed to enter a name');
    alert('I must insist you enter something for your name.');
  }
  else if(username === null){
    console.log('User attempted to exit the username prompt');
    alert('Please don\'t exit this prompt. I would like to know your name!');
  }
  else{
    console.log('User successfully entered a name - ' + username);
    alert('Nice to meet you, ' + username + '! Let\'s take a quick quiz about me!');
  }
}

// Trying to avoid hard-coding the number of questions this quiz asks...
var correctAnswers = 0;
var incorrectAnswers = 0;

// Reconfigure this into a general function? correct answer is NO
var ageResponse = '';
while(ageResponse === '' || ageResponse === null){
  ageResponse = prompt('Am I currently 24 years old?');
  if(ageResponse === null){
    console.log('User input resulted in null - likely hit close');
    alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
  }
  else{
    ageResponse = ageResponse.toUpperCase();
    if(ageResponse === 'Y' || ageResponse === 'YES'){
      console.log('User incorrectly responded ' + ageResponse + '. Was expecting N or NO');
      alert('I\'m sorry, that\'s not correct. Unless my birth certificate is wrong, I\'m at least 25!');
      incorrectAnswers++;
    }
    else if(ageResponse === 'N' || ageResponse === 'NO'){
      console.log('User correctly responded ' + ageResponse);
      alert('That is correct!');
      correctAnswers++;
    }
    else{
      console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + ageResponse);
      alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
      ageResponse = '';
    }
  }
}

// Reconfigure this into a general function? correct answer is YES
var brotherResponse = '';
while(brotherResponse === '' || brotherResponse === null){
  brotherResponse = prompt('Do I only have one brother?');
  if(brotherResponse === null){
    console.log('User input resulted in null - likely hit close');
    alert('I\'m sorry, I didn\'t quite understand that response. Can you try again?');
  }
  else{
    brotherResponse = brotherResponse.toUpperCase();
    if(brotherResponse === 'N' || brotherResponse === 'NO'){
      console.log('User incorrectly responded ' + brotherResponse + '. Was expecting Y or YES');
      alert('I\'m sorry, that\'s not correct. Unless my parents aren\'t being truthful, I only have one brother.');
      incorrectAnswers++;
    }
    else if(brotherResponse === 'Y' || brotherResponse === 'YES'){
      console.log('User correctly responded ' + brotherResponse);
      alert('That is correct!');
      correctAnswers++;
    }
    else{
      console.log('User provided input outside of expected [Y,N,YES,NO] - was ' + brotherResponse);
      alert('I\'m sorry, I didn\'t quite catch that. Can you respond with either yes, no, y, or n?');
      brotherResponse = '';
    }
  }
}

// Give slightly different messages based on if they answered at least half of the questions correctly.
if(correctAnswers >= incorrectAnswers){
  alert('Congratulations! You got ' + correctAnswers + ' out of ' + (correctAnswers+incorrectAnswers) + ' questions right!');
}
else{
  alert('Oof, you only got ' + correctAnswers + ' out of ' + (correctAnswers+incorrectAnswers) + ' questions right. Better luck next time.');
}
