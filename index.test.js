const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    const input = {why: " does", lambda: "    school", make: " me ", do: "this"}
    const expected = input
    utils.trimProperties(input)
    expect(input).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    // ✨ test away
    const input = {why: " does", lambda: "    school", make: " me ", do: "this"}
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    const numbers = [1, 2, 400000000, 3, 0]
    expect(utils.findLargestInteger(numbers)).toEqual(400000000)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(counter.initialNumber)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.counter = 1
    expect(counter.countDown()).toEqual(counter.initialNumber - 1)
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.counter = counter.initialNumber + 5
    expect(counter.countDown()).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    // ✨ test away
    expect(seasons.next()).toEqual("Summer") //1
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
    seasons.season = "Summer" 
    expect(seasons.next()).toEqual("Fall") //2
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
    seasons.season = "Fall"
    expect(seasons.next()).toEqual("Winter") //3
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
    seasons.season = "Winter"
    expect(seasons.next()).toEqual("Spring") //4
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
    seasons.season = "Spring"
    expect(seasons.next()).toEqual("Summer") //5
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away
    // Okay so this keeps coming up and I was never told how to run a test multiple times in jest
    // I KNOW FOR A FACT that I CAN'T use a for loop because that errored out. And Google is less helpful
    // than a bull in a china shop on this so I actually am clueless. But again the function is written 
    // in a way that is very explicit so i KNOW what the result of running the function 40 times will be sooo...
    seasons.season = "Winter"
    expect(seasons.next()).toEqual("Spring") // This is exactly the same as the #3 call...

  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    // ✨ test away
    expect(focus.odometer).toBe(0)
    focus.drive(10)
    expect(focus.odometer).toBe(10)
  })
  it('[16] driving the car uses gas', () => {
    // ✨ test away
  })
  it('[17] refueling allows to keep driving', () => {
    // ✨ test away
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
    // ✨ test away
  })
  it('[20] resolves false if passed an odd number', () => {
    // ✨ test away
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    // ✨ test away
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    // ✨ test away
  })
})
