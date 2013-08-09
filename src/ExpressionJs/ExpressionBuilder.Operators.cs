using System;
using System.Linq.Expressions;
using System.Reflection;

namespace ExpressionJs
{
    public partial class ExpressionBuilder
    {
        public ExpressionBuilder()
        {
            mEqualMethod = GetMethod(() => DynamicEqual(default(object), default(object)));
            mNotEqualMethod = GetMethod(() => DynamicNotEqual(default(object), default(object)));
            mGreaterThanMethod = GetMethod(() => DynamicGreaterThan(default(object), default(object)));
            mGreaterThanOrEqualMethod = GetMethod(() => DynamicGreaterThanOrEqual(default(object), default(object)));
            mLessThanMethod = GetMethod(() => DynamicLessThan(default(object), default(object)));
            mLessThanOrEqualMethod = GetMethod(() => DynamicLessThanOrEqual(default(object), default(object)));
            mAddMethod = GetMethod(() => DynamicAdd(default(object), default(object)));
            mSubtractMethod = GetMethod(() => DynamicSubtract(default(object), default(object)));
            mMultiplyMethod = GetMethod(() => DynamicMultiply(default(object), default(object)));
            mDivideMethod = GetMethod(() => DynamicDivide(default(object), default(object)));
            mModuloMethod = GetMethod(() => DynamicModulo(default(object), default(object)));
            mAndMethod = GetMethod(() => DynamicAnd(default(object), default(object)));
            mAndAlsoMethod = GetMethod(() => DynamicAndAlso(default(object), default(object)));
            mOrMethod = GetMethod(() => DynamicOr(default(object), default(object)));
            mOrElseMethod = GetMethod(() => DynamicOrElse(default(object), default(object)));
        }

        private static MethodInfo GetMethod<TResult>(Expression<Func<TResult>> expression)
        {
            MethodCallExpression body = expression.Body as MethodCallExpression;

            return body.Method;
        }

        public static bool DynamicEqual(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;
            
            return (dynamicX == dynamicY);
        }

        private static bool DynamicNotEqual(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX != dynamicY);
        }

        private static bool DynamicGreaterThan(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX > dynamicY);
        }

        private static bool DynamicGreaterThanOrEqual(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX >= dynamicY);
        }

        private static bool DynamicLessThan(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX < dynamicY);
        }

        private static bool DynamicLessThanOrEqual(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX <= dynamicY);
        }

        private static object DynamicAdd(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX + dynamicY);
        }

        private static object DynamicSubtract(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX - dynamicY);
        }

        private static object DynamicMultiply(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX * dynamicY);
        }
        private static object DynamicDivide(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX / dynamicY);
        }
        
        private static object DynamicModulo(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX % dynamicY);
        }
        
        private static object DynamicAnd(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX & dynamicY);
        }
        
        private static object DynamicAndAlso(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX && dynamicY);
        }
        
        private static object DynamicOr(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX | dynamicY);
        }
        
        private static object DynamicOrElse(object x, object y)
        {
            dynamic dynamicX = x;
            dynamic dynamicY = y;

            return (dynamicX || dynamicY);
        }
    }
}