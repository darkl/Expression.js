using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("propertyOrField")]
    public class PropertyOrField : IExpressionConvertible<MemberExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        [JsonProperty("propertyOrFieldName")]
        public virtual string PropertyOrFieldName { get; set; }

        public virtual MemberExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.PropertyOrField(Expression.GetExpression(builder), PropertyOrFieldName);
        }
    }
}