using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("convertChecked")]
    public class ConvertChecked : IExpressionConvertible<UnaryExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        public virtual UnaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.ConvertChecked(Expression.GetExpression(builder), Type.Resolve());
        }
    }
}