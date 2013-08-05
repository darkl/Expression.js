using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("newArrayInit")]
    public class NewArrayInit : IExpressionConvertible<NewArrayExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        [JsonProperty("initializers")]
        public virtual IExpressionConvertible<Expression>[] Initializers { get; set; }

        public virtual NewArrayExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.NewArrayInit(Type.Resolve(),
                                        Initializers.Unpack(builder));
        }
    }
}