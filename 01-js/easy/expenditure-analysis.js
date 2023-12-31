/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const transaction = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    itemName: 'Jeans',
  },
];

function calculateTotalSpentByCategory(transactions = transaction) {
  let ans=[];
  let temp=[];
  for (let i=0;i<transactions.length;i++){
    let current=transactions[i];
    if(!temp[current.category]){
      console.log(temp[current.category]);
      temp[current.category]=current.price;
      console.log(temp,"!temp");
    }
    else{
      temp[current.category]+=current.price;
      console.log(temp);
    }
  }
  //Referred
  for(let category in temp){
      ans.push({category:category,totalSpent:temp[category]});
  }
  return ans;
}

// module.exports = calculateTotalSpentByCategory;

console.log(calculateTotalSpentByCategory());