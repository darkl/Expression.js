using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Reflection;

namespace ExpressionJs
{
    public partial class ExpressionBuilder
    {
        private readonly MethodInfo mAddMethod;
        private readonly MethodInfo mAndAlsoMethod;
        private readonly MethodInfo mAndMethod;
        private readonly MethodInfo mDivideMethod;
        private readonly MethodInfo mEqualMethod;

        private readonly MethodInfo mGreaterThanMethod;

        private readonly MethodInfo mGreaterThanOrEqualMethod;
        private readonly MethodInfo mLessThanMethod;

        private readonly MethodInfo mLessThanOrEqualMethod;
        private readonly MethodInfo mModuloMethod;
        private readonly MethodInfo mMultiplyMethod;
        private readonly MethodInfo mNotEqualMethod;

        private readonly MethodInfo mOrElseMethod;
        private readonly MethodInfo mOrMethod;
        private readonly MethodInfo mSubtractMethod;

        private MethodInfo mAddAssignCheckedMethod;
        private MethodInfo mAddAssignMethod;

        private MethodInfo mAddCheckedMethod;
        private MethodInfo mAndAssignMethod;

        private MethodInfo mDivideAssignMethod;
        private MethodInfo mExclusiveOrAssignMethod;
        private MethodInfo mExclusiveOrMethod;
        private MethodInfo mLeftShiftAssignMethod;
        private MethodInfo mLeftShiftMethod;

        private MethodInfo mModuloAssignMethod;

        private MethodInfo mMultiplyAssignCheckedMethod;
        private MethodInfo mMultiplyAssignMethod;

        private MethodInfo mMultiplyCheckedMethod;

        private MethodInfo mOrAssignMethod;

        private MethodInfo mPowerAssignMethod;
        private MethodInfo mPowerMethod;
        private MethodInfo mRightShiftAssignMethod;
        private MethodInfo mRightShiftMethod;
        private MethodInfo mSubtractAssignCheckedMethod;
        private MethodInfo mSubtractAssignMethod;
        private MethodInfo mSubtractCheckedMethod;

        [JavascriptType("assign")]
        public virtual BinaryExpression Assign(Expression left, Expression right)
        {
            return Expression.Assign(left, right);
        }

        [JavascriptType("equal")]
        public virtual BinaryExpression Equal(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.Equal(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.Equal(leftCasted, rightCasted, false, mEqualMethod);
            }
        }

        [JavascriptType("referenceEqual")]
        public virtual BinaryExpression ReferenceEqual(Expression left, Expression right)
        {
            return Expression.ReferenceEqual(left, right);
        }

        [JavascriptType("notEqual")]
        public virtual BinaryExpression NotEqual(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.NotEqual(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.NotEqual(leftCasted, rightCasted, false, mNotEqualMethod);
            }
        }

        [JavascriptType("referenceNotEqual")]
        public virtual BinaryExpression ReferenceNotEqual(Expression left, Expression right)
        {
            return Expression.ReferenceNotEqual(left, right);
        }

        [JavascriptType("greaterThan")]
        public virtual BinaryExpression GreaterThan(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.GreaterThan(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.GreaterThan(leftCasted, rightCasted, false, mGreaterThanMethod);
            }
        }

        [JavascriptType("lessThan")]
        public virtual BinaryExpression LessThan(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.LessThan(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.LessThan(leftCasted, rightCasted, false, mLessThanMethod);
            }
        }

        [JavascriptType("greaterThanOrEqual")]
        public virtual BinaryExpression GreaterThanOrEqual(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.GreaterThanOrEqual(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.GreaterThanOrEqual(leftCasted, rightCasted, false, mGreaterThanOrEqualMethod);
            }
        }

        [JavascriptType("lessThanOrEqual")]
        public virtual BinaryExpression LessThanOrEqual(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.LessThanOrEqual(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.LessThanOrEqual(leftCasted, rightCasted, false, mLessThanOrEqualMethod);
            }
        }

        [JavascriptType("andAlso")]
        public virtual BinaryExpression AndAlso(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.AndAlso(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.AndAlso(leftCasted, rightCasted, mAndAlsoMethod);
            }
        }

        [JavascriptType("orElse")]
        public virtual BinaryExpression OrElse(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.OrElse(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.OrElse(leftCasted, rightCasted, mOrElseMethod);
            }
        }

        [JavascriptType("coalesce2")]
        public virtual BinaryExpression Coalesce(Expression left, Expression right)
        {
            return Expression.Coalesce(left, right);
        }

        [JavascriptType("coalesce3")]
        public virtual BinaryExpression Coalesce(Expression left, Expression right, LambdaExpression conversion)
        {
            return Expression.Coalesce(left, right, conversion);
        }

        [JavascriptType("add")]
        public virtual BinaryExpression Add(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.Add(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.Add(leftCasted, rightCasted, mAddMethod);
            }
        }

        [JavascriptType("addAssign")]
        public virtual BinaryExpression AddAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.AddAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.AddAssign(leftCasted, rightCasted, mAddAssignMethod);
            }
        }

        [JavascriptType("addAssignChecked")]
        public virtual BinaryExpression AddAssignChecked(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.AddAssignChecked(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.AddAssignChecked(leftCasted, rightCasted, mAddAssignCheckedMethod);
            }
        }

        [JavascriptType("addChecked")]
        public virtual BinaryExpression AddChecked(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.AddChecked(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.AddChecked(leftCasted, rightCasted, mAddCheckedMethod);
            }
        }

        [JavascriptType("subtract")]
        public virtual BinaryExpression Subtract(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.Subtract(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.Subtract(leftCasted, rightCasted, mSubtractMethod);
            }
        }

        [JavascriptType("subtractAssign")]
        public virtual BinaryExpression SubtractAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.SubtractAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.SubtractAssign(leftCasted, rightCasted, mSubtractAssignMethod);
            }
        }

        [JavascriptType("subtractAssignChecked")]
        public virtual BinaryExpression SubtractAssignChecked(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.SubtractAssignChecked(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.SubtractAssignChecked(leftCasted, rightCasted, mSubtractAssignCheckedMethod);
            }
        }

        [JavascriptType("subtractChecked")]
        public virtual BinaryExpression SubtractChecked(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.SubtractChecked(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.SubtractChecked(leftCasted, rightCasted, mSubtractCheckedMethod);
            }
        }

        [JavascriptType("divide")]
        public virtual BinaryExpression Divide(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.Divide(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.Divide(leftCasted, rightCasted, mDivideMethod);
            }
        }

        [JavascriptType("divideAssign")]
        public virtual BinaryExpression DivideAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.DivideAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.DivideAssign(leftCasted, rightCasted, mDivideAssignMethod);
            }
        }

        [JavascriptType("modulo")]
        public virtual BinaryExpression Modulo(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.Modulo(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.Modulo(leftCasted, rightCasted, mModuloMethod);
            }
        }

        [JavascriptType("moduloAssign")]
        public virtual BinaryExpression ModuloAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.ModuloAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.ModuloAssign(leftCasted, rightCasted, mModuloAssignMethod);
            }
        }

        [JavascriptType("multiply")]
        public virtual BinaryExpression Multiply(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.Multiply(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.Multiply(leftCasted, rightCasted, mMultiplyMethod);
            }
        }

        [JavascriptType("multiplyAssign")]
        public virtual BinaryExpression MultiplyAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.MultiplyAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.MultiplyAssign(leftCasted, rightCasted, mMultiplyAssignMethod);
            }
        }

        [JavascriptType("multiplyAssignChecked")]
        public virtual BinaryExpression MultiplyAssignChecked(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.MultiplyAssignChecked(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.MultiplyAssignChecked(leftCasted, rightCasted, mMultiplyAssignCheckedMethod);
            }
        }

        [JavascriptType("multiplyChecked")]
        public virtual BinaryExpression MultiplyChecked(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.MultiplyChecked(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.MultiplyChecked(leftCasted, rightCasted, mMultiplyCheckedMethod);
            }
        }

        [JavascriptType("leftShift")]
        public virtual BinaryExpression LeftShift(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.LeftShift(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.LeftShift(leftCasted, rightCasted, mLeftShiftMethod);
            }
        }

        [JavascriptType("leftShiftAssign")]
        public virtual BinaryExpression LeftShiftAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.LeftShiftAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.LeftShiftAssign(leftCasted, rightCasted, mLeftShiftAssignMethod);
            }
        }

        [JavascriptType("rightShift")]
        public virtual BinaryExpression RightShift(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.RightShift(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.RightShift(leftCasted, rightCasted, mRightShiftMethod);
            }
        }

        [JavascriptType("rightShiftAssign")]
        public virtual BinaryExpression RightShiftAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.RightShiftAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.RightShiftAssign(leftCasted, rightCasted, mRightShiftAssignMethod);
            }
        }

        [JavascriptType("and")]
        public virtual BinaryExpression And(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.And(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.And(leftCasted, rightCasted, mAndMethod);
            }
        }

        [JavascriptType("andAssign")]
        public virtual BinaryExpression AndAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.AndAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.AndAssign(leftCasted, rightCasted, mAndAssignMethod);
            }
        }

        [JavascriptType("or")]
        public virtual BinaryExpression Or(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.Or(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.Or(leftCasted, rightCasted, mOrMethod);
            }
        }

        [JavascriptType("orAssign")]
        public virtual BinaryExpression OrAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.OrAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.OrAssign(leftCasted, rightCasted, mOrAssignMethod);
            }
        }

        [JavascriptType("exclusiveOr")]
        public virtual BinaryExpression ExclusiveOr(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.ExclusiveOr(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.ExclusiveOr(leftCasted, rightCasted, mExclusiveOrMethod);
            }
        }

        [JavascriptType("exclusiveOrAssign")]
        public virtual BinaryExpression ExclusiveOrAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.ExclusiveOrAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.ExclusiveOrAssign(leftCasted, rightCasted, mExclusiveOrAssignMethod);
            }
        }

        [JavascriptType("power")]
        public virtual BinaryExpression Power(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.Power(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.Power(leftCasted, rightCasted, mPowerMethod);
            }
        }

        [JavascriptType("powerAssign")]
        public virtual BinaryExpression PowerAssign(Expression left, Expression right)
        {
            if ((left.Type == right.Type))
            {
                return Expression.PowerAssign(left, right);
            }
            else
            {
                Expression leftCasted = Expression.Convert(left, typeof (object));
                Expression rightCasted = Expression.Convert(right, typeof (object));
                return Expression.PowerAssign(leftCasted, rightCasted, mPowerAssignMethod);
            }
        }

        [JavascriptType("arrayIndex")]
        public virtual BinaryExpression ArrayIndex(Expression array, Expression index)
        {
            return Expression.ArrayIndex(array, index);
        }

        [JavascriptType("block2x1")]
        public virtual BlockExpression Block(Expression arg0, Expression arg1)
        {
            return Expression.Block(arg0, arg1);
        }

        [JavascriptType("block2x2")]
        public virtual BlockExpression Block(Type type, Expression[] expressions)
        {
            return Expression.Block(type, expressions);
        }

        [JavascriptType("block2x3")]
        public virtual BlockExpression Block(IEnumerable<ParameterExpression> variables, Expression[] expressions)
        {
            return Expression.Block(variables, expressions);
        }

        [JavascriptType("block3x1")]
        public virtual BlockExpression Block(Expression arg0, Expression arg1, Expression arg2)
        {
            return Expression.Block(arg0, arg1, arg2);
        }

        [JavascriptType("block3x2")]
        public virtual BlockExpression Block(Type type, IEnumerable<ParameterExpression> variables,
                                             Expression[] expressions)
        {
            return Expression.Block(type, variables, expressions);
        }

        [JavascriptType("block4")]
        public virtual BlockExpression Block(Expression arg0, Expression arg1, Expression arg2, Expression arg3)
        {
            return Expression.Block(arg0, arg1, arg2, arg3);
        }

        [JavascriptType("block5")]
        public virtual BlockExpression Block(Expression arg0, Expression arg1, Expression arg2, Expression arg3,
                                             Expression arg4)
        {
            return Expression.Block(arg0, arg1, arg2, arg3, arg4);
        }

        [JavascriptType("block1")]
        public virtual BlockExpression Block(Expression[] expressions)
        {
            return Expression.Block(expressions);
        }

        [JavascriptType("condition3")]
        public virtual ConditionalExpression Condition(Expression test, Expression ifTrue, Expression ifFalse)
        {
            return Expression.Condition(test, ifTrue, ifFalse);
        }

        [JavascriptType("condition4")]
        public virtual ConditionalExpression Condition(Expression test, Expression ifTrue, Expression ifFalse, Type type)
        {
            return Expression.Condition(test, ifTrue, ifFalse, type);
        }

        [JavascriptType("ifThen")]
        public virtual ConditionalExpression IfThen(Expression test, Expression ifTrue)
        {
            return Expression.IfThen(test, ifTrue);
        }

        [JavascriptType("ifThenElse")]
        public virtual ConditionalExpression IfThenElse(Expression test, Expression ifTrue, Expression ifFalse)
        {
            return Expression.IfThenElse(test, ifTrue, ifFalse);
        }

        [JavascriptType("constant1")]
        public virtual ConstantExpression Constant(object value)
        {
            return Expression.Constant(value);
        }

        [JavascriptType("constant2")]
        public virtual ConstantExpression Constant(object value, Type type)
        {
            return Expression.Constant(value, type);
        }

        [JavascriptType("empty")]
        public virtual DefaultExpression Empty()
        {
            return Expression.Empty();
        }

        [JavascriptType("default1")]
        public virtual DefaultExpression Default(Type type)
        {
            return Expression.Default(type);
        }

        [JavascriptType("arrayAccess")]
        public virtual IndexExpression ArrayAccess(Expression array, Expression[] indexes)
        {
            return Expression.ArrayAccess(array, indexes);
        }

        [JavascriptType("property3x1")]
        public virtual IndexExpression Property(Expression instance, string propertyName, Expression[] arguments)
        {
            return Expression.Property(instance, propertyName, arguments);
        }

        [JavascriptType("property3x2")]
        public virtual MemberExpression Property(Expression expression, Type type, string propertyName)
        {
            return Expression.Property(expression, type, propertyName);
        }

        [JavascriptType("property2")]
        public virtual MemberExpression Property(Expression expression, string propertyName)
        {
            return Expression.Property(expression, propertyName);
        }

        [JavascriptType("invoke")]
        public virtual InvocationExpression Invoke(Expression expression, Expression[] arguments)
        {
            return Expression.Invoke(expression, arguments);
        }

        [JavascriptType("lambda2")]
        public virtual LambdaExpression Lambda(Expression body, ParameterExpression[] parameters)
        {
            return Expression.Lambda(body, parameters);
        }

        [JavascriptType("lambda3x1")]
        public virtual LambdaExpression Lambda(Expression body, bool tailCall, ParameterExpression[] parameters)
        {
            return Expression.Lambda(body, tailCall, parameters);
        }

        [JavascriptType("lambda3x2")]
        public virtual LambdaExpression Lambda(Type delegateType, Expression body, ParameterExpression[] parameters)
        {
            return Expression.Lambda(delegateType, body, parameters);
        }

        [JavascriptType("lambda3x3")]
        public virtual LambdaExpression Lambda(Expression body, string name, IEnumerable<ParameterExpression> parameters)
        {
            return Expression.Lambda(body, name, parameters);
        }

        [JavascriptType("lambda4x1")]
        public virtual LambdaExpression Lambda(Type delegateType, Expression body, bool tailCall,
                                               ParameterExpression[] parameters)
        {
            return Expression.Lambda(delegateType, body, tailCall, parameters);
        }

        [JavascriptType("lambda4x2")]
        public virtual LambdaExpression Lambda(Expression body, string name, bool tailCall,
                                               IEnumerable<ParameterExpression> parameters)
        {
            return Expression.Lambda(body, name, tailCall, parameters);
        }

        [JavascriptType("lambda4x3")]
        public virtual LambdaExpression Lambda(Type delegateType, Expression body, string name,
                                               IEnumerable<ParameterExpression> parameters)
        {
            return Expression.Lambda(delegateType, body, name, parameters);
        }

        [JavascriptType("lambda5")]
        public virtual LambdaExpression Lambda(Type delegateType, Expression body, string name, bool tailCall,
                                               IEnumerable<ParameterExpression> parameters)
        {
            return Expression.Lambda(delegateType, body, name, tailCall, parameters);
        }

        [JavascriptType("listInit")]
        public virtual ListInitExpression ListInit(NewExpression newExpression, Expression[] initializers)
        {
            return Expression.ListInit(newExpression, initializers);
        }

        [JavascriptType("loop")]
        public virtual LoopExpression Loop(Expression body)
        {
            return Expression.Loop(body);
        }

        [JavascriptType("field2")]
        public virtual MemberExpression Field(Expression expression, string fieldName)
        {
            return Expression.Field(expression, fieldName);
        }

        [JavascriptType("field3")]
        public virtual MemberExpression Field(Expression expression, Type type, string fieldName)
        {
            return Expression.Field(expression, type, fieldName);
        }

        [JavascriptType("propertyOrField")]
        public virtual MemberExpression PropertyOrField(Expression expression, string propertyOrFieldName)
        {
            return Expression.PropertyOrField(expression, propertyOrFieldName);
        }

        [JavascriptType("call4x1")]
        public virtual MethodCallExpression Call(Expression instance, string methodName, Type[] typeArguments,
                                                 Expression[] arguments)
        {
            return Expression.Call(instance, methodName, typeArguments, arguments);
        }

        [JavascriptType("call4x2")]
        public virtual MethodCallExpression Call(Type type, string methodName, Type[] typeArguments,
                                                 Expression[] arguments)
        {
            return Expression.Call(type, methodName, typeArguments, arguments);
        }

        [JavascriptType("newArrayInit")]
        public virtual NewArrayExpression NewArrayInit(Type type, Expression[] initializers)
        {
            return Expression.NewArrayInit(type, initializers);
        }

        [JavascriptType("newArrayBounds")]
        public virtual NewArrayExpression NewArrayBounds(Type type, Expression[] bounds)
        {
            return Expression.NewArrayBounds(type, bounds);
        }

        [JavascriptType("new1")]
        public virtual NewExpression New(Type type)
        {
            return Expression.New(type);
        }

        [JavascriptType("parameter1")]
        public virtual ParameterExpression Parameter(Type type)
        {
            return Expression.Parameter(type);
        }

        [JavascriptType("parameter2")]
        public virtual ParameterExpression Parameter(Type type, string name)
        {
            return Expression.Parameter(type, name);
        }

        [JavascriptType("variable1")]
        public virtual ParameterExpression Variable(Type type)
        {
            return Expression.Variable(type);
        }

        [JavascriptType("variable2")]
        public virtual ParameterExpression Variable(Type type, string name)
        {
            return Expression.Variable(type, name);
        }

        [JavascriptType("runtimeVariables")]
        public virtual RuntimeVariablesExpression RuntimeVariables(ParameterExpression[] variables)
        {
            return Expression.RuntimeVariables(variables);
        }

        [JavascriptType("tryFault")]
        public virtual TryExpression TryFault(Expression body, Expression fault)
        {
            return Expression.TryFault(body, fault);
        }

        [JavascriptType("tryFinally")]
        public virtual TryExpression TryFinally(Expression body, Expression @finally)
        {
            return Expression.TryFinally(body, @finally);
        }

        [JavascriptType("typeIs")]
        public virtual TypeBinaryExpression TypeIs(Expression expression, Type type)
        {
            return Expression.TypeIs(expression, type);
        }

        [JavascriptType("typeEqual")]
        public virtual TypeBinaryExpression TypeEqual(Expression expression, Type type)
        {
            return Expression.TypeEqual(expression, type);
        }

        [JavascriptType("negate")]
        public virtual UnaryExpression Negate(Expression expression)
        {
            return Expression.Negate(expression);
        }

        [JavascriptType("unaryPlus")]
        public virtual UnaryExpression UnaryPlus(Expression expression)
        {
            return Expression.UnaryPlus(expression);
        }

        [JavascriptType("negateChecked")]
        public virtual UnaryExpression NegateChecked(Expression expression)
        {
            return Expression.NegateChecked(expression);
        }

        [JavascriptType("not")]
        public virtual UnaryExpression Not(Expression expression)
        {
            return Expression.Not(expression);
        }

        [JavascriptType("isFalse")]
        public virtual UnaryExpression IsFalse(Expression expression)
        {
            return Expression.IsFalse(expression);
        }

        [JavascriptType("isTrue")]
        public virtual UnaryExpression IsTrue(Expression expression)
        {
            return Expression.IsTrue(expression);
        }

        [JavascriptType("onesComplement")]
        public virtual UnaryExpression OnesComplement(Expression expression)
        {
            return Expression.OnesComplement(expression);
        }

        [JavascriptType("typeAs")]
        public virtual UnaryExpression TypeAs(Expression expression, Type type)
        {
            return Expression.TypeAs(expression, type);
        }

        [JavascriptType("unbox")]
        public virtual UnaryExpression Unbox(Expression expression, Type type)
        {
            return Expression.Unbox(expression, type);
        }

        [JavascriptType("convert")]
        public virtual UnaryExpression Convert(Expression expression, Type type)
        {
            return Expression.Convert(expression, type);
        }

        [JavascriptType("convertChecked")]
        public virtual UnaryExpression ConvertChecked(Expression expression, Type type)
        {
            return Expression.ConvertChecked(expression, type);
        }

        [JavascriptType("arrayLength")]
        public virtual UnaryExpression ArrayLength(Expression array)
        {
            return Expression.ArrayLength(array);
        }

        [JavascriptType("quote")]
        public virtual UnaryExpression Quote(Expression expression)
        {
            return Expression.Quote(expression);
        }

        [JavascriptType("rethrow0")]
        public virtual UnaryExpression Rethrow()
        {
            return Expression.Rethrow();
        }

        [JavascriptType("rethrow1")]
        public virtual UnaryExpression Rethrow(Type type)
        {
            return Expression.Rethrow(type);
        }

        [JavascriptType("throw1")]
        public virtual UnaryExpression Throw(Expression value)
        {
            return Expression.Throw(value);
        }

        [JavascriptType("throw2")]
        public virtual UnaryExpression Throw(Expression value, Type type)
        {
            return Expression.Throw(value, type);
        }

        [JavascriptType("increment")]
        public virtual UnaryExpression Increment(Expression expression)
        {
            return Expression.Increment(expression);
        }

        [JavascriptType("decrement")]
        public virtual UnaryExpression Decrement(Expression expression)
        {
            return Expression.Decrement(expression);
        }

        [JavascriptType("preIncrementAssign")]
        public virtual UnaryExpression PreIncrementAssign(Expression expression)
        {
            return Expression.PreIncrementAssign(expression);
        }

        [JavascriptType("preDecrementAssign")]
        public virtual UnaryExpression PreDecrementAssign(Expression expression)
        {
            return Expression.PreDecrementAssign(expression);
        }

        [JavascriptType("postIncrementAssign")]
        public virtual UnaryExpression PostIncrementAssign(Expression expression)
        {
            return Expression.PostIncrementAssign(expression);
        }

        [JavascriptType("postDecrementAssign")]
        public virtual UnaryExpression PostDecrementAssign(Expression expression)
        {
            return Expression.PostDecrementAssign(expression);
        }
    }
}