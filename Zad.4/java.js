
function add(a,b){
    return a+b
}
Deno.test("tescik funkcji a", ()=>{
    let result = add(5,3)
    let expected = 8
    if(expected!=result){
        throw new Error(`Spodziewano sie ${expected} dostano ${result}`)
    }
})
