using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("tryFault")]
    public class TryFault : IExpressionConvertible<TryExpression>
    {
        [JsonProperty("body")]
        public virtual IExpressionConvertible<Expression> Body { get; set; }

        [JsonProperty("fault")]
        public virtual IExpressionConvertible<Expression> Fault { get; set; }

        public virtual TryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.TryFault(Body.GetExpression(builder), Fault.GetExpression(builder));
        }
    }
}