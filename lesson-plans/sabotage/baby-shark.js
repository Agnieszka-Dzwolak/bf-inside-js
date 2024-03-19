'use strict';

let animals = ['Baby Shark', 'Mommy Shark', 'Daddy Shark', 'Grandma Shark', 'Grandpa Shark'];

function singBabyShark() {
  let song = '';
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < 3; j++) {
    song += animals[i] + ", doo-doo, doo-doo, doo-doo\n";
    }
    song += animals[i] + "\n";
  }
  return song;
}

console.log(singBabyShark());
