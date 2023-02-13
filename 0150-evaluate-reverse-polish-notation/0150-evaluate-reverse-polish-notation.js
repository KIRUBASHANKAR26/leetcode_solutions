const calctionFunc = (first,second,operator) => {
    let temp = second
    if(operator==="+"){
        temp = Number(temp) + parseInt(first)
    }else if(operator==="*"){
        temp *= first
    }else if(operator==="/"){
        temp = Math.trunc(1/first*second);
    }else if(operator==="-"){
        temp -= first
    }
    return temp
}

var evalRPN = function(tokens) {
    const stack = [];
    const operators = ["+",'/',"*","-"]
    for(let i=0;i<tokens.length;i++){
        if(!operators.includes(tokens[i])){
            stack.push(tokens[i])
        }else{
            const firstOperand = stack.at(stack.length - 1)
            const secondOperand = stack.at(stack.length - 2)
            const newvalue = calctionFunc(firstOperand,secondOperand,tokens[i]);
            stack.pop()
            stack.pop()
            stack.push(newvalue) 
        }
        
    }
    return stack[0]
}































