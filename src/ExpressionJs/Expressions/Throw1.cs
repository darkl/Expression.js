using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("throw1")]
    public class Throw1 : IExpressionConvertible<UnaryExpression>
    {
        [JsonProperty("value")]
        public virtual IExpressionConvertible<Expression> Value { get; set; }

        public virtual UnaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Throw(Value.GetExpression(builder));
        }
    }
}