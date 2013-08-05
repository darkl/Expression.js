using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("lambda3x3")]
    public class Lambda3x3 : IExpressionConvertible<LambdaExpression>
    {
        [JsonProperty("body")]
        public virtual IExpressionConvertible<Expression> Body { get; set; }

        [JsonProperty("name")]
        public virtual string Name { get; set; }

        [JsonProperty("parameters")]
        public virtual IExpressionConvertible<ParameterExpression>[] Parameters { get; set; }

        public virtual LambdaExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Lambda(Body.GetExpression(builder), Name,
                                  Parameters.Unpack(builder));
        }
    }
}