# `an-array-of-persian-words`

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of ~240,000 English words.
Derived from [the Dehkhoda word list][dehkoda].

## Install

[npm][]:

```sh
npm install an-array-of-persian-words
```

## Use

```js
var words = require('an-array-of-persian-words')

console.log(words.filter(d => /آب/.test(d)))
```

Yields:

```js
[
  'antifungal',
  'antifungals',
  'bifunctional',
  'cofunction',
  'cofunctions',
  // …and many more
]
```

## API

### `anArrayOfPersianWords`

`Array.<string>` — List of all Persian words, according to dehkhoda dictionary.

## CLI

Install the CLI globally:

```sh
npm i -g an-array-of-persian-words
```

Now run `words` to print all the words to stdout:

```sh
words
```

Use `grep` to filter by pattern:

```sh
words | grep 'آفتاب'
```

Use `egrep` to filter with regular expressions:

```sh
words | egrep '^آب'            # start with 'آب'
words | egrep 'دان$'      # end with 'دان'
words | egrep 'ان?ت$'           # end in 'ان' or 'ت'
```

Use `wc` to find out how many `شهر` words there are:

```sh
words | grep 'شهر' | wc -l
```

Ten random ten-letter words (note: on macOS, do `brew install coreutils` to get
[`gshuf`][shuf]):

```sh
$ words | egrep '^.{10}$' | gshuf | head -10
```

[MIT][license] © [Peyman farahmand][author]

<!-- Definition -->

[downloads-badge]: https://img.shields.io/npm/dm/an-array-of-persian-words.svg

[downloads]: https://www.npmjs.com/package/an-array-of-persian-words

[size-badge]: https://img.shields.io/bundlephobia/minzip/an-array-of-persian-words.svg

[size]: https://bundlephobia.com/result?p=an-array-of-persian-words

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://www.linkedin.com/in/pfndesign

[letterpress]: https://dehkhoda.ut.ac.ir/fa/dictionary

[shuf]: https://en.wikipedia.org/wiki/Shuf