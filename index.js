//FIRST TASK STARTS HERE

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));

//SECOND TASK STARTS HERE
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

  //ANSWER: 1

  //THIRD TASK STARTS HERE
  
