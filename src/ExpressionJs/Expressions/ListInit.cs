using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("listInit")]
    public class ListInit : IExpressionConvertible<ListInitExpression>
    {
        [JsonProperty("newExpression")]
        public virtual IExpressionConvertible<NewExpression> NewExpression { get; set; }

        [JsonProperty("initializers")]
        public virtual IExpressionConvertible<Expression>[] Initializers { get; set; }

        public virtual ListInitExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.ListInit(NewExpression.GetExpression(builder),
                                    Initializers.Unpack(builder));
        }
    }
}