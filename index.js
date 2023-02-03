// function getBook(title, author){
//     return{
//         title,
//         author
//     }
// }

// var book=getBook('shujaa', 'brian')
// console.log(book)

//object destructuring

const list={
    type:'shopping list',
    items:['milk', 'cow']
};

const {type, items}=list;

console.log(items,type);

//arrow functions

// function sayName(){
//     console.log("my name is brian");
// }
// sayName();

var sayAge=function(){
    console.log("my age is 25");
}
sayAge();

const myLocation=()=>{
    console.log("wont say")
}

myLocation()

var user={
    name:'john',
    age:13,
    sayName:function(){console.log(`my name is ${this.name}`)
        const fullName=()=>{
            console.log(`my name is ${this.name} and my age is ${this.age}`)
        }
        fullName()
     }
}
user.sayName()




const shoppingList=['milk', 'cow', 'banana', 'rice','beans'];
//forEach
shoppingList.forEach((item, index)=>{
    console.log(`the index is ${index} and the product is ${item}`)
})

//Map

const newList=shoppingList.map(item=>item+'new')

console.log(newList)

//filter

const filterlist=shoppingList.filter((item)=>{
  return item=="cow"
})
console.log(filterlist);

//constructuring classes


function Person(name, age, height){
    this.name=name;
    this.age=age;
    this.height=height;

}

Person.prototype.sayname=function(){
   console.log(`my name is ${this.name}`)
}

function Junior(occupation, hobby, name, height, age){
  Person.call(this, name,height, age)
  this.occupation=occupation;
  this.hobby=hobby;

}

var J=new Junior('software developer', 'dancing', 'junior', 24, 18)
console.log(J);


class ShoppingList{
    constructor(items, nr){
        this.items=items;
        this.nr=nr;

    }

    saylist(){ 
        console.log(this.items)
     }
}

const mylist=new ShoppingList(['milk', 'cow', 'banana', 'rice','beans'], 5)
console.log(mylist);
mylist.saylist();

class Product extends ShoppingList{
    constructor(items, nr, amount, cost){
        super(items,nr)
        this.amount=amount;
        this.cost=cost;
    }
}
const products=new Product(['milk', 'cow', 'banana', 'rice','beans'], 5, 5000, 30)

console.log(products)

//promises

function getData(data, callback){
    setTimeout(()=>{
        console.log("reading from the database")
        callback({data:data})
    },2000)
}

getData(5, function(data){
    console.log(data)
})

const prom =new Promise((resolve,reject)=>{

    setTimeout(()=>{
       resolve({user:"brian", pass:"jdfij3323"})
       reject(new Error("something went wrong"));
    },2000)
    
})

//  prom.then((data)=>console.log(data))
 .catch(err=>console.log(err))