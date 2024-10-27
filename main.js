var n = 4
var star = ""
var line = ""
var empty = ""
var length = 1 + 2 * (n - 1)

for (let i = 0; i < n; i++){
    empty =" ".repeat((length - (2 * i + 1)) / 2)
    if (i == 0){
       star = '*'
       line = ""
       console.log(empty+star + empty)
    }
    
    else{

        star = '*'
        line = '|'.repeat(1 + 2 * (i - 1))
        console.log(empty + star + line + star + empty)
    }
    
}