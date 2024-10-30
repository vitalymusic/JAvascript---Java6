function labrit(){
    alert("Labrīt");
}


// JS6
let labvakar = ()=>{
    alert("Labvakar");
}

let sveiki = vards=>{
    alert(vards.toUpperCase());
}

let summa = (a,b)=>{
    let atbilde = a+b;
    //document.write(atbilde,"<br>");
    return atbilde;

}

let reizinajums = (a,b)=>{
    let atbilde = a*b;
    //document.write(atbilde,"<br>");
    return atbilde;
}

// summa(3,6);
// summa(56,90);
// reizinajums(3,6);
// reizinajums(56,90);

document.write(`
    Summa ir: ${summa(3,6)}!<br>, 
    reizinājums ir: ${reizinajums(3,6)}!`);



// sveiki("Vitālijs")