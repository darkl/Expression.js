using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("typeIs")]
    public class TypeIs : IExpressionConvertible<TypeBinaryExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        public virtual TypeBinaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.TypeIs(Expression.GetExpression(builder), Type.Resolve());
        }
    }
}