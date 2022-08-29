let result = document.getElementById('inputs');
let calculator = (number)=>{
    result.value = result.value + number;
}
let results = ()=>{
    try {
        result.value = eval(result.value)
    }
    catch{
        alert("enter valid number")
    }
}
let cler = document.getElementById('clearText');
cler.addEventListener('click', function(){
    document.getElementById('inputs').value = "";
})