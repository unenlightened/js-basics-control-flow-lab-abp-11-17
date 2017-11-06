// Write your code in this file!
const customerFeet = 150;
const customerCity = 'Houston';
const customerTip = 'generous';

function scuberGreetingForFeet(customerFeet){
  if (customerFeet<=400){
    return 'This one is on me!';
  } else if (customerFeet>2000 && customerFeet<2500){
    return  'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(customerCity){
  return customerCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(customerTip){
  switch (customerTip) {
  case customerTip === 'generous':
    return 'Thank you so much.'
    break;
  case customerTip === 'not as generous' 0:
    return 'Thank you.'
    break;
  default:
    return 'Bye.'   //Cheapskate!
    break;
}
}
