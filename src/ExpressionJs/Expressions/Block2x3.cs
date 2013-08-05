using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("block2x3")]
    public class Block2x3 : IExpressionConvertible<BlockExpression>
    {
        [JsonProperty("variables")]
        public virtual IExpressionConvertible<ParameterExpression>[] Variables { get; set; }

        [JsonProperty("expressions")]
        public virtual IExpressionConvertible<Expression>[] Expressions { get; set; }

        public virtual BlockExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Block(Variables.Unpack(builder),
                                 Expressions.Unpack(builder));
        }
    }
}