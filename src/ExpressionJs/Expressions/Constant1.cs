using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("constant1")]
    public class Constant1 : IExpressionConvertible<ConstantExpression>
    {
        [JsonProperty("value")]
        public virtual object Value { get; set; }

        public virtual ConstantExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Constant(Value);
        }
    }
}