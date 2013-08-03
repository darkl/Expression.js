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

function equal2x1(left, right) {
    this.left = left;
    this.right = right;
}
equal2x1.prototype = Object.create(binaryExpression.prototype);

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

function lessThan2x1(left, right) {
    this.left = left;
    this.right = right;
}
lessThan2x1.prototype = Object.create(binaryExpression.prototype);

function greaterThanOrEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
greaterThanOrEqual2x1.prototype = Object.create(binaryExpression.prototype);

function lessThanOrEqual2x1(left, right) {
    this.left = left;
    this.right = right;
}
lessThanOrEqual2x1.prototype = Object.create(binaryExpression.prototype);

function andAlso2x1(left, right) {
    this.left = left;
    this.right = right;
}
andAlso2x1.prototype = Object.create(binaryExpression.prototype);

function orElse2x1(left, right) {
    this.left = left;
    this.right = right;
}
orElse2x1.prototype = Object.create(binaryExpression.prototype);

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

function addAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
addAssign2x1.prototype = Object.create(binaryExpression.prototype);

function addAssignChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
addAssignChecked2x1.prototype = Object.create(binaryExpression.prototype);

function addChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
addChecked2x1.prototype = Object.create(binaryExpression.prototype);

function subtract2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtract2x1.prototype = Object.create(binaryExpression.prototype);

function subtractAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtractAssign2x1.prototype = Object.create(binaryExpression.prototype);

function subtractAssignChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtractAssignChecked2x1.prototype = Object.create(binaryExpression.prototype);

function subtractChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
subtractChecked2x1.prototype = Object.create(binaryExpression.prototype);

function divide2x1(left, right) {
    this.left = left;
    this.right = right;
}
divide2x1.prototype = Object.create(binaryExpression.prototype);

function divideAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
divideAssign2x1.prototype = Object.create(binaryExpression.prototype);

function modulo2x1(left, right) {
    this.left = left;
    this.right = right;
}
modulo2x1.prototype = Object.create(binaryExpression.prototype);

function moduloAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
moduloAssign2x1.prototype = Object.create(binaryExpression.prototype);

function multiply2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiply2x1.prototype = Object.create(binaryExpression.prototype);

function multiplyAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiplyAssign2x1.prototype = Object.create(binaryExpression.prototype);

function multiplyAssignChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiplyAssignChecked2x1.prototype = Object.create(binaryExpression.prototype);

function multiplyChecked2x1(left, right) {
    this.left = left;
    this.right = right;
}
multiplyChecked2x1.prototype = Object.create(binaryExpression.prototype);

function leftShift2x1(left, right) {
    this.left = left;
    this.right = right;
}
leftShift2x1.prototype = Object.create(binaryExpression.prototype);

function leftShiftAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
leftShiftAssign2x1.prototype = Object.create(binaryExpression.prototype);

function rightShift2x1(left, right) {
    this.left = left;
    this.right = right;
}
rightShift2x1.prototype = Object.create(binaryExpression.prototype);

function rightShiftAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
rightShiftAssign2x1.prototype = Object.create(binaryExpression.prototype);

function and2x1(left, right) {
    this.left = left;
    this.right = right;
}
and2x1.prototype = Object.create(binaryExpression.prototype);

function andAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
andAssign2x1.prototype = Object.create(binaryExpression.prototype);

function or2x1(left, right) {
    this.left = left;
    this.right = right;
}
or2x1.prototype = Object.create(binaryExpression.prototype);

function orAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
orAssign2x1.prototype = Object.create(binaryExpression.prototype);

function exclusiveOr2x1(left, right) {
    this.left = left;
    this.right = right;
}
exclusiveOr2x1.prototype = Object.create(binaryExpression.prototype);

function exclusiveOrAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
exclusiveOrAssign2x1.prototype = Object.create(binaryExpression.prototype);

function power2x1(left, right) {
    this.left = left;
    this.right = right;
}
power2x1.prototype = Object.create(binaryExpression.prototype);

function powerAssign2x1(left, right) {
    this.left = left;
    this.right = right;
}
powerAssign2x1.prototype = Object.create(binaryExpression.prototype);

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

function property3x2(expression, type, propertyName) {
    this.expression = expression;
    this.type = type;
    this.propertyName = propertyName;
}
property3x2.prototype = Object.create(memberExpression.prototype);

function property2x1(expression, propertyName) {
    this.expression = expression;
    this.propertyName = propertyName;
}
property2x1.prototype = Object.create(memberExpression.prototype);

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

function loop1x1(body) {
    this.body = body;
}
loop1x1.prototype = Object.create(loopExpression.prototype);

function field2x1(expression, fieldName) {
    this.expression = expression;
    this.fieldName = fieldName;
}
field2x1.prototype = Object.create(memberExpression.prototype);

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

function call4x1(instance, methodName, typeArguments, theArguments) {
    this.instance = instance;
    this.methodName = methodName;
    this.typeArguments = typeArguments;
    this.arguments = theArguments;
}
call4x1.prototype = Object.create(methodCallExpression.prototype);

function call4x2(type, methodName, typeArguments, theArguments) {
    this.type = type;
    this.methodName = methodName;
    this.typeArguments = typeArguments;
    this.arguments = theArguments;
}
call4x2.prototype = Object.create(methodCallExpression.prototype);

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

function new1x1(type) {
    this.type = type;
}
new1x1.prototype = Object.create(newExpression.prototype);

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

function negate1x1(expression) {
    this.expression = expression;
}
negate1x1.prototype = Object.create(unaryExpression.prototype);

function unaryPlus1x1(expression) {
    this.expression = expression;
}
unaryPlus1x1.prototype = Object.create(unaryExpression.prototype);

function negateChecked1x1(expression) {
    this.expression = expression;
}
negateChecked1x1.prototype = Object.create(unaryExpression.prototype);

function not1x1(expression) {
    this.expression = expression;
}
not1x1.prototype = Object.create(unaryExpression.prototype);

function isFalse1x1(expression) {
    this.expression = expression;
}
isFalse1x1.prototype = Object.create(unaryExpression.prototype);

function isTrue1x1(expression) {
    this.expression = expression;
}
isTrue1x1.prototype = Object.create(unaryExpression.prototype);

function onesComplement1x1(expression) {
    this.expression = expression;
}
onesComplement1x1.prototype = Object.create(unaryExpression.prototype);

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

function convertChecked2x1(expression, type) {
    this.expression = expression;
    this.type = type;
}
convertChecked2x1.prototype = Object.create(unaryExpression.prototype);

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

function decrement1x1(expression) {
    this.expression = expression;
}
decrement1x1.prototype = Object.create(unaryExpression.prototype);

function preIncrementAssign1x1(expression) {
    this.expression = expression;
}
preIncrementAssign1x1.prototype = Object.create(unaryExpression.prototype);

function preDecrementAssign1x1(expression) {
    this.expression = expression;
}
preDecrementAssign1x1.prototype = Object.create(unaryExpression.prototype);

function postIncrementAssign1x1(expression) {
    this.expression = expression;
}
postIncrementAssign1x1.prototype = Object.create(unaryExpression.prototype);

function postDecrementAssign1x1(expression) {
    this.expression = expression;
}
postDecrementAssign1x1.prototype = Object.create(unaryExpression.prototype);

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
        if ((arguments[0] instanceof Array)) {
            return new arrayIndex2x2(self, arguments[0]);
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