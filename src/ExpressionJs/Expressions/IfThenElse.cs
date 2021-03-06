﻿using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("ifThenElse")]
    public class IfThenElse : IExpressionConvertible<ConditionalExpression>
    {
        [JsonProperty("test")]
        public virtual IExpressionConvertible<Expression> Test { get; set; }

        [JsonProperty("ifTrue")]
        public virtual IExpressionConvertible<Expression> IfTrue { get; set; }

        [JsonProperty("ifFalse")]
        public virtual IExpressionConvertible<Expression> IfFalse { get; set; }

        public virtual ConditionalExpression GetExpression(
            ExpressionBuilder builder)
        {
            return builder.IfThenElse(Test.GetExpression(builder), IfTrue.GetExpression(builder),
                                      IfFalse.GetExpression(builder));
        }
    }
}