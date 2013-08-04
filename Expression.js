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
    var self = this;
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

function lambda2(body, parameters) {
    this.body = body;
    this.parameters = parameters;
}
lambda2.prototype = Object.create(lambdaExpression.prototype);
lambda2.prototype._type = "lambda2";

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

function lambda5(delegateType, body, name, tailCall, parameters) {
    this.delegateType = delegateType;
    this.body = body;
    this.name = name;
    this.tailCall = tailCall;
    this.parameters = parameters;
}
lambda5.prototype = Object.create(lambdaExpression.prototype);
lambda5.prototype._type = "lambda5";

function listInit(newExpression, initializers) {
    this.newExpression = newExpression;
    this.initializers = initializers;
}
listInit.prototype = Object.create(listInitExpression.prototype);
listInit.prototype._type = "listInit";

function loop(body) {
    this.body = body;
}
loop.prototype = Object.create(loopExpression.prototype);
loop.prototype._type = "loop";

function field2(expression, fieldName) {
    this.expression = expression;
    this.fieldName = fieldName;
}
field2.prototype = Object.create(memberExpression.prototype);
field2.prototype._type = "field2";

function field3(expression, type, fieldName) {
    this.expression = expression;
    this.type = type;
    this.fieldName = fieldName;
}
field3.prototype = Object.create(memberExpression.prototype);
field3.prototype._type = "field3";

function propertyOrField(expression, propertyOrFieldName) {
    this.expression = expression;
    this.propertyOrFieldName = propertyOrFieldName;
}
propertyOrField.prototype = Object.create(memberExpression.prototype);
propertyOrField.prototype._type = "propertyOrField";

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

function newArrayInit(type, initializers) {
    this.type = type;
    this.initializers = initializers;
}
newArrayInit.prototype = Object.create(newArrayExpression.prototype);
newArrayInit.prototype._type = "newArrayInit";

function newArrayBounds(type, bounds) {
    this.type = type;
    this.bounds = bounds;
}
newArrayBounds.prototype = Object.create(newArrayExpression.prototype);
newArrayBounds.prototype._type = "newArrayBounds";

function new1(type) {
    this.type = type;
}
new1.prototype = Object.create(newExpression.prototype);
new1.prototype._type = "new1";

function parameter1(type) {
    this.type = type;
}
parameter1.prototype = Object.create(parameterExpression.prototype);
parameter1.prototype._type = "parameter1";

function parameter2(type, name) {
    this.type = type;
    this.name = name;
}
parameter2.prototype = Object.create(parameterExpression.prototype);
parameter2.prototype._type = "parameter2";

function variable1(type) {
    this.type = type;
}
variable1.prototype = Object.create(parameterExpression.prototype);
variable1.prototype._type = "variable1";

function variable2(type, name) {
    this.type = type;
    this.name = name;
}
variable2.prototype = Object.create(parameterExpression.prototype);
variable2.prototype._type = "variable2";

function runtimeVariables(variables) {
    this.variables = variables;
}
runtimeVariables.prototype = Object.create(runtimeVariablesExpression.prototype);
runtimeVariables.prototype._type = "runtimeVariables";

function tryFault(body, fault) {
    this.body = body;
    this.fault = fault;
}
tryFault.prototype = Object.create(tryExpression.prototype);
tryFault.prototype._type = "tryFault";

function tryFinally(body, theFinally) {
    this.body = body;
    this.finally = theFinally;
}
tryFinally.prototype = Object.create(tryExpression.prototype);
tryFinally.prototype._type = "tryFinally";

function typeIs(expression, type) {
    this.expression = expression;
    this.type = type;
}
typeIs.prototype = Object.create(typeBinaryExpression.prototype);
typeIs.prototype._type = "typeIs";

function typeEqual(expression, type) {
    this.expression = expression;
    this.type = type;
}
typeEqual.prototype = Object.create(typeBinaryExpression.prototype);
typeEqual.prototype._type = "typeEqual";

function negate(expression) {
    this.expression = expression;
}
negate.prototype = Object.create(unaryExpression.prototype);
negate.prototype._type = "negate";

function unaryPlus(expression) {
    this.expression = expression;
}
unaryPlus.prototype = Object.create(unaryExpression.prototype);
unaryPlus.prototype._type = "unaryPlus";

function negateChecked(expression) {
    this.expression = expression;
}
negateChecked.prototype = Object.create(unaryExpression.prototype);
negateChecked.prototype._type = "negateChecked";

function not(expression) {
    this.expression = expression;
}
not.prototype = Object.create(unaryExpression.prototype);
not.prototype._type = "not";

function isFalse(expression) {
    this.expression = expression;
}
isFalse.prototype = Object.create(unaryExpression.prototype);
isFalse.prototype._type = "isFalse";

function isTrue(expression) {
    this.expression = expression;
}
isTrue.prototype = Object.create(unaryExpression.prototype);
isTrue.prototype._type = "isTrue";

function onesComplement(expression) {
    this.expression = expression;
}
onesComplement.prototype = Object.create(unaryExpression.prototype);
onesComplement.prototype._type = "onesComplement";

function typeAs(expression, type) {
    this.expression = expression;
    this.type = type;
}
typeAs.prototype = Object.create(unaryExpression.prototype);
typeAs.prototype._type = "typeAs";

function unbox(expression, type) {
    this.expression = expression;
    this.type = type;
}
unbox.prototype = Object.create(unaryExpression.prototype);
unbox.prototype._type = "unbox";

function convert(expression, type) {
    this.expression = expression;
    this.type = type;
}
convert.prototype = Object.create(unaryExpression.prototype);
convert.prototype._type = "convert";

function convertChecked(expression, type) {
    this.expression = expression;
    this.type = type;
}
convertChecked.prototype = Object.create(unaryExpression.prototype);
convertChecked.prototype._type = "convertChecked";

function arrayLength(array) {
    this.array = array;
}
arrayLength.prototype = Object.create(unaryExpression.prototype);
arrayLength.prototype._type = "arrayLength";

function quote(expression) {
    this.expression = expression;
}
quote.prototype = Object.create(unaryExpression.prototype);
quote.prototype._type = "quote";

function rethrow0() {

}
rethrow0.prototype = Object.create(unaryExpression.prototype);
rethrow0.prototype._type = "rethrow0";

function rethrow1(type) {
    this.type = type;
}
rethrow1.prototype = Object.create(unaryExpression.prototype);
rethrow1.prototype._type = "rethrow1";

function throw1(value) {
    this.value = value;
}
throw1.prototype = Object.create(unaryExpression.prototype);
throw1.prototype._type = "throw1";

function throw2(value, type) {
    this.value = value;
    this.type = type;
}
throw2.prototype = Object.create(unaryExpression.prototype);
throw2.prototype._type = "throw2";

function increment(expression) {
    this.expression = expression;
}
increment.prototype = Object.create(unaryExpression.prototype);
increment.prototype._type = "increment";

function decrement(expression) {
    this.expression = expression;
}
decrement.prototype = Object.create(unaryExpression.prototype);
decrement.prototype._type = "decrement";

function preIncrementAssign(expression) {
    this.expression = expression;
}
preIncrementAssign.prototype = Object.create(unaryExpression.prototype);
preIncrementAssign.prototype._type = "preIncrementAssign";

function preDecrementAssign(expression) {
    this.expression = expression;
}
preDecrementAssign.prototype = Object.create(unaryExpression.prototype);
preDecrementAssign.prototype._type = "preDecrementAssign";

function postIncrementAssign(expression) {
    this.expression = expression;
}
postIncrementAssign.prototype = Object.create(unaryExpression.prototype);
postIncrementAssign.prototype._type = "postIncrementAssign";

function postDecrementAssign(expression) {
    this.expression = expression;
}
postDecrementAssign.prototype = Object.create(unaryExpression.prototype);
postDecrementAssign.prototype._type = "postDecrementAssign";

function assign(left, right) {
    this.left = left;
    this.right = right;
}
assign.prototype = Object.create(binaryExpression.prototype);
assign.prototype._type = "assign";

function equal(left, right) {
    this.left = left;
    this.right = right;
}
equal.prototype = Object.create(binaryExpression.prototype);
equal.prototype._type = "equal";

function referenceEqual(left, right) {
    this.left = left;
    this.right = right;
}
referenceEqual.prototype = Object.create(binaryExpression.prototype);
referenceEqual.prototype._type = "referenceEqual";

function notEqual(left, right) {
    this.left = left;
    this.right = right;
}
notEqual.prototype = Object.create(binaryExpression.prototype);
notEqual.prototype._type = "notEqual";

function referenceNotEqual(left, right) {
    this.left = left;
    this.right = right;
}
referenceNotEqual.prototype = Object.create(binaryExpression.prototype);
referenceNotEqual.prototype._type = "referenceNotEqual";

function greaterThan(left, right) {
    this.left = left;
    this.right = right;
}
greaterThan.prototype = Object.create(binaryExpression.prototype);
greaterThan.prototype._type = "greaterThan";

function lessThan(left, right) {
    this.left = left;
    this.right = right;
}
lessThan.prototype = Object.create(binaryExpression.prototype);
lessThan.prototype._type = "lessThan";

function greaterThanOrEqual(left, right) {
    this.left = left;
    this.right = right;
}
greaterThanOrEqual.prototype = Object.create(binaryExpression.prototype);
greaterThanOrEqual.prototype._type = "greaterThanOrEqual";

function lessThanOrEqual(left, right) {
    this.left = left;
    this.right = right;
}
lessThanOrEqual.prototype = Object.create(binaryExpression.prototype);
lessThanOrEqual.prototype._type = "lessThanOrEqual";

function andAlso(left, right) {
    this.left = left;
    this.right = right;
}
andAlso.prototype = Object.create(binaryExpression.prototype);
andAlso.prototype._type = "andAlso";

function orElse(left, right) {
    this.left = left;
    this.right = right;
}
orElse.prototype = Object.create(binaryExpression.prototype);
orElse.prototype._type = "orElse";

function coalesce2(left, right) {
    this.left = left;
    this.right = right;
}
coalesce2.prototype = Object.create(binaryExpression.prototype);
coalesce2.prototype._type = "coalesce2";

function coalesce3(left, right, conversion) {
    this.left = left;
    this.right = right;
    this.conversion = conversion;
}
coalesce3.prototype = Object.create(binaryExpression.prototype);
coalesce3.prototype._type = "coalesce3";

function add(left, right) {
    this.left = left;
    this.right = right;
}
add.prototype = Object.create(binaryExpression.prototype);
add.prototype._type = "add";

function addAssign(left, right) {
    this.left = left;
    this.right = right;
}
addAssign.prototype = Object.create(binaryExpression.prototype);
addAssign.prototype._type = "addAssign";

function addAssignChecked(left, right) {
    this.left = left;
    this.right = right;
}
addAssignChecked.prototype = Object.create(binaryExpression.prototype);
addAssignChecked.prototype._type = "addAssignChecked";

function addChecked(left, right) {
    this.left = left;
    this.right = right;
}
addChecked.prototype = Object.create(binaryExpression.prototype);
addChecked.prototype._type = "addChecked";

function subtract(left, right) {
    this.left = left;
    this.right = right;
}
subtract.prototype = Object.create(binaryExpression.prototype);
subtract.prototype._type = "subtract";

function subtractAssign(left, right) {
    this.left = left;
    this.right = right;
}
subtractAssign.prototype = Object.create(binaryExpression.prototype);
subtractAssign.prototype._type = "subtractAssign";

function subtractAssignChecked(left, right) {
    this.left = left;
    this.right = right;
}
subtractAssignChecked.prototype = Object.create(binaryExpression.prototype);
subtractAssignChecked.prototype._type = "subtractAssignChecked";

function subtractChecked(left, right) {
    this.left = left;
    this.right = right;
}
subtractChecked.prototype = Object.create(binaryExpression.prototype);
subtractChecked.prototype._type = "subtractChecked";

function divide(left, right) {
    this.left = left;
    this.right = right;
}
divide.prototype = Object.create(binaryExpression.prototype);
divide.prototype._type = "divide";

function divideAssign(left, right) {
    this.left = left;
    this.right = right;
}
divideAssign.prototype = Object.create(binaryExpression.prototype);
divideAssign.prototype._type = "divideAssign";

function modulo(left, right) {
    this.left = left;
    this.right = right;
}
modulo.prototype = Object.create(binaryExpression.prototype);
modulo.prototype._type = "modulo";

function moduloAssign(left, right) {
    this.left = left;
    this.right = right;
}
moduloAssign.prototype = Object.create(binaryExpression.prototype);
moduloAssign.prototype._type = "moduloAssign";

function multiply(left, right) {
    this.left = left;
    this.right = right;
}
multiply.prototype = Object.create(binaryExpression.prototype);
multiply.prototype._type = "multiply";

function multiplyAssign(left, right) {
    this.left = left;
    this.right = right;
}
multiplyAssign.prototype = Object.create(binaryExpression.prototype);
multiplyAssign.prototype._type = "multiplyAssign";

function multiplyAssignChecked(left, right) {
    this.left = left;
    this.right = right;
}
multiplyAssignChecked.prototype = Object.create(binaryExpression.prototype);
multiplyAssignChecked.prototype._type = "multiplyAssignChecked";

function multiplyChecked(left, right) {
    this.left = left;
    this.right = right;
}
multiplyChecked.prototype = Object.create(binaryExpression.prototype);
multiplyChecked.prototype._type = "multiplyChecked";

function leftShift(left, right) {
    this.left = left;
    this.right = right;
}
leftShift.prototype = Object.create(binaryExpression.prototype);
leftShift.prototype._type = "leftShift";

function leftShiftAssign(left, right) {
    this.left = left;
    this.right = right;
}
leftShiftAssign.prototype = Object.create(binaryExpression.prototype);
leftShiftAssign.prototype._type = "leftShiftAssign";

function rightShift(left, right) {
    this.left = left;
    this.right = right;
}
rightShift.prototype = Object.create(binaryExpression.prototype);
rightShift.prototype._type = "rightShift";

function rightShiftAssign(left, right) {
    this.left = left;
    this.right = right;
}
rightShiftAssign.prototype = Object.create(binaryExpression.prototype);
rightShiftAssign.prototype._type = "rightShiftAssign";

function and(left, right) {
    this.left = left;
    this.right = right;
}
and.prototype = Object.create(binaryExpression.prototype);
and.prototype._type = "and";

function andAssign(left, right) {
    this.left = left;
    this.right = right;
}
andAssign.prototype = Object.create(binaryExpression.prototype);
andAssign.prototype._type = "andAssign";

function or(left, right) {
    this.left = left;
    this.right = right;
}
or.prototype = Object.create(binaryExpression.prototype);
or.prototype._type = "or";

function orAssign(left, right) {
    this.left = left;
    this.right = right;
}
orAssign.prototype = Object.create(binaryExpression.prototype);
orAssign.prototype._type = "orAssign";

function exclusiveOr(left, right) {
    this.left = left;
    this.right = right;
}
exclusiveOr.prototype = Object.create(binaryExpression.prototype);
exclusiveOr.prototype._type = "exclusiveOr";

function exclusiveOrAssign(left, right) {
    this.left = left;
    this.right = right;
}
exclusiveOrAssign.prototype = Object.create(binaryExpression.prototype);
exclusiveOrAssign.prototype._type = "exclusiveOrAssign";

function power(left, right) {
    this.left = left;
    this.right = right;
}
power.prototype = Object.create(binaryExpression.prototype);
power.prototype._type = "power";

function powerAssign(left, right) {
    this.left = left;
    this.right = right;
}
powerAssign.prototype = Object.create(binaryExpression.prototype);
powerAssign.prototype._type = "powerAssign";

function arrayIndex(array, index) {
    this.array = array;
    this.index = index;
}
arrayIndex.prototype = Object.create(binaryExpression.prototype);
arrayIndex.prototype._type = "arrayIndex";

function block1(expressions) {
    this.expressions = expressions;
}
block1.prototype = Object.create(blockExpression.prototype);
block1.prototype._type = "block1";

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

function block4(arg0, arg1, arg2, arg3) {
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
}
block4.prototype = Object.create(blockExpression.prototype);
block4.prototype._type = "block4";

function block5(arg0, arg1, arg2, arg3, arg4) {
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
    this.arg4 = arg4;
}
block5.prototype = Object.create(blockExpression.prototype);
block5.prototype._type = "block5";

function condition3(test, ifTrue, ifFalse) {
    this.test = test;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
}
condition3.prototype = Object.create(conditionalExpression.prototype);
condition3.prototype._type = "condition3";

function condition4(test, ifTrue, ifFalse, type) {
    this.test = test;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
    this.type = type;
}
condition4.prototype = Object.create(conditionalExpression.prototype);
condition4.prototype._type = "condition4";

function ifThen(test, ifTrue) {
    this.test = test;
    this.ifTrue = ifTrue;
}
ifThen.prototype = Object.create(conditionalExpression.prototype);
ifThen.prototype._type = "ifThen";

function ifThenElse(test, ifTrue, ifFalse) {
    this.test = test;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
}
ifThenElse.prototype = Object.create(conditionalExpression.prototype);
ifThenElse.prototype._type = "ifThenElse";

function constant1(value) {
    this.value = value;
}
constant1.prototype = Object.create(constantExpression.prototype);
constant1.prototype._type = "constant1";

function constant2(value, type) {
    this.value = value;
    this.type = type;
}
constant2.prototype = Object.create(constantExpression.prototype);
constant2.prototype._type = "constant2";

function empty() {

}
empty.prototype = Object.create(defaultExpression.prototype);
empty.prototype._type = "empty";

function default1(type) {
    this.type = type;
}
default1.prototype = Object.create(defaultExpression.prototype);
default1.prototype._type = "default1";

function arrayAccess(array, indexes) {
    this.array = array;
    this.indexes = indexes;
}
arrayAccess.prototype = Object.create(indexExpression.prototype);
arrayAccess.prototype._type = "arrayAccess";

function property2(expression, propertyName) {
    this.expression = expression;
    this.propertyName = propertyName;
}
property2.prototype = Object.create(memberExpression.prototype);
property2.prototype._type = "property2";

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

function invoke(expression, theArguments) {
    this.expression = expression;
    this.arguments = theArguments;
}
invoke.prototype = Object.create(invocationExpression.prototype);
invoke.prototype._type = "invoke";

expression.add = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new add(arguments[0], arguments[1]);
        }
    }
};

expression.addAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new addAssign(arguments[0], arguments[1]);
        }
    }
};

expression.addAssignChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new addAssignChecked(arguments[0], arguments[1]);
        }
    }
};

expression.addChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new addChecked(arguments[0], arguments[1]);
        }
    }
};

expression.and = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new and(arguments[0], arguments[1]);
        }
    }
};

expression.andAlso = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new andAlso(arguments[0], arguments[1]);
        }
    }
};

expression.andAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new andAssign(arguments[0], arguments[1]);
        }
    }
};

expression.arrayAccess = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof Array)) {
            return new arrayAccess(arguments[0], arguments[1]);
        }
    }
};

expression.arrayIndex = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new arrayIndex(arguments[0], arguments[1]);
        }
    }
};

expression.arrayLength = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new arrayLength(arguments[0]);
        }
    }
};

expression.assign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new assign(arguments[0], arguments[1]);
        }
    }
};

expression.block = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof Array)) {
            return new block1(arguments[0]);
        }
    }
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
            return new block4(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
    if (arguments.length == 5) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (arguments[3] instanceof expression) && (arguments[4] instanceof expression)) {
            return new block5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
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

expression.coalesce = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new coalesce2(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof lambdaExpression)) {
            return new coalesce3(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.condition = function () {
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression)) {
            return new condition3(arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (arguments[3] instanceof runtimeType)) {
            return new condition4(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.constant = function () {
    if (arguments.length == 1) {
        if ((true)) {
            return new constant1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((true) && (arguments[1] instanceof runtimeType)) {
            return new constant2(arguments[0], arguments[1]);
        }
    }
};

expression.convert = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new convert(arguments[0], arguments[1]);
        }
    }
};

expression.convertChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new convertChecked(arguments[0], arguments[1]);
        }
    }
};

expression.decrement = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new decrement(arguments[0]);
        }
    }
};

expression.default = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new default1(arguments[0]);
        }
    }
};

expression.divide = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new divide(arguments[0], arguments[1]);
        }
    }
};

expression.divideAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new divideAssign(arguments[0], arguments[1]);
        }
    }
};

expression.empty = function () {
    if (arguments.length == 0) {
        return new empty();
    }
};

expression.equal = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new equal(arguments[0], arguments[1]);
        }
    }
};

expression.exclusiveOr = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new exclusiveOr(arguments[0], arguments[1]);
        }
    }
};

expression.exclusiveOrAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new exclusiveOrAssign(arguments[0], arguments[1]);
        }
    }
};

expression.field = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string")) {
            return new field2(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType) && (typeof arguments[2] == "string")) {
            return new field3(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.greaterThan = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new greaterThan(arguments[0], arguments[1]);
        }
    }
};

expression.greaterThanOrEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new greaterThanOrEqual(arguments[0], arguments[1]);
        }
    }
};

expression.ifThen = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new ifThen(arguments[0], arguments[1]);
        }
    }
};

expression.ifThenElse = function () {
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression)) {
            return new ifThenElse(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.increment = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new increment(arguments[0]);
        }
    }
};

expression.invoke = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof Array)) {
            return new invoke(arguments[0], arguments[1]);
        }
    }
};

expression.isFalse = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new isFalse(arguments[0]);
        }
    }
};

expression.isTrue = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new isTrue(arguments[0]);
        }
    }
};

expression.lambda = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof Array)) {
            return new lambda2(arguments[0], arguments[1]);
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
            return new lambda5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
        }
    }
};

expression.leftShift = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new leftShift(arguments[0], arguments[1]);
        }
    }
};

expression.leftShiftAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new leftShiftAssign(arguments[0], arguments[1]);
        }
    }
};

expression.lessThan = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new lessThan(arguments[0], arguments[1]);
        }
    }
};

expression.lessThanOrEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new lessThanOrEqual(arguments[0], arguments[1]);
        }
    }
};

expression.listInit = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof newExpression) && (arguments[1] instanceof Array)) {
            return new listInit(arguments[0], arguments[1]);
        }
    }
};

expression.loop = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new loop(arguments[0]);
        }
    }
};

expression.modulo = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new modulo(arguments[0], arguments[1]);
        }
    }
};

expression.moduloAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new moduloAssign(arguments[0], arguments[1]);
        }
    }
};

expression.multiply = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiply(arguments[0], arguments[1]);
        }
    }
};

expression.multiplyAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiplyAssign(arguments[0], arguments[1]);
        }
    }
};

expression.multiplyAssignChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiplyAssignChecked(arguments[0], arguments[1]);
        }
    }
};

expression.multiplyChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new multiplyChecked(arguments[0], arguments[1]);
        }
    }
};

expression.negate = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new negate(arguments[0]);
        }
    }
};

expression.negateChecked = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new negateChecked(arguments[0]);
        }
    }
};

expression.new = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new new1(arguments[0]);
        }
    }
};

expression.newArrayBounds = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof Array)) {
            return new newArrayBounds(arguments[0], arguments[1]);
        }
    }
};

expression.newArrayInit = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeType) && (arguments[1] instanceof Array)) {
            return new newArrayInit(arguments[0], arguments[1]);
        }
    }
};

expression.not = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new not(arguments[0]);
        }
    }
};

expression.notEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new notEqual(arguments[0], arguments[1]);
        }
    }
};

expression.onesComplement = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new onesComplement(arguments[0]);
        }
    }
};

expression.or = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new or(arguments[0], arguments[1]);
        }
    }
};

expression.orAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new orAssign(arguments[0], arguments[1]);
        }
    }
};

expression.orElse = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new orElse(arguments[0], arguments[1]);
        }
    }
};

expression.parameter = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new parameter1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeType) && (typeof arguments[1] == "string")) {
            return new parameter2(arguments[0], arguments[1]);
        }
    }
};

expression.postDecrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new postDecrementAssign(arguments[0]);
        }
    }
};

expression.postIncrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new postIncrementAssign(arguments[0]);
        }
    }
};

expression.power = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new power(arguments[0], arguments[1]);
        }
    }
};

expression.powerAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new powerAssign(arguments[0], arguments[1]);
        }
    }
};

expression.preDecrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new preDecrementAssign(arguments[0]);
        }
    }
};

expression.preIncrementAssign = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new preIncrementAssign(arguments[0]);
        }
    }
};

expression.property = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string")) {
            return new property2(arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string") && (arguments[2] instanceof Array)) {
            return new property3x1(arguments[0], arguments[1], arguments[2]);
        }
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType) && (typeof arguments[2] == "string")) {
            return new property3x2(arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.propertyOrField = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (typeof arguments[1] == "string")) {
            return new propertyOrField(arguments[0], arguments[1]);
        }
    }
};

expression.quote = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new quote(arguments[0]);
        }
    }
};

expression.referenceEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new referenceEqual(arguments[0], arguments[1]);
        }
    }
};

expression.referenceNotEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new referenceNotEqual(arguments[0], arguments[1]);
        }
    }
};

expression.rethrow = function () {
    if (arguments.length == 0) {
        return new rethrow0();
    }
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new rethrow1(arguments[0]);
        }
    }
};

expression.rightShift = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new rightShift(arguments[0], arguments[1]);
        }
    }
};

expression.rightShiftAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new rightShiftAssign(arguments[0], arguments[1]);
        }
    }
};

expression.runtimeVariables = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof Array)) {
            return new runtimeVariables(arguments[0]);
        }
    }
};

expression.subtract = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtract(arguments[0], arguments[1]);
        }
    }
};

expression.subtractAssign = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtractAssign(arguments[0], arguments[1]);
        }
    }
};

expression.subtractAssignChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtractAssignChecked(arguments[0], arguments[1]);
        }
    }
};

expression.subtractChecked = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new subtractChecked(arguments[0], arguments[1]);
        }
    }
};

expression.throw = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new throw1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new throw2(arguments[0], arguments[1]);
        }
    }
};

expression.tryFault = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new tryFault(arguments[0], arguments[1]);
        }
    }
};

expression.tryFinally = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new tryFinally(arguments[0], arguments[1]);
        }
    }
};

expression.typeAs = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new typeAs(arguments[0], arguments[1]);
        }
    }
};

expression.typeEqual = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new typeEqual(arguments[0], arguments[1]);
        }
    }
};

expression.typeIs = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new typeIs(arguments[0], arguments[1]);
        }
    }
};

expression.unaryPlus = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new unaryPlus(arguments[0]);
        }
    }
};

expression.unbox = function () {
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof runtimeType)) {
            return new unbox(arguments[0], arguments[1]);
        }
    }
};

expression.variable = function () {
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new variable1(arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeType) && (typeof arguments[1] == "string")) {
            return new variable2(arguments[0], arguments[1]);
        }
    }
};

expression.prototype.add = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new add(self, arguments[0]);
        }
    }
};

expression.prototype.addAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new addAssign(self, arguments[0]);
        }
    }
};

expression.prototype.addAssignChecked = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new addAssignChecked(self, arguments[0]);
        }
    }
};

expression.prototype.addChecked = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new addChecked(self, arguments[0]);
        }
    }
};

expression.prototype.and = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new and(self, arguments[0]);
        }
    }
};

expression.prototype.andAlso = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new andAlso(self, arguments[0]);
        }
    }
};

expression.prototype.andAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new andAssign(self, arguments[0]);
        }
    }
};

expression.prototype.arrayAccess = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof Array)) {
            return new arrayAccess(self, arguments[0]);
        }
    }
};

expression.prototype.arrayIndex = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new arrayIndex(self, arguments[0]);
        }
    }
};

expression.prototype.arrayLength = function () {
    var self = this;
    if (arguments.length == 0) {
        return new arrayLength(self);
    }
};

expression.prototype.assign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new assign(self, arguments[0]);
        }
    }
};

expression.prototype.block = function () {
    var self = this;
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
            return new block4(self, arguments[0], arguments[1], arguments[2]);
        }
    }
    if (arguments.length == 4) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof expression) && (arguments[3] instanceof expression)) {
            return new block5(self, arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }
};

expression.prototype.call = function () {
    var self = this;
    if (arguments.length == 3) {
        if ((typeof arguments[0] == "string") && (arguments[1] instanceof Array) && (arguments[2] instanceof Array)) {
            return new call4x1(self, arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.prototype.coalesce = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new coalesce2(self, arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof lambdaExpression)) {
            return new coalesce3(self, arguments[0], arguments[1]);
        }
    }
};

expression.prototype.condition = function () {
    var self = this;
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new condition3(self, arguments[0], arguments[1]);
        }
    }
    if (arguments.length == 3) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression) && (arguments[2] instanceof runtimeType)) {
            return new condition4(self, arguments[0], arguments[1], arguments[2]);
        }
    }
};

expression.prototype.convert = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new convert(self, arguments[0]);
        }
    }
};

expression.prototype.convertChecked = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new convertChecked(self, arguments[0]);
        }
    }
};

expression.prototype.decrement = function () {
    var self = this;
    if (arguments.length == 0) {
        return new decrement(self);
    }
};

expression.prototype.divide = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new divide(self, arguments[0]);
        }
    }
};

expression.prototype.divideAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new divideAssign(self, arguments[0]);
        }
    }
};

expression.prototype.equal = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new equal(self, arguments[0]);
        }
    }
};

expression.prototype.exclusiveOr = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new exclusiveOr(self, arguments[0]);
        }
    }
};

expression.prototype.exclusiveOrAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new exclusiveOrAssign(self, arguments[0]);
        }
    }
};

expression.prototype.field = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((typeof arguments[0] == "string")) {
            return new field2(self, arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((arguments[0] instanceof runtimeType) && (typeof arguments[1] == "string")) {
            return new field3(self, arguments[0], arguments[1]);
        }
    }
};

expression.prototype.greaterThan = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new greaterThan(self, arguments[0]);
        }
    }
};

expression.prototype.greaterThanOrEqual = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new greaterThanOrEqual(self, arguments[0]);
        }
    }
};

expression.prototype.ifThen = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new ifThen(self, arguments[0]);
        }
    }
};

expression.prototype.ifThenElse = function () {
    var self = this;
    if (arguments.length == 2) {
        if ((arguments[0] instanceof expression) && (arguments[1] instanceof expression)) {
            return new ifThenElse(self, arguments[0], arguments[1]);
        }
    }
};

expression.prototype.increment = function () {
    var self = this;
    if (arguments.length == 0) {
        return new increment(self);
    }
};

expression.prototype.invoke = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof Array)) {
            return new invoke(self, arguments[0]);
        }
    }
};

expression.prototype.isFalse = function () {
    var self = this;
    if (arguments.length == 0) {
        return new isFalse(self);
    }
};

expression.prototype.isTrue = function () {
    var self = this;
    if (arguments.length == 0) {
        return new isTrue(self);
    }
};

expression.prototype.lambda = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof Array)) {
            return new lambda2(self, arguments[0]);
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

expression.prototype.leftShift = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new leftShift(self, arguments[0]);
        }
    }
};

expression.prototype.leftShiftAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new leftShiftAssign(self, arguments[0]);
        }
    }
};

expression.prototype.lessThan = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new lessThan(self, arguments[0]);
        }
    }
};

expression.prototype.lessThanOrEqual = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new lessThanOrEqual(self, arguments[0]);
        }
    }
};

expression.prototype.loop = function () {
    var self = this;
    if (arguments.length == 0) {
        return new loop(self);
    }
};

expression.prototype.modulo = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new modulo(self, arguments[0]);
        }
    }
};

expression.prototype.moduloAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new moduloAssign(self, arguments[0]);
        }
    }
};

expression.prototype.multiply = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new multiply(self, arguments[0]);
        }
    }
};

expression.prototype.multiplyAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new multiplyAssign(self, arguments[0]);
        }
    }
};

expression.prototype.multiplyAssignChecked = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new multiplyAssignChecked(self, arguments[0]);
        }
    }
};

expression.prototype.multiplyChecked = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new multiplyChecked(self, arguments[0]);
        }
    }
};

expression.prototype.negate = function () {
    var self = this;
    if (arguments.length == 0) {
        return new negate(self);
    }
};

expression.prototype.negateChecked = function () {
    var self = this;
    if (arguments.length == 0) {
        return new negateChecked(self);
    }
};

expression.prototype.not = function () {
    var self = this;
    if (arguments.length == 0) {
        return new not(self);
    }
};

expression.prototype.notEqual = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new notEqual(self, arguments[0]);
        }
    }
};

expression.prototype.onesComplement = function () {
    var self = this;
    if (arguments.length == 0) {
        return new onesComplement(self);
    }
};

expression.prototype.or = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new or(self, arguments[0]);
        }
    }
};

expression.prototype.orAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new orAssign(self, arguments[0]);
        }
    }
};

expression.prototype.orElse = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new orElse(self, arguments[0]);
        }
    }
};

expression.prototype.postDecrementAssign = function () {
    var self = this;
    if (arguments.length == 0) {
        return new postDecrementAssign(self);
    }
};

expression.prototype.postIncrementAssign = function () {
    var self = this;
    if (arguments.length == 0) {
        return new postIncrementAssign(self);
    }
};

expression.prototype.power = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new power(self, arguments[0]);
        }
    }
};

expression.prototype.powerAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new powerAssign(self, arguments[0]);
        }
    }
};

expression.prototype.preDecrementAssign = function () {
    var self = this;
    if (arguments.length == 0) {
        return new preDecrementAssign(self);
    }
};

expression.prototype.preIncrementAssign = function () {
    var self = this;
    if (arguments.length == 0) {
        return new preIncrementAssign(self);
    }
};

expression.prototype.property = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((typeof arguments[0] == "string")) {
            return new property2(self, arguments[0]);
        }
    }
    if (arguments.length == 2) {
        if ((typeof arguments[0] == "string") && (arguments[1] instanceof Array)) {
            return new property3x1(self, arguments[0], arguments[1]);
        }
        if ((arguments[0] instanceof runtimeType) && (typeof arguments[1] == "string")) {
            return new property3x2(self, arguments[0], arguments[1]);
        }
    }
};

expression.prototype.propertyOrField = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((typeof arguments[0] == "string")) {
            return new propertyOrField(self, arguments[0]);
        }
    }
};

expression.prototype.quote = function () {
    var self = this;
    if (arguments.length == 0) {
        return new quote(self);
    }
};

expression.prototype.referenceEqual = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new referenceEqual(self, arguments[0]);
        }
    }
};

expression.prototype.referenceNotEqual = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new referenceNotEqual(self, arguments[0]);
        }
    }
};

expression.prototype.rightShift = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new rightShift(self, arguments[0]);
        }
    }
};

expression.prototype.rightShiftAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new rightShiftAssign(self, arguments[0]);
        }
    }
};

expression.prototype.subtract = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new subtract(self, arguments[0]);
        }
    }
};

expression.prototype.subtractAssign = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new subtractAssign(self, arguments[0]);
        }
    }
};

expression.prototype.subtractAssignChecked = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new subtractAssignChecked(self, arguments[0]);
        }
    }
};

expression.prototype.subtractChecked = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new subtractChecked(self, arguments[0]);
        }
    }
};

expression.prototype.throw = function () {
    var self = this;
    if (arguments.length == 0) {
        return new throw1(self);
    }
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new throw2(self, arguments[0]);
        }
    }
};

expression.prototype.tryFault = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new tryFault(self, arguments[0]);
        }
    }
};

expression.prototype.tryFinally = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof expression)) {
            return new tryFinally(self, arguments[0]);
        }
    }
};

expression.prototype.typeAs = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new typeAs(self, arguments[0]);
        }
    }
};

expression.prototype.typeEqual = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new typeEqual(self, arguments[0]);
        }
    }
};

expression.prototype.typeIs = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new typeIs(self, arguments[0]);
        }
    }
};

expression.prototype.unaryPlus = function () {
    var self = this;
    if (arguments.length == 0) {
        return new unaryPlus(self);
    }
};

expression.prototype.unbox = function () {
    var self = this;
    if (arguments.length == 1) {
        if ((arguments[0] instanceof runtimeType)) {
            return new unbox(self, arguments[0]);
        }
    }
};