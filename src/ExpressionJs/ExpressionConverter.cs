using System;
using System.Linq.Expressions;
using Newtonsoft.Json;

namespace ExpressionJs
{
    public class ExpressionConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue,
                                        JsonSerializer serializer)
        {
            var expressionBuilder = new ExpressionBuilder();

            var convertible =
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