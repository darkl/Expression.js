using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("loop")]
    public class Loop : IExpressionConvertible<LoopExpression>
    {
        [JsonProperty("body")]
        public virtual IExpressionConvertible<Expression> Body { get; set; }

        public virtual LoopExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Loop(Body.GetExpression(builder));
        }
    }
}