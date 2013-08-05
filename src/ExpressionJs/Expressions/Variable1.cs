using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("variable1")]
    public class Variable1 : IExpressionConvertible<ParameterExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        public virtual ParameterExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Variable(Type.Resolve());
        }
    }
}