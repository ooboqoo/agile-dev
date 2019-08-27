export function sayNumber(i: number): number | string {
  if (i % 15 === 0) return 'FizzBuzz'
  if (i % 3 === 0) return 'Fizz'
  if (i % 5 === 0) return 'Buzz'
  if (String(i).includes('3')) return 'Fizz'
  if (String(i).includes('5')) return 'Buzz'
  return '' + i
}

function print(): void {
  const res = Array(100)
    .fill(undefined)
    .map((item, index) => sayNumber(index + 1))
  for (let i = 0; i < res.length; i += 10)
    console.log(res.slice(i, i + 10).join(', '))
}
print()
