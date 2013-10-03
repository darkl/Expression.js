using System;
using System.Linq.Expressions;

namespace ExpressionJs
{
    [JavascriptType("reusedParameter")]
    public class ReusedParameter : IExpressionConvertible<ParameterExpression>
    {
        public ParameterExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.ReusedParameter(Name);
        }

        public string Name { get; set; }
    }
}