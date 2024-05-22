const btn1 = document.querySelector("#btn1");
const btn0 = document.querySelector("#btn0");
const btnSum = document.querySelector("#btnSum");
const btnSub = document.querySelector("#btnSub");
const btnMul = document.querySelector("#btnMul");
const btnDiv = document.querySelector("#btnDiv");
const btnClr = document.querySelector("#btnClr");
const btnEql = document.querySelector("#btnEql");
const res = document.querySelector("#res");
var total = 0;
var userinput = "";
btn1.addEventListener("click", () => {
    userinput += "1";
    display("1")
})
btn0.addEventListener("click", () => {
    userinput += "0";
    display("0")
})
btnSum.addEventListener("click", () => {
    userinput += "+";
    display("+")
})
btnSub.addEventListener("click", () => {
    userinput += "-";
    display("-")
})
btnMul.addEventListener("click", () => {
    userinput += "*";
    display("*")
})
btnDiv.addEventListener("click", () => {
    userinput += "/";
    display("/")
})
btnClr.addEventListener("click", () => {
    res.innerText = "";
    userinput = "";
})
function display(bit) {
    if (bit == "1")
        res.innerText = res.innerText + "1";
    else if (bit == "0")
        res.innerText = res.innerText + "0";
    else if (bit == "+")
        res.innerText = res.innerText + "+";
    else if (bit == "-")
        res.innerText = res.innerText + "-";
    else if (bit == "*")
        res.innerText = res.innerText + "*";
    else if (bit == "/")
        res.innerText = res.innerText + "/";
}

btnEql.addEventListener("click", () => {

    // console.log(userinput)
    var input = checkUserInputValidity(userinput);
    // console.log(input)

    function checkUserInputValidity(str) {
        let i = 0;
        while (i < str.length) {
            if ((str[i] != "1" && str[i] != "0") && (str[i + 1] != "1" && str[i + 1] != "0")) {
                str = str.substring(0, i) + str.substring(i + 1)
                i -= 1
            }
            i += 1
        }
        if (str[0] != "1" && str[0] != "0") {
            str = str.substring(1)
        }
        // console.log(str)
        return str;
    }

    var ops = []
    let binStrArr = splitUserInputToStrArr(input);
    // console.log(binStrArr)

    function splitUserInputToStrArr(input) {
        var binResult = "";
        let binStr = []
        let j = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] == "+" || input[i] == "-" || input[i] == "*" || input[i] == "/") {
                ops.push(input[i])
                binStr.push(input.substring(j, i))
                j = i + 1;
            }
        }
        binStr.push(input.substring(j))
        // console.log(binStr)
        // console.log(ops)
        return binStr
    }

    numsArr = binaryNumsArrToDecimalNumsArr(binStrArr);
    // console.log(numsArr)

    function binaryNumsArrToDecimalNumsArr(arr) {
        var Nums = []
        for (let i = 0; i < arr.length; i++) {
            let decNum = parseInt(arr[i], 2);
            Nums.push(decNum)
        }
        return Nums;
    }

    finalResult = numsArrToBinary(numsArr)
    // console.log(finalResult)

    function numsArrToBinary(arr) {
        var decResult = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (ops[i - 1] == "+")
                decResult += arr[i]
            else if (ops[i - 1] == "-")
                decResult -= arr[i]
            else if (ops[i - 1] == "*")
                decResult *= arr[i]
            else if (ops[i - 1] == "/")
                decResult /= arr[i]
        }
        binResult = decResult.toString(2);
        // console.log(decResult)
        // console.log(binResult)
        return binResult
    }
    res.innerText = finalResult

})

