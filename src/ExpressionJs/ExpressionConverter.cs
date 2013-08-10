using System;
using System.Linq.Expressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ExpressionJs
{
    public class ExpressionConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            ExpressionBuilder expressionBuilder = new ExpressionBuilder();

            IExpressionConvertible<Expression> convertible = 
                serializer.Deserialize<IExpressionConvertible<Expression>>(reader);

            Expression result =
                convertible.GetExpression(expressionBuilder);

            return result;
        }

        public override bool CanConvert(Type objectType)
        {
            return typeof (Expression).IsAssignableFrom(objectType);
        }
    }
}