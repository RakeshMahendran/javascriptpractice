// When a varible declared in a global scope is overshadowed by the variable declared in a block scope, it is called as variabe overshadowing
function hi(){
    let a = 5;
    function hmm() {
      var a = 2;
      console.log(a);
    }
    hmm()
    console.log("a2", a);
}

hi()

function distributeGifts(kids, totalGifts, initialKid1, initialKid2) {
  // Creating an array of kids in the seated order
  const seatedOrder = kids.split(" ");
   console.log("seatedOrder",seatedOrder);
  // Initializing variables
  let direction = "Clockwise";
  let currentKidIndex = seatedOrder.indexOf(initialKid2);
  console.log("currentKidIndex",currentKidIndex);
  const giftsReceived = [];

  // Initializing gifts received count for each kid
  seatedOrder.forEach((kid) => {
    giftsReceived[kid] = 0;
  });

  
  // Distributingthe gifts
  while (totalGifts > 0) {
    // Skipping the immediate next kid
    currentKidIndex = (currentKidIndex + 2);
 // Updating the count of gifts received by the current kid
    giftsReceived[seatedOrder[currentKidIndex]] += 1;

    totalGifts--;
  }

  // Determining the direction of gift distribution
  if (seatedOrder.indexOf(initialKid1) > seatedOrder.indexOf(initialKid2)) {
    direction = "AntiClockwise";
  }

  // Finding the kid who received the highest number of gifts
  let highestGiftsKid = null;
  let highestGiftsCount = -1;
  for (const kid in giftsReceived) {
    if (giftsReceived[kid] > highestGiftsCount) {
      highestGiftsKid = kid;
      highestGiftsCount = giftsReceived[kid];
    }
  }

  // Printing the output
  console.log("direction", direction);
  console.log("highestGiftsKid",highestGiftsKid);
  console.log("gifts",giftsReceived);
  for (const kid in giftsReceived) {
    console.log(`${kid}-${giftsReceived[kid]}`);
  }
}

// Example usage
const numKids = 7;
const kidsNames = "Alice Bob Charlie Dave Eve Fred Rakesh";
const totalGiftsCount = 10;
const initialKid1Name = "Alice";
const initialKid2Name = "Dave";

distributeGifts(kidsNames, totalGiftsCount, initialKid1Name, initialKid2Name);
