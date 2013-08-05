using System;

namespace ExpressionJs
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = false, AllowMultiple = true)]
    public sealed class JavascriptTypeAttribute : Attribute
    {
        private readonly string mName;

        public JavascriptTypeAttribute(string name)
        {
            mName = name;
        }

        public string Name
        {
            get
            {
                return mName;
            }
        }
    }
}