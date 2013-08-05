using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("arrayAccess")]
    public class ArrayAccess : IExpressionConvertible<IndexExpression>
    {
        [JsonProperty("array")]
        public virtual IExpressionConvertible<Expression> Array { get; set; }

        [JsonProperty("indexes")]
        public virtual IExpressionConvertible<Expression>[] Indexes { get; set; }

        public virtual IndexExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.ArrayAccess(Array.GetExpression(builder),
                                       Indexes.Unpack(builder));
        }
    }
}