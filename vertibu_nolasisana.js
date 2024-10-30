count = ()=>{
    let val1 = +document.querySelector("#inp1").value,
        val2 = +document.querySelector("#inp2").value,
        darbiba = document.querySelector("#inp3").value;

        
        if(darbiba=="+"){
            showResult(saskaitisana(val1,val2));
        }else if(darbiba=="-"){
            showResult(atnemshana(val1,val2));
        }else if(darbiba=="*"){
            showResult(reizinashana(val1,val2));
        }else if(darbiba=="/"){
            if(val2==0){
                return alert("Uz 0 dalīt nedrīkst!!!");
            }
            showResult(dalishana(val1,val2));

        }else{
            showResult("Nav izvēlēta neviena darbība!");
        }


        // Pārrakstīt uz switch Case



}


let saskaitisana  = (a,b)=>a+b; //Atgriež vērtību 
let reizinashana  = (a,b)=>{a*b};
let dalishana  = (a,b)=>{a/b};
let atnemshana  = (a,b)=>{return a-b};


let showResult = (result)=>{
    document.querySelector("#result").value = result;
}