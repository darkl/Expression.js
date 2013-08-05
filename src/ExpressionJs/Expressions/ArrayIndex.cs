using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("arrayIndex")]
    public class ArrayIndex : IExpressionConvertible<BinaryExpression>
    {
        [JsonProperty("array")]
        public virtual IExpressionConvertible<Expression> Array { get; set; }

        [JsonProperty("index")]
        public virtual IExpressionConvertible<Expression> Index { get; set; }

        public virtual BinaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.ArrayIndex(Array.GetExpression(builder), Index.GetExpression(builder));
        }
    }
}