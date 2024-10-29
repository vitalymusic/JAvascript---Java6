// Informācijas izvade pārlūkā
document.write("Te ir teksts");

console.log("Te arī ir teksts");

let pirmaisSkaitlis = 10; //Integer
let otraisSkaitlis = 12.75 //Float,double
const pirmaisTeksts = "<h1>Te ir rakstīts teksts</h1>"; //String
let bool1 = true;  //boolean


let masivs1 = [pirmaisSkaitlis,otraisSkaitlis,pirmaisTeksts,bool1,[]];
let objekts = {
    marka: "BMW",
    modelis:"320i",
    krasas:["balta", "sarkana", "zila"]
};


// pirmaisTeksts = "Te ir cits teksts";
masivs1[1] = 100;

objekts.cena = "10000Eur";

document.write(pirmaisSkaitlis,otraisSkaitlis);
document.write(pirmaisTeksts);
document.write(objekts.krasas);
document.write(masivs1[2]);

console.log(masivs1,objekts);



