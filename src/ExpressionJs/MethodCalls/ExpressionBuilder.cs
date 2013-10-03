using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace ExpressionJs
{
    public partial class ExpressionBuilder
    {
		private readonly IDictionary<string, ParameterExpression> mNameToParameter =
            new Dictionary<string, ParameterExpression>();

        public void BeginScope(params ParameterExpression[] parameters)
        {
            foreach (ParameterExpression parameterExpression in parameters)
            {
                mNameToParameter[parameterExpression.Name] = parameterExpression;
            }
        }

        public void EndScope()
		{
			mNameToParameter.Clear();
		}

        public ParameterExpression ReusedParameter(string name)
        {
            return mNameToParameter[name];
        }
    }
}