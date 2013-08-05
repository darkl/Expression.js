using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("block1")]
    public class Block1 : IExpressionConvertible<BlockExpression>
    {
        [JsonProperty("expressions")]
        public virtual IExpressionConvertible<Expression>[] Expressions { get; set; }

        public virtual BlockExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Block(Expressions.Unpack(builder));
        }
    }
}