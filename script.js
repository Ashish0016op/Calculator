let button1=document.getElementById('btn');
let button2=document.getElementById('remove');
button2.addEventListener('click',removeItem);
button1.addEventListener('click',result);
let res=document.getElementById('getans');
function result(e){
    e.preventDefault();
    let x=document.getElementById('num1').value;
    let y=document.getElementById('num2').value;
    let signs=document.getElementById('text1').value;
    let number1=parseInt(x);
    let number2=parseInt(y);
    if(signs=='+'){
        let ans=number1+number2;
        let li=document.createElement('li');
        li.className='outp';
        li.innerHTML="Result is --> "+ans;
        res.appendChild(li);
    }else if(signs=='-'){
        let ans=number1-number2;
        let li=document.createElement('li');
        li.className='outp';
        li.innerHTML="Result is --> "+ans;
        res.appendChild(li);
    }else if(signs=='/'){
        let ans=number1/number2;
        let li=document.createElement('li');
        li.className='outp';
        li.innerHTML="Result is --> "+ans;
        res.appendChild(li);
    }else if(signs=='*'){
        let ans=number1*number2;
        let li=document.createElement('li');
        li.className='outp';
        li.innerHTML="Result is --> "+ans;
        res.appendChild(li);
    }
    
}
function removeItem(e){
    e.preventDefault();
    res.removeChild(res.firstChild);
}