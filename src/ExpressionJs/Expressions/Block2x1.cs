using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("block2x1")]
    public class Block2x1 : IExpressionConvertible<BlockExpression>
    {
        [JsonProperty("arg0")]
        public virtual IExpressionConvertible<Expression> Arg0 { get; set; }

        [JsonProperty("arg1")]
        public virtual IExpressionConvertible<Expression> Arg1 { get; set; }

        public virtual BlockExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Block(Arg0.GetExpression(builder), Arg1.GetExpression(builder));
        }
    }
}