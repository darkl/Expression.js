function runtimeMemberInfo() {

}

function runtimeType() {

}
runtimeType.prototype = Object.create(runtimeMemberInfo);

function runtimeMethodInfo() {

}
runtimeMethodInfo.prototype = Object.create(runtimeMemberInfo);

function runtimePropertyInfo() {
    
}
runtimePropertyInfo.prototype = Object.create(runtimeMemberInfo);

function runtimeConstructorInfo() {

}
runtimeConstructorInfo.prototype = Object.create(runtimeMemberInfo);

function expression() {

}
expression.prototype._type = "expression";
expression.prototype.toJSON = function() {
    self = this;
    var tmp = {};

    for (var key in self) {
        if (typeof self[key] !== 'function')
            tmp[key] = self[key];
    }

    return tmp;
};

function binaryExpression() {

}
binaryExpression.prototype = Object.create(expression.prototype);
binaryExpression.prototype._type = "binaryExpression";

function blockExpression() {

}
blockExpression.prototype = Object.create(expression.prototype);
blockExpression.prototype._type = "blockExpression";

function conditionalExpression() {

}
conditionalExpression.prototype = Object.create(expression.prototype);
conditionalExpression.prototype._type = "conditionalExpression";

function constantExpression() {

}
constantExpression.prototype = Object.create(expression.prototype);
constantExpression.prototype._type = "constantExpression";

function defaultExpression() {

}
defaultExpression.prototype = Object.create(expression.prototype);
defaultExpression.prototype._type = "defaultExpression";

function indexExpression() {

}
indexExpression.prototype = Object.create(expression.prototype);
indexExpression.prototype._type = "indexExpression";

function invocationExpression() {

}
invocationExpression.prototype = Object.create(expression.prototype);
invocationExpression.prototype._type = "invocationExpression";

function lambdaExpression() {

}
lambdaExpression.prototype = Object.create(expression.prototype);
lambdaExpression.prototype._type = "lambdaExpression";

function listInitExpression() {

}
listInitExpression.prototype = Object.create(expression.prototype);
listInitExpression.prototype._type = "listInitExpression";

function loopExpression() {

}
loopExpression.prototype = Object.create(expression.prototype);
loopExpression.prototype._type = "loopExpression";

function memberExpression() {

}
memberExpression.prototype = Object.create(expression.prototype);
memberExpression.prototype._type = "memberExpression";

function methodCallExpression() {

}
methodCallExpression.prototype = Object.create(expression.prototype);
methodCallExpression.prototype._type = "methodCallExpression";

function newArrayExpression() {

}
newArrayExpression.prototype = Object.create(expression.prototype);
newArrayExpression.prototype._type = "newArrayExpression";

function newExpression() {

}
newExpression.prototype = Object.create(expression.prototype);
newExpression.prototype._type = "newExpression";

function parameterExpression() {

}
parameterExpression.prototype = Object.create(expression.prototype);
parameterExpression.prototype._type = "parameterExpression";

function runtimeVariablesExpression() {

}
runtimeVariablesExpression.prototype = Object.create(expression.prototype);
runtimeVariablesExpression.prototype._type = "runtimeVariablesExpression";

function tryExpression() {

}
tryExpression.prototype = Object.create(expression.prototype);
tryExpression.prototype._type = "tryExpression";

function typeBinaryExpression() {

}
typeBinaryExpression.prototype = Object.create(expression.prototype);
typeBinaryExpression.prototype._type = "typeBinaryExpression";

function unaryExpression() {

}
unaryExpression.prototype = Object.create(expression.prototype);
unaryExpression.prototype._type = "unaryExpression";

function assign2x1(left, right) {
    this.left = left;
    this.right = right;
}
assign2x1.prototype = Object.create(binaryExpression.prototype);
assign2x1.prototype._type = "assign2x1";

function equal2x1(left, right) {
    this.left = left;
    this.right = right;
}
equal2x1.prototype = Object.create(binaryExpression.prototype);
equal2x1.prototype._type = "equal2x1";

function referenceEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
referenceEqual2x1.prototype = Object.create(binaryExpression.prototype);
referenceEqual2x1.prototype._type = "referenceEqual2x1";

function notEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
notEqual2x1.prototype = Object.create(binaryExpression.prototype);
notEqual2x1.prototype._type = "notEqual2x1";

function referenceNotEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
referenceNotEqual2x1.prototype = Object.create(binaryExpression.prototype);
referenceNotEqual2x1.prototype._type = "referenceNotEqual2x1";

function greaterThan2x1(left, right) {
    this.left = left;
    this.right = right;
}
greaterThan2x1.prototype = Object.create(binaryExpression.prototype);
greaterThan2x1.prototype._type = "greaterThan2x1";

function lessThan2x1(left, right) {
    this.left = left;
    this.right = right;
}
lessThan2x1.prototype = Object.create(binaryExpression.prototype);
lessThan2x1.prototype._type = "lessThan2x1";

function greaterThanOrEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
greaterThanOrEqual2x1.prototype = Object.create(binaryExpression.prototype);
greaterThanOrEqual2x1.prototype._type = "greaterThanOrEqual2x1";

function lessThanOrEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
lessThanOrEqual2x1.prototype = Object.create(binaryExpression.prototype);
lessThanOrEqual2x1.prototype._type = "lessThanOrEqual2x1";

function andAlso2x1(left, right) {
    this.left = left;
    this.right = right;
}
andAlso2x1.prototype = Object.create(binaryExpression.prototype);
andAlso2x1.prototype._type = "andAlso2x1";

function orElse2x1(left, right) {
    this.left = left;
    this.right = right;
}
orElse2x1.prototype = Object.create(binaryExpression.prototype);
orElse2x1.prototype._type = "orElse2x1";

function coalesce2x1(left, right) {
    this.left = left;
    this.right = right;
}
coalesce2x1.prototype = Object.create(binaryExpression.prototype);
coalesce2x1.prototype._type = "coalesce2x1";

function coalesce3x1(left, right, conversion) {
    this.left = left;
    this.right = right;
    this.conversion = conversion;
}
coalesce3x1.prototype = Object.create(binaryExpression.prototype);
coalesce3x1.prototype._type = "coalesce3x1";

function add2x1(left, right) {
    this.left = left;
    this.right = right;
}
add2x1.prototype = Object.create(binaryExpression.prototype);
add2x1.prototype._type = "add2x1";

function addAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
addAssign2x1.prototype = Object.create(binaryExpression.prototype);
addAssign2x1.prototype._type = "addAssign2x1";

function addAssignChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
addAssignChecked2x1.prototype = Object.create(binaryExpression.prototype);
addAssignChecked2x1.prototype._type = "addAssignChecked2x1";

function addChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
addChecked2x1.prototype = Object.create(binaryExpression.prototype);
addChecked2x1.prototype._type = "addChecked2x1";

function subtract2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtract2x1.prototype = Object.create(binaryExpression.prototype);
subtract2x1.prototype._type = "subtract2x1";

function subtractAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtractAssign2x1.prototype = Object.create(binaryExpression.prototype);
subtractAssign2x1.prototype._type = "subtractAssign2x1";

function subtractAssignChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtractAssignChecked2x1.prototype = Object.create(binaryExpression.prototype);
subtractAssignChecked2x1.prototype._type = "subtractAssignChecked2x1";

function subtractChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtractChecked2x1.prototype = Object.create(binaryExpression.prototype);
subtractChecked2x1.prototype._type = "subtractChecked2x1";

function divide2x1(left, right) {
    this.left = left;
    this.right = right;
}
divide2x1.prototype = Object.create(binaryExpression.prototype);
divide2x1.prototype._type = "divide2x1";

function divideAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
divideAssign2x1.prototype = Object.create(binaryExpression.prototype);
divideAssign2x1.prototype._type = "divideAssign2x1";

function modulo2x1(left, right) {
    this.left = left;
    this.right = right;
}
modulo2x1.prototype = Object.create(binaryExpression.prototype);
modulo2x1.prototype._type = "modulo2x1";

function moduloAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
moduloAssign2x1.prototype = Object.create(binaryExpression.prototype);
moduloAssign2x1.prototype._type = "moduloAssign2x1";

function multiply2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiply2x1.prototype = Object.create(binaryExpression.prototype);
multiply2x1.prototype._type = "multiply2x1";

function multiplyAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiplyAssign2x1.prototype = Object.create(binaryExpression.prototype);
multiplyAssign2x1.prototype._type = "multiplyAssign2x1";

function multiplyAssignChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiplyAssignChecked2x1.prototype = Object.create(binaryExpression.prototype);
multiplyAssignChecked2x1.prototype._type = "multiplyAssignChecked2x1";

function multiplyChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiplyChecked2x1.prototype = Object.create(binaryExpression.prototype);
multiplyChecked2x1.prototype._type = "multiplyChecked2x1";

function leftShift2x1(left, right) {
    this.left = left;
    this.right = right;
}
leftShift2x1.prototype = Object.create(binaryExpression.prototype);
leftShift2x1.prototype._type = "leftShift2x1";

function leftShiftAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
leftShiftAssign2x1.prototype = Object.create(binaryExpression.prototype);
leftShiftAssign2x1.prototype._type = "leftShiftAssign2x1";

function rightShift2x1(left, right) {
    this.left = left;
    this.right = right;
}
rightShift2x1.prototype = Object.create(binaryExpression.prototype);
rightShift2x1.prototype._type = "rightShift2x1";

function rightShiftAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
rightShiftAssign2x1.prototype = Object.create(binaryExpression.prototype);
rightShiftAssign2x1.prototype._type = "rightShiftAssign2x1";

function and2x1(left, right) {
    this.left = left;
    this.right = right;
}
and2x1.prototype = Object.create(binaryExpression.prototype);
and2x1.prototype._type = "and2x1";

function andAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
andAssign2x1.prototype = Object.create(binaryExpression.prototype);
andAssign2x1.prototype._type = "andAssign2x1";

function or2x1(left, right) {
    this.left = left;
    this.right = right;
}
or2x1.prototype = Object.create(binaryExpression.prototype);
or2x1.prototype._type = "or2x1";

function orAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
orAssign2x1.prototype = Object.create(binaryExpression.prototype);
orAssign2x1.prototype._type = "orAssign2x1";

function exclusiveOr2x1(left, right) {
    this.left = left;
    this.right = right;
}
exclusiveOr2x1.prototype = Object.create(binaryExpression.prototype);
exclusiveOr2x1.prototype._type = "exclusiveOr2x1";

function exclusiveOrAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
exclusiveOrAssign2x1.prototype = Object.create(binaryExpression.prototype);
exclusiveOrAssign2x1.prototype._type = "exclusiveOrAssign2x1";

function power2x1(left, right) {
    this.left = left;
    this.right = right;
}
power2x1.prototype = Object.create(binaryExpression.prototype);
power2x1.prototype._type = "power2x1";

function powerAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
powerAssign2x1.prototype = Object.create(binaryExpression.prototype);
powerAssign2x1.prototype._type = "powerAssign2x1";

function arrayIndex2x1(array, index) {
    this.array = array;
    this.index = index;
}
arrayIndex2x1.prototype = Object.create(binaryExpression.prototype);
arrayIndex2x1.prototype._type = "arrayIndex2x1";

function block2x1(arg0, arg1) {
    this.arg0 = arg0;
    this.arg1 = arg1;
}
block2x1.prototype = Object.create(blockExpression.prototype);
block2x1.prototype._type = "block2x1";

function block2x2(type, expressions) {
    this.type = type;
    this.expressions = expressions;
}
block2x2.prototype = Object.create(blockExpression.prototype);
block2x2.prototype._type = "block2x2";

function block2x3(variables, expressions) {
    this.variables = variables;
    this.expressions = expressions;
}
block2x3.prototype = Object.create(blockExpression.prototype);
block2x3.prototype._type = "block2x3";

function block3x1(arg0, arg1, arg2) {
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
}
block3x1.prototype = Object.create(blockExpression.prototype);
block3x1.prototype._type = "block3x1";

function block3x2(type, variables, expressions) {
    this.type = type;
    this.variables = variables;
    this.expressions = expressions;
}
block3x2.prototype = Object.create(blockExpression.prototype);
block3x2.prototype._type = "block3x2";

function block4x1(arg0, arg1, arg2, arg3) {
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
}
block4x1.prototype = Object.create(blockExpression.prototype);
block4x1.prototype._type = "block4x1";

function block5x1(arg0, arg1, arg2, arg3, arg4) {
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
    this.arg4 = arg4;
}
block5x1.prototype = Object.create(blockExpression.prototype);
block5x1.prototype._type = "block5x1";

function block1x1(expressions) {
    this.expressions = expressions;
}
block1x1.prototype = Object.create(blockExpression.prototype);
block1x1.prototype._type = "block1x1";

function condition3x1(test, ifTrue, ifFalse) {
    this.test = test;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
}
condition3x1.prototype = Object.create(conditionalExpression.prototype);
condition3x1.prototype._type = "condition3x1";

function condition4x1(test, ifTrue, ifFalse, type) {
    this.test = test;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
    this.type = type;
}
condition4x1.prototype = Object.create(conditionalExpression.prototype);
condition4x1.prototype._type = "condition4x1";

function ifThen2x1(test, ifTrue) {
    this.test = test;
    this.ifTrue = ifTrue;
}
ifThen2x1.prototype = Object.create(conditionalExpression.prototype);
ifThen2x1.prototype._type = "ifThen2x1";

function ifThenElse3x1(test, ifTrue, ifFalse) {
    this.test = test;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
}
ifThenElse3x1.prototype = Object.create(conditionalExpression.prototype);
ifThenElse3x1.prototype._type = "ifThenElse3x1";

function constant1x1(value) {
    this.value = value;
}
constant1x1.prototype = Object.create(constantExpression.prototype);
constant1x1.prototype._type = "constant1x1";

function constant2x1(value, type) {
    this.value = value;
    this.type = type;
}
constant2x1.prototype = Object.create(constantExpression.prototype);
constant2x1.prototype._type = "constant2x1";

function empty0x1() {

}
empty0x1.prototype = Object.create(defaultExpression.prototype);
empty0x1.prototype._type = "empty0x1";

function default1x1(type) {
    this.type = type;
}
default1x1.prototype = Object.create(defaultExpression.prototype);
default1x1.prototype._type = "default1x1";

function arrayAccess2x1(array, indexes) {
    this.array = array;
    this.indexes = indexes;
}
arrayAccess2x1.prototype = Object.create(indexExpression.prototype);
arrayAccess2x1.prototype._type = "arrayAccess2x1";

function property3x1(instance, propertyName, theArguments) {
    this.instance = instance;
    this.propertyName = propertyName;
    this.arguments = theArguments;
}
property3x1.prototype = Object.create(indexExpression.prototype);
property3x1.prototype._type = "property3x1";

function property3x2(expression, type, propertyName) {
    this.expression = expression;
    this.type = type;
    this.propertyName = propertyName;
}
property3x2.prototype = Object.create(memberExpression.prototype);
property3x2.prototype._type = "property3x2";

function property2x1(expression, propertyName) {
    this.expression = expression;
    this.propertyName = propertyName;
}
property2x1.prototype = Object.create(memberExpression.prototype);
property2x1.prototype._type = "property2x1";

function invoke2x1(expression, theArguments) {
    this.expression = expression;
    this.arguments = theArguments;
}
invoke2x1.prototype = Object.create(invocationExpression.prototype);
invoke2x1.prototype._type = "invoke2x1";

function lambda2x1(body, parameters) {
    this.body = body;
    this.parameters = parameters;
}
lambda2x1.prototype = Object.create(lambdaExpression.prototype);
lambda2x1.prototype._type = "lambda2x1";

function lambda3x1(body, tailCall, parameters) {
    this.body = body;
    this.tailCall = tailCall;
    this.parameters = parameters;
}
lambda3x1.prototype = Object.create(lambdaExpression.prototype);
lambda3x1.prototype._type = "lambda3x1";

function lambda3x2(delegateType, body, parameters) {
    this.delegateType = delegateType;
    this.body = body;
    this.parameters = parameters;
}
lambda3x2.prototype = Object.create(lambdaExpression.prototype);
lambda3x2.prototype._type = "lambda3x2";

function lambda3x3(body, name, parameters) {
    this.body = body;
    this.name = name;
    this.parameters = parameters;
}
lambda3x3.prototype = Object.create(lambdaExpression.prototype);
lambda3x3.prototype._type = "lambda3x3";

function lambda4x1(delegateType, body, tailCall, parameters) {
    this.delegateType = delegateType;
    this.body = body;
    this.tailCall = tailCall;
    this.parameters = parameters;
}
lambda4x1.prototype = Object.create(lambdaExpression.prototype);
lambda4x1.prototype._type = "lambda4x1";

function lambda4x2(body, name, tailCall, parameters) {
    this.body = body;
    this.name = name;
    this.tailCall = tailCall;
    this.parameters = parameters;
}
lambda4x2.prototype = Object.create(lambdaExpression.prototype);
lambda4x2.prototype._type = "lambda4x2";

function lambda4x3(delegateType, body, name, parameters) {
    this.delegateType = delegateType;
    this.body = body;
    this.name = name;
    this.parameters = parameters;
}
lambda4x3.prototype = Object.create(lambdaExpression.prototype);
lambda4x3.prototype._type = "lambda4x3";

function lambda5x1(delegateType, body, name, tailCall, parameters) {
    this.delegateType = delegateType;
    this.body = body;
    this.name = name;
    this.tailCall = tailCall;
    this.parameters = parameters;
}
lambda5x1.prototype = Object.create(lambdaExpression.prototype);
lambda5x1.prototype._type = "lambda5x1";

function listInit2x1(newExpression, initializers) {
    this.newExpression = newExpression;
    this.initializers = initializers;
}
listInit2x1.prototype = Object.create(listInitExpression.prototype);
listInit2x1.prototype._type = "listInit2x1";

function loop1x1(body) {
    this.body = body;
}
loop1x1.prototype = Object.create(loopExpression.prototype);
loop1x1.prototype._type = "loop1x1";

function field2x1(expression, fieldName) {
    this.expression = expression;
    this.fieldName = fieldName;
}
field2x1.prototype = Object.create(memberExpression.prototype);
field2x1.prototype._type = "field2x1";

function field3x1(expression, type, fieldName) {
    this.expression = expression;
    this.type = type;
    this.fieldName = fieldName;
}
field3x1.prototype = Object.create(memberExpression.prototype);
field3x1.prototype._type = "field3x1";

function propertyOrField2x1(expression, propertyOrFieldName) {
    this.expression = expression;
    this.propertyOrFieldName = propertyOrFieldName;
}
propertyOrField2x1.prototype = Object.create(memberExpression.prototype);
propertyOrField2x1.prototype._type = "propertyOrField2x1";

function call4x1(instance, methodName, typeArguments, theArguments) {
    this.instance = instance;
    this.methodName = methodName;
    this.typeArguments = typeArguments;
    this.arguments = theArguments;
}
call4x1.prototype = Object.create(methodCallExpression.prototype);
call4x1.prototype._type = "call4x1";

function call4x2(type, methodName, typeArguments, theArguments) {
    this.type = type;
    this.methodName = methodName;
    this.typeArguments = typeArguments;
    this.arguments = theArguments;
}
call4x2.prototype = Object.create(methodCallExpression.prototype);
call4x2.prototype._type = "call4x2";

function newArrayInit2x1(type, initializers) {
    this.type = type;
    this.initializers = initializers;
}
newArrayInit2x1.prototype = Object.create(newArrayExpression.prototype);
newArrayInit2x1.prototype._type = "newArrayInit2x1";

function newArrayBounds2x1(type, bounds) {
    this.type = type;
    this.bounds = bounds;
}
newArrayBounds2x1.prototype = Object.create(newArrayExpression.prototype);
newArrayBounds2x1.prototype._type = "newArrayBounds2x1";

function new1x1(type) {
    this.type = type;
}
new1x1.prototype = Object.create(newExpression.prototype);
new1x1.prototype._type = "new1x1";

function parameter1x1(type) {
    this.type = type;
}
parameter1x1.prototype = Object.create(parameterExpression.prototype);
parameter1x1.prototype._type = "parameter1x1";

function parameter2x1(type, name) {
    this.type = type;
    this.name = name;
}
parameter2x1.prototype = Object.create(parameterExpression.prototype);
parameter2x1.prototype._type = "parameter2x1";

function variable1x1(type) {
    this.type = type;
}
variable1x1.prototype = Object.create(parameterExpression.prototype);
variable1x1.prototype._type = "variable1x1";

function variable2x1(type, name) {
    this.type = type;
    this.name = name;
}
variable2x1.prototype = Object.create(parameterExpression.prototype);
variable2x1.prototype._type = "variable2x1";

function runtimeVariables1x1(variables) {
    this.variables = variables;
}
runtimeVariables1x1.prototype = Object.create(runtimeVariablesExpression.prototype);
runtimeVariables1x1.prototype._type = "runtimeVariables1x1";

function tryFault2x1(body, fault) {
    this.body = body;
    this.fault = fault;
}
tryFault2x1.prototype = Object.create(tryExpression.prototype);
tryFault2x1.prototype._type = "tryFault2x1";

function tryFinally2x1(body, theFinally) {
    this.body = body;
    this.finally = theFinally;
}
tryFinally2x1.prototype = Object.create(tryExpression.prototype);
tryFinally2x1.prototype._type = "tryFinally2x1";

function typeIs2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
typeIs2x1.prototype = Object.create(typeBinaryExpression.prototype);
typeIs2x1.prototype._type = "typeIs2x1";

function typeEqual2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
typeEqual2x1.prototype = Object.create(typeBinaryExpression.prototype);
typeEqual2x1.prototype._type = "typeEqual2x1";

function negate1x1(expression) {
    this.expression = expression;
}
negate1x1.prototype = Object.create(unaryExpression.prototype);
negate1x1.prototype._type = "negate1x1";

function unaryPlus1x1(expression) {
    this.expression = expression;
}
unaryPlus1x1.prototype = Object.create(unaryExpression.prototype);
unaryPlus1x1.prototype._type = "unaryPlus1x1";

function negateChecked1x1(expression) {
    this.expression = expression;
}
negateChecked1x1.prototype = Object.create(unaryExpression.prototype);
negateChecked1x1.prototype._type = "negateChecked1x1";

function not1x1(expression) {
    this.expression = expression;
}
not1x1.prototype = Object.create(unaryExpression.prototype);
not1x1.prototype._type = "not1x1";

function isFalse1x1(expression) {
    this.expression = expression;
}
isFalse1x1.prototype = Object.create(unaryExpression.prototype);
isFalse1x1.prototype._type = "isFalse1x1";

function isTrue1x1(expression) {
    this.expression = expression;
}
isTrue1x1.prototype = Object.create(unaryExpression.prototype);
isTrue1x1.prototype._type = "isTrue1x1";

function onesComplement1x1(expression) {
    this.expression = expression;
}
onesComplement1x1.prototype = Object.create(unaryExpression.prototype);
onesComplement1x1.prototype._type = "onesComplement1x1";

function typeAs2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
typeAs2x1.prototype = Object.create(unaryExpression.prototype);
typeAs2x1.prototype._type = "typeAs2x1";

function unbox2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
unbox2x1.prototype = Object.create(unaryExpression.prototype);
unbox2x1.prototype._type = "unbox2x1";

function convert2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
convert2x1.prototype = Object.create(unaryExpression.prototype);
convert2x1.prototype._type = "convert2x1";

function convertChecked2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
convertChecked2x1.prototype = Object.create(unaryExpression.prototype);
convertChecked2x1.prototype._type = "convertChecked2x1";

function arrayLength1x1(array) {
    this.array = array;
}
arrayLength1x1.prototype = Object.create(unaryExpression.prototype);
arrayLength1x1.prototype._type = "arrayLength1x1";

function quote1x1(expression) {
    this.expression = expression;
}
quote1x1.prototype = Object.create(unaryExpression.prototype);
quote1x1.prototype._type = "quote1x1";

function rethrow0x1() {

}
rethrow0x1.prototype = Object.create(unaryExpression.prototype);
rethrow0x1.prototype._type = "rethrow0x1";

function rethrow1x1(type) {
    this.type = type;
}
rethrow1x1.prototype = Object.create(unaryExpression.prototype);
rethrow1x1.prototype._type = "rethrow1x1";

function throw1x1(value) {
    this.value = value;
}
throw1x1.prototype = Object.create(unaryExpression.prototype);
throw1x1.prototype._type = "throw1x1";

function throw2x1(value, type) {
    this.value = value;
    this.type = type;
}
throw2x1.prototype = Object.create(unaryExpression.prototype);
throw2x1.prototype._type = "throw2x1";

function increment1x1(expression) {
    this.expression = expression;
}
increment1x1.prototype = Object.create(unaryExpression.prototype);
increment1x1.prototype._type = "increment1x1";

function decrement1x1(expression) {
    this.expression = expression;
}
decrement1x1.prototype = Object.create(unaryExpression.prototype);
decrement1x1.prototype._type = "decrement1x1";

function preIncrementAssign1x1(expression) {
    this.expression = expression;
}
preIncrementAssign1x1.prototype = Object.create(unaryExpression.prototype);
preIncrementAssign1x1.prototype._type = "preIncrementAssign1x1";

function preDecrementAssign1x1(expression) {
    this.expression = expression;
}
preDecrementAssign1x1.prototype = Object.create(unaryExpression.prototype);
preDecrementAssign1x1.prototype._type = "preDecrementAssign1x1";

function postIncrementAssign1x1(expression) {
    this.expression = expression;
}
postIncrementAssign1x1.prototype = Object.create(unaryExpression.prototype);
postIncrementAssign1x1.prototype._type = "postIncrementAssign1x1";

function postDecrementAssign1x1(expression) {
    this.expression = expression;
}
postDecrementAssign1x1.prototype = Object.create(unaryExpression.prototype);
postDecrementAssign1x1.prototype._type = "postDecrementAssign1x1";

expression.assign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new assign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.equal = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new equal2x1(arguments[0], arguments[1]);
        }
    }
};

expression.referenceEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new referenceEqual2x1(arguments[0], arguments[1]);
        }
    }
};

expression.notEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new notEqual2x1(arguments[0], arguments[1]);
        }
    }
};

expression.referenceNotEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new referenceNotEqual2x1(arguments[0], arguments[1]);
        }
    }
};

expression.greaterThan = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new greaterThan2x1(arguments[0], arguments[1]);
        }
    }
};

expression.lessThan = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new lessThan2x1(arguments[0], arguments[1]);
        }
    }
};

expression.greaterThanOrEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new greaterThanOrEqual2x1(arguments[0], arguments[1]);
        }
    }
};

expression.lessThanOrEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new lessThanOrEqual2x1(arguments[0], arguments[1]);
        }
    }
};

expression.andAlso = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new andAlso2x1(arguments[0], arguments[1]);
        }
    }
};

expression.orElse = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new orElse2x1(arguments[0], arguments[1]);
        }
    }
};

expression.coalesce = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new coalesce2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof lambdaExpression)) {
            return new coalesce3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.add = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new add2x1(arguments[0], arguments[1]);
        }
    }
};

expression.addAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new addAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.addAssignChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new addAssignChecked2x1(arguments[0], arguments[1]);
        }
    }
};

expression.addChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new addChecked2x1(arguments[0], arguments[1]);
        }
    }
};

expression.subtract = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtract2x1(arguments[0], arguments[1]);
        }
    }
};

expression.subtractAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtractAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.subtractAssignChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtractAssignChecked2x1(arguments[0], arguments[1]);
        }
    }
};

expression.subtractChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtractChecked2x1(arguments[0], arguments[1]);
        }
    }
};

expression.divide = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new divide2x1(arguments[0], arguments[1]);
        }
    }
};

expression.divideAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new divideAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.modulo = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new modulo2x1(arguments[0], arguments[1]);
        }
    }
};

expression.moduloAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new moduloAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.multiply = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiply2x1(arguments[0], arguments[1]);
        }
    }
};

expression.multiplyAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiplyAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.multiplyAssignChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiplyAssignChecked2x1(arguments[0], arguments[1]);
        }
    }
};

expression.multiplyChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiplyChecked2x1(arguments[0], arguments[1]);
        }
    }
};

expression.leftShift = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new leftShift2x1(arguments[0], arguments[1]);
        }
    }
};

expression.leftShiftAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new leftShiftAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.rightShift = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new rightShift2x1(arguments[0], arguments[1]);
        }
    }
};

expression.rightShiftAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new rightShiftAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.and = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new and2x1(arguments[0], arguments[1]);
        }
    }
};

expression.andAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new andAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.or = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new or2x1(arguments[0], arguments[1]);
        }
    }
};

expression.orAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new orAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.exclusiveOr = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new exclusiveOr2x1(arguments[0], arguments[1]);
        }
    }
};

expression.exclusiveOrAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new exclusiveOrAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.power = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new power2x1(arguments[0], arguments[1]);
        }
    }
};

expression.powerAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new powerAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.arrayIndex = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new arrayIndex2x1(arguments[0], arguments[1]);
        }
    }
};

expression.block = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new block2x1(arguments[0], arguments[1]);
        }
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof Array)) {
            return new block2x2(arguments[0], arguments[1]);
        }
        if ((arguments[0] instanceof Array) && (arguments[1] instanceof Array)) {
            return new block2x3(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression)) {
            return new block3x1(arguments[0], arguments[1], arguments[2]);
        }
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof Array) && (arguments[2] instanceof Array)) {
            return new block3x2(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (arguments[3] instanceof expression)) {
            return new block4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
    if (arguments.length == 5) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (arguments[3] instanceof expression) && (arguments[4] instanceof expression)) {
            return new block5x1(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
        }
    }
    if (arguments.length == 1) {
        if ((arguments[0] instanceof Array)) {
            return new block1x1(arguments[0]);
        }
    }
};

expression.condition = function () {
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression)) {
            return new condition3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (arguments[3] instanceof runtimeType)) {
            return new condition4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.ifThen = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new ifThen2x1(arguments[0], arguments[1]);
        }
    }
};

expression.ifThenElse = function () {
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression)) {
            return new ifThenElse3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.constant = function () {
    if (arguments.length == 1) {
        if ((true)) {
            return new constant1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((true) && (arguments[1] instanceof runtimeType)) {
            return new constant2x1(arguments[0], arguments[1]);
        }
    }
};

expression.empty = function () {
    if (arguments.length == 0) {
        return new empty0x1();
    }
};

expression.default = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new default1x1(arguments[0]);
        }
    }
};

expression.arrayAccess = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof Array)) {
            return new arrayAccess2x1(arguments[0], arguments[1]);
        }
    }
};

expression.property = function () {
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string") && (arguments[2] instanceof Array)) {
            return new property3x1(arguments[0], arguments[1], arguments[2]);
        }
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType) && (typeof arguments[2] == "string")) {
            return new property3x2(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string")) {
            return new property2x1(arguments[0], arguments[1]);
        }
    }
};

expression.invoke = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof Array)) {
            return new invoke2x1(arguments[0], arguments[1]);
        }
    }
};

expression.lambda = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof Array)) {
            return new lambda2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "boolean") && (arguments[2] instanceof Array)) {
            return new lambda3x1(arguments[0], arguments[1], arguments[2]);
        }
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof expression) && (arguments[2] instanceof Array)) {
            return new lambda3x2(arguments[0], arguments[1], arguments[2]);
        }
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string") && (arguments[2] instanceof Array)) {
            return new lambda3x3(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof expression) && (typeof arguments[2] == "boolean") && (arguments[3] instanceof Array)) {
            return new lambda4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string") && (typeof arguments[2] == "boolean") && (arguments[3] instanceof Array)) {
            return new lambda4x2(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof expression) && (typeof arguments[2] == "string") && (arguments[3] instanceof Array)) {
            return new lambda4x3(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
    if (arguments.length == 5) {
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof expression) && (typeof arguments[2] == "string") && (typeof arguments[3] == "boolean") && (arguments[4] instanceof Array)) {
            return new lambda5x1(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
        }
    }
};

expression.listInit = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof newExpression) && (arguments[1] instanceof Array)) {
            return new listInit2x1(arguments[0], arguments[1]);
        }
    }
};

expression.loop = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new loop1x1(arguments[0]);
        }
    }
};

expression.field = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string")) {
            return new field2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType) && (typeof arguments[2] == "string")) {
            return new field3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.propertyOrField = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string")) {
            return new propertyOrField2x1(arguments[0], arguments[1]);
        }
    }
};

expression.call = function () {
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string") && (arguments[2] instanceof Array) && (arguments[3] instanceof Array)) {
            return new call4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
        if ((arguments[0] instanceof runtimeType) && (typeof arguments[1] == "string") && (arguments[2] instanceof Array) && (arguments[3] instanceof Array)) {
            return new call4x2(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.newArrayInit = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof Array)) {
            return new newArrayInit2x1(arguments[0], arguments[1]);
        }
    }
};

expression.newArrayBounds = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof Array)) {
            return new newArrayBounds2x1(arguments[0], arguments[1]);
        }
    }
};

expression.new = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new new1x1(arguments[0]);
        }
    }
};

expression.parameter = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new parameter1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeType) && (typeof arguments[1] == "string")) {
            return new parameter2x1(arguments[0], arguments[1]);
        }
    }
};

expression.variable = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new variable1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeType) && (typeof arguments[1] == "string")) {
            return new variable2x1(arguments[0], arguments[1]);
        }
    }
};

expression.runtimeVariables = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof Array)) {
            return new runtimeVariables1x1(arguments[0]);
        }
    }
};

expression.tryFault = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new tryFault2x1(arguments[0], arguments[1]);
        }
    }
};

expression.tryFinally = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new tryFinally2x1(arguments[0], arguments[1]);
        }
    }
};

expression.typeIs = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new typeIs2x1(arguments[0], arguments[1]);
        }
    }
};

expression.typeEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new typeEqual2x1(arguments[0], arguments[1]);
        }
    }
};

expression.negate = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new negate1x1(arguments[0]);
        }
    }
};

expression.unaryPlus = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new unaryPlus1x1(arguments[0]);
        }
    }
};

expression.negateChecked = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new negateChecked1x1(arguments[0]);
        }
    }
};

expression.not = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new not1x1(arguments[0]);
        }
    }
};

expression.isFalse = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new isFalse1x1(arguments[0]);
        }
    }
};

expression.isTrue = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new isTrue1x1(arguments[0]);
        }
    }
};

expression.onesComplement = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new onesComplement1x1(arguments[0]);
        }
    }
};

expression.typeAs = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new typeAs2x1(arguments[0], arguments[1]);
        }
    }
};

expression.unbox = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new unbox2x1(arguments[0], arguments[1]);
        }
    }
};

expression.convert = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new convert2x1(arguments[0], arguments[1]);
        }
    }
};

expression.convertChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new convertChecked2x1(arguments[0], arguments[1]);
        }
    }
};

expression.arrayLength = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new arrayLength1x1(arguments[0]);
        }
    }
};

expression.quote = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new quote1x1(arguments[0]);
        }
    }
};

expression.rethrow = function () {
    if (arguments.length == 0) {
        return new rethrow0x1();
    }
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new rethrow1x1(arguments[0]);
        }
    }
};

expression.throw = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new throw1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new throw2x1(arguments[0], arguments[1]);
        }
    }
};

expression.increment = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new increment1x1(arguments[0]);
        }
    }
};

expression.decrement = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new decrement1x1(arguments[0]);
        }
    }
};

expression.preIncrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new preIncrementAssign1x1(arguments[0]);
        }
    }
};

expression.preDecrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new preDecrementAssign1x1(arguments[0]);
        }
    }
};

expression.postIncrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new postIncrementAssign1x1(arguments[0]);
        }
    }
};

expression.postDecrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new postDecrementAssign1x1(arguments[0]);
        }
    }
};

expression.prototype.assign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new assign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.equal = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new equal2x1(self, arguments[0]);
        }
    }
};

expression.prototype.referenceEqual = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new referenceEqual2x1(self, arguments[0]);
        }
    }
};

expression.prototype.notEqual = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new notEqual2x1(self, arguments[0]);
        }
    }
};

expression.prototype.referenceNotEqual = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new referenceNotEqual2x1(self, arguments[0]);
        }
    }
};

expression.prototype.greaterThan = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new greaterThan2x1(self, arguments[0]);
        }
    }
};

expression.prototype.lessThan = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new lessThan2x1(self, arguments[0]);
        }
    }
};

expression.prototype.greaterThanOrEqual = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new greaterThanOrEqual2x1(self, arguments[0]);
        }
    }
};

expression.prototype.lessThanOrEqual = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new lessThanOrEqual2x1(self, arguments[0]);
        }
    }
};

expression.prototype.andAlso = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new andAlso2x1(self, arguments[0]);
        }
    }
};

expression.prototype.orElse = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new orElse2x1(self, arguments[0]);
        }
    }
};

expression.prototype.coalesce = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new coalesce2x1(self, arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof lambdaExpression)) {
            return new coalesce3x1(self, arguments[0], arguments[1]);
        }
    }
};

expression.prototype.add = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new add2x1(self, arguments[0]);
        }
    }
};

expression.prototype.addAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new addAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.addAssignChecked = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new addAssignChecked2x1(self, arguments[0]);
        }
    }
};

expression.prototype.addChecked = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new addChecked2x1(self, arguments[0]);
        }
    }
};

expression.prototype.subtract = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new subtract2x1(self, arguments[0]);
        }
    }
};

expression.prototype.subtractAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new subtractAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.subtractAssignChecked = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new subtractAssignChecked2x1(self, arguments[0]);
        }
    }
};

expression.prototype.subtractChecked = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new subtractChecked2x1(self, arguments[0]);
        }
    }
};

expression.prototype.divide = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new divide2x1(self, arguments[0]);
        }
    }
};

expression.prototype.divideAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new divideAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.modulo = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new modulo2x1(self, arguments[0]);
        }
    }
};

expression.prototype.moduloAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new moduloAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.multiply = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new multiply2x1(self, arguments[0]);
        }
    }
};

expression.prototype.multiplyAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new multiplyAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.multiplyAssignChecked = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new multiplyAssignChecked2x1(self, arguments[0]);
        }
    }
};

expression.prototype.multiplyChecked = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new multiplyChecked2x1(self, arguments[0]);
        }
    }
};

expression.prototype.leftShift = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new leftShift2x1(self, arguments[0]);
        }
    }
};

expression.prototype.leftShiftAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new leftShiftAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.rightShift = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new rightShift2x1(self, arguments[0]);
        }
    }
};

expression.prototype.rightShiftAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new rightShiftAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.and = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new and2x1(self, arguments[0]);
        }
    }
};

expression.prototype.andAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new andAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.or = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new or2x1(self, arguments[0]);
        }
    }
};

expression.prototype.orAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new orAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.exclusiveOr = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new exclusiveOr2x1(self, arguments[0]);
        }
    }
};

expression.prototype.exclusiveOrAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new exclusiveOrAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.power = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new power2x1(self, arguments[0]);
        }
    }
};

expression.prototype.powerAssign = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new powerAssign2x1(self, arguments[0]);
        }
    }
};

expression.prototype.arrayIndex = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new arrayIndex2x1(self, arguments[0]);
        }
    }
};

expression.prototype.block = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new block2x1(self, arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new block3x1(self, arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression)) {
            return new block4x1(self, arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (arguments[3] instanceof expression)) {
            return new block5x1(self, arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.prototype.condition = function () {
    self = this;
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new condition3x1(self, arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeType)) {
            return new condition4x1(self, arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.prototype.ifThen = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new ifThen2x1(self, arguments[0]);
        }
    }
};

expression.prototype.ifThenElse = function () {
    self = this;
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new ifThenElse3x1(self, arguments[0], arguments[1]);
        }
    }
};

expression.prototype.arrayAccess = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof Array)) {
            return new arrayAccess2x1(self, arguments[0]);
        }
    }
};

expression.prototype.property = function () {
    self = this;
    if (arguments.length == 2) {
        if ((typeof arguments[0] == "string") && (arguments[1] instanceof Array)) {
            return new property3x1(self, arguments[0], arguments[1]);
        }
        if ((arguments[0] instanceof runtimeType) && (typeof arguments[1] == "string")) {
            return new property3x2(self, arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 1) {
        if ((typeof arguments[0] == "string")) {
            return new property2x1(self, arguments[0]);
        }
    }
};

expression.prototype.invoke = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof Array)) {
            return new invoke2x1(self, arguments[0]);
        }
    }
};

expression.prototype.lambda = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof Array)) {
            return new lambda2x1(self, arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((typeof arguments[0] == "boolean") && (arguments[1] instanceof Array)) {
            return new lambda3x1(self, arguments[0], arguments[1]);
        }
        if ((typeof arguments[0] == "string") && (arguments[1] instanceof Array)) {
            return new lambda3x3(self, arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((typeof arguments[0] == "string") && (typeof arguments[1] == "boolean") && (arguments[2] instanceof Array)) {
            return new lambda4x2(self, arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.prototype.loop = function () {
    self = this;
    if (arguments.length == 0) {
        return new loop1x1(self);
    }
};

expression.prototype.field = function () {
    self = this;
    if (arguments.length == 1) {
        if ((typeof arguments[0] == "string")) {
            return new field2x1(self, arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeType) && (typeof arguments[1] == "string")) {
            return new field3x1(self, arguments[0], arguments[1]);
        }
    }
};

expression.prototype.propertyOrField = function () {
    self = this;
    if (arguments.length == 1) {
        if ((typeof arguments[0] == "string")) {
            return new propertyOrField2x1(self, arguments[0]);
        }
    }
};

expression.prototype.call = function () {
    self = this;
    if (arguments.length == 3) {
        if ((typeof arguments[0] == "string") && (arguments[1] instanceof Array) && (arguments[2] instanceof Array)) {
            return new call4x1(self, arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.prototype.tryFault = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new tryFault2x1(self, arguments[0]);
        }
    }
};

expression.prototype.tryFinally = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new tryFinally2x1(self, arguments[0]);
        }
    }
};

expression.prototype.typeIs = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new typeIs2x1(self, arguments[0]);
        }
    }
};

expression.prototype.typeEqual = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new typeEqual2x1(self, arguments[0]);
        }
    }
};

expression.prototype.negate = function () {
    self = this;
    if (arguments.length == 0) {
        return new negate1x1(self);
    }
};

expression.prototype.unaryPlus = function () {
    self = this;
    if (arguments.length == 0) {
        return new unaryPlus1x1(self);
    }
};

expression.prototype.negateChecked = function () {
    self = this;
    if (arguments.length == 0) {
        return new negateChecked1x1(self);
    }
};

expression.prototype.not = function () {
    self = this;
    if (arguments.length == 0) {
        return new not1x1(self);
    }
};

expression.prototype.isFalse = function () {
    self = this;
    if (arguments.length == 0) {
        return new isFalse1x1(self);
    }
};

expression.prototype.isTrue = function () {
    self = this;
    if (arguments.length == 0) {
        return new isTrue1x1(self);
    }
};

expression.prototype.onesComplement = function () {
    self = this;
    if (arguments.length == 0) {
        return new onesComplement1x1(self);
    }
};

expression.prototype.typeAs = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new typeAs2x1(self, arguments[0]);
        }
    }
};

expression.prototype.unbox = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new unbox2x1(self, arguments[0]);
        }
    }
};

expression.prototype.convert = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new convert2x1(self, arguments[0]);
        }
    }
};

expression.prototype.convertChecked = function () {
    self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new convertChecked2x1(self, arguments[0]);
        }
    }
};

expression.prototype.arrayLength = function () {
    self = this;
    if (arguments.length == 0) {
        return new arrayLength1x1(self);
    }
};

expression.prototype.quote = function () {
    self = this;
    if (arguments.length == 0) {
        return new quote1x1(self);
    }
};

expression.prototype.throw = function () {
    self = this;
    if (arguments.length == 0) {
        return new throw1x1(self);
    }
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new throw2x1(self, arguments[0]);
        }
    }
};

expression.prototype.increment = function () {
    self = this;
    if (arguments.length == 0) {
        return new increment1x1(self);
    }
};

expression.prototype.decrement = function () {
    self = this;
    if (arguments.length == 0) {
        return new decrement1x1(self);
    }
};

expression.prototype.preIncrementAssign = function () {
    self = this;
    if (arguments.length == 0) {
        return new preIncrementAssign1x1(self);
    }
};

expression.prototype.preDecrementAssign = function () {
    self = this;
    if (arguments.length == 0) {
        return new preDecrementAssign1x1(self);
    }
};

expression.prototype.postIncrementAssign = function () {
    self = this;
    if (arguments.length == 0) {
        return new postIncrementAssign1x1(self);
    }
};

expression.prototype.postDecrementAssign = function () {
    self = this;
    if (arguments.length == 0) {
        return new postDecrementAssign1x1(self);
    }
};