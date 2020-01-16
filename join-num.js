"use strict";
module.exports = joinNum

const pow10s = new Array (
  Math.ceil (Math.log10 (Number.MAX_VALUE))
).fill (0).map ((_, i) => Math.pow (10, i))

function joinNum (values) {
  if (Array.isArray (values) === false) return 0
  let fac = 0
  let i = values.length - 1
  let join = 0
  let val = 0
  let num = 0
  while (i > -1) {
    val = values[i--]
    if (val === null || isNaN (val)) continue
    num = val < 0 ? Math.abs (val) : val
    if (num === 0) {
      fac += 1
      continue
    }
    const ok = num === 5 || (
      num > 5 && (
        num > 7 && (num === 9 || num === 8) ||
                   (num === 6 || num === 7)
      ) || (
        num > 2 && (num === 4 || num === 3) ||
                   (num === 1 || num === 2)
      )
    )
    if (ok === false) continue
    join += pow10s[fac] * num
    fac += 1
  }
  return join
}

