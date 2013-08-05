using System.Linq.Expressions;

namespace ExpressionJs
{
    [JavascriptType("empty")]
    public class Empty : IExpressionConvertible<DefaultExpression>
    {
        public virtual DefaultExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Empty();
        }
    }
}