using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("variable2")]
    public class Variable2 : IExpressionConvertible<ParameterExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        [JsonProperty("name")]
        public virtual string Name { get; set; }

        public virtual ParameterExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Variable(Type.Resolve(), Name);
        }
    }
}