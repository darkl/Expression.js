using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("postIncrementAssign")]
    public class PostIncrementAssign : IExpressionConvertible<UnaryExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        public virtual UnaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.PostIncrementAssign(Expression.GetExpression(builder));
        }
    }
}