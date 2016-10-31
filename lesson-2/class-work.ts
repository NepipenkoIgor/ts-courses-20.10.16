// function getAverage(a:number,b:number,c:number):string{
//     let total=a+b+c;
//     let average = total/3;
//     return `The average is ${average}`
// }
//
// console.log(getAverage(2,2,3));

// function getAverage(a:number,b:number,c?:number):string{
//     let total = a;
//     let count =1;
//     total+=b;
//     count++;
//     if(typeof c!=='undefined'){
//         total+=c;
//         count++;
//     }
//
//     let average= total/count;
//     return `The average is ${average}`
// }
//
// console.log(getAverage(2,3,3));

// function getAverage(a:number,b:number,c:number = 0):string{
//     let total=a+b+c;
//     let average = total/3;
//     return `The average is ${average}`
// }
// console.log(getAverage(2,3));

// function getAverage(...a:number[]):string{
//     let total = 0;
//     let count = 0;
//     for (let i = 0; i<a.length; i++){
//         total+=a[i];
//         count++;
//     }
//     let average = total/count;
//     return `The average is ${average}`
// }
// console.log(getAverage(2,3,2,4,5,6,43,3,100));

// function isString(a):a is string{
//     if(typeof a === 'string'){
//        return true;
//     }
//     return false;
// }
//
//
// function isNumber(a):a is number{
//     if(typeof a === 'number'){
//         return true;
//     }
//     return false;
// }
//
// function getAverage(a:string,b:string,c:string):string; // 1
// function getAverage(a:number,b:number,c:number):string; // 2
// function getAverage(a:string|number,b:string|number,c:string|number):string{
//
//     if(isString(a)){
//         parseInt(a,10)
//         // я строка
//     }
//     //я не строка
//     let total = parseInt(a,10)+parseInt(a,10)+parseInt(a,10);
//     let average = total/3;
//     return `The average is ${average}`
// };
//
// console.log(getAverage(2,3,2));
// console.log(getAverage('2','2','2'));

// class Handler{}
// class RandomHandler{}
// class ReversedHandler{}
//
// function getHandler(type:'Random'):RandomHandler;
// function getHandler(type:'Reversed'):ReversedHandler;
// function getHandler(type:string):Handler;
// function getHandler(type:string):Handler{
//     switch (type){
//         case 'Random': return new RandomHandler();
//         case 'Reversed': return new ReversedHandler();
//         default: return new Handler();
//     }
// }

// class Point{
//     x:number;
//     y:number;
//
//     constructor(x:number,y:number){
//         this.x=x;
//         this.y=y;
//     }
//
//     sum():number{
//         return this.y + this.x;
//     }
// }
//
// let p1 = new Point(1,3);
// let sum = p1.sum();

// class Foo{
//     public x:number;
//     private y:number;
//     protected z:number;
// }
//
// class Bar extends Foo{
//     constructor(){
//         super();
//         this.x
//     }
// }
//
// let foo = new Foo();


// class Point{
//     public constructor(public x:number,public y:number){
//     }
//
//     public sum():number{
//         return this.y + this.x;
//     }
// }

// class Singleton{
//     private static instance:Singleton;
//
//     private constructor(){}
//
//     public static getInstance(){
//         if(!Singleton.instance){
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
// }
//
// //let e = new Singleton();
//
// let v = Singleton.getInstance();

// interface IAccount{
//     name:string;
//     id:number;
//     getName(id:number):string;
// }
// interface A{
//     someProp:number;
// }
//
// class Account implements IAccount,A{
//     public name:string;
//     public someProp:number;
//     public id:number;
//     public getName(id:number):string{
//         return this.name;
//     };
// }

// abstract class Base{
//     public abstract name:string;
//     public age = 12;
//     abstract calcAge():number;
//
//     public getAge():number{
//         return this.age;
//     }
// }
//
// class Foo extends Base{
//      constructor(public name:string){
//         super();
//     }
//      calcAge():number{
//         return 2
//     }
// }

interface Stock {
    description: string;
}

class StockItem implements Stock {
    constructor(private _price: number, public description: string) {
    }

    public get stockItemPrice(): string {
        return this.description;
    }

    public set stockItemPrice(newPrice: string) {
        this.description = newPrice;
    }
}

let item = new StockItem(12, 'asdasdsa');
console.log(item.stockItemPrice);
item.stockItemPrice = 'asd';
console.log(item.stockItemPrice);