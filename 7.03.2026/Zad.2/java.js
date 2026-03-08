
function add(a,b){
    if(a<=0 || b<=0){
        return("Wartosc przyprostokątenj jest mniejsza lub rowna 0")
    }
    
    return (Math.sqrt(a * a + b * b));
    
}


function test(a,b){
    let c = add(a,b)
    console.assert(c>0,'Wartosc przeciwprostokątnej jest mniejsza lub rowna 0')
    console.assert(c,'Nie wyswietlono prawidlowego komunikatu o bledzie')
    console.assert(typeof a === "number" && typeof b === "number", "To jest string nie liczba")
}


test(1,1)
