using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("parameter2")]
    public class Parameter2 : IExpressionConvertible<ParameterExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        [JsonProperty("name")]
        public virtual string Name { get; set; }

        public virtual ParameterExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Parameter(Type.Resolve(), Name);
        }
    }
}