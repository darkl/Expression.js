using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("postDecrementAssign")]
    public class PostDecrementAssign : IExpressionConvertible<UnaryExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        public virtual UnaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.PostDecrementAssign(Expression.GetExpression(builder));
        }
    }
}