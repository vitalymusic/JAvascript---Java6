// IF
let a = 9,b=4;

let teksts = "10"; 

if(a==10 && b==5){
    document.write("ok");
}else{
    document.write("not ok");
}


if(a>=10){
    document.write("Skatlis ir lielāks par 10");
}else if(a>5 && a<10){
    document.write("Skatlis ir lielāks par 5 bet mazāks par 10");
}else if(a<5 && a>0){
    document.write("Skatlis ir mazāks par 5 bet lielāks par 0");
}else{
    document.write("Skaitlis ir 0 vai mazāks par 0");
}


// Switch Case


let dienasNumurs = 7;
let dienasNosaukums = "";


switch(dienasNumurs){
    case 1: dienasNosaukums = "Pirmdiena";break;
    case 2: dienasNosaukums = "Otrdiena";break;
    case 3: dienasNosaukums = "Trešdiena";break;
    default:dienasNosaukums = "Tādas dienas nav";break;

}


// Ternārais operators


document.write((dienasNumurs>0 && dienasNumurs<=7)?dienasNosaukums:"Diena neeksistē");









// if(a==10 || b==5){
//     document.write("ok");
// }