//Response is the final message, built incrementally with concatenation based off of answers
var response = '';
//Basic setup for for each question - ask question,
// log response in console, respond in an alert
var username = prompt('What is your name?');
console.log('Username is ' + username);
alert('Nice to meet you, ' + username + '.');

var userLocation = prompt('Where do you hail from?');
console.log(username + ' is originally from ' + userLocation);
alert(userLocation + ' seems like a nice place.');

var favColor = prompt('What is your favorite color?');
console.log(username + '\'s favorite color is ' + favColor);
alert('Neat! I like ' + favColor.toLowerCase() + ' too.');

var enjoyCode = prompt('Are you enjoying Code 201 so far? I would appreciate a yes or no answer.'); //Probably should cast this to a boolean value
console.log(username + ' responded ' + enjoyCode);
alert('I see you answered ' + enjoyCode.toLowerCase() + ' to that question.');

//Normalizing variables that are used for branching logic
var normalizedName = username.toUpperCase();
var normalizedEnjoyCode = enjoyCode.toLowerCase();

/*Being silly here, cutting the final response if I'm responding. Could be expanded to track who's already added input eventually.*/
if(normalizedName === 'BLAISE'){
  response = 'Oh hey,  it\'s ' + username + '! Welcome back!';
}
/*For everyone else, give a final, gradually built response
  with appropriate reactions to input*/
else{
  response = 'Hi there ' + username + ', previously from ' + userLocation + '! ';
  response = response + 'I agree, ' + favColor.toLowerCase() + ' is such a pretty color. ';
  if(normalizedEnjoyCode === 'yes'){
    response = response + 'I\'m glad you\'re enjoying the class! Have a great day.';
  }
  else if(normalizedEnjoyCode === 'no'){
    response = response + 'I\'m sorry to hear that you\'re not enjoying the class. Hopefully you\'ll enjoy later classes.';
  }
  else{
    response = response + 'Unfortunately, I\'m only able to parse "yes" or "no" answers, so I\'m not sure if you\'re having fun at the moment.';
  }
}
alert(response);
console.log(response);
