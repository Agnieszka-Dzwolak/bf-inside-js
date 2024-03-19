'use strict';

function sortDrinkByPrice(drinks) {
  drinks.sort((a, b) => a.price - b.price);
  return drinks;
}

let drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]

console.log(sortDrinkByPrice(drinks));

describe('sorting drinks with the price in ascending order', () => {
  test('sort price: 50 and price: 10 in ascending order', () => {
    drinks = [
      {name: "lemonade", price: 50},
      {name: "lime", price: 10}
    ];
    expect(sortDrinkByPrice(drinks)).toEqual([
      {name: "lime", price: 10},
      {name: "lemonade", price: 50}
    ]);
  });

  test('drinks is an empty array', () => {
    drinks = [];
    expect(sortDrinkByPrice(drinks)).toEqual([]);
  });

  test('sort an array with more drinks', () => {
    drinks = [
      {name: "lemonade", price: 40},
      {name: "lime", price: 20},
      {name: "apple juice", price: 5}
    ];
    expect(sortDrinkByPrice(drinks)).toEqual([
      {name: "apple juice", price: 5},
      {name: "lime", price: 20},
      {name: "lemonade", price: 40}
    ]);
  });

});
