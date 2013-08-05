using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("throw2")]
    public class Throw2 : IExpressionConvertible<UnaryExpression>
    {
        [JsonProperty("value")]
        public virtual IExpressionConvertible<Expression> Value { get; set; }

        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        public virtual UnaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Throw(Value.GetExpression(builder), Type.Resolve());
        }
    }
}