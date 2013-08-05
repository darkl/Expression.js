using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("runtimeVariables")]
    public class RuntimeVariables :
        IExpressionConvertible<RuntimeVariablesExpression>
    {
        [JsonProperty("variables")]
        public virtual IExpressionConvertible<ParameterExpression>[] Variables { get; set; }

        public virtual RuntimeVariablesExpression GetExpression(
            ExpressionBuilder builder)
        {
            return builder.RuntimeVariables(Variables.Unpack(builder));
        }
    }
}