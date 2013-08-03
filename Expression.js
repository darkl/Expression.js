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

function binaryExpression() {

}
binaryExpression.prototype = Object.create(expression.prototype);

function blockExpression() {

}
blockExpression.prototype = Object.create(expression.prototype);

function conditionalExpression() {

}
conditionalExpression.prototype = Object.create(expression.prototype);

function constantExpression() {

}
constantExpression.prototype = Object.create(expression.prototype);

function defaultExpression() {

}
defaultExpression.prototype = Object.create(expression.prototype);

function indexExpression() {

}
indexExpression.prototype = Object.create(expression.prototype);

function invocationExpression() {

}
invocationExpression.prototype = Object.create(expression.prototype);

function lambdaExpression() {

}
lambdaExpression.prototype = Object.create(expression.prototype);

function listInitExpression() {

}
listInitExpression.prototype = Object.create(expression.prototype);

function loopExpression() {

}
loopExpression.prototype = Object.create(expression.prototype);

function memberExpression() {

}
memberExpression.prototype = Object.create(expression.prototype);

function methodCallExpression() {

}
methodCallExpression.prototype = Object.create(expression.prototype);

function newArrayExpression() {

}
newArrayExpression.prototype = Object.create(expression.prototype);

function newExpression() {

}
newExpression.prototype = Object.create(expression.prototype);

function parameterExpression() {

}
parameterExpression.prototype = Object.create(expression.prototype);

function runtimeVariablesExpression() {

}
runtimeVariablesExpression.prototype = Object.create(expression.prototype);

function tryExpression() {

}
tryExpression.prototype = Object.create(expression.prototype);

function typeBinaryExpression() {

}
typeBinaryExpression.prototype = Object.create(expression.prototype);

function unaryExpression() {

}
unaryExpression.prototype = Object.create(expression.prototype);

function assign2x1(left, right) {
    this.left = left;
    this.right = right;
}
assign2x1.prototype = Object.create(binaryExpression.prototype);

function makeBinary3x1(binaryType, left, right) {
    this.binaryType = binaryType;
    this.left = left;
    this.right = right;
}
makeBinary3x1.prototype = Object.create(binaryExpression.prototype);

function makeBinary5x1(binaryType, left, right, liftToNull, method) {
    this.binaryType = binaryType;
    this.left = left;
    this.right = right;
    this.liftToNull = liftToNull;
    this.method = method;
}
makeBinary5x1.prototype = Object.create(binaryExpression.prototype);

function makeBinary6x1(binaryType, left, right, liftToNull, method, conversion) {
    this.binaryType = binaryType;
    this.left = left;
    this.right = right;
    this.liftToNull = liftToNull;
    this.method = method;
    this.conversion = conversion;
}
makeBinary6x1.prototype = Object.create(binaryExpression.prototype);

function equal2x1(left, right) {
    this.left = left;
    this.right = right;
}
equal2x1.prototype = Object.create(binaryExpression.prototype);

function equal4x1(left, right, liftToNull, method) {
    this.left = left;
    this.right = right;
    this.liftToNull = liftToNull;
    this.method = method;
}
equal4x1.prototype = Object.create(binaryExpression.prototype);

function referenceEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
referenceEqual2x1.prototype = Object.create(binaryExpression.prototype);

function notEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
notEqual2x1.prototype = Object.create(binaryExpression.prototype);

function notEqual4x1(left, right, liftToNull, method) {
    this.left = left;
    this.right = right;
    this.liftToNull = liftToNull;
    this.method = method;
}
notEqual4x1.prototype = Object.create(binaryExpression.prototype);

function referenceNotEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
referenceNotEqual2x1.prototype = Object.create(binaryExpression.prototype);

function greaterThan2x1(left, right) {
    this.left = left;
    this.right = right;
}
greaterThan2x1.prototype = Object.create(binaryExpression.prototype);

function greaterThan4x1(left, right, liftToNull, method) {
    this.left = left;
    this.right = right;
    this.liftToNull = liftToNull;
    this.method = method;
}
greaterThan4x1.prototype = Object.create(binaryExpression.prototype);

function lessThan2x1(left, right) {
    this.left = left;
    this.right = right;
}
lessThan2x1.prototype = Object.create(binaryExpression.prototype);

function lessThan4x1(left, right, liftToNull, method) {
    this.left = left;
    this.right = right;
    this.liftToNull = liftToNull;
    this.method = method;
}
lessThan4x1.prototype = Object.create(binaryExpression.prototype);

function greaterThanOrEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
greaterThanOrEqual2x1.prototype = Object.create(binaryExpression.prototype);

function greaterThanOrEqual4x1(left, right, liftToNull, method) {
    this.left = left;
    this.right = right;
    this.liftToNull = liftToNull;
    this.method = method;
}
greaterThanOrEqual4x1.prototype = Object.create(binaryExpression.prototype);

function lessThanOrEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
lessThanOrEqual2x1.prototype = Object.create(binaryExpression.prototype);

function lessThanOrEqual4x1(left, right, liftToNull, method) {
    this.left = left;
    this.right = right;
    this.liftToNull = liftToNull;
    this.method = method;
}
lessThanOrEqual4x1.prototype = Object.create(binaryExpression.prototype);

function andAlso2x1(left, right) {
    this.left = left;
    this.right = right;
}
andAlso2x1.prototype = Object.create(binaryExpression.prototype);

function andAlso3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
andAlso3x1.prototype = Object.create(binaryExpression.prototype);

function orElse2x1(left, right) {
    this.left = left;
    this.right = right;
}
orElse2x1.prototype = Object.create(binaryExpression.prototype);

function orElse3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
orElse3x1.prototype = Object.create(binaryExpression.prototype);

function coalesce2x1(left, right) {
    this.left = left;
    this.right = right;
}
coalesce2x1.prototype = Object.create(binaryExpression.prototype);

function coalesce3x1(left, right, conversion) {
    this.left = left;
    this.right = right;
    this.conversion = conversion;
}
coalesce3x1.prototype = Object.create(binaryExpression.prototype);

function add2x1(left, right) {
    this.left = left;
    this.right = right;
}
add2x1.prototype = Object.create(binaryExpression.prototype);

function add3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
add3x1.prototype = Object.create(binaryExpression.prototype);

function addAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
addAssign2x1.prototype = Object.create(binaryExpression.prototype);

function addAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
addAssign3x1.prototype = Object.create(binaryExpression.prototype);

function addAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
addAssign4x1.prototype = Object.create(binaryExpression.prototype);

function addAssignChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
addAssignChecked2x1.prototype = Object.create(binaryExpression.prototype);

function addAssignChecked3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
addAssignChecked3x1.prototype = Object.create(binaryExpression.prototype);

function addAssignChecked4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
addAssignChecked4x1.prototype = Object.create(binaryExpression.prototype);

function addChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
addChecked2x1.prototype = Object.create(binaryExpression.prototype);

function addChecked3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
addChecked3x1.prototype = Object.create(binaryExpression.prototype);

function subtract2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtract2x1.prototype = Object.create(binaryExpression.prototype);

function subtract3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
subtract3x1.prototype = Object.create(binaryExpression.prototype);

function subtractAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtractAssign2x1.prototype = Object.create(binaryExpression.prototype);

function subtractAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
subtractAssign3x1.prototype = Object.create(binaryExpression.prototype);

function subtractAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
subtractAssign4x1.prototype = Object.create(binaryExpression.prototype);

function subtractAssignChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtractAssignChecked2x1.prototype = Object.create(binaryExpression.prototype);

function subtractAssignChecked3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
subtractAssignChecked3x1.prototype = Object.create(binaryExpression.prototype);

function subtractAssignChecked4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
subtractAssignChecked4x1.prototype = Object.create(binaryExpression.prototype);

function subtractChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtractChecked2x1.prototype = Object.create(binaryExpression.prototype);

function subtractChecked3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
subtractChecked3x1.prototype = Object.create(binaryExpression.prototype);

function divide2x1(left, right) {
    this.left = left;
    this.right = right;
}
divide2x1.prototype = Object.create(binaryExpression.prototype);

function divide3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
divide3x1.prototype = Object.create(binaryExpression.prototype);

function divideAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
divideAssign2x1.prototype = Object.create(binaryExpression.prototype);

function divideAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
divideAssign3x1.prototype = Object.create(binaryExpression.prototype);

function divideAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
divideAssign4x1.prototype = Object.create(binaryExpression.prototype);

function modulo2x1(left, right) {
    this.left = left;
    this.right = right;
}
modulo2x1.prototype = Object.create(binaryExpression.prototype);

function modulo3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
modulo3x1.prototype = Object.create(binaryExpression.prototype);

function moduloAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
moduloAssign2x1.prototype = Object.create(binaryExpression.prototype);

function moduloAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
moduloAssign3x1.prototype = Object.create(binaryExpression.prototype);

function moduloAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
moduloAssign4x1.prototype = Object.create(binaryExpression.prototype);

function multiply2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiply2x1.prototype = Object.create(binaryExpression.prototype);

function multiply3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
multiply3x1.prototype = Object.create(binaryExpression.prototype);

function multiplyAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiplyAssign2x1.prototype = Object.create(binaryExpression.prototype);

function multiplyAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
multiplyAssign3x1.prototype = Object.create(binaryExpression.prototype);

function multiplyAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
multiplyAssign4x1.prototype = Object.create(binaryExpression.prototype);

function multiplyAssignChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiplyAssignChecked2x1.prototype = Object.create(binaryExpression.prototype);

function multiplyAssignChecked3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
multiplyAssignChecked3x1.prototype = Object.create(binaryExpression.prototype);

function multiplyAssignChecked4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
multiplyAssignChecked4x1.prototype = Object.create(binaryExpression.prototype);

function multiplyChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiplyChecked2x1.prototype = Object.create(binaryExpression.prototype);

function multiplyChecked3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
multiplyChecked3x1.prototype = Object.create(binaryExpression.prototype);

function leftShift2x1(left, right) {
    this.left = left;
    this.right = right;
}
leftShift2x1.prototype = Object.create(binaryExpression.prototype);

function leftShift3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
leftShift3x1.prototype = Object.create(binaryExpression.prototype);

function leftShiftAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
leftShiftAssign2x1.prototype = Object.create(binaryExpression.prototype);

function leftShiftAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
leftShiftAssign3x1.prototype = Object.create(binaryExpression.prototype);

function leftShiftAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
leftShiftAssign4x1.prototype = Object.create(binaryExpression.prototype);

function rightShift2x1(left, right) {
    this.left = left;
    this.right = right;
}
rightShift2x1.prototype = Object.create(binaryExpression.prototype);

function rightShift3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
rightShift3x1.prototype = Object.create(binaryExpression.prototype);

function rightShiftAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
rightShiftAssign2x1.prototype = Object.create(binaryExpression.prototype);

function rightShiftAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
rightShiftAssign3x1.prototype = Object.create(binaryExpression.prototype);

function rightShiftAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
rightShiftAssign4x1.prototype = Object.create(binaryExpression.prototype);

function and2x1(left, right) {
    this.left = left;
    this.right = right;
}
and2x1.prototype = Object.create(binaryExpression.prototype);

function and3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
and3x1.prototype = Object.create(binaryExpression.prototype);

function andAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
andAssign2x1.prototype = Object.create(binaryExpression.prototype);

function andAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
andAssign3x1.prototype = Object.create(binaryExpression.prototype);

function andAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
andAssign4x1.prototype = Object.create(binaryExpression.prototype);

function or2x1(left, right) {
    this.left = left;
    this.right = right;
}
or2x1.prototype = Object.create(binaryExpression.prototype);

function or3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
or3x1.prototype = Object.create(binaryExpression.prototype);

function orAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
orAssign2x1.prototype = Object.create(binaryExpression.prototype);

function orAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
orAssign3x1.prototype = Object.create(binaryExpression.prototype);

function orAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
orAssign4x1.prototype = Object.create(binaryExpression.prototype);

function exclusiveOr2x1(left, right) {
    this.left = left;
    this.right = right;
}
exclusiveOr2x1.prototype = Object.create(binaryExpression.prototype);

function exclusiveOr3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
exclusiveOr3x1.prototype = Object.create(binaryExpression.prototype);

function exclusiveOrAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
exclusiveOrAssign2x1.prototype = Object.create(binaryExpression.prototype);

function exclusiveOrAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
exclusiveOrAssign3x1.prototype = Object.create(binaryExpression.prototype);

function exclusiveOrAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
exclusiveOrAssign4x1.prototype = Object.create(binaryExpression.prototype);

function power2x1(left, right) {
    this.left = left;
    this.right = right;
}
power2x1.prototype = Object.create(binaryExpression.prototype);

function power3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
power3x1.prototype = Object.create(binaryExpression.prototype);

function powerAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
powerAssign2x1.prototype = Object.create(binaryExpression.prototype);

function powerAssign3x1(left, right, method) {
    this.left = left;
    this.right = right;
    this.method = method;
}
powerAssign3x1.prototype = Object.create(binaryExpression.prototype);

function powerAssign4x1(left, right, method, conversion) {
    this.left = left;
    this.right = right;
    this.method = method;
    this.conversion = conversion;
}
powerAssign4x1.prototype = Object.create(binaryExpression.prototype);

function arrayIndex2x1(array, index) {
    this.array = array;
    this.index = index;
}
arrayIndex2x1.prototype = Object.create(binaryExpression.prototype);

function arrayIndex2x2(array, indexes) {
    this.array = array;
    this.indexes = indexes;
}
arrayIndex2x2.prototype = Object.create(methodCallExpression.prototype);

function block2x1(arg0, arg1) {
    this.arg0 = arg0;
    this.arg1 = arg1;
}
block2x1.prototype = Object.create(blockExpression.prototype);

function block2x2(type, expressions) {
    this.type = type;
    this.expressions = expressions;
}
block2x2.prototype = Object.create(blockExpression.prototype);

function block3x1(arg0, arg1, arg2) {
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
}
block3x1.prototype = Object.create(blockExpression.prototype);

function block4x1(arg0, arg1, arg2, arg3) {
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
}
block4x1.prototype = Object.create(blockExpression.prototype);

function block5x1(arg0, arg1, arg2, arg3, arg4) {
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
    this.arg4 = arg4;
}
block5x1.prototype = Object.create(blockExpression.prototype);

function block1x1(expressions) {
    this.expressions = expressions;
}
block1x1.prototype = Object.create(blockExpression.prototype);

function condition3x1(test, ifTrue, ifFalse) {
    this.test = test;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
}
condition3x1.prototype = Object.create(conditionalExpression.prototype);

function condition4x1(test, ifTrue, ifFalse, type) {
    this.test = test;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
    this.type = type;
}
condition4x1.prototype = Object.create(conditionalExpression.prototype);

function ifThen2x1(test, ifTrue) {
    this.test = test;
    this.ifTrue = ifTrue;
}
ifThen2x1.prototype = Object.create(conditionalExpression.prototype);

function ifThenElse3x1(test, ifTrue, ifFalse) {
    this.test = test;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
}
ifThenElse3x1.prototype = Object.create(conditionalExpression.prototype);

function constant1x1(value) {
    this.value = value;
}
constant1x1.prototype = Object.create(constantExpression.prototype);

function constant2x1(value, type) {
    this.value = value;
    this.type = type;
}
constant2x1.prototype = Object.create(constantExpression.prototype);

function empty0x1() {

}
empty0x1.prototype = Object.create(defaultExpression.prototype);

function default1x1(type) {
    this.type = type;
}
default1x1.prototype = Object.create(defaultExpression.prototype);

function arrayAccess2x1(array, indexes) {
    this.array = array;
    this.indexes = indexes;
}
arrayAccess2x1.prototype = Object.create(indexExpression.prototype);

function property3x1(instance, propertyName, theArguments) {
    this.instance = instance;
    this.propertyName = propertyName;
    this.arguments = theArguments;
}
property3x1.prototype = Object.create(indexExpression.prototype);

function property3x2(instance, indexer, theArguments) {
    this.instance = instance;
    this.indexer = indexer;
    this.arguments = theArguments;
}
property3x2.prototype = Object.create(indexExpression.prototype);

function property3x3(expression, type, propertyName) {
    this.expression = expression;
    this.type = type;
    this.propertyName = propertyName;
}
property3x3.prototype = Object.create(memberExpression.prototype);

function property2x1(expression, propertyName) {
    this.expression = expression;
    this.propertyName = propertyName;
}
property2x1.prototype = Object.create(memberExpression.prototype);

function property2x2(expression, property) {
    this.expression = expression;
    this.property = property;
}
property2x2.prototype = Object.create(memberExpression.prototype);

function property2x3(expression, propertyAccessor) {
    this.expression = expression;
    this.propertyAccessor = propertyAccessor;
}
property2x3.prototype = Object.create(memberExpression.prototype);

function invoke2x1(expression, theArguments) {
    this.expression = expression;
    this.arguments = theArguments;
}
invoke2x1.prototype = Object.create(invocationExpression.prototype);

function lambda2x1(body, parameters) {
    this.body = body;
    this.parameters = parameters;
}
lambda2x1.prototype = Object.create(lambdaExpression.prototype);

function lambda3x1(body, tailCall, parameters) {
    this.body = body;
    this.tailCall = tailCall;
    this.parameters = parameters;
}
lambda3x1.prototype = Object.create(lambdaExpression.prototype);

function lambda3x2(delegateType, body, parameters) {
    this.delegateType = delegateType;
    this.body = body;
    this.parameters = parameters;
}
lambda3x2.prototype = Object.create(lambdaExpression.prototype);

function lambda4x1(delegateType, body, tailCall, parameters) {
    this.delegateType = delegateType;
    this.body = body;
    this.tailCall = tailCall;
    this.parameters = parameters;
}
lambda4x1.prototype = Object.create(lambdaExpression.prototype);

function listInit2x1(newExpression, initializers) {
    this.newExpression = newExpression;
    this.initializers = initializers;
}
listInit2x1.prototype = Object.create(listInitExpression.prototype);

function listInit3x1(newExpression, addMethod, initializers) {
    this.newExpression = newExpression;
    this.addMethod = addMethod;
    this.initializers = initializers;
}
listInit3x1.prototype = Object.create(listInitExpression.prototype);

function loop1x1(body) {
    this.body = body;
}
loop1x1.prototype = Object.create(loopExpression.prototype);

function field2x1(expression, field) {
    this.expression = expression;
    this.field = field;
}
field2x1.prototype = Object.create(memberExpression.prototype);

function field2x2(expression, fieldName) {
    this.expression = expression;
    this.fieldName = fieldName;
}
field2x2.prototype = Object.create(memberExpression.prototype);

function field3x1(expression, type, fieldName) {
    this.expression = expression;
    this.type = type;
    this.fieldName = fieldName;
}
field3x1.prototype = Object.create(memberExpression.prototype);

function propertyOrField2x1(expression, propertyOrFieldName) {
    this.expression = expression;
    this.propertyOrFieldName = propertyOrFieldName;
}
propertyOrField2x1.prototype = Object.create(memberExpression.prototype);

function makeMemberAccess2x1(expression, member) {
    this.expression = expression;
    this.member = member;
}
makeMemberAccess2x1.prototype = Object.create(memberExpression.prototype);

function call2x1(method, arg0) {
    this.method = method;
    this.arg0 = arg0;
}
call2x1.prototype = Object.create(methodCallExpression.prototype);

function call2x2(method, theArguments) {
    this.method = method;
    this.arguments = theArguments;
}
call2x2.prototype = Object.create(methodCallExpression.prototype);

function call2x3(instance, method) {
    this.instance = instance;
    this.method = method;
}
call2x3.prototype = Object.create(methodCallExpression.prototype);

function call3x1(method, arg0, arg1) {
    this.method = method;
    this.arg0 = arg0;
    this.arg1 = arg1;
}
call3x1.prototype = Object.create(methodCallExpression.prototype);

function call3x2(instance, method, theArguments) {
    this.instance = instance;
    this.method = method;
    this.arguments = theArguments;
}
call3x2.prototype = Object.create(methodCallExpression.prototype);

function call4x1(method, arg0, arg1, arg2) {
    this.method = method;
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
}
call4x1.prototype = Object.create(methodCallExpression.prototype);

function call4x2(instance, method, arg0, arg1) {
    this.instance = instance;
    this.method = method;
    this.arg0 = arg0;
    this.arg1 = arg1;
}
call4x2.prototype = Object.create(methodCallExpression.prototype);

function call4x3(instance, methodName, typeArguments, theArguments) {
    this.instance = instance;
    this.methodName = methodName;
    this.typeArguments = typeArguments;
    this.arguments = theArguments;
}
call4x3.prototype = Object.create(methodCallExpression.prototype);

function call4x4(type, methodName, typeArguments, theArguments) {
    this.type = type;
    this.methodName = methodName;
    this.typeArguments = typeArguments;
    this.arguments = theArguments;
}
call4x4.prototype = Object.create(methodCallExpression.prototype);

function call5x1(method, arg0, arg1, arg2, arg3) {
    this.method = method;
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
}
call5x1.prototype = Object.create(methodCallExpression.prototype);

function call5x2(instance, method, arg0, arg1, arg2) {
    this.instance = instance;
    this.method = method;
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
}
call5x2.prototype = Object.create(methodCallExpression.prototype);

function call6x1(method, arg0, arg1, arg2, arg3, arg4) {
    this.method = method;
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
    this.arg4 = arg4;
}
call6x1.prototype = Object.create(methodCallExpression.prototype);

function newArrayInit2x1(type, initializers) {
    this.type = type;
    this.initializers = initializers;
}
newArrayInit2x1.prototype = Object.create(newArrayExpression.prototype);

function newArrayBounds2x1(type, bounds) {
    this.type = type;
    this.bounds = bounds;
}
newArrayBounds2x1.prototype = Object.create(newArrayExpression.prototype);

function new1x1(constructor) {
    this.constructor = constructor;
}
new1x1.prototype = Object.create(newExpression.prototype);

function new1x2(type) {
    this.type = type;
}
new1x2.prototype = Object.create(newExpression.prototype);

function new2x1(constructor, theArguments) {
    this.constructor = constructor;
    this.arguments = theArguments;
}
new2x1.prototype = Object.create(newExpression.prototype);

function parameter1x1(type) {
    this.type = type;
}
parameter1x1.prototype = Object.create(parameterExpression.prototype);

function parameter2x1(type, name) {
    this.type = type;
    this.name = name;
}
parameter2x1.prototype = Object.create(parameterExpression.prototype);

function variable1x1(type) {
    this.type = type;
}
variable1x1.prototype = Object.create(parameterExpression.prototype);

function variable2x1(type, name) {
    this.type = type;
    this.name = name;
}
variable2x1.prototype = Object.create(parameterExpression.prototype);

function runtimeVariables1x1(variables) {
    this.variables = variables;
}
runtimeVariables1x1.prototype = Object.create(runtimeVariablesExpression.prototype);

function tryFault2x1(body, fault) {
    this.body = body;
    this.fault = fault;
}
tryFault2x1.prototype = Object.create(tryExpression.prototype);

function tryFinally2x1(body, theFinally) {
    this.body = body;
    this.finally = theFinally;
}
tryFinally2x1.prototype = Object.create(tryExpression.prototype);

function typeIs2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
typeIs2x1.prototype = Object.create(typeBinaryExpression.prototype);

function typeEqual2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
typeEqual2x1.prototype = Object.create(typeBinaryExpression.prototype);

function makeUnary3x1(unaryType, operand, type) {
    this.unaryType = unaryType;
    this.operand = operand;
    this.type = type;
}
makeUnary3x1.prototype = Object.create(unaryExpression.prototype);

function makeUnary4x1(unaryType, operand, type, method) {
    this.unaryType = unaryType;
    this.operand = operand;
    this.type = type;
    this.method = method;
}
makeUnary4x1.prototype = Object.create(unaryExpression.prototype);

function negate1x1(expression) {
    this.expression = expression;
}
negate1x1.prototype = Object.create(unaryExpression.prototype);

function negate2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
negate2x1.prototype = Object.create(unaryExpression.prototype);

function unaryPlus1x1(expression) {
    this.expression = expression;
}
unaryPlus1x1.prototype = Object.create(unaryExpression.prototype);

function unaryPlus2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
unaryPlus2x1.prototype = Object.create(unaryExpression.prototype);

function negateChecked1x1(expression) {
    this.expression = expression;
}
negateChecked1x1.prototype = Object.create(unaryExpression.prototype);

function negateChecked2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
negateChecked2x1.prototype = Object.create(unaryExpression.prototype);

function not1x1(expression) {
    this.expression = expression;
}
not1x1.prototype = Object.create(unaryExpression.prototype);

function not2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
not2x1.prototype = Object.create(unaryExpression.prototype);

function isFalse1x1(expression) {
    this.expression = expression;
}
isFalse1x1.prototype = Object.create(unaryExpression.prototype);

function isFalse2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
isFalse2x1.prototype = Object.create(unaryExpression.prototype);

function isTrue1x1(expression) {
    this.expression = expression;
}
isTrue1x1.prototype = Object.create(unaryExpression.prototype);

function isTrue2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
isTrue2x1.prototype = Object.create(unaryExpression.prototype);

function onesComplement1x1(expression) {
    this.expression = expression;
}
onesComplement1x1.prototype = Object.create(unaryExpression.prototype);

function onesComplement2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
onesComplement2x1.prototype = Object.create(unaryExpression.prototype);

function typeAs2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
typeAs2x1.prototype = Object.create(unaryExpression.prototype);

function unbox2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
unbox2x1.prototype = Object.create(unaryExpression.prototype);

function convert2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
convert2x1.prototype = Object.create(unaryExpression.prototype);

function convert3x1(expression, type, method) {
    this.expression = expression;
    this.type = type;
    this.method = method;
}
convert3x1.prototype = Object.create(unaryExpression.prototype);

function convertChecked2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
convertChecked2x1.prototype = Object.create(unaryExpression.prototype);

function convertChecked3x1(expression, type, method) {
    this.expression = expression;
    this.type = type;
    this.method = method;
}
convertChecked3x1.prototype = Object.create(unaryExpression.prototype);

function arrayLength1x1(array) {
    this.array = array;
}
arrayLength1x1.prototype = Object.create(unaryExpression.prototype);

function quote1x1(expression) {
    this.expression = expression;
}
quote1x1.prototype = Object.create(unaryExpression.prototype);

function rethrow0x1() {

}
rethrow0x1.prototype = Object.create(unaryExpression.prototype);

function rethrow1x1(type) {
    this.type = type;
}
rethrow1x1.prototype = Object.create(unaryExpression.prototype);

function throw1x1(value) {
    this.value = value;
}
throw1x1.prototype = Object.create(unaryExpression.prototype);

function throw2x1(value, type) {
    this.value = value;
    this.type = type;
}
throw2x1.prototype = Object.create(unaryExpression.prototype);

function increment1x1(expression) {
    this.expression = expression;
}
increment1x1.prototype = Object.create(unaryExpression.prototype);

function increment2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
increment2x1.prototype = Object.create(unaryExpression.prototype);

function decrement1x1(expression) {
    this.expression = expression;
}
decrement1x1.prototype = Object.create(unaryExpression.prototype);

function decrement2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
decrement2x1.prototype = Object.create(unaryExpression.prototype);

function preIncrementAssign1x1(expression) {
    this.expression = expression;
}
preIncrementAssign1x1.prototype = Object.create(unaryExpression.prototype);

function preIncrementAssign2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
preIncrementAssign2x1.prototype = Object.create(unaryExpression.prototype);

function preDecrementAssign1x1(expression) {
    this.expression = expression;
}
preDecrementAssign1x1.prototype = Object.create(unaryExpression.prototype);

function preDecrementAssign2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
preDecrementAssign2x1.prototype = Object.create(unaryExpression.prototype);

function postIncrementAssign1x1(expression) {
    this.expression = expression;
}
postIncrementAssign1x1.prototype = Object.create(unaryExpression.prototype);

function postIncrementAssign2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
postIncrementAssign2x1.prototype = Object.create(unaryExpression.prototype);

function postDecrementAssign1x1(expression) {
    this.expression = expression;
}
postDecrementAssign1x1.prototype = Object.create(unaryExpression.prototype);

function postDecrementAssign2x1(expression, method) {
    this.expression = expression;
    this.method = method;
}
postDecrementAssign2x1.prototype = Object.create(unaryExpression.prototype);

expression.assign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new assign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.makeBinary = function () {
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expressionType) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression)) {
            return new makeBinary3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 5) {
        if ((arguments[0] instanceof expressionType) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (typeof arguments[3] == "boolean") && (arguments[4] instanceof runtimeMethodInfo)) {
            return new makeBinary5x1(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
        }
    }
    if (arguments.length == 6) {
        if ((arguments[0] instanceof expressionType) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (typeof arguments[3] == "boolean") && (arguments[4] instanceof runtimeMethodInfo) && (arguments[5] instanceof lambdaExpression)) {
            return new makeBinary6x1(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
    }
};

expression.equal = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new equal2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (typeof arguments[2] == "boolean") && (arguments[3] instanceof runtimeMethodInfo)) {
            return new equal4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
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
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (typeof arguments[2] == "boolean") && (arguments[3] instanceof runtimeMethodInfo)) {
            return new notEqual4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
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
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (typeof arguments[2] == "boolean") && (arguments[3] instanceof runtimeMethodInfo)) {
            return new greaterThan4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.lessThan = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new lessThan2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (typeof arguments[2] == "boolean") && (arguments[3] instanceof runtimeMethodInfo)) {
            return new lessThan4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.greaterThanOrEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new greaterThanOrEqual2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (typeof arguments[2] == "boolean") && (arguments[3] instanceof runtimeMethodInfo)) {
            return new greaterThanOrEqual4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.lessThanOrEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new lessThanOrEqual2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (typeof arguments[2] == "boolean") && (arguments[3] instanceof runtimeMethodInfo)) {
            return new lessThanOrEqual4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.andAlso = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new andAlso2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new andAlso3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.orElse = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new orElse2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new orElse3x1(arguments[0], arguments[1], arguments[2]);
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
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new add3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.addAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new addAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new addAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new addAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.addAssignChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new addAssignChecked2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new addAssignChecked3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new addAssignChecked4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.addChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new addChecked2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new addChecked3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.subtract = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtract2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new subtract3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.subtractAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtractAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new subtractAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new subtractAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.subtractAssignChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtractAssignChecked2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new subtractAssignChecked3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new subtractAssignChecked4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.subtractChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtractChecked2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new subtractChecked3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.divide = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new divide2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new divide3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.divideAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new divideAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new divideAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new divideAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.modulo = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new modulo2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new modulo3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.moduloAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new moduloAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new moduloAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new moduloAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.multiply = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiply2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new multiply3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.multiplyAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiplyAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new multiplyAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new multiplyAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.multiplyAssignChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiplyAssignChecked2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new multiplyAssignChecked3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new multiplyAssignChecked4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.multiplyChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiplyChecked2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new multiplyChecked3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.leftShift = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new leftShift2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new leftShift3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.leftShiftAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new leftShiftAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new leftShiftAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new leftShiftAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.rightShift = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new rightShift2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new rightShift3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.rightShiftAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new rightShiftAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new rightShiftAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new rightShiftAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.and = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new and2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new and3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.andAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new andAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new andAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new andAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.or = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new or2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new or3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.orAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new orAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new orAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new orAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.exclusiveOr = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new exclusiveOr2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new exclusiveOr3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.exclusiveOrAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new exclusiveOrAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new exclusiveOrAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new exclusiveOrAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.power = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new power2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new power3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.powerAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new powerAssign2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new powerAssign3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeMethodInfo) && (arguments[3] instanceof lambdaExpression)) {
            return new powerAssign4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.arrayIndex = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new arrayIndex2x1(arguments[0], arguments[1]);
        }
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof Array)) {
            return new arrayIndex2x2(arguments[0], arguments[1]);
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
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression)) {
            return new block3x1(arguments[0], arguments[1], arguments[2]);
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
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimePropertyInfo) && (arguments[2] instanceof Array)) {
            return new property3x2(arguments[0], arguments[1], arguments[2]);
        }
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType) && (typeof arguments[2] == "string")) {
            return new property3x3(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string")) {
            return new property2x1(arguments[0], arguments[1]);
        }
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimePropertyInfo)) {
            return new property2x2(arguments[0], arguments[1]);
        }
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new property2x3(arguments[0], arguments[1]);
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
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof expression) && (typeof arguments[2] == "boolean") && (arguments[3] instanceof Array)) {
            return new lambda4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.listInit = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof newExpression) && (arguments[1] instanceof Array)) {
            return new listInit2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof newExpression) && (arguments[1] instanceof runtimeMethodInfo) && (arguments[2] instanceof Array)) {
            return new listInit3x1(arguments[0], arguments[1], arguments[2]);
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
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeFieldInfo)) {
            return new field2x1(arguments[0], arguments[1]);
        }
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string")) {
            return new field2x2(arguments[0], arguments[1]);
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

expression.makeMemberAccess = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMemberInfo)) {
            return new makeMemberAccess2x1(arguments[0], arguments[1]);
        }
    }
};

expression.call = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeMethodInfo) && (arguments[1] instanceof expression)) {
            return new call2x1(arguments[0], arguments[1]);
        }
        if ((arguments[0] instanceof runtimeMethodInfo) && (arguments[1] instanceof Array)) {
            return new call2x2(arguments[0], arguments[1]);
        }
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new call2x3(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof runtimeMethodInfo) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression)) {
            return new call3x1(arguments[0], arguments[1], arguments[2]);
        }
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo) && (arguments[2] instanceof Array)) {
            return new call3x2(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof runtimeMethodInfo) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (arguments[3] instanceof expression)) {
            return new call4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo) && (arguments[2] instanceof expression) && (arguments[3] instanceof expression)) {
            return new call4x2(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string") && (arguments[2] instanceof Array) && (arguments[3] instanceof Array)) {
            return new call4x3(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
        if ((arguments[0] instanceof runtimeType) && (typeof arguments[1] == "string") && (arguments[2] instanceof Array) && (arguments[3] instanceof Array)) {
            return new call4x4(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
    if (arguments.length == 5) {
        if ((arguments[0] instanceof runtimeMethodInfo) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (arguments[3] instanceof expression) && (arguments[4] instanceof expression)) {
            return new call5x1(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
        }
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo) && (arguments[2] instanceof expression) && (arguments[3] instanceof expression) && (arguments[4] instanceof expression)) {
            return new call5x2(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
        }
    }
    if (arguments.length == 6) {
        if ((arguments[0] instanceof runtimeMethodInfo) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (arguments[3] instanceof expression) && (arguments[4] instanceof expression) && (arguments[5] instanceof expression)) {
            return new call6x1(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
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
        if ((arguments[0] instanceof runtimeConstructorInfo)) {
            return new new1x1(arguments[0]);
        }
        if ((arguments[0] instanceof runtimeType)) {
            return new new1x2(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeConstructorInfo) && (arguments[1] instanceof Array)) {
            return new new2x1(arguments[0], arguments[1]);
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

expression.makeUnary = function () {
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expressionType) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeType)) {
            return new makeUnary3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expressionType) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeType) && (arguments[3] instanceof runtimeMethodInfo)) {
            return new makeUnary4x1(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.negate = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new negate1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new negate2x1(arguments[0], arguments[1]);
        }
    }
};

expression.unaryPlus = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new unaryPlus1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new unaryPlus2x1(arguments[0], arguments[1]);
        }
    }
};

expression.negateChecked = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new negateChecked1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new negateChecked2x1(arguments[0], arguments[1]);
        }
    }
};

expression.not = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new not1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new not2x1(arguments[0], arguments[1]);
        }
    }
};

expression.isFalse = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new isFalse1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new isFalse2x1(arguments[0], arguments[1]);
        }
    }
};

expression.isTrue = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new isTrue1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new isTrue2x1(arguments[0], arguments[1]);
        }
    }
};

expression.onesComplement = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new onesComplement1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new onesComplement2x1(arguments[0], arguments[1]);
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
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new convert3x1(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.convertChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new convertChecked2x1(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType) && (arguments[2] instanceof runtimeMethodInfo)) {
            return new convertChecked3x1(arguments[0], arguments[1], arguments[2]);
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
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new increment2x1(arguments[0], arguments[1]);
        }
    }
};

expression.decrement = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new decrement1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new decrement2x1(arguments[0], arguments[1]);
        }
    }
};

expression.preIncrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new preIncrementAssign1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new preIncrementAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.preDecrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new preDecrementAssign1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new preDecrementAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.postIncrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new postIncrementAssign1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new postIncrementAssign2x1(arguments[0], arguments[1]);
        }
    }
};

expression.postDecrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new postDecrementAssign1x1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeMethodInfo)) {
            return new postDecrementAssign2x1(arguments[0], arguments[1]);
        }
    }
};