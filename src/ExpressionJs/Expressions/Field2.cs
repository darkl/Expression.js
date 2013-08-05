using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("field2")]
    public class Field2 : IExpressionConvertible<MemberExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        [JsonProperty("fieldName")]
        public virtual string FieldName { get; set; }

        public virtual MemberExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Field(Expression.GetExpression(builder), FieldName);
        }
    }
}