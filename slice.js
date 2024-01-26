const address = 'andorKilla';
const part = address.slice(2, 5);
// console.log(part);

const sentence = 'I am a good and hardworking person.';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
const friends = friendsStr.split(',');
console.log(friends);
const realFriend = [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));