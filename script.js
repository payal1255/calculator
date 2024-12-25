
let string="";
let buttons=document.querySelectorAll('.button');
console.log(buttons);
Array.from(buttons).forEach((button=>{
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML=='='){

            let ans=eval(string);
            document.querySelector('input').value=ans;
        }
        else{
        console.log(e.target.innerHTML)
        string= string+e.target.innerHTML;
        document.getElementById("text").value=string;
        }
    

    })
}))










