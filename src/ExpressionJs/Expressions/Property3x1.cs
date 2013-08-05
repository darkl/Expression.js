using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("property3x1")]
    public class Property3x1 : IExpressionConvertible<IndexExpression>
    {
        [JsonProperty("instance")]
        public virtual IExpressionConvertible<Expression> Instance { get; set; }

        [JsonProperty("propertyName")]
        public virtual string PropertyName { get; set; }

        [JsonProperty("arguments")]
        public virtual IExpressionConvertible<Expression>[] Arguments { get; set; }

        public virtual IndexExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Property(Instance.GetExpression(builder), PropertyName,
                                    Arguments.Unpack(builder));
        }
    }
}