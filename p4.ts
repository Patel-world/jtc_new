//setting readlines for input
import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
  //function to take input
  function question(theQuestion):Promise<string> {
    return new Promise((resolve) =>
      rl.question(theQuestion, (answer) => resolve(answer))
    );
  }


//function to shift array 
async function shifter(){
  var n:number=Number(await question("Enter the length of array"))
  var p:number=Number(await question("Enter the shift position"))
  var d:number=Number(await question("Enter the shift direction 0 for left and 1 for right"))
  
  var arr:string[]=[]
  for (let index = 0; index < Number(n); index++) {
    arr[index]=await question(`Enter ${index+1}th element of array`)
    
  }
  rl.close()

  console.log(d==0?[...arr.slice(p),...arr.slice(0,p)]:[...(arr.slice(0,p).reverse()),...(arr.slice(p).reverse())])
 
}

shifter()

