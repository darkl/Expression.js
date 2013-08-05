using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("arrayLength")]
    public class ArrayLength : IExpressionConvertible<UnaryExpression>
    {
        [JsonProperty("array")]
        public virtual IExpressionConvertible<Expression> Array { get; set; }

        public virtual UnaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.ArrayLength(Array.GetExpression(builder));
        }
    }
}