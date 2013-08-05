using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("negate")]
    public class Negate : IExpressionConvertible<UnaryExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        public virtual UnaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Negate(Expression.GetExpression(builder));
        }
    }
}