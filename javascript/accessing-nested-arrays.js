//Retrieve the second tree from the variable myPlants 
//using object dot and array bracket notation.
var myPlants = [{type: "flowers",
list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },

  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1]; // get value "pine"
