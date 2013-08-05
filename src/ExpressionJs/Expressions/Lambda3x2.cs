using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("lambda3x2")]
    public class Lambda3x2 : IExpressionConvertible<LambdaExpression>
    {
        [JsonProperty("delegateType")]
        public virtual CLRType DelegateType { get; set; }

        [JsonProperty("body")]
        public virtual IExpressionConvertible<Expression> Body { get; set; }

        [JsonProperty("parameters")]
        public virtual IExpressionConvertible<ParameterExpression>[] Parameters { get; set; }

        public virtual LambdaExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Lambda(DelegateType.Resolve(), Body.GetExpression(builder),
                                  Parameters.Unpack(builder));
        }
    }
}