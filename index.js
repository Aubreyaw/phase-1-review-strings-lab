const currentUser = 'Grace Hopper'
//define currentUser

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
// variable (welcomeMessage) = value (`Welcome to Flatbook, ${currentUser}!`)
// value contains TEMPLATE LITERAL ${currentUser} to DYNAMICALLY INTERPOLATE the value of currentUser into the welcomeMessage string
 
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// variable (excitedWelcomeMessage) = value of (welcomeMessage) DYNAMICALLY converted to be in all upper-case letters, 
// by reusing (welcomeMessage) and adding .toUppercase() rather than writing all new code. DON'T FORGET PARENTHESES()

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
// variable (shortGreeting) = 'Welcome!' with (currentUser) INTERPOLATED - ${currentUser} into the value string of (shortGreeting).
// Furthermore, using the STRING METHOD .slice() to isolate and return only specific characters in the string. 
// INTERPOLATE - ${} + value - curentUser - ${curentUser} + isolated characters using .slice() = ${curentUser.slice(0,1)} - DON'T FORGET PARENTHESES IN - .slice()
