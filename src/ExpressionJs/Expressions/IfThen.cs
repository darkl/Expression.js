using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("ifThen")]
    public class IfThen : IExpressionConvertible<ConditionalExpression>
    {
        [JsonProperty("test")]
        public virtual IExpressionConvertible<Expression> Test { get; set; }

        [JsonProperty("ifTrue")]
        public virtual IExpressionConvertible<Expression> IfTrue { get; set; }

        public virtual ConditionalExpression GetExpression(
            ExpressionBuilder builder)
        {
            return builder.IfThen(Test.GetExpression(builder), IfTrue.GetExpression(builder));
        }
    }
}