//ex1//
function inverse(x,y){
let z=0
z=x
x=y
y=z
    return  + x +"" +""+y
}
console.log('inverse',inverse(5,6))

//ex2//

function affiche(nom,age,homme){
  
   
    return "les nom de "+ nom+age+homme
}
console.log(affiche('ali',23,true))

//ex2//

//ex3//
function puissance(x,y){


    return Math.pow(x,y)
}
console.log(puissance(4,2))
//ex3//

//ex4//

function somme(a,b){
    
    
    return(a+b)

}
console.log (somme(4,-5))
//ex4//

//ex5//
function seconde(a){
    
    return(a*60)
}
console.log(seconde(5))

//ex5//

//ex6//
function increment(x){
    
    return (x+1)
}
console.log(increment(5))
//ex6//

//ex7//
function triangle(x,y){
    
    let z=(x*y)/2
    return (z)

}
console.log(triangle(7,3))
//ex7//

//ex8//
function reverse(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
 console.log ((reverse ('ali')))
  //ex8//

   //ex9//
function max(a,b,c){   
    
 
    return Math.max(a,b,c)
}
console.log(max(100,20,15))

  //ex9//

  //ex10//
function array(x){
    var x=['one','ahmed','khaled'];
    return x.shift();
}
console.log(array ())
  //ex10//

   //ex11//
  
   function devise (a,b){   

    let d= (a % b)
    return d
}
console.log(devise (1,3))

//ex11//

  //ex12//
  function suupp (a,b){
var r ;

    let c= a+b 
    if (c <100){
r='true'
    }else{
        r='false'
    }
    return r
}
console.log((suupp(40,5)))

  //ex12//

  //ex13//
  function heure (a){
    
    let c= a*3600
    return c
}
console.log(heure (5))

  //ex13//

  //ex14//
  function infr (a){
     
    let r ;
 
    if (a>=0) {
      r='false'
    }else
    {
   r='true'
     
   }
 return r ;
}

console.log (infr (8));

  //ex14//

  //ex15//

  function equal (a,b){
    
    let r ;
    if (a==b){

        r='true'

    } else{
        r='false'

    }
    return(r)
}
console.log(equal (4,4))

  //ex15//


//ex16//
function div (a){
    let r;
    if( (a % 5)==0){
        r='true'
    }else{
    r='false'
    }
    return r
}
console.log(div(5))
//ex16//

//ex17//
function inverserArray(x){
    var x=['1','2','3'];
    return x.reverse()
}
console.log (inverserArray())


//ex17//

//ex18//

function derenier(x){
    var x=['1','2','3'];
    return x.pop()
}
console.log (derenier())
//ex18//

//ex19//
function verif(a,b){
    let r;

    if ((a==b) && (typeof(a)==typeof(b))) {
        r='true'
    }else{
        r='false'
    }
    return r
}
console.log((verif(8,4)))
//ex19//

//ex20//
function test (ch){
    let r ;
    if (ch.length !=0){
        r='false'
    }else 
    {
        r='true'
    }
    return r
}
console.log(test(''))
//ex20//
