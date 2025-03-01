import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
generateDomains()
};
const generateDomains = ()=>{
  let first = ["pen", "soup", "duck", "coffee", "robot"]
  let second = ["island", "room", "cheese", "lilo", "stitch"]
  let third = [".com", ".edu", ".net" , ".org", ".uk"]

  for (let i = 0; i < first.length; i++){
    for (let j = 0; j < second.length; j++){
      for (let k = 0; k < third.length; k++){
        console.log(first[i] + second[j] + third[k])
      }
    }
  }
}
