'use strict';
const { decodeROT13Cipher } = require('./rot13-cipher');

describe('Rot13 Cipher Test Suite', () => {
  test('Should return "FREE CODE CAMP" for "SERR PBQR PNZC"', () => {
    expect(decodeROT13Cipher('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
  });
  test('Should return "FREE PIZZA!" for "SERR CVMMN!"', () => {
    expect(decodeROT13Cipher('SERR CVMMN!')).toBe('FREE PIZZA!');
  });
  test('Should return "FREE LOVE?" for "SERR YBIR?"', () => {
    expect(decodeROT13Cipher('SERR YBIR?')).toBe('FREE LOVE?');
  });
  test('Should return "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG." for "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."', () => {
    expect(decodeROT13Cipher('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe(
      'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
    );
  });
});
