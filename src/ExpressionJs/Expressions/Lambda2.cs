using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("lambda2")]
    public class Lambda2 : IExpressionConvertible<LambdaExpression>
    {
        [JsonProperty("body")]
        public virtual IExpressionConvertible<Expression> Body { get; set; }

        [JsonProperty("parameters")]
        public virtual IExpressionConvertible<ParameterExpression>[] Parameters { get; set; }

        public virtual LambdaExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Lambda(Body.GetExpression(builder),
                                  Parameters.Unpack(builder));
        }
    }
}