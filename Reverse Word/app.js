/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable space-infix-ops */
/* eslint-disable linebreak-style */
/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
function reverseWords(message) {
  // if (message.length <= 1) {
  //   return message;
  // }
  //  return (message.split(' ').reverse().join(' '));
  let str = ''; // sentence
  let str2 = ''; // reversed sentence
  for(let i = 0; i<message.length; i++) {
    // kelime sonu gelene kadar harfleri birleştir
    if (message[i] != ' ') {
      str += message[i];
      // kelime sonu geldiğinde cümleye ekle
    } else {
      str2 = str + ' ' + str2;
      str = '';
    }
  }
  str2 = str + ' ' + str2;
  // döngüde son oluşturulan kelimeye de ekle ve yeniden arraya çevir
  input = str2.slice(0, -1).split('');
}

// console.log(reverseWords('clarusway'));
// console.log(reverseWords('days. big make things Little'));
// console.log(reverseWords('impossible. mean not does hard but hard, be to going It’s'));
// console.log(reverseWords('done. you’re when Stop tired. you’re when stop Don’t'));
// console.log(reverseWords('Eğer bunu da doğru bir şekilde çevirirsen bırakacağım.'));

// You can write additional helper functions as well.

 /* Tests */
 let desc = 'Don\'t reverse single word';
 let input = 'Clarusway'.split('');
 reverseWords(input);
 let actual = input.join('');
 let expected = 'Clarusway';
 assertEqual(actual, expected, desc);

 desc = 'Inspring Quote #1';
 input = 'days. big make things Little'.split('');
 reverseWords(input);
 actual = input.join('');
 expected = 'Little things make big days.';
 assertEqual(actual, expected, desc);

 desc = 'Inspring Quote #2';
 input = 'impossible. mean not does hard but hard, be to going It’s'.split('');
 reverseWords(input);
 actual = input.join('');
 expected = 'It’s going to be hard, but hard does not mean impossible.';
 assertEqual(actual, expected, desc);

 desc = 'Inspring Quote #3';
 input = 'done. you’re when Stop tired. you’re when stop Don’t'.split('');
 reverseWords(input);
 actual = input.join('');
 expected = 'Don’t stop when you’re tired. Stop when you’re done.';
 assertEqual(actual, expected, desc);
 function assertEqual(a, b, desc) {
 if (a === b) {
     console.log(`${desc} ... PASS`);
 }else {
     console.log(`${desc} ... FAIL: ${a} ≠ ${b}`);
   }
 }