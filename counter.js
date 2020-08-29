let posCounter = () => {
  let increaseByOne = document.getElementById('plusAndMinus').innerHTML;
  increaseByOne++;
  document.getElementById('plusAndMinus').innerHTML = increaseByOne;
}

let negCounter = () => {
  let decreaseByOne = document.getElementById('plusAndMinus').innerHTML;
  decreaseByOne--;
  document.getElementById('plusAndMinus').innerHTML = decreaseByOne;
}

