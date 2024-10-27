var n = prompt("Enter a number")
var star = ""
var line = ""
var empty = ""
var length = 1 + 2 * (n - 1)




body = document.getElementById("body");

for (let i = 0; i < n; i++){
    empty =" ".repeat((length - (2 * i + 1)) / 2)
    if (i == 0){
       star = '*'
       line = ""
       div = document.createElement("div");
       spanempty1 = document.createElement("span");
       const textnode1 = document.createTextNode(empty);
       spanempty1.appendChild(textnode1);
       spanstar = document.createElement("span");
       const textnode2 = document.createTextNode(star);
       spanstar.appendChild(textnode2);
       spanempty3 = document.createElement("span");
       const textnode3 = document.createTextNode(empty);
       spanempty3.appendChild(textnode3);
       div.appendChild(spanempty1)
       div.appendChild(spanstar)
       div.appendChild(spanempty3)
       body.appendChild(div)


       //console.log(empty + star + empty)
    }
    
    else{

        star = '*'
        line = '|'.repeat(1 + 2 * (i - 1))
        //console.log(empty + star + line + star + empty)
    }

    
    
    


    
}

