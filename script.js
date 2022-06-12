console.log("hello chirag");
let dispalyText = "";
let numArr = [];
let arri = 0;
let s = 0;
let f = 0;

// let text1 = document.getElementById("item-4").getElementsByTagName("span")
// text1[0].innerHTML = "c";

document.getElementById("item-1").addEventListener("click", () => {
    dispalyText = '';
    s = 0;
    numArr = [];
    arri =0;
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-2").addEventListener("click", () => {
    dispalyText = dispalyText.slice(0, dispalyText.length - 1);
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-3").addEventListener("click", () => {
    dispalyText = dispalyText + '/';
    f = dispalyText.length - 2;
    let numString = dispalyText.slice(s, f + 1);
    console.log(numString);
    numArr[arri] = parseFloat(numString);
    numArr[arri + 1] = '/';
    arri = arri + 2
    s = dispalyText.length;
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-4").addEventListener("click", () => {
    dispalyText = dispalyText + '1';
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-5").addEventListener("click", () => {
    dispalyText = dispalyText + '2';
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-6").addEventListener("click", () => {
    dispalyText = dispalyText + '3';
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-7").addEventListener("click", () => {
    dispalyText = dispalyText + '*';
    f = dispalyText.length - 2;
    let numString = dispalyText.slice(s, f + 1);
    console.log(numString);
    numArr[arri] = parseFloat(numString);
    numArr[arri + 1] = '*';
    arri = arri + 2
    s = dispalyText.length;
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-8").addEventListener("click", () => {
    dispalyText = dispalyText + '4';
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-9").addEventListener("click", () => {
    dispalyText = dispalyText + '5';
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-10").addEventListener("click", () => {
    dispalyText = dispalyText + '6';
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-11").addEventListener("click", () => {
    dispalyText = dispalyText + '+';
    f = dispalyText.length - 2;
    let numString = dispalyText.slice(s, f + 1);
    console.log(numString);
    numArr[arri] = parseFloat(numString);
    numArr[arri + 1] = '+';
    arri = arri + 2
    s = dispalyText.length;
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-12").addEventListener("click", () => {
    dispalyText = dispalyText + '7';
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-13").addEventListener("click", () => {
    dispalyText = dispalyText + '8';
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-14").addEventListener("click", () => {
    dispalyText = dispalyText + '9';
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-15").addEventListener("click", () => {
    dispalyText = dispalyText + '-';
    f = dispalyText.length - 2;
    let numString = dispalyText.slice(s, f + 1);
    console.log(numString);
    numArr[arri] = parseFloat(numString);
    numArr[arri + 1] = '-';
    arri = arri + 2
    s = dispalyText.length;
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});
document.getElementById("item-16").addEventListener("click", () => {
    dispalyText = dispalyText + '0';
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});

document.getElementById("item-17").addEventListener("click", () => {

    dispalyText = dispalyText + ".";
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;

});

document.getElementById("item-18").addEventListener("click", () => {

    f = dispalyText.length - 1;
    let numString = dispalyText.slice(s, f + 1);
    numArr[arri] = parseFloat(numString); 
    
    console.log(numString);
    
    // console.log(numArr);
    // console.log("equal click");
    dispalyText = ""
    for (let i = 1; i < numArr.length; i = i + 2) 
    {
        if (numArr[i] == '*') 
        {
            let result = numArr[i - 1]  *  numArr[i + 1];
            numArr.splice(i - 1, 3, result);
            i = i - 2;
        }
    }
    for (let i = 1; i < numArr.length; i = i + 2) 
    {
        if (numArr[i] == '/') 
        {
            let result = numArr[i - 1] / numArr[i + 1];
            numArr.splice(i - 1, 3, result);
            i = i - 2;
        }

    }

    for (let i = 1; i < numArr.length; i = i + 2) 
    {
        if (numArr[i] == '+') 
        {
            let result = numArr[i - 1] + numArr[i + 1];
            numArr.splice(i - 1, 3, result);
            i = i - 2;
        }

    }
    for (let i = 1; i < numArr.length; i = i + 2) 
    {
        if (numArr[i] == '-') 
        {
            let result = numArr[i - 1] - numArr[i + 1];
            numArr.splice(i - 1, 3, result);
            i = i - 2;
        }

    }
    dispalyText = numArr[0];
    s = 0;
    arri = 0;
    numArr = [];
    if (isNaN(dispalyText)) {
        dispalyText = "Syntax Error"
        // document.getElementsByClassName("op")[0].innerHTML = "Syntax Error";
        
    }
    document.getElementsByClassName("op")[0].innerHTML = dispalyText;
    

});