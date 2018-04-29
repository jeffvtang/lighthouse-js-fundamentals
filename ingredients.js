var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var repeatwhile = 0;
var total = 8;

console.log("While Loop")
while (repeatwhile < total){
  console.log(ingredients[repeatwhile])
  repeatwhile++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("For Loop")
for (repeatfor = 0; repeatfor < total; repeatfor++){
  console.log(ingredients[repeatfor])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Backwards Loop")
var totalback = 7
for (repeatback = 0; repeatback <= totalback; repeatback++){
  console.log(ingredients[(totalback - repeatback)])
}