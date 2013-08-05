using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("lambda3x1")]
    public class Lambda3x1 : IExpressionConvertible<LambdaExpression>
    {
        [JsonProperty("body")]
        public virtual IExpressionConvertible<Expression> Body { get; set; }

        [JsonProperty("tailCall")]
        public virtual bool TailCall { get; set; }

        [JsonProperty("parameters")]
        public virtual IExpressionConvertible<ParameterExpression>[] Parameters { get; set; }

        public virtual LambdaExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Lambda(Body.GetExpression(builder), TailCall,
                                  Parameters.Unpack(builder));
        }
    }
}