using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("coalesce3")]
    public class Coalesce3 : IExpressionConvertible<BinaryExpression>
    {
        [JsonProperty("left")]
        public virtual IExpressionConvertible<Expression> Left { get; set; }

        [JsonProperty("right")]
        public virtual IExpressionConvertible<Expression> Right { get; set; }

        [JsonProperty("conversion")]
        public virtual IExpressionConvertible<LambdaExpression> Conversion { get; set; }

        public virtual BinaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Coalesce(Left.GetExpression(builder), Right.GetExpression(builder),
                                    Conversion.GetExpression(builder));
        }
    }
}