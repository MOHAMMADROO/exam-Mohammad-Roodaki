// question 5
const myFirstButton=document.querySelector("#nameButton")
const inputs=document.querySelectorAll("input")
myFirstButton.addEventListener("click",()=>{
const surnames=['Doe','Roe','Smith'];
const firstnames=['John','Jane','Joe'];
let firstname;
let surname;
let names2=[firstname,surname];
let rows=surnames.length;
//for(let row=1 ; row<=rows ; row++){
   

for (let i=0 ; i<surnames.length ; i++){
    names2.push(firstnames[i]+" "+surnames[i]);
    //let space=" "
       
    for (let j=i ; j<firstnames.length ; j++){
       document.querySelector("#name1").value=names2;
       console.log(firstnames[i]+" "+surnames[i]);
    }

//for (let i=0 ; i<surnames.length ; i++){

  //  a=firstnames[i]+" "+surnames[i];
    
    
   //document.querySelector("#name1").value=firstnames[0]+" "+surnames[0];
  // document.querySelector("#name2").value=firstnames[1]+" "+surnames[1];
   //document.querySelector("#name3").value=firstnames[2]+" "+surnames[2]; 
  // console.log(firstnames[i]+" "+surnames[i]);
}});


//question 6
const myTemButton=document.querySelector("#temperature");

myTemButton.addEventListener("click",()=>{

const temperatures=[25.5,30.2,28.8,22.1,26.7,24.3,29.6,31,23.5,27.9];
const largest=Math.max.apply(Math,temperatures);

const smallest=Math.min.apply(Math,temperatures);
let sum=0;
let average;
for(let i=0 ; i<temperatures.length ;i++){
    sum += temperatures[i]
    
    average = (sum/temperatures.length).toFixed(2);
    
}

document.querySelector("#maxTemp").value=largest;
document.querySelector("#minTemp").value=smallest;
document.querySelector("#aveTemp").value=average
console.log(largest);
console.log(smallest);
console.log(average);

});


//question 7

const myAgeButton=document.querySelector("#adult");
myAgeButton.addEventListener("click",()=>{
    const people=[
        {name:'Alice',age:25},
        {name:'Bob',age:16},
        {name:'Charlie',age:13},
        {name:'Daniel',age:86},
        {name:'Eve',age:30},
        {name:'Frank',age:55},
        {name:'Gabriel',age:10}
    ];
    let a=people.age
    let names1=[];
    
    for(let i in people){
    
        if(people[i].age>=18){
            names1.push(people[i].name);
            let a=people[i].name;
            for(let j=0 ; j<a.length ; j++){
           
               // document.querySelector("#adult1").value=names1[0];
                //document.querySelector("#adult2").value=names1[1];
                //document.querySelector("#adult3").value=names1[2];
                //document.querySelector("#adult4").value=names1[3];

                //document.querySelector("#adult2").value=a.name[1];
                document.querySelector("#adult1").value=names1;
            
               // console.log(names1) ;
         //console.log(people[i].name);
        }
        //console.log(names1) ;
        //document.querySelector("#adult1").value=people[i].name;
          //  document.querySelector("#adult2").value=people[1].name; 
        
     }
     console.log(names1);

}})

//question 8
const myConvert=document.querySelector("#tempconvert");
function convert(c){
    let f;
    f=(c*1.8)+32
    return f;
}


myConvert.addEventListener("click",()=>{
    a=document.querySelector("#celsius").value;
    
        document.querySelector("#fahrenheit").value=convert(a);
        console.log(convert(a))
})





//question 9
let beef;
let chicken;
let turkey;
let cheese;
let a;
const mySandwich=document.querySelector("#sandwich");


function sandwichOutput(beef,chicken,turkey,cheese){



if ((beef == 1 || chicken == 1 || turkey==1)&&((beef==1&&chicken==0)||(beef==0&&chicken==1)||(beef==0&&chicken==0))&&(((turkey==1&&cheese==1)||(turkey==0&&cheese==0)))){
                                               
       a='Allowed';
 //  console.log("Allowed");
}else {
//console.log("Not allowed")
 a='Not allowed';
}console.log(a);
document.querySelector("#sandwichResult").value=a;
typeof(a);
}

mySandwich.addEventListener("click",()=>{
    
    beef=document.querySelector("#beef").value;
    chicken=document.querySelector("#chicken").value;
    turkey=document.querySelector("#turkey").value;
    cheese=document.querySelector("#cheese").value;
    if(beef==""||chicken==""||turkey==""||cheese==""||beef<0||beef>1||chicken<0||chicken>1||turkey<0||turkey>1||cheese<0||cheese>1||isNaN(beef)||isNaN(chicken)||isNaN(turkey)||isNaN(cheese)){alert('Please input 0 or 1 according to the text')}
    console.log(beef);
    console.log(chicken);
    console.log(turkey);
    console.log(cheese);
    //if(a==1){
      // document.querySelector("#sandwichResult").value='The sandwich is allowed'
    //}else{
    //document.querySelector("#sandwichResult").value='The sandwich is disallowed'
      
    
  sandwichOutput(beef,chicken,turkey,cheese);
}  
)
