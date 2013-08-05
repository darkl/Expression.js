using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("constant2")]
    public class Constant2 : IExpressionConvertible<ConstantExpression>
    {
        [JsonProperty("value")]
        public virtual object Value { get; set; }

        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        public virtual ConstantExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Constant(Value, Type.Resolve());
        }
    }
}