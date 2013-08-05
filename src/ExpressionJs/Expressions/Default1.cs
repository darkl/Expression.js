using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("default1")]
    public class Default1 : IExpressionConvertible<DefaultExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        public virtual DefaultExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Default(Type.Resolve());
        }
    }
}