let myarray1=["FORD GT MK IV",2022,"USA","Gasoline",816,2.9,36,6,11,1.4];
let myarray2=["Koenigsegg Regera",2020,"Sweden","Gasoline",1519,2.8,410,8,21,1.6];
let myarray3=["Rimac Nevera",2023,"Croatia","Electric",1914,1.95,412,"","",2.3];
let myarray4=["Ferrari Daytona SP3",2022,"Italy","Gasoline",829,2.6,340,12,16.8,1.5];
let myarray5=["Lotus Evija",2022,"England/China","Electric",1972,2.9,350,"","",1.7];
let myarray6=["Lamborghini Countach",2022,"Italy","Gasoline",802,2.8,355,12,19.5,1.6];
let myarray7=["Koenigsegg Jesko",2021,"Sweden","Gasoline",1600,2.6,500,8,"",1.3];
let myarray8=["Aston Martin Valkyrie",2021,"England","Gasoline",1160,2.5,380,12,21,1.1];
let myarray9=["Bugatti Chiron",2016,"France","Gasoline",1578,2.2,420,16,21.5,2];
let myarray10=["Koenigsegg CC850",2022,"Sweden","Gasoline",1385,2.7,498,8,"",1.3];
const mybutton=document.querySelector("#submit1");
let num=document.querySelector("#carNumber");





mybutton.addEventListener("click",()=> {
    var n=Number(num.value);
    let myNewArray;
    if(num.value ===""|| num.value<1 || num.value>10 || isNaN(num.value)){
    alert('Enter a correct number between 1 and 10');
    
    }else{
     //   function findArray(n){
            //n=Number(num.value);
            switch(n){
                case 1:
                   myNewArray=myarray1;
                   
                   break;
                case 2 :
                    myNewArray=myarray2;
                    break;
                case 3:
                    myNewArray=myarray3;
                    break;
                case 4:
                    myNewArray=myarray4;
                    break;
                case 5:
                    myNewArray=myarray5;
                    break;
                case 6:
                    myNewArray=myarray6;
                    break;
                case 7:
                    myNewArray=myarray7;
                    break;
                case 8:
                    myNewArray=myarray8;
                    break;    
                case 9:
                    myNewArray=myarray9;
                    break;
                case 10:
                    myNewArray=myarray10;
                    break;            

                default:
                    console.log("nothing");           
            }
            
          //  let m=myNewArray;
            ///et finalArr=m[i];
            //console.log(finalArr);
            console.log(myNewArray);
            document.querySelector("#carName").value=myNewArray[0];
            document.querySelector("#year").value=myNewArray[1];
            document.querySelector("#country").value=myNewArray[2];
            document.querySelector("#engine").value=myNewArray[3];
            document.querySelector("#power").value=myNewArray[4];
            document.querySelector("#acceleration").value=myNewArray[5];
            document.querySelector("#speed").value=myNewArray[6];
            document.querySelector("#cylinder").value=myNewArray[7];
            document.querySelector("#fuel").value=myNewArray[8];
            document.querySelector("#weight").value=myNewArray[9];
            
        }


//console.log(findArray(2));
        
   }
);

