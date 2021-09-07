var res = document.getElementById('res');

function isOperator() {
    let value = res.innerText;
    if(value.endsWith('+')||value.endsWith('-')||value.endsWith('*')||value.endsWith('/')){
        return true;
    }
    else {
        return false;
    }
}

function clickZero(){
    res.innerText += 0;
}

function clickOne(){
    res.innerText += 1;
}

function clickSum(){
    if(res.innerText.length != 0 && !isOperator()) {
        res.innerText += '+';
    }
}

function clickSub(){
    if(res.innerText.length != 0 && !isOperator()) {
        res.innerText += '-';
    }
}

function clickMul(){
    if(res.innerText.length != 0 && !isOperator()) {
        res.innerText += '*';
    }
}

function clickDiv(){
    if(res.innerText.length != 0 && !isOperator()) {
        res.innerText += '/';
    }
}

function clickClr(){
    res.innerText = '';
}

function clickEql(){
    if(!isOperator()){
        let value = getResult()
        console.log(value);
        res.innerText = value;
    }
}


function getResult(){
    arithmetic_regex = /[^\d()]+|[\d.]+/g;
    splitUp = res.innerText.match(arithmetic_regex);
    operator_regex = /[\+\-\*\/]+/g;


    while(operator_regex.test(splitUp)){
        if(splitUp.includes('/')){
            divIndex = splitUp.indexOf('/');
            divResult = Math.floor(parseInt(splitUp[divIndex-1], 2) / parseInt(splitUp[divIndex+1], 2));
            splitUp.splice(divIndex-1, 3, divResult.toString(2));
        }

        else if(splitUp.includes('*')){
            mulIndex = splitUp.indexOf('*');
            mulResult = parseInt(splitUp[mulIndex-1], 2) * parseInt(splitUp[mulIndex+1], 2);
            splitUp.splice(mulIndex-1, 3, mulResult.toString(2));
        }

        else if(splitUp.includes('+')){
            sumIndex = splitUp.indexOf('+');
            sumResult = parseInt(splitUp[sumIndex-1], 2) + parseInt(splitUp[sumIndex+1], 2);
            console.log(sumResult.toString(2));
            splitUp.splice(sumIndex-1, 3, sumResult.toString(2));
        }

        else{
            subIndex = splitUp.indexOf('-');
            subResult = parseInt(splitUp[subIndex-1], 2) - parseInt(splitUp[subIndex+1], 2);
            splitUp.splice(subIndex-1, 3, subResult.toString(2));
        }
    }
    return  splitUp.toString();
}