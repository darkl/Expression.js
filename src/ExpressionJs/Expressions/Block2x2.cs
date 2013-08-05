using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("block2x2")]
    public class Block2x2 : IExpressionConvertible<BlockExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        [JsonProperty("expressions")]
        public virtual IExpressionConvertible<Expression>[] Expressions { get; set; }

        public virtual BlockExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Block(Type.Resolve(),
                                 Expressions.Unpack(builder));
        }
    }
}