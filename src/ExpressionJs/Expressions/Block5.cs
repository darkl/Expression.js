﻿using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("block5")]
    public class Block5 : IExpressionConvertible<BlockExpression>
    {
        [JsonProperty("arg0")]
        public virtual IExpressionConvertible<Expression> Arg0 { get; set; }

        [JsonProperty("arg1")]
        public virtual IExpressionConvertible<Expression> Arg1 { get; set; }

        [JsonProperty("arg2")]
        public virtual IExpressionConvertible<Expression> Arg2 { get; set; }

        [JsonProperty("arg3")]
        public virtual IExpressionConvertible<Expression> Arg3 { get; set; }

        [JsonProperty("arg4")]
        public virtual IExpressionConvertible<Expression> Arg4 { get; set; }

        public virtual BlockExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Block(Arg0.GetExpression(builder), Arg1.GetExpression(builder),
                                 Arg2.GetExpression(builder), Arg3.GetExpression(builder),
                                 Arg4.GetExpression(builder));
        }
    }
}