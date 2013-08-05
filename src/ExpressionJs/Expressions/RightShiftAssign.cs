using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("rightShiftAssign")]
    public class RightShiftAssign : IExpressionConvertible<BinaryExpression>
    {
        [JsonProperty("left")]
        public virtual IExpressionConvertible<Expression> Left { get; set; }

        [JsonProperty("right")]
        public virtual IExpressionConvertible<Expression> Right { get; set; }

        public virtual BinaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.RightShiftAssign(Left.GetExpression(builder), Right.GetExpression(builder));
        }
    }
}