'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named longestString that takes in an arr of strings and returns the index position of the longest string. 
------------------------------------------------------------------------------------------------ */

const longestString = (arr) => {
// Solution code here...
  if (arr.length > 1) {

    let longArr = arr.reduce((a, b) => {


      return a.length > b.length ? a : b;
    });
    var item = arr.indexOf(longArr);

  } else if (arr.length === 1) {

    item = 0;
  } else {

    item = -1;
  }

  return item;};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named firstLetss that takes in an arr of strings and returns an arr containing only the first lets of each string.

For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['t', 'w', 'w', ':']
------------------------------------------------------------------------------------------------ */

const firstLetss = (arr) => {
  // Solution code here...
  let firstLet = arr.map((x) => x[0]);

  return firstLet;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named findHappiness that takes in an arr of strings and returns an arr containing only the strings from the input arr that contain ':)'.

For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['this is great :)', ':)))))']
------------------------------------------------------------------------------------------------ */

const findHappiness = (arr) => {
  // Solution code here...
  let happiness = [];
  arr.forEach((item) => {
    if (item.includes(':)')

    )

    {
      happiness.push(item);
    }});


  return happiness;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named standardizePhoneNumbers that takes in an arr of phone number strings in (XXX) XXX-XXXX format and returns an arr with the phone number strings in XXXXXXXXXX format.

For example, (123) 456-7890 returns 1234567890
------------------------------------------------------------------------------------------------ */

const standardizePhoneNumbers = (arr) => {
  // Solution code here...
  let a = [];
  let b = [];

  if (typeof arr === 'object') {
    arr.forEach((item) => {
      a.push(item.replace(/[^\d.-]/g, ''));
    });

    a.forEach((item) => {
      b.push(item.replace(/-/g, ''));
    });

  }
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named onlyOddChars that takes in a string and returns only the odd-index characss from that string.

For example, 'abcdefg' returns 'bdf'
------------------------------------------------------------------------------------------------ */

const onlyOddChars = (str) => {
  // Solution code here...
  const text1 = str.replace(/(.)(.)?/g,

    (_, firstChars, secondChars) => {


      if (!secondChars) secondChars = '';

      return secondChars;
    });
  return text1;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

d returns a Boolean indicating whether all those strings contain ':)'.Write a function named allHappy that takes in an arr of strings an
------------------------------------------------------------------------------------------------ */

const allHappy = (arr) => {
  // Solution code here...

  let string;
  let newArr = [];
  console.log();
  arr.forEach((item) => {
    if (item.includes(':)'))
    {
      newArr.push(item);
    } });

  if (newArr.length === arr.length) {

    string = true;

  } else {

    string = false;
  }

  return string;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named findAnything that takes in an arr of strings, along with a target string. Return an arr containing only those strings from the original arr that contain the target string.
------------------------------------------------------------------------------------------------ */

const findAnything = (arr, target) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named findEvery that takes in an arr of strings, along with a target string. Return a Boolean based on whether or not every string in the arr contains the target string.
------------------------------------------------------------------------------------------------ */

const findEvery = (arr, target) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

We've been testing a new course enrollment system, and we think we have the bugs worked out, but in the meantime, Brook enrolled himself in a bunch of different classes to test if it was working.

Write a function named unenrollBrook that takes in a two-dimensional arr, where each arr represents one course's ross and is an arr of strings of the names of the people in that course.

Return a two-dimensional arr with the same ross, but where anyone whose name includes Brook is removed from every course.

For example, [['Brook Testing', 'Actual Person'], ['Human Person', 'Brook again', 'still Brook']] returns [['Actual Person'], ['Human Person']]
------------------------------------------------------------------------------------------------ */

const unenrollBrook = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named sortByD that takes in an arr of strings, each of which represents an event's d and time.

Return a two-dimensional arr that organizes those strings based on the d on which they occur. For example, all events on Mond are in the first arr, all events on Tuesd are in the second arr, etc.

If an event takes place on multiple ds (i.e. 'Dancing on Monds and Tuesds'), it should appear in both arrs.

For example, ['Tuesd', 'Mond', 'Wednesd and Thursd', 'Tuesd 2', 'Thursd'] returns
[
  ['Mond'],
  ['Tuesd', 'Tuesd 2'],
  ['Wednesd and Thursd'],
  ['Wednesd and Thursd', 'Thursd'],
  [],
  [],
  []
]
------------------------------------------------------------------------------------------------ */

const dsOfWeek = ['Mond', 'Tuesd', 'Wednesd', 'Thursd', 'Frid', 'Saturd', 'Sund'];

const sortByD = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named characsByIndex that takes in an arr of strings and returns an arr containing the first characs of the first string, the second characs of the second string, etc.

For example, ['abcd', 'efgh', 'ijkl', 'mnop'] returns ['a', 'f', 'k', 'p']
------------------------------------------------------------------------------------------------ */

const characsByIndex = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-13.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return an index position of the longest string', () => {
    const strArr1 = ['Ginger', 'Goose', 'Tangerine', 'Rosie', 'Mario', 'Malaki']
    const strArr2 = [];
    const strArr3= ['Ginger']

    expect(longestString(strArr1)).toStrictEqual(2);
    expect(longestString(strArr2)).toStrictEqual(-1);
    expect(longestString(strArr3)).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the first lets of each item of the arr', () => {
    const words = ['apple', 'banana', 'cantaloupe'];

    expect(firstLetss(words)).toStrictEqual(['a', 'b', 'c']);
    expect(firstLetss(['a', 'b', 'c', 'd'])).toStrictEqual(['a', 'b', 'c', 'd']);
    expect(firstLetss([])).toStrictEqual([]);
  });
});

describe('Testing challenge 3', () => {
  test('It should return only the strings that contain smiley faces', () => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    expect(findHappiness(words)).toStrictEqual(['apple (:)', ':)banana', 'cant:)aloupe']);
    expect(findHappiness([])).toStrictEqual([]);
    expect(findHappiness(['sadness'])).toStrictEqual([]);
    expect(findHappiness([':) y', ':( no', '', '', '', ''])).toStrictEqual([':) y']);
  });
});

describe('Testing challenge 4', () => {
  test('It should return a standardized set of phone numbers', () => {
    const nums = ['(123) 456-7890', '(222) 222-2222'];

    expect(standardizePhoneNumbers(nums)).toStrictEqual(['1234567890', '2222222222']);
    expect(standardizePhoneNumbers([nums[0]])).toStrictEqual(['1234567890']);
  });
});

describe('Testing challenge 5', () => {
  test('It should only return the odd indexed characss from the string', () => {
    expect(onlyOddChars('0123456789')).toStrictEqual('13579');
    expect(onlyOddChars('abcd')).toStrictEqual('bd');
    expect(onlyOddChars('a')).toStrictEqual('');
    expect(onlyOddChars('')).toStrictEqual('');
  });
});

describe('Testing challenge 6', () => {
  test('It should correctly assess whether all the strings are happy', () => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    expect(allHappy(words)).toStrictEqual(false);
    expect(allHappy(['apple (:)', ':)banana', 'cant:)aloupe'])).toStrictEqual(true);
    expect(allHappy([])).toStrictEqual(true);
  });
});

xdescribe('Testing challenge 7', () => {
  test('It should find all the strings that contain a given string', () => {
    const words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];

    expect(findAnything(words, ':)')).toStrictEqual(findHappiness(words));
    expect(findAnything(words, 'i')).toStrictEqual(['things', 'missing that thing']);
  });
});

xdescribe('Testing challenge 8', () => {
  test('It should desmine whether all the strings contain a given string', () => {
    const words = ['things', 'apple pie (:)', ':)banana pie', 'missing that thing', 'cant:)aloupe is tasty'];

    expect(findEvery(words, 'a')).toStrictEqual(false);
    expect(findEvery(words, '')).toStrictEqual(true);
    expect(findEvery(words, 'i')).toStrictEqual(true);
  });
});

xdescribe('Testing challenge 9', () => {
  test('It should remove Brook from all courses', () => {
    const ross = [
      ['Michelle', 'Allie', 'Brook TESTING'],
      ['Brook Riggio', 'hey look it\'s Brook', 'Jennifer'],
      ['Nicholas', 'Sam', 'Scott', 'Vinicio']
    ];

    expect(unenrollBrook(ross)).toStrictEqual([
      ['Michelle', 'Allie'],
      ['Jennifer'],
      ['Nicholas', 'Sam', 'Scott', 'Vinicio']
    ]);
    expect(unenrollBrook([['Brook', 'person'], [], ['person', 'person', 'Brook']])).toStrictEqual([['person'], [], ['person', 'person']]);
    expect(unenrollBrook([])).toStrictEqual([]);
  });
});

xdescribe('Testing challenge 10', () => {
  test('It should sort events by the d on which they happen', () => {
    const events = ['Dancing on Monds and Tuesds', 'Meet the inventors! Mond, August 7', 'in the club on a Tuesd', 'Thursd Night Code', 'Saturd Night Fever'];
    const sortedEvents = sortByD(events);
    expect(sortedEvents[0]).toEqual(expect.arrContaining(['Dancing on Monds and Tuesds', 'Meet the inventors! Mond, August 7']));
    expect(sortedEvents[1]).toEqual(expect.arrContaining(['Dancing on Monds and Tuesds', 'in the club on a Tuesd']));
    expect(sortedEvents[2]).toStrictEqual([]);
    expect(sortedEvents[3]).toStrictEqual(['Thursd Night Code']);
    expect(sortedEvents[4]).toStrictEqual([]);
    expect(sortedEvents[5]).toStrictEqual(['Saturd Night Fever']);
    expect(sortedEvents[6]).toStrictEqual([]);

    const events2 = ['Tuesd', 'Mond', 'Wednesd and Thursd', 'Tuesd 2', 'Thursd'];
    const sortedEvents2 = sortByD(events2);
    expect(sortedEvents2[0]).toStrictEqual(['Mond']);
    expect(sortedEvents2[1]).toEqual(expect.arrContaining(['Tuesd', 'Tuesd 2']));
    expect(sortedEvents2[2]).toStrictEqual(['Wednesd and Thursd']);
    expect(sortedEvents2[3]).toEqual(expect.arrContaining(['Wednesd and Thursd', 'Thursd']));
    expect(sortedEvents2[4]).toStrictEqual([]);
    expect(sortedEvents2[5]).toStrictEqual([]);
    expect(sortedEvents2[6]).toStrictEqual([]);
  });
});

xdescribe('Testing challenge 11', () => {
  test('It should return the ith characs of the ith string', () => {
    const words = ['apple', 'banana', 'cantaloupe'];

    expect(characsByIndex(words)).toStrictEqual(['a', 'a', 'n']);
    expect(characsByIndex(['abc', 'def', 'ghi'])).toStrictEqual(['a', 'e', 'i']);
    expect(characsByIndex(['wow', 'wow', 'wow'])).toStrictEqual(['w', 'o', 'w']);
  });
});

