using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("property2")]
    public class Property2 : IExpressionConvertible<MemberExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        [JsonProperty("propertyName")]
        public virtual string PropertyName { get; set; }

        public virtual MemberExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Property(Expression.GetExpression(builder), PropertyName);
        }
    }
}