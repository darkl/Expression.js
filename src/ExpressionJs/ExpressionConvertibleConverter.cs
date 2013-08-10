using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ExpressionJs
{
    public class ExpressionConvertibleConverter : JsonConverter
    {
        private readonly IDictionary<string, Type> mAliasToType = new Dictionary<string, Type>();

        public ExpressionConvertibleConverter()
        {
            mAliasToType =
                this.GetType()
                    .Assembly.GetTypes()
                    .Where(x => x.IsDefined(typeof (JavascriptTypeAttribute), true))
                    .Select(x => new
                                     {
                                         Type = x,
                                         Attribute = x.GetCustomAttribute<JavascriptTypeAttribute>()
                                     })
                    .ToDictionary(x => x.Attribute.Name,
                                  x => x.Type);
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            JObject jObject = JObject.Load(reader);

            IExpressionConvertible<Expression> target = InitializeEmptyObject(jObject);

            serializer.Populate(jObject.CreateReader(), target);

            return target;
        }

        private IExpressionConvertible<Expression> InitializeEmptyObject(JObject jObject)
        {
            string typeToCreate = jObject["_type"].Value<string>();

            Type type = mAliasToType[typeToCreate];

            IExpressionConvertible<Expression> result =
                Activator.CreateInstance(type) as IExpressionConvertible<Expression>;
            
            return result;
        }

        public override bool CanConvert(Type objectType)
        {
            return typeof(IExpressionConvertible<Expression>).IsAssignableFrom(objectType);
        }
    }
}