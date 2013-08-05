using System.Linq.Expressions;

namespace ExpressionJs
{
    [JavascriptType("rethrow0")]
    public class Rethrow0 : IExpressionConvertible<UnaryExpression>
    {
        public virtual UnaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Rethrow();
        }
    }
}