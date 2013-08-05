using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("condition4")]
    public class Condition4 : IExpressionConvertible<ConditionalExpression>
    {
        [JsonProperty("test")]
        public virtual IExpressionConvertible<Expression> Test { get; set; }

        [JsonProperty("ifTrue")]
        public virtual IExpressionConvertible<Expression> IfTrue { get; set; }

        [JsonProperty("ifFalse")]
        public virtual IExpressionConvertible<Expression> IfFalse { get; set; }

        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        public virtual ConditionalExpression GetExpression(
            ExpressionBuilder builder)
        {
            return builder.Condition(Test.GetExpression(builder), IfTrue.GetExpression(builder),
                                     IfFalse.GetExpression(builder), Type.Resolve());
        }
    }
}