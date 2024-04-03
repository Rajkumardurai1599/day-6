//question 1//
//question a//

class Movie {
    constructor(title,studio,rating){
       this.title = title;   
       this.studio = studio;
       this.rating = rating; 
    }
  }
  
   const obj = new Movie("vikram","RKFI","8.5")
   console.log(obj.title,obj.studio,obj.rating);

   //question b//

   class Movie1 {
    constructor(title,studio,rating = "PG"){
       this.title = title;   
       this.studio = studio;
       this.rating = rating;
    }
  }
  
   const obj1 = new Movie1("leo","7screen",)
   console.log(obj1.title,obj1.studio,obj1.rating);

   // question c//
class movie6 {
constructor(title,studio,rating="pg"){
    this.title = title;   
    this.studio = studio;
    this.rating = rating; 
 }
 static getpg(movies){
    return movies.filter(movie6=>movie6.rating==="pg")
 }
}

const movies1 = [
    new movie6("vikram","RKFI","8.5"),
    new movie6("virumandi","RKFI","9.5"),
    new movie6("love today","AGS",),
    new movie6("singam","RKFI"),
    new movie6("jailer","sun pictuire","8.5")]
    const pgMovies1=movie6.getpg(movies1)

    console.log(pgMovies1);

   //question d//

   class Movie2 {
    constructor(title,studio,rating ){
       this.title = title;   
       this.studio = studio;
       this.rating = rating;
    }
  }
  
   const obj2 = new Movie2("Casino Royale","Eon Productions","pg13")
   console.log(obj2.title,obj2.studio,obj2.rating);

   //question 2// 
class circle {
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius=n;
        
    }
    get Color(){
        return this.color
    }
    set Color(c){
        this.color=c
    }
    get toString(){
        return `"circle[radius=${this.radius} , color=${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumfernce(){
        return 2*Math.PI*this.radius
    }
}
var obj5 = new circle(1.0,"red")

console.log(obj5.radius);
console.log(obj5.color);
console.log(obj5.toString);
console.log(obj5.area);
console.log(obj5.circumfernce);

//question 3//
//!Write a “person” class to hold all the details.\

class Person{
    constructor(name,age,gender,martialstatus,contact,email ){
        this.name = name;   
        this.age = age;
        this.geder = gender;
        this.martialstatus=martialstatus;
        this.contact=contact;
        this.email=email;
}
}
const bio= new Person("raj","24","male","single","9361048587","drajkumar1599@gmail.com")
console.log(bio.name,bio.age,bio.geder,bio.martialstatus,bio.contact,bio.email);

//question 4/
//write a class to calculate the Uber price//

class Uber{
    constructor(km,price ){
        this.km=km;
        this.price=price
    }
}
const rate= new Uber(1,50)
console.log(rate.km*rate.price);


    
