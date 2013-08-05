using System;
using System.Linq.Expressions;

namespace ExpressionJs
{
    public class ExpressionBuilder
    {
        [JavascriptType("assign")]
        public BinaryExpression Assign(Expression left, Expression right)
        {
            return Expression.Assign(left, right);
        }

        [JavascriptType("equal")]
        public BinaryExpression Equal(Expression left, Expression right)
        {
            return Expression.Equal(left, right);
        }

        [JavascriptType("referenceEqual")]
        public BinaryExpression ReferenceEqual(Expression left, Expression right)
        {
            return Expression.ReferenceEqual(left, right);
        }

        [JavascriptType("notEqual")]
        public BinaryExpression NotEqual(Expression left, Expression right)
        {
            return Expression.NotEqual(left, right);
        }

        [JavascriptType("referenceNotEqual")]
        public BinaryExpression ReferenceNotEqual(Expression left, Expression right)
        {
            return Expression.ReferenceNotEqual(left, right);
        }

        [JavascriptType("greaterThan")]
        public BinaryExpression GreaterThan(Expression left, Expression right)
        {
            return Expression.GreaterThan(left, right);
        }

        [JavascriptType("lessThan")]
        public BinaryExpression LessThan(Expression left, Expression right)
        {
            return Expression.LessThan(left, right);
        }

        [JavascriptType("greaterThanOrEqual")]
        public BinaryExpression GreaterThanOrEqual(Expression left, Expression right)
        {
            return Expression.GreaterThanOrEqual(left, right);
        }

        [JavascriptType("lessThanOrEqual")]
        public BinaryExpression LessThanOrEqual(Expression left, Expression right)
        {
            return Expression.LessThanOrEqual(left, right);
        }

        [JavascriptType("andAlso")]
        public BinaryExpression AndAlso(Expression left, Expression right)
        {
            return Expression.AndAlso(left, right);
        }

        [JavascriptType("orElse")]
        public BinaryExpression OrElse(Expression left, Expression right)
        {
            return Expression.OrElse(left, right);
        }

        [JavascriptType("coalesce2")]
        public BinaryExpression Coalesce(Expression left, Expression right)
        {
            return Expression.Coalesce(left, right);
        }

        [JavascriptType("coalesce3")]
        public BinaryExpression Coalesce(Expression left, Expression right, LambdaExpression conversion)
        {
            return Expression.Coalesce(left, right, conversion);
        }

        [JavascriptType("add")]
        public BinaryExpression Add(Expression left, Expression right)
        {
            return Expression.Add(left, right);
        }

        [JavascriptType("addAssign")]
        public BinaryExpression AddAssign(Expression left, Expression right)
        {
            return Expression.AddAssign(left, right);
        }

        [JavascriptType("addAssignChecked")]
        public BinaryExpression AddAssignChecked(Expression left, Expression right)
        {
            return Expression.AddAssignChecked(left, right);
        }

        [JavascriptType("addChecked")]
        public BinaryExpression AddChecked(Expression left, Expression right)
        {
            return Expression.AddChecked(left, right);
        }

        [JavascriptType("subtract")]
        public BinaryExpression Subtract(Expression left, Expression right)
        {
            return Expression.Subtract(left, right);
        }

        [JavascriptType("subtractAssign")]
        public BinaryExpression SubtractAssign(Expression left, Expression right)
        {
            return Expression.SubtractAssign(left, right);
        }

        [JavascriptType("subtractAssignChecked")]
        public BinaryExpression SubtractAssignChecked(Expression left, Expression right)
        {
            return Expression.SubtractAssignChecked(left, right);
        }

        [JavascriptType("subtractChecked")]
        public BinaryExpression SubtractChecked(Expression left, Expression right)
        {
            return Expression.SubtractChecked(left, right);
        }

        [JavascriptType("divide")]
        public BinaryExpression Divide(Expression left, Expression right)
        {
            return Expression.Divide(left, right);
        }

        [JavascriptType("divideAssign")]
        public BinaryExpression DivideAssign(Expression left, Expression right)
        {
            return Expression.DivideAssign(left, right);
        }

        [JavascriptType("modulo")]
        public BinaryExpression Modulo(Expression left, Expression right)
        {
            return Expression.Modulo(left, right);
        }

        [JavascriptType("moduloAssign")]
        public BinaryExpression ModuloAssign(Expression left, Expression right)
        {
            return Expression.ModuloAssign(left, right);
        }

        [JavascriptType("multiply")]
        public BinaryExpression Multiply(Expression left, Expression right)
        {
            return Expression.Multiply(left, right);
        }

        [JavascriptType("multiplyAssign")]
        public BinaryExpression MultiplyAssign(Expression left, Expression right)
        {
            return Expression.MultiplyAssign(left, right);
        }

        [JavascriptType("multiplyAssignChecked")]
        public BinaryExpression MultiplyAssignChecked(Expression left, Expression right)
        {
            return Expression.MultiplyAssignChecked(left, right);
        }

        [JavascriptType("multiplyChecked")]
        public BinaryExpression MultiplyChecked(Expression left, Expression right)
        {
            return Expression.MultiplyChecked(left, right);
        }

        [JavascriptType("leftShift")]
        public BinaryExpression LeftShift(Expression left, Expression right)
        {
            return Expression.LeftShift(left, right);
        }

        [JavascriptType("leftShiftAssign")]
        public BinaryExpression LeftShiftAssign(Expression left, Expression right)
        {
            return Expression.LeftShiftAssign(left, right);
        }

        [JavascriptType("rightShift")]
        public BinaryExpression RightShift(Expression left, Expression right)
        {
            return Expression.RightShift(left, right);
        }

        [JavascriptType("rightShiftAssign")]
        public BinaryExpression RightShiftAssign(Expression left, Expression right)
        {
            return Expression.RightShiftAssign(left, right);
        }

        [JavascriptType("and")]
        public BinaryExpression And(Expression left, Expression right)
        {
            return Expression.And(left, right);
        }

        [JavascriptType("andAssign")]
        public BinaryExpression AndAssign(Expression left, Expression right)
        {
            return Expression.AndAssign(left, right);
        }

        [JavascriptType("or")]
        public BinaryExpression Or(Expression left, Expression right)
        {
            return Expression.Or(left, right);
        }

        [JavascriptType("orAssign")]
        public BinaryExpression OrAssign(Expression left, Expression right)
        {
            return Expression.OrAssign(left, right);
        }

        [JavascriptType("exclusiveOr")]
        public BinaryExpression ExclusiveOr(Expression left, Expression right)
        {
            return Expression.ExclusiveOr(left, right);
        }

        [JavascriptType("exclusiveOrAssign")]
        public BinaryExpression ExclusiveOrAssign(Expression left, Expression right)
        {
            return Expression.ExclusiveOrAssign(left, right);
        }

        [JavascriptType("power")]
        public BinaryExpression Power(Expression left, Expression right)
        {
            return Expression.Power(left, right);
        }

        [JavascriptType("powerAssign")]
        public BinaryExpression PowerAssign(Expression left, Expression right)
        {
            return Expression.PowerAssign(left, right);
        }

        [JavascriptType("arrayIndex")]
        public BinaryExpression ArrayIndex(Expression array, Expression index)
        {
            return Expression.ArrayIndex(array, index);
        }

        [JavascriptType("block2x1")]
        public BlockExpression Block(Expression arg0, Expression arg1)
        {
            return Expression.Block(arg0, arg1);
        }

        [JavascriptType("block2x2")]
        public BlockExpression Block(Type type, Expression[] expressions)
        {
            return Expression.Block(type, expressions);
        }

        [JavascriptType("block2x3")]
        public BlockExpression Block(ParameterExpression[] variables, Expression[] expressions)
        {
            return Expression.Block(variables, expressions);
        }

        [JavascriptType("block3x1")]
        public BlockExpression Block(Expression arg0, Expression arg1, Expression arg2)
        {
            return Expression.Block(arg0, arg1, arg2);
        }

        [JavascriptType("block3x2")]
        public BlockExpression Block(Type type, ParameterExpression[] variables, Expression[] expressions)
        {
            return Expression.Block(type, variables, expressions);
        }

        [JavascriptType("block4")]
        public BlockExpression Block(Expression arg0, Expression arg1, Expression arg2, Expression arg3)
        {
            return Expression.Block(arg0, arg1, arg2, arg3);
        }

        [JavascriptType("block5")]
        public BlockExpression Block(Expression arg0, Expression arg1, Expression arg2, Expression arg3, Expression arg4)
        {
            return Expression.Block(arg0, arg1, arg2, arg3, arg4);
        }

        [JavascriptType("block1")]
        public BlockExpression Block(Expression[] expressions)
        {
            return Expression.Block(expressions);
        }

        [JavascriptType("condition3")]
        public ConditionalExpression Condition(Expression test, Expression ifTrue, Expression ifFalse)
        {
            return Expression.Condition(test, ifTrue, ifFalse);
        }

        [JavascriptType("condition4")]
        public ConditionalExpression Condition(Expression test, Expression ifTrue, Expression ifFalse, Type type)
        {
            return Expression.Condition(test, ifTrue, ifFalse, type);
        }

        [JavascriptType("ifThen")]
        public ConditionalExpression IfThen(Expression test, Expression ifTrue)
        {
            return Expression.IfThen(test, ifTrue);
        }

        [JavascriptType("ifThenElse")]
        public ConditionalExpression IfThenElse(Expression test, Expression ifTrue, Expression ifFalse)
        {
            return Expression.IfThenElse(test, ifTrue, ifFalse);
        }

        [JavascriptType("constant1")]
        public ConstantExpression Constant(object value)
        {
            return Expression.Constant(value);
        }

        [JavascriptType("constant2")]
        public ConstantExpression Constant(object value, Type type)
        {
            return Expression.Constant(value, type);
        }

        [JavascriptType("empty")]
        public DefaultExpression Empty()
        {
            return Expression.Empty();
        }

        [JavascriptType("default1")]
        public DefaultExpression Default(Type type)
        {
            return Expression.Default(type);
        }

        [JavascriptType("arrayAccess")]
        public IndexExpression ArrayAccess(Expression array, Expression[] indexes)
        {
            return Expression.ArrayAccess(array, indexes);
        }

        [JavascriptType("property3x1")]
        public IndexExpression Property(Expression instance, string propertyName, Expression[] arguments)
        {
            return Expression.Property(instance, propertyName, arguments);
        }

        [JavascriptType("property3x2")]
        public MemberExpression Property(Expression expression, Type type, string propertyName)
        {
            return Expression.Property(expression, type, propertyName);
        }

        [JavascriptType("property2")]
        public MemberExpression Property(Expression expression, string propertyName)
        {
            return Expression.Property(expression, propertyName);
        }

        [JavascriptType("invoke")]
        public InvocationExpression Invoke(Expression expression, Expression[] arguments)
        {
            return Expression.Invoke(expression, arguments);
        }

        [JavascriptType("lambda2")]
        public LambdaExpression Lambda(Expression body, ParameterExpression[] parameters)
        {
            return Expression.Lambda(body, parameters);
        }

        [JavascriptType("lambda3x1")]
        public LambdaExpression Lambda(Expression body, bool tailCall, ParameterExpression[] parameters)
        {
            return Expression.Lambda(body, tailCall, parameters);
        }

        [JavascriptType("lambda3x2")]
        public LambdaExpression Lambda(Type delegateType, Expression body, ParameterExpression[] parameters)
        {
            return Expression.Lambda(delegateType, body, parameters);
        }

        [JavascriptType("lambda3x3")]
        public LambdaExpression Lambda(Expression body, string name, ParameterExpression[] parameters)
        {
            return Expression.Lambda(body, name, parameters);
        }

        [JavascriptType("lambda4x1")]
        public LambdaExpression Lambda(Type delegateType, Expression body, bool tailCall,
                                       ParameterExpression[] parameters)
        {
            return Expression.Lambda(delegateType, body, tailCall, parameters);
        }

        [JavascriptType("lambda4x2")]
        public LambdaExpression Lambda(Expression body, string name, bool tailCall, ParameterExpression[] parameters)
        {
            return Expression.Lambda(body, name, tailCall, parameters);
        }

        [JavascriptType("lambda4x3")]
        public LambdaExpression Lambda(Type delegateType, Expression body, string name, ParameterExpression[] parameters)
        {
            return Expression.Lambda(delegateType, body, name, parameters);
        }

        [JavascriptType("lambda5")]
        public LambdaExpression Lambda(Type delegateType, Expression body, string name, bool tailCall,
                                       ParameterExpression[] parameters)
        {
            return Expression.Lambda(delegateType, body, name, tailCall, parameters);
        }

        [JavascriptType("listInit")]
        public ListInitExpression ListInit(NewExpression newExpression, Expression[] initializers)
        {
            return Expression.ListInit(newExpression, initializers);
        }

        [JavascriptType("loop")]
        public LoopExpression Loop(Expression body)
        {
            return Expression.Loop(body);
        }

        [JavascriptType("field2")]
        public MemberExpression Field(Expression expression, string fieldName)
        {
            return Expression.Field(expression, fieldName);
        }

        [JavascriptType("field3")]
        public MemberExpression Field(Expression expression, Type type, string fieldName)
        {
            return Expression.Field(expression, type, fieldName);
        }

        [JavascriptType("propertyOrField")]
        public MemberExpression PropertyOrField(Expression expression, string propertyOrFieldName)
        {
            return Expression.PropertyOrField(expression, propertyOrFieldName);
        }

        [JavascriptType("call4x1")]
        public MethodCallExpression Call(Expression instance, string methodName, Type[] typeArguments,
                                         Expression[] arguments)
        {
            return Expression.Call(instance, methodName, typeArguments, arguments);
        }

        [JavascriptType("call4x2")]
        public MethodCallExpression Call(Type type, string methodName, Type[] typeArguments, Expression[] arguments)
        {
            return Expression.Call(type, methodName, typeArguments, arguments);
        }

        [JavascriptType("newArrayInit")]
        public NewArrayExpression NewArrayInit(Type type, Expression[] initializers)
        {
            return Expression.NewArrayInit(type, initializers);
        }

        [JavascriptType("newArrayBounds")]
        public NewArrayExpression NewArrayBounds(Type type, Expression[] bounds)
        {
            return Expression.NewArrayBounds(type, bounds);
        }

        [JavascriptType("new1")]
        public NewExpression New(Type type)
        {
            return Expression.New(type);
        }

        [JavascriptType("parameter1")]
        public ParameterExpression Parameter(Type type)
        {
            return Expression.Parameter(type);
        }

        [JavascriptType("parameter2")]
        public ParameterExpression Parameter(Type type, string name)
        {
            return Expression.Parameter(type, name);
        }

        [JavascriptType("variable1")]
        public ParameterExpression Variable(Type type)
        {
            return Expression.Variable(type);
        }

        [JavascriptType("variable2")]
        public ParameterExpression Variable(Type type, string name)
        {
            return Expression.Variable(type, name);
        }

        [JavascriptType("runtimeVariables")]
        public RuntimeVariablesExpression RuntimeVariables(ParameterExpression[] variables)
        {
            return Expression.RuntimeVariables(variables);
        }

        [JavascriptType("tryFault")]
        public TryExpression TryFault(Expression body, Expression fault)
        {
            return Expression.TryFault(body, fault);
        }

        [JavascriptType("tryFinally")]
        public TryExpression TryFinally(Expression body, Expression @finally)
        {
            return Expression.TryFinally(body, @finally);
        }

        [JavascriptType("typeIs")]
        public TypeBinaryExpression TypeIs(Expression expression, Type type)
        {
            return Expression.TypeIs(expression, type);
        }

        [JavascriptType("typeEqual")]
        public TypeBinaryExpression TypeEqual(Expression expression, Type type)
        {
            return Expression.TypeEqual(expression, type);
        }

        [JavascriptType("negate")]
        public UnaryExpression Negate(Expression expression)
        {
            return Expression.Negate(expression);
        }

        [JavascriptType("unaryPlus")]
        public UnaryExpression UnaryPlus(Expression expression)
        {
            return Expression.UnaryPlus(expression);
        }

        [JavascriptType("negateChecked")]
        public UnaryExpression NegateChecked(Expression expression)
        {
            return Expression.NegateChecked(expression);
        }

        [JavascriptType("not")]
        public UnaryExpression Not(Expression expression)
        {
            return Expression.Not(expression);
        }

        [JavascriptType("isFalse")]
        public UnaryExpression IsFalse(Expression expression)
        {
            return Expression.IsFalse(expression);
        }

        [JavascriptType("isTrue")]
        public UnaryExpression IsTrue(Expression expression)
        {
            return Expression.IsTrue(expression);
        }

        [JavascriptType("onesComplement")]
        public UnaryExpression OnesComplement(Expression expression)
        {
            return Expression.OnesComplement(expression);
        }

        [JavascriptType("typeAs")]
        public UnaryExpression TypeAs(Expression expression, Type type)
        {
            return Expression.TypeAs(expression, type);
        }

        [JavascriptType("unbox")]
        public UnaryExpression Unbox(Expression expression, Type type)
        {
            return Expression.Unbox(expression, type);
        }

        [JavascriptType("convert")]
        public UnaryExpression Convert(Expression expression, Type type)
        {
            return Expression.Convert(expression, type);
        }

        [JavascriptType("convertChecked")]
        public UnaryExpression ConvertChecked(Expression expression, Type type)
        {
            return Expression.ConvertChecked(expression, type);
        }

        [JavascriptType("arrayLength")]
        public UnaryExpression ArrayLength(Expression array)
        {
            return Expression.ArrayLength(array);
        }

        [JavascriptType("quote")]
        public UnaryExpression Quote(Expression expression)
        {
            return Expression.Quote(expression);
        }

        [JavascriptType("rethrow0")]
        public UnaryExpression Rethrow()
        {
            return Expression.Rethrow();
        }

        [JavascriptType("rethrow1")]
        public UnaryExpression Rethrow(Type type)
        {
            return Expression.Rethrow(type);
        }

        [JavascriptType("throw1")]
        public UnaryExpression Throw(Expression value)
        {
            return Expression.Throw(value);
        }

        [JavascriptType("throw2")]
        public UnaryExpression Throw(Expression value, Type type)
        {
            return Expression.Throw(value, type);
        }

        [JavascriptType("increment")]
        public UnaryExpression Increment(Expression expression)
        {
            return Expression.Increment(expression);
        }

        [JavascriptType("decrement")]
        public UnaryExpression Decrement(Expression expression)
        {
            return Expression.Decrement(expression);
        }

        [JavascriptType("preIncrementAssign")]
        public UnaryExpression PreIncrementAssign(Expression expression)
        {
            return Expression.PreIncrementAssign(expression);
        }

        [JavascriptType("preDecrementAssign")]
        public UnaryExpression PreDecrementAssign(Expression expression)
        {
            return Expression.PreDecrementAssign(expression);
        }

        [JavascriptType("postIncrementAssign")]
        public UnaryExpression PostIncrementAssign(Expression expression)
        {
            return Expression.PostIncrementAssign(expression);
        }

        [JavascriptType("postDecrementAssign")]
        public UnaryExpression PostDecrementAssign(Expression expression)
        {
            return Expression.PostDecrementAssign(expression);
        }
    }
}