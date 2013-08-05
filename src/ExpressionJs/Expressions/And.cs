﻿using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("and")]
    public class And : IExpressionConvertible<BinaryExpression>
    {
        [JsonProperty("left")]
        public virtual IExpressionConvertible<Expression> Left { get; set; }

        [JsonProperty("right")]
        public virtual IExpressionConvertible<Expression> Right { get; set; }

        public virtual BinaryExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.And(Left.GetExpression(builder), Right.GetExpression(builder));
        }
    }
}