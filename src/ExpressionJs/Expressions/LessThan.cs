﻿using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("lessThan")]
    public class LessThan : IExpressionConvertible<BinaryExpression>
    {
        [JsonProperty("left")]
        public virtual IExpressionConvertible<Expression> Left { get; set; }

        [JsonProperty("right")]
        public virtual IExpressionConvertible<Expression> Right { get; set; }

        public virtual BinaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.LessThan(Left.GetExpression(builder), Right.GetExpression(builder));
        }
    }
}