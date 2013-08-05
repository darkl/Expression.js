using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("property3x2")]
    public class Property3x2 : IExpressionConvertible<MemberExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        [JsonProperty("propertyName")]
        public virtual string PropertyName { get; set; }

        public virtual MemberExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Property(Expression.GetExpression(builder), Type.Resolve(), PropertyName);
        }
    }
}