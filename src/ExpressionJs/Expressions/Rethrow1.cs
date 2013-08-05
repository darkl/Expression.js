using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("rethrow1")]
    public class Rethrow1 : IExpressionConvertible<UnaryExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        public virtual UnaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Rethrow(Type.Resolve());
        }
    }
}