using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("invoke")]
    public class Invoke : IExpressionConvertible<InvocationExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        [JsonProperty("arguments")]
        public virtual IExpressionConvertible<Expression>[] Arguments { get; set; }

        public virtual InvocationExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Invoke(Expression.GetExpression(builder),
                                  Arguments.Unpack(builder));
        }
    }
}