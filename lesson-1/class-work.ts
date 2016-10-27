/**
 * Created by igor on 10/24/16.
 */
// function sum(a,b) {
//     return a + b;
// }

// let a:number = 1;
//
// let b:string;
//
// b='hi TS';
//
// let c = true;

// interface SomeInt{}
//
// let bar = SomeInt;

// let foo= 123;
//
// let bar:typeof foo;

// class A{
//
// }
//
// let b:A;

// let decimal:number = 6;
// let hex:number = 0xf00d;
// let binar:number = 0b1010;
// let octal: number = 0o744;

//octal = null;

// let str:string = ' hi TS';
//
// let bool:boolean = true;
//
// let some: any;
//
// let voidType:void = undefined;

// let account: {readonly name: string,readonly id?: number};
// account = {name: 'Igor'};
// account.name = 'Vova'
//
// const a: {readonly foo: number}={foo:1};
// a.foo = 2;
//
// let strs:Array<string> = ['s','d','s'];
//  let numsAndString:[number,string]=['s',2]


// let a:{():number};
//
// a = ()=>{
//     return 3
// }

// interface UIElement{
//     addClickListner(onclick:(this:void,e:Event)=>void):void
// }
//
// class Handler{
//     info:string;
//     onClick(this:Handler,e:Event){
//        // this.info='info';
//     }
// }
//
// let h = new Handler();
// let uiElement:UIElement = {
//     addClickListner(cb){}
// };
// uiElement.addClickListner(h.onClick);

// interface A{
//     getHead():this;
// }

//type g ={x:g};
// var g ={x:typeof g};

// type myCustomType1 = [string,number];
// type myCustomType2 = [string,myCustomType1];

// let animation: 3 | 2 |43 | 45 ;
// animation = 2;

// interface IMover{
//     move():void;
//     getStatus:()=>{speed:number}
// }
// interface IShaker{
//     shake:()=>void;
//     getStatus:()=>{frequency:number}
// }
// interface IMoveShake extends IMover,IShaker{
//     getStatus:()=>{speed:number;frequency:number;}
// }
//
// let car:IMoveShake={
//     move:()=>{
//
//     },
//     shake:()=>{
//
//     },
//     getStatus:()=>{
//         return {speed:1,frequency:2}
//     }
// }

// interface IBase{
//     readonly id?:number;
// }
//
// let a:IBase={id:1,name:'Igor',female:false}
//
//
// interface IBase{
//     name:string;
// }
//
// interface IBase{
//     female:boolean;
// }

// interface Repository<T,Tid>{
//     getById(id:Tid):T;
//     persist(model:T):Tid;
// }
// type model={name:string,age:number,id:number};
// let rep: Repository<model,number>;
//
// function reverse<T>(list:T[]){}
//
// reverse<string>(['s',3])

// type someType<S,MyGen> = {a:S, b:MyGen}
// let a:someType<number,string>

// interface A<T extends {id:number,name:string}>{
//     someProp:T;
// }
//
// let a:A<{id:number,female:true,name:string}>


/* !!! на след занятии*/

// interface A {
//     a: string;
//     b: number;
//     e:boolean;
// }
// interface B {
//     a: number;
//     b: number;
//     c: number;
// }
//
// let e = {};
// let c:A|B  = {a:2,b:2,c:2};

// function a(){
//     return true;
// }

//
// let c: A|B  = {b:2,a:2};
// c.a = 2;

// function n(a) {
//     if (a) {
//         interface A {
//             x: number;
//         }
//         let v: A = {x:1};
//     } else {
//         interface A {
//             x: string;
//         }
//         let v: A = {x:'s'};
//     }
// }