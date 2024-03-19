'use strict';

function calcAge(age) {
  let ageInDays;
  ageInDays = age * 365;

  return ageInDays;
}

console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge('20'));

describe('calculate age to days', () => {
  test('multiply 65 years with 365 days equals to 23725', () => {
    expect(calcAge(65)).toEqual(23725);
  });

	 test('multiply 0 years with 365 days equals to 0', () => {
    expect(calcAge(0)).toEqual(0);
  });

		 test('multiply "20" years with 365 days equals to 7300', () => {
    expect(calcAge('20')).toEqual(7300);
  });
});
