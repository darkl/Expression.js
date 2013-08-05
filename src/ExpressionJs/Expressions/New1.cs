using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("new1")]
    public class New1 : IExpressionConvertible<NewExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        public virtual NewExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.New(Type.Resolve());
        }
    }
}