// Mad Lib Generator
const name = prompt("Enter a person's name:");
const adjective1 = prompt("Enter an adjective (describing word):");
const place = prompt("Enter a place:");
const noun1 = prompt("Enter a noun (thing):");
const verb1 = prompt("Enter a verb ending in -ing:");
const adjective2 = prompt("Enter another adjective:");
const noun2 = prompt("Enter another noun:");
let verb2 = prompt("Enter a verb (past tense):");
const adjective3 = prompt("Enter one more adjective:");
const noun3 = prompt("Enter a final noun:");
const story = `
  <h3 class="text-primary mb-3">The Crazy Day of ${name}</h3>
  <p>
    One ${adjective1} morning ${name} woke up and decided to go to ${place}.
    When they got there, they saw a weird ${noun1} that was just ${verb1}
    all over the place.
  </p>
  <p>
    Woah thats so ${adjective2}! said ${name}. I have literally never seen
    a ${noun2} like that in my entire life. So they ${verb2} over to check it out.
  </p>
  <p>
    But then something insane happened the ${noun1} started glowing with a
    ${adjective3} light. ${name} couldnt believe it. This wasnt just any
    normal ${noun3}, this was something totally different.
  </p>
  <p class="text-muted mt-4">
    To be continued...
  </p>
`;


const outputElement = document.getElementById("madlib-output");




outputElement.innerHTML = story;
