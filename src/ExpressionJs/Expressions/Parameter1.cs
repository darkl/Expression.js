using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("parameter1")]
    public class Parameter1 : IExpressionConvertible<ParameterExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        public virtual ParameterExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Parameter(Type.Resolve());
        }
    }
}