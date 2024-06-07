function dontGiveMeFive(start, end)
{
  console.log(start)
  console.log(end)
  let arr = []
  for (let i = start; i < end + 1; i++){
    if (!i.toString().split('').includes('5')) arr.push(i)
  }
  console.log(arr)
  return arr.length
}