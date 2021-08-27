var arr = [1,2,3,4,5,6,7,8,9,10];

function find_num(arr,x)
{
  for(var i = 0; i<arr.length; i++)
  {
    if(arr[i]===x)
    {
      return i;
    }
  }
  return -1;
}

function setup() {
  createCanvas(400, 400);
  var result = find_num(arr,20);
  if(result ==-1)
  {
    console.log("número no encontrado");
  }
  else{
    console.log("número encontrado en el indice:",result)
  }
 
}

function draw() {
  background(220);
}