const Stack = require('./Structure/ArrayToStack')

function getAndRemoveStackBottom(stack){
  const result = stack.pop()
  if(stack.isEmpty()){
    return result
  } else {
    const last = getAndRemoveStackBottom(stack)
    stack.push(result)
    return last
  }
}
function reverseStack(stack) {
  if(stack.isEmpty()) {
    return
  }
  const i = getAndRemoveStackBottom(stack)
  reverseStack(stack)
  stack.push(i)
}
function test() {
  let stack = new Stack(5)
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  stack.push(5)
  // StackBottom -> 1 -> 2 -> 3 -> 4 -> 5 -> StackPeek
  console.log(stack.toString());  
  reverseStack(stack)
  // StackBottom -> 5 -> 4 -> 3 -> 2 -> 1 -> StackPeek
  console.log(stack.toString());
  while(!stack.isEmpty()) {
    console.log(stack.pop());
  }
}
test()