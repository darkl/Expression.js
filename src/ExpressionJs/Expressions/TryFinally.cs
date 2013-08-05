using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("tryFinally")]
    public class TryFinally : IExpressionConvertible<TryExpression>
    {
        [JsonProperty("body")]
        public virtual IExpressionConvertible<Expression> Body { get; set; }

        [JsonProperty("finally")]
        public virtual IExpressionConvertible<Expression> Finally { get; set; }

        public virtual TryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.TryFinally(Body.GetExpression(builder), Finally.GetExpression(builder));
        }
    }
}