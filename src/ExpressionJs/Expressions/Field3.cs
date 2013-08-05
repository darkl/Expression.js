using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("field3")]
    public class Field3 : IExpressionConvertible<MemberExpression>
    {
        [JsonProperty("expression")]
        public virtual IExpressionConvertible<Expression> Expression { get; set; }

        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        [JsonProperty("fieldName")]
        public virtual string FieldName { get; set; }

        public virtual MemberExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Field(Expression.GetExpression(builder), Type.Resolve(), FieldName);
        }
    }
}