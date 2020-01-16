"use strict";
const joinNum = require ('./../')
const assert = require ('assert')

let error_count = 0

function assertWithInfo (actual, expected, message) {
  process.stdout.write (message)
  try {
    assert (actual === expected, message)
    console.log (' ... OK')
  }
  catch (error) {
    console.log (' ... FAIL')
    console.error (error)
    error_count += 1
  }
}

process.once ('exit', function (code) {
  process.exit (Math.min (1, error_count))
})

assertWithInfo (
    joinNum ([1, 2, 3])
  , 123
  , 'The result for array [1, 2, 3] should be 123'
)

assertWithInfo (
    joinNum ([-1, 0, 0])
  , 100
  , 'The result for array [-1, 0, 0] should be 100'
)

assertWithInfo (
    joinNum ()
  , 0
  , 'The result for any empty array should be 0'
)

assertWithInfo (
    joinNum ('Hello, World!')
  , 0
  , 'The result for an argument that not an array should be 0'
)

assertWithInfo (
    joinNum ([0.12, null, 3, 0, 4, 5.67, '', 8, 9])
  , 30489
  , 'The result for an array should exclude values that are not a single digit integer'
)

