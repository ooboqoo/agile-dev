import { sayNumber } from './main'

describe('sayNumber', () => {
  function testSayNumberToBe(list: number[], result: string | number): void {
    list.forEach(i => {
      expect(sayNumber(i)).toBe(result)
    })
  }

  function testSayNumberNotToBe(list: number[], result: string | number): void {
    list.forEach(i => {
      expect(sayNumber(i)).not.toBe(result)
    })
  }

  it('say "Fizz" when divisible by 3', () => {
    testSayNumberToBe([3, 6], 'Fizz')
  })

  it('say "Fizz" when has char 3 and not divisible by 3 and 5', () => {
    testSayNumberToBe([31, 134], 'Fizz')
  })

  it('say "Buzz" when divisible by 5', () => {
    testSayNumberToBe([5, 10], 'Buzz')
  })

  it('say "Buzz" when has char 5 and not has 3 and not divisible by 3 and 5', () => {
    testSayNumberToBe([56, 511], 'Buzz')
    testSayNumberNotToBe([53], 'Buzz')
  })

  it('say "FizzBuzz" when divisible by 3 and 5', () => {
    expect(sayNumber(15)).toBe('FizzBuzz')
    expect(sayNumber(30)).toBe('FizzBuzz')
  })

  it('say number when not divisible by 3 and 5 or do not has char of 3 or 5', () => {
    ;[1, 2, 4, 7, 8, 11, 14, 16].forEach(i => {
      expect(sayNumber(i)).toBe('' + i)
    })
  })
})
