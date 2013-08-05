using System;

namespace ExpressionJs
{
    public class CLRType
    {
        public Type Resolve()
        {
            return Type.GetType(this.Name);
        }

        public string Name { get; set; }
    }
}