function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!"
  } else if (feet > 400 && feet < 2000) {
    return "That will be twenty bucks."
  } else if (feet > 2500) {
    return "No can do."
  } else {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(city) {
  // city === "NYC" ? ("Ok, sounds good.") : ("No go.");
  if (city === "NYC") {
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }
}