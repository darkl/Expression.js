using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("newArrayBounds")]
    public class NewArrayBounds : IExpressionConvertible<NewArrayExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        [JsonProperty("bounds")]
        public virtual IExpressionConvertible<Expression>[] Bounds { get; set; }

        public virtual NewArrayExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.NewArrayBounds(Type.Resolve(),
                                          Bounds.Unpack(builder));
        }
    }
}