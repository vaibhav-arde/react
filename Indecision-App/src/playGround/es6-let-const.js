let toView = (<p>Understanding var, let and const</p>)
let appRoot = document.getElementById('app');
ReactDOM.render(toView, appRoot);

var nameVar = "TestVar"
console.log(nameVar)
// below line do not give ay error with var same varible can be used which can be issue while triuble shooting
var nameVar = "TestVar Test"
console.log(nameVar)

const nameConst = "TestConst Test";
console.log(nameConst)
// Below line if uncommented give error as:
// SyntaxError: src/playGround/es6-let-const.js: "nameConst" is read-only
// nameConst = "Can not be redefined";

let nameLet = "TestLet Test"
console.log(nameLet)
// Below line if uncommented give error as:
// TypeError: src/playGround/es6-let-const.js: Duplicate declaration "nameLet"
// let nameLet = "Can not use same varible name";

// var in block
if(nameVar){
    var firstVarWord = nameVar.split(" ")[0];
    console.log(`In Block First var word is : ${firstVarWord}`);
}

console.log(`Outside Block First var word is : ${firstVarWord}`);

// const in block
if(nameConst){
    const firstConstWord = nameConst.split(" ")[0];
    console.log(`In Block First const word is : ${firstConstWord}`);
}
// Below line if uncommented give error as:
// app.js:44 Uncaught ReferenceError: firstConstWord is not defined
// console.log(`Outside Block First const word is : ${firstConstWord}`);

// let in block
if(nameLet){
    let firstLetWord = nameLet.split(" ")[0];
    console.log(`In Block First let word is : ${firstLetWord}`);
}
// Below line if uncommented give error as:
// app.js:53 Uncaught ReferenceError: firstLetWord is not defined
// console.log(`Outside Block First let word is : ${firstLetWord}`);
console.log(`++++++`);

// var, let and const are function scoped, that mean that is not available outside function.
function fVar(name){
    var vName = name.split(" ")[0];
    console.log(`In function First var word is : ${vName}`);
    return vName;
}
console.log(fVar(nameVar));
// console.log(`Outside function First var word is : ${vName}`);

function fConst(name){
    const vName = name.split(" ")[0];
    console.log(`In function First const word is : ${vName}`);
    return vName;
}
console.log(fConst(nameConst));
// console.log(`Outside function First const word is : ${vName}`);

function fLet(name){
    const vName = name.split(" ")[0];
    console.log(`In function First const word is : ${vName}`);
    return vName;
}
console.log(fLet(nameLet));
console.log(`Outside function First const word is : ${vName}`);
