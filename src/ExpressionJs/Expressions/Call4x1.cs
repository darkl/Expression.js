using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("call4x1")]
    public class Call4x1 : IExpressionConvertible<MethodCallExpression>
    {
        [JsonProperty("instance")]
        public virtual IExpressionConvertible<Expression> Instance { get; set; }

        [JsonProperty("methodName")]
        public virtual string MethodName { get; set; }

        [JsonProperty("typeArguments")]
        public virtual CLRType[] TypeArguments { get; set; }

        [JsonProperty("arguments")]
        public virtual IExpressionConvertible<Expression>[] Arguments { get; set; }

        public virtual MethodCallExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Call(Instance.GetExpression(builder), MethodName,
                                TypeArguments.Unpack(),
                                Arguments.Unpack(builder));
        }
    }
}