// Match a Specific Word
// Example: "I love JavaScript" -> true; "I love javascript" -> false
const matchJavaScript = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (/JavaScript/.test(input));
  }
};

// Validate Email Address
// Example: "test@example.com" -> true; "invalid-email" -> false
const validateEmail = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (/@example.com$/i.test(input));
  }
};

// Extract Numbers
// Example: "abc123def456" -> ["123", "456"]; "no numbers" -> []
const extractNumbers = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else if (!input.match(/\d+/g)) {
    return [];
  } else {
    return (input.match(/\d+/g));
}};

// Replace Whitespace
// Example: "Hello World" -> "Hello_World"; "a b c" -> "a_b_c"
const replaceWhitespace = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (input.replace(/\s+/, '_'))
  }
};

// Validate Phone Number
// Example: "(123) 456-7890" -> true; "123-456-7890" -> false
const validatePhoneNumber = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (/^\(\d{3}\) \d{3}-\d{4}$/.test(input));
  }
};

// Extract Hexadecimal Colors
// Example: "Colors: #FFF, #123ABC" -> ["#FFF", "#123ABC"]; "no colors" -> []
const extractHexColors = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else if (!(input.match(/#([0-9A-Fa-f]{3}){1,2}\b/g))) {
    return ([]);
  } else {
    return (input.match(/#([0-9A-Fa-f]{3}){1,2}\b/g));
  }
};

// Validate URL
// Example: "https://example.com" -> true; "ftp://example.com" -> false
const validateUrl = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (/https:\/\/[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}/.test(input));
  }
};

// Validate Dates
// Example: "12/25/2023" -> true; "25/12/2023" -> false
const validateDate = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(input));
  }
};

// Count Vowels
// Example: "hello" -> 2; "xyz" -> 0
const countVowels = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else if (input.match(/[aeiouAEIOU]/g) === null) { 
    return 0;
  } else {
    let vowels = input.match(/[aeiouAEIOU]/g);
    let number = vowels.length;
    return number;
  }
};

// Extract Domain Names
// Example: "test@example.com" -> "example.com"; "invalid" -> null
const extractDomain = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else if ((input.match(/(?<=@)[a-zA-Z0-9.-]+/)) === null) {
    return null;
  } else { 
    return ((input.match(/(?<=@)[a-zA-Z0-9.-]+/))[0]);
  }
};

// Match HTML Tags
// Example: "<div><p>Hello</p></div>" -> ["<div>", "<p>", "</p>", "</div>"]; "text" -> []
const matchHtmlTags = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else if ((input.match(/<\/?([a-zA-Z][a-zA-Z0-9-]*)[^>]*>/g)) == null) {
    return ([]);
  } else {
    return (input.match(/<\/?([a-zA-Z][a-zA-Z0-9-]*)[^>]*>/g));
  }
};

// Find Capitalized Words
// Example: "Hello World" -> ["Hello", "World"]; "no caps" -> []
const findCapitalizedWords = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else if (input.match(/\b[A-Z][a-zA-Z]*\b/g) == null) {
    return ([]);
  } else {
    return (input.match(/\b[A-Z][a-zA-Z]*\b/g));
  }
};

// Match Repeated Words
// Example: "This is is a test test" -> ["is is", "test test"]; "no repeats" -> []
const matchRepeatedWords = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else if (input.match(/\b(\w+)\s+\1\b/g) === null) {
    return ([]);
  } else {
    return (input.match(/\b(\w+)\s+\1\b/g));
  }
};

// Validate Password
// Example: "Password1" -> true; "password" -> false
const validatePassword = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (/^Password1$/.test(input));
  }
};

// Match Unicode Characters
// Example: "😀" -> ["😀"]; "abcABC" -> ["a", "b", "c", "A", "B", "C"]
const matchUnicodeChars = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (input.match(/\p{Any}/gu));
  }
};

// Validate Credit Card Numbers
// Example: "1234-5678-9012-3456" -> true; "1234-5678" -> false
const validateCreditCard = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (/^\d{4}([-\s]?\d{4}){3}$/.test(input));
  }
};

// Replace Non-Word Characters
// Example: "hello world!" -> "hello-world-"; "Hello@World" -> "Hello-World"
const replaceNonWordChars = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (input.replace(/[^a-zA-Z]/g, '-'));
  }
};

// Split by Multiple Delimiters
// Example: "a,b|c;d" -> ["a", "b", "c", "d"]; "one|two;three,four" -> ["one", "two", "three", "four"]
const splitByDelimiters = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (input.split(/[,|;]/g));
  }
};

// Check Multiline Start
// Example: "hello\nworld\nhello" -> ["hello", "hello"]; "Hello\nworld" -> []
//const checkMultilineStart = () => {};

// Validate U.S. Street Address
// Example: "123 N Olive Lane\nCity, ST 12345" -> true; "123 Olive Lane, City ST 12345" -> false
const validateUSAddress = (input) => {
  if (typeof(input) !== 'string') {
    throw new Error('Input must be a string');
  } else {
    return (/^\d+\s([NSEW]\s)?[A-Za-z0-9\s.-]+(?:\n[A-Za-z\s]+,\s[A-Z]{2}\s\d{5})$/.test(input));
  }
};

module.exports = {
  matchJavaScript,
  validateEmail,
  extractNumbers,
  replaceWhitespace,
  validatePhoneNumber,
  extractHexColors,
  validateUrl,
  validateDate,
  countVowels,
  extractDomain,
  matchHtmlTags,
  findCapitalizedWords,
  matchRepeatedWords,
  validatePassword,
  matchUnicodeChars,
  validateCreditCard,
  replaceNonWordChars,
  splitByDelimiters,
  // checkMultilineStart,
  validateUSAddress,
};
