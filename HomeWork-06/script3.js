var taskString = `To turn on 1st the lighting, press 1.
To turn on the heating, press 2.
Switch 3 turns on 2nd automatic mode.`,
    regOne = /\b1\b/g,
    regTwo = /\b2\b/g,
    regThree = /\b3\b/g;
var result = taskString.replace(regOne, 'one').replace(regTwo, 'two')
    .replace(regThree, 'three');
console.log(result);