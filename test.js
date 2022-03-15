var test = require('tape')
var words = require('.')

test('words', function(t) {
  t.ok(Array.isArray(words), 'should be an array')
  t.ok(words.length > 240000, 'should be more than 2400k words')
  t.ok(
    words.every(d => typeof d === 'string'),
    'should be all strings'
  )
  t.ok(
    words.every(d => d.length !== 0),
    'should not be empty'
  )
  t.ok(words.includes('آفتاب'), 'should include(#1)')
  t.ok(words.includes('ماه'), 'should include(#2)')
  t.end()
})