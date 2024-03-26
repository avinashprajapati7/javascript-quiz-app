const questions = [
  {
    question: 'Javascript is an _______ language?',
    answers: [
      { text: 'Object-Oriented', correct: true },
      { text: 'Object-Based', correct: false },
      { text: 'Procedural', correct: false },
      { text: 'Fun Fun Function', correct: false }
    ]
  },
  {
    question: 'Which of the following keywords is used to define a variable in Javascript?',
    answers: [
      { text: 'var', correct: false },
      { text: 'let', correct: false },
      { text: 'Both A and B', correct: true },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Which of the following methods is used to access HTML elements using Javascript?',
    answers: [
      { text: 'getElementById()', correct: false },
      { text: 'getElementsByClassName()', correct: false },
      { text: 'Both A and B', correct: true },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
    answers: [
      { text: 'Throws and error', correct: false },
      { text: 'Ignores the statement', correct: true },
      { text: 'Gives a warning', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Which of the following methods can be used to display data in some form using Javascript?',
    answers: [
      { text: 'document.write()', correct: false },
      { text: 'console.log()', correct: false },
      { text: 'window.alert()', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'How can a datatype be declared to be a constant type?',
    answers: [
      { text: 'const', correct: true },
      { text: 'var', correct: false },
      { text: 'let', correct: false },
      { text: 'constant', correct: false }
    ]
  },
  {
    question: 'When the switch statement matches the expression with the given labels, how is the comparison done?',
    answers: [
      { text: 'Both the datatype and the result of the expression are compared.', correct: true },
      { text: 'Only the datatype of the expression is compared.', correct: false },
      { text: 'Only the value of the expression is compared.', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'What keyword is used to check whether a given property is valid or not?',
    answers: [
      { text: 'in', correct: true },
      { text: 'is in', correct: false },
      { text: 'exist', correct: false },
      { text: 'lies', correct: false }
    ]
  },
  {
    question: 'What is the use of the <noscript> tag in Javascript?',
    answers: [
      { text: 'The contents are displayed by non-JS-based browsers.', correct: true },
      { text: 'Clears all the cookies and cache.', correct: false },
      { text: 'Both A and B', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
    answers: [
      { text: 'Boolean', correct: false },
      { text: 'Undefined', correct: false },
      { text: 'Object', correct: true },
      { text: 'Integer', correct: false }
    ]
  },
  {
    question: 'What does the Javascript “debugger” statement do?',
    answers: [
      { text: 'It will debug all the errors in the program at runtime.', correct: false },
      { text: 'It acts as a breakpoint in a program.', correct: true },
      { text: 'It will debug error in the current statement if any.', correct: false },
      { text: 'All of the above', correct: false }
    ]
  },
  {
    question: "What does the ‘toLocateString()' method do in JS?",
    answers: [
      { text: 'Returns a localized object representation.', correct: false },
      { text: 'Returns a parsed string.', correct: false },
      { text: 'Returns a localized string representation of an object.', correct: true },
      { text: 'None of the above.', correct: false }
    ]
  },
  {
    question: 'The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?',
    answers: [
      { text: 'Object Serialization', correct: true },
      { text: 'Object Encapsulation', correct: false },
      { text: 'Object Inheritance', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Which function is used to serialize an object into a JSON string in Javascript?',
    answers: [
      { text: 'stringify()', correct: true },
      { text: 'parse()', correct: false },
      { text: 'convert()', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Which of the following are closures in Javascript?',
    answers: [
      { text: 'Variables', correct: false },
      { text: 'Functions', correct: false },
      { text: 'Objects', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'Which of the following is not a Javascript framework?',
    answers: [
      { text: 'Node', correct: false },
      { text: 'Vue', correct: false },
      { text: 'React', correct: false },
      { text: 'Cassandra', correct: true }
    ]
  },
  {
    question: 'What keyword is used to declare an asynchronous function in Javascript?',
    answers: [
      { text: 'async', correct: true },
      { text: 'await', correct: false },
      { text: 'setTimeout', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'How to stop an interval timer in Javascript?',
    answers: [
      { text: 'clearInterval', correct: true },
      { text: 'clearTimer', correct: false },
      { text: 'intervalOver', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'How are objects compared when they are checked with the strict equality operator?',
    answers: [
      { text: 'The contents of the objects are compared', correct: false },
      { text: 'Their references are compared', correct: true },
      { text: 'Both A and B', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'What does … operator do in JS ?',
    answers: [
      { text: 'It is used to spread iterables to individual elements', correct: true },
      { text: 'It is used to describe a datatype of undefined size', correct: false },
      { text: 'No such operator exists', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'How do we write a comment in javascript?',
    answers: [
      { text: '**', correct: false },
      { text: '//', correct: true },
      { text: '#', correct: false },
      { text: '$$', correct: false }
    ]
  },
  {
    question: "Which object in Javascript doesn’t have a prototype?",
    answers: [
      { text: 'Base Object', correct: true },
      { text: 'All objects have a prototype', correct: false },
      { text: 'None of the objects have a prototype', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Which of the following are not server-side Javascript objects?',
    answers: [
      { text: 'Date', correct: false },
      { text: 'FileUpload', correct: false },
      { text: 'Function', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
]
