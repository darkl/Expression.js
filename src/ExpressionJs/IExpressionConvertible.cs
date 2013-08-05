using System.Linq.Expressions;

namespace ExpressionJs
{
    public interface IExpressionConvertible<out TExpression>
        where TExpression : Expression
    {
        TExpression GetExpression(ExpressionBuilder builder);
    }
}