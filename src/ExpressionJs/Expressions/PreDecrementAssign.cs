using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("preDecrementAssign")]
    public class PreDecrementAssign : IExpressionConvertible<UnaryExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        public virtual UnaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.PreDecrementAssign(Expression.GetExpression(builder));
        }
    }
}