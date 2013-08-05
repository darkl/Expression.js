using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("lambda5")]
    public class Lambda5 : IExpressionConvertible<LambdaExpression>
    {
        [JsonProperty("delegateType")]
        public virtual CLRType DelegateType { get; set; }

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
            return builder.Lambda(DelegateType.Resolve(), Body.GetExpression(builder), Name,
                                  TailCall, Parameters.Unpack(builder));
        }
    }
}