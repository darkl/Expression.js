using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    [JavascriptType("call4x2")]
    public class Call4x2 : IExpressionConvertible<MethodCallExpression>
    {
        [JsonProperty("type")]
        public virtual CLRType Type { get; set; }

        [JsonProperty("methodName")]
        public virtual string MethodName { get; set; }

        [JsonProperty("typeArguments")]
        public virtual CLRType[] TypeArguments { get; set; }

        [JsonProperty("arguments")]
        public virtual IExpressionConvertible<Expression>[] Arguments { get; set; }

        public virtual MethodCallExpression GetExpression(ExpressionBuilder builder)
        {
            return builder.Call(Type.Resolve(), MethodName,
                                TypeArguments.Unpack(),
                                Arguments.Unpack(builder));
        }
    }
}