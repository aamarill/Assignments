// Declare the variables we intend to use later.
var cats,
    noms;

// Next, create the function we'll use. This is what you'll modify to make the
// code work.

/**
 * Determines which animals get a treat.
 * @param  {array} animals The animals to feed.
 * @return {array}         A list of who was given a treat.
 */
function treatDispenser(animals) {
  // This array will hold all of the messages we'll return from the function.
  var results = [];

  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] == 'M') {
        results[i] = 'No treat for '+animals[i]+'.';
      }else{
          results[i] = animals[i]+' loved their treat!'
        }
    }
  return results;
}

cats = [
  'Jayne',
  'Kaylee',
  'Malcolm',
  'Monty',
  'River',
  'Simon',
  'Zoë'
];

noms = treatDispenser(cats);

console.log(noms);

// Answer should return an array that looks similar to this:
// ["Jayne loved their treat!", "Kaylee loved their treat!", "No treat for Malcolm",
//  "No treat for Monty", "River loved their treat!", "Simon loved their treat!", "Zoë loved their treat!"]
