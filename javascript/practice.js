const nums = [1, 2, 3, 4, 5];
// Task: Return a new array with each number squared.

let newArray=nums.map((item)=>{
return item*item
})

console.log(newArray);

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8];
// Task: Return only the even numbers.
let evenNumbers=nums1.filter((i)=>{
return i%2==0;
})


console.log(evenNumbers);

const nums2 = [10, 20, 30, 40];
// Task: Return the sum of all numbers.

const total = nums2.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(total); // 100

const nums3 = [1, 2, 3, 4, 5, 6];
// Task: Filter out odd numbers, then double the remaining ones.
let final=nums3.filter(item=>item % 2=== 0).map(item=>item*2)
console.log(final)

const users = [
  { name: "Apra", age: 30, active: true },
  { name: "Nick", age: 45, active: false },
  { name: "Sara", age: 32, active: true }
];
// Task: Return an array of just the names of active users.

const arrofobjects=users.filter((item)=>{
return item.active===true
}).map((item)=>{
    return item.name
})

console.log(arrofobjects)

const items = [
  { category: "fruit", name: "apple" },
  { category: "veg", name: "carrot" },
  { category: "fruit", name: "banana" }
];
// Task: Group items by category into an object like:
// { fruit: ["apple", "banana"], veg: ["carrot"] }

let answer = items.reduce((acc, curr) => {
  if (!acc[curr.category]) {
    acc[curr.category] = [];
  }
  acc[curr.category].push(curr.name);
  return acc;
}, {});

console.log(answer);

const nums5 = [4, 9, 2, 7, 1,10];
// Task: Find the maximum number using reduce (not Math.max).
let maxNum=nums5.reduce((acc,curr)=>{
if(acc-curr<0){
    acc=curr
    return curr
}else{
    return acc
}
},4) 

console.log(maxNum)

const scores = { math: 90, science: 85, english: 78 };
// Task: Log each subject and score as "math: 90" using Object.entries + forEach.
Object.entries(scores).forEach((item, index) => {
  console.log(item[0] + ':' + item[1]);
});