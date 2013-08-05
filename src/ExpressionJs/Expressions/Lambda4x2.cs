using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("lambda4x2")]
    public class Lambda4x2 : IExpressionConvertible<LambdaExpression>
    {
        [JsonProperty("body")]
        public virtual IExpressionConvertible<Expression> Body { get; set; }

        [JsonProperty("name")]
        public virtual string Name { get; set; }

        [JsonProperty("tailCall")]
        public virtual bool TailCall { get; set; }

        [JsonProperty("parameters")]
        public virtual IExpressionConvertible<ParameterExpression>[] Parameters { get; set; }

        public virtual LambdaExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Lambda(Body.GetExpression(builder), Name, TailCall,
                                  Parameters.Unpack(builder));
        }
    }
}