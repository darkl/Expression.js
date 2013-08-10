using System;
using System.Linq;
using System.Linq.Expressions;

namespace ExpressionJs
{
    public static class ExpressionConvertibleExtensions
    {
        public static TExpression[] Unpack<TExpression>(this IExpressionConvertible<TExpression>[] pack,
            ExpressionBuilder builder)
            where TExpression : Expression
        {
            return pack.Select(x => x.GetExpression(builder)).
                        ToArray();
        }

        public static Type[] Unpack(this CLRType[] pack)
        {
            return pack.Select(x => x.Resolve()).
                        ToArray();
        }
    }
}