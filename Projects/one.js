let upperText = '          When i think    ';
let bottomText = 'abOuT          Coding';

upperText = upperText.trim().toUpperCase();
bottomText = bottomText.replace(/\s+/g, ' ').toUpperCase();


console.log(`
-------------------------
|   ${upperText}          |
|                       |
|   (•_•)               |
|   ( •_•)>⌐■-■         |
|   (⌐■_■)              |
|                       |
|   ${bottomText}       |
-------------------------
`);