using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using ExpressionJs;

namespace QueryableJs
{
    public class EnumerableWhere
    {
        public IExpressionConvertible<Expression> Filter { get; set; }

        public IEnumerable<TSource> Apply<TSource>(IEnumerable<TSource> enumerable)
        {
            Func<TSource, bool> predicate = 
                BuildPredicate<TSource>();

            return Apply(enumerable, predicate);
        }

        public Func<T, bool> BuildPredicate<T>()
        {
            ExpressionBuilder builder = new ExpressionBuilder();

            ParameterExpression parameter =
                builder.Parameter(typeof (T), "x");

            builder.BeginScope(parameter);

            Expression filter = Filter.GetExpression(builder);

            Func<T, bool> compiled =
                InnerBuildDelegate<T>(parameter, filter);

            builder.EndScope();

            return compiled;
        }

        private Func<T,bool> InnerBuildDelegate<T>(ParameterExpression parameter, Expression filter)
        {
            Expression<Func<T, bool>> lambda =
                Expression.Lambda<Func<T, bool>>(filter, parameter);

            return lambda.Compile();
        }

        protected IEnumerable<TSource> Apply<TSource>(IEnumerable<TSource> enumerable,
                                                      Func<TSource, bool> filter)

        {
            return enumerable.Where(filter);
        }
    }
}