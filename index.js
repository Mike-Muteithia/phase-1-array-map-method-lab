
//> Using "for...of" in Place of .map()

/* const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = [];

for (const student of skiSchool) {
  rollCall.push(student + " the skier");
}

rollCall;
 */

//> "map()" With a Function Declaration

/* function studentRollCall(student) {
  return student + " the skier";
}

const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map(studentRollCall);

rollCall;
 */

//> "map()" With a Function Expression

/* const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map(function (student) {
  return student + " the skier";
});

rollCall;
 */

//> "map()" With an Arrow Function

/* const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map(student => student + " the skier");

rollCall;
 */

// Demonstrate "map()" With Complex Data Structures

/* const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false},
  { name: "C3PO", modes: 3, isActivated: false},
  { name: "Sonny", modes: 2.5, isActivated: false},
  { name: "Baymax", modes: 1.5, isActivated: false},
]

const activatedRobots = robots.map((robot) => {
  return Object.assign({}, robot, {
    modes: robot.modes * 2,
    isActivated: true,
  });
});

console.log(activatedRobots);
 */

//> Lab: Using "map()" to Generate a New Array

/* const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const distinctWords = {
  'nan': 'NaN',
  'jsonp': 'JSONP',
  'api': 'API',
  'stoppropagation': 'StopPropagation',
  'preventdefault': 'PreventDefault',
  'oo': 'OO'
  ''
};

const titleCased = () => {
  return tutorials.map(title => {
    return title
    .split(' ')
    .map(word => {
      const lower = word.toLowerCase();  
      return distinctWords[lower] || word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
  });
}

console.log(titleCased()); */

/* const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const distinctWords = Object.create(null);
Object.assign(distinctWords, {
  'nan': 'NaN',
  'jsonp': 'JSONP',
  'api': 'API',
  'stoppropagation': 'StopPropagation',
  'preventdefault': 'PreventDefault',
  'oo': 'OO',
  'constructor': 'Constructor'
});

const titleCased = () => {
  return tutorials.map(title => {
    return title
    .toLowerCase()
    .split(' ')
    .map(word => {
      const lower = word.toLowerCase();
      return distinctWords[lower] || word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  });
};
 */

const tutorials = [
  "what does the this keyword mean?",
  "what is the constructor oo pattern?",
  "implementing blockchain web api",
  "the test driven development workflow",
  "what is NaN and how can we check for it",
  "what is the difference between stopPropagation and preventDefault?",
  "immutable state and pure functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

const specialWords = {
  'api': 'API',
  'nan': 'NaN',
  'jsonp': 'JSONP',
  'stoppropagation': 'StopPropagation',
  'preventdefault': 'PreventDefault',
  'oo': 'OO',
  'constructor': 'Constructor'
};

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => {
        const cleaned = word.replace(/[^a-zA-Z]/g, '').toLowerCase(); // strip punctuation for matching
        const punctuation = word[word.length - 1].match(/[^\w]/) ? word[word.length - 1] : '';
        return (specialWords[cleaned])
          ? specialWords[cleaned] + punctuation
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  });
};

console.log(titleCased());



