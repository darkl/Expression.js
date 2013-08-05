using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("block3x2")]
    public class Block3x2 : IExpressionConvertible<BlockExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        [JsonProperty("variables")]
        public virtual IExpressionConvertible<ParameterExpression>[] Variables { get; set; }

        [JsonProperty("expressions")]
        public virtual IExpressionConvertible<Expression>[] Expressions { get; set; }

        public virtual BlockExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Block(Type.Resolve(), Variables.Unpack(builder),
                                 Expressions.Unpack(builder));
        }
    }
}