namespace ExpressionJs
{
    public partial class ExpressionBuilder
    {

        private System.Reflection.MethodInfo mEqualMethod;

        private System.Reflection.MethodInfo mNotEqualMethod;

        private System.Reflection.MethodInfo mGreaterThanMethod;

        private System.Reflection.MethodInfo mLessThanMethod;

        private System.Reflection.MethodInfo mGreaterThanOrEqualMethod;

        private System.Reflection.MethodInfo mLessThanOrEqualMethod;

        private System.Reflection.MethodInfo mAndAlsoMethod;

        private System.Reflection.MethodInfo mOrElseMethod;

        private System.Reflection.MethodInfo mAddMethod;

        private System.Reflection.MethodInfo mAddAssignMethod;

        private System.Reflection.MethodInfo mAddAssignCheckedMethod;

        private System.Reflection.MethodInfo mAddCheckedMethod;

        private System.Reflection.MethodInfo mSubtractMethod;

        private System.Reflection.MethodInfo mSubtractAssignMethod;

        private System.Reflection.MethodInfo mSubtractAssignCheckedMethod;

        private System.Reflection.MethodInfo mSubtractCheckedMethod;

        private System.Reflection.MethodInfo mDivideMethod;

        private System.Reflection.MethodInfo mDivideAssignMethod;

        private System.Reflection.MethodInfo mModuloMethod;

        private System.Reflection.MethodInfo mModuloAssignMethod;

        private System.Reflection.MethodInfo mMultiplyMethod;

        private System.Reflection.MethodInfo mMultiplyAssignMethod;

        private System.Reflection.MethodInfo mMultiplyAssignCheckedMethod;

        private System.Reflection.MethodInfo mMultiplyCheckedMethod;

        private System.Reflection.MethodInfo mLeftShiftMethod;

        private System.Reflection.MethodInfo mLeftShiftAssignMethod;

        private System.Reflection.MethodInfo mRightShiftMethod;

        private System.Reflection.MethodInfo mRightShiftAssignMethod;

        private System.Reflection.MethodInfo mAndMethod;

        private System.Reflection.MethodInfo mAndAssignMethod;

        private System.Reflection.MethodInfo mOrMethod;

        private System.Reflection.MethodInfo mOrAssignMethod;

        private System.Reflection.MethodInfo mExclusiveOrMethod;

        private System.Reflection.MethodInfo mExclusiveOrAssignMethod;

        private System.Reflection.MethodInfo mPowerMethod;

        private System.Reflection.MethodInfo mPowerAssignMethod;

        [JavascriptType("assign")]
        public virtual System.Linq.Expressions.BinaryExpression Assign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            return System.Linq.Expressions.Expression.Assign(left, right);
        }

        [JavascriptType("equal")]
        public virtual System.Linq.Expressions.BinaryExpression Equal(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.Equal(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.Equal(leftCasted, rightCasted, false, this.mEqualMethod);
            }
        }

        [JavascriptType("referenceEqual")]
        public virtual System.Linq.Expressions.BinaryExpression ReferenceEqual(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            return System.Linq.Expressions.Expression.ReferenceEqual(left, right);
        }

        [JavascriptType("notEqual")]
        public virtual System.Linq.Expressions.BinaryExpression NotEqual(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.NotEqual(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.NotEqual(leftCasted, rightCasted, false, this.mNotEqualMethod);
            }
        }

        [JavascriptType("referenceNotEqual")]
        public virtual System.Linq.Expressions.BinaryExpression ReferenceNotEqual(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            return System.Linq.Expressions.Expression.ReferenceNotEqual(left, right);
        }

        [JavascriptType("greaterThan")]
        public virtual System.Linq.Expressions.BinaryExpression GreaterThan(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.GreaterThan(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.GreaterThan(leftCasted, rightCasted, false, this.mGreaterThanMethod);
            }
        }

        [JavascriptType("lessThan")]
        public virtual System.Linq.Expressions.BinaryExpression LessThan(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.LessThan(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.LessThan(leftCasted, rightCasted, false, this.mLessThanMethod);
            }
        }

        [JavascriptType("greaterThanOrEqual")]
        public virtual System.Linq.Expressions.BinaryExpression GreaterThanOrEqual(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.GreaterThanOrEqual(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.GreaterThanOrEqual(leftCasted, rightCasted, false, this.mGreaterThanOrEqualMethod);
            }
        }

        [JavascriptType("lessThanOrEqual")]
        public virtual System.Linq.Expressions.BinaryExpression LessThanOrEqual(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.LessThanOrEqual(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.LessThanOrEqual(leftCasted, rightCasted, false, this.mLessThanOrEqualMethod);
            }
        }

        [JavascriptType("andAlso")]
        public virtual System.Linq.Expressions.BinaryExpression AndAlso(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.AndAlso(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.AndAlso(leftCasted, rightCasted, this.mAndAlsoMethod);
            }
        }

        [JavascriptType("orElse")]
        public virtual System.Linq.Expressions.BinaryExpression OrElse(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.OrElse(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.OrElse(leftCasted, rightCasted, this.mOrElseMethod);
            }
        }

        [JavascriptType("coalesce2")]
        public virtual System.Linq.Expressions.BinaryExpression Coalesce(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            return System.Linq.Expressions.Expression.Coalesce(left, right);
        }

        [JavascriptType("coalesce3")]
        public virtual System.Linq.Expressions.BinaryExpression Coalesce(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right, System.Linq.Expressions.LambdaExpression conversion)
        {
            return System.Linq.Expressions.Expression.Coalesce(left, right, conversion);
        }

        [JavascriptType("add")]
        public virtual System.Linq.Expressions.BinaryExpression Add(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.Add(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.Add(leftCasted, rightCasted, this.mAddMethod);
            }
        }

        [JavascriptType("addAssign")]
        public virtual System.Linq.Expressions.BinaryExpression AddAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.AddAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.AddAssign(leftCasted, rightCasted, this.mAddAssignMethod);
            }
        }

        [JavascriptType("addAssignChecked")]
        public virtual System.Linq.Expressions.BinaryExpression AddAssignChecked(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.AddAssignChecked(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.AddAssignChecked(leftCasted, rightCasted, this.mAddAssignCheckedMethod);
            }
        }

        [JavascriptType("addChecked")]
        public virtual System.Linq.Expressions.BinaryExpression AddChecked(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.AddChecked(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.AddChecked(leftCasted, rightCasted, this.mAddCheckedMethod);
            }
        }

        [JavascriptType("subtract")]
        public virtual System.Linq.Expressions.BinaryExpression Subtract(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.Subtract(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.Subtract(leftCasted, rightCasted, this.mSubtractMethod);
            }
        }

        [JavascriptType("subtractAssign")]
        public virtual System.Linq.Expressions.BinaryExpression SubtractAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.SubtractAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.SubtractAssign(leftCasted, rightCasted, this.mSubtractAssignMethod);
            }
        }

        [JavascriptType("subtractAssignChecked")]
        public virtual System.Linq.Expressions.BinaryExpression SubtractAssignChecked(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.SubtractAssignChecked(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.SubtractAssignChecked(leftCasted, rightCasted, this.mSubtractAssignCheckedMethod);
            }
        }

        [JavascriptType("subtractChecked")]
        public virtual System.Linq.Expressions.BinaryExpression SubtractChecked(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.SubtractChecked(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.SubtractChecked(leftCasted, rightCasted, this.mSubtractCheckedMethod);
            }
        }

        [JavascriptType("divide")]
        public virtual System.Linq.Expressions.BinaryExpression Divide(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.Divide(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.Divide(leftCasted, rightCasted, this.mDivideMethod);
            }
        }

        [JavascriptType("divideAssign")]
        public virtual System.Linq.Expressions.BinaryExpression DivideAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.DivideAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.DivideAssign(leftCasted, rightCasted, this.mDivideAssignMethod);
            }
        }

        [JavascriptType("modulo")]
        public virtual System.Linq.Expressions.BinaryExpression Modulo(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.Modulo(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.Modulo(leftCasted, rightCasted, this.mModuloMethod);
            }
        }

        [JavascriptType("moduloAssign")]
        public virtual System.Linq.Expressions.BinaryExpression ModuloAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.ModuloAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.ModuloAssign(leftCasted, rightCasted, this.mModuloAssignMethod);
            }
        }

        [JavascriptType("multiply")]
        public virtual System.Linq.Expressions.BinaryExpression Multiply(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.Multiply(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.Multiply(leftCasted, rightCasted, this.mMultiplyMethod);
            }
        }

        [JavascriptType("multiplyAssign")]
        public virtual System.Linq.Expressions.BinaryExpression MultiplyAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.MultiplyAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.MultiplyAssign(leftCasted, rightCasted, this.mMultiplyAssignMethod);
            }
        }

        [JavascriptType("multiplyAssignChecked")]
        public virtual System.Linq.Expressions.BinaryExpression MultiplyAssignChecked(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.MultiplyAssignChecked(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.MultiplyAssignChecked(leftCasted, rightCasted, this.mMultiplyAssignCheckedMethod);
            }
        }

        [JavascriptType("multiplyChecked")]
        public virtual System.Linq.Expressions.BinaryExpression MultiplyChecked(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.MultiplyChecked(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.MultiplyChecked(leftCasted, rightCasted, this.mMultiplyCheckedMethod);
            }
        }

        [JavascriptType("leftShift")]
        public virtual System.Linq.Expressions.BinaryExpression LeftShift(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.LeftShift(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.LeftShift(leftCasted, rightCasted, this.mLeftShiftMethod);
            }
        }

        [JavascriptType("leftShiftAssign")]
        public virtual System.Linq.Expressions.BinaryExpression LeftShiftAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.LeftShiftAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.LeftShiftAssign(leftCasted, rightCasted, this.mLeftShiftAssignMethod);
            }
        }

        [JavascriptType("rightShift")]
        public virtual System.Linq.Expressions.BinaryExpression RightShift(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.RightShift(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.RightShift(leftCasted, rightCasted, this.mRightShiftMethod);
            }
        }

        [JavascriptType("rightShiftAssign")]
        public virtual System.Linq.Expressions.BinaryExpression RightShiftAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.RightShiftAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.RightShiftAssign(leftCasted, rightCasted, this.mRightShiftAssignMethod);
            }
        }

        [JavascriptType("and")]
        public virtual System.Linq.Expressions.BinaryExpression And(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.And(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.And(leftCasted, rightCasted, this.mAndMethod);
            }
        }

        [JavascriptType("andAssign")]
        public virtual System.Linq.Expressions.BinaryExpression AndAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.AndAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.AndAssign(leftCasted, rightCasted, this.mAndAssignMethod);
            }
        }

        [JavascriptType("or")]
        public virtual System.Linq.Expressions.BinaryExpression Or(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.Or(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.Or(leftCasted, rightCasted, this.mOrMethod);
            }
        }

        [JavascriptType("orAssign")]
        public virtual System.Linq.Expressions.BinaryExpression OrAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.OrAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.OrAssign(leftCasted, rightCasted, this.mOrAssignMethod);
            }
        }

        [JavascriptType("exclusiveOr")]
        public virtual System.Linq.Expressions.BinaryExpression ExclusiveOr(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.ExclusiveOr(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.ExclusiveOr(leftCasted, rightCasted, this.mExclusiveOrMethod);
            }
        }

        [JavascriptType("exclusiveOrAssign")]
        public virtual System.Linq.Expressions.BinaryExpression ExclusiveOrAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.ExclusiveOrAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.ExclusiveOrAssign(leftCasted, rightCasted, this.mExclusiveOrAssignMethod);
            }
        }

        [JavascriptType("power")]
        public virtual System.Linq.Expressions.BinaryExpression Power(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.Power(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.Power(leftCasted, rightCasted, this.mPowerMethod);
            }
        }

        [JavascriptType("powerAssign")]
        public virtual System.Linq.Expressions.BinaryExpression PowerAssign(System.Linq.Expressions.Expression left, System.Linq.Expressions.Expression right)
        {
            if ((left.Type == right.Type))
            {
                return System.Linq.Expressions.Expression.PowerAssign(left, right);
            }
            else
            {
                System.Linq.Expressions.Expression leftCasted = System.Linq.Expressions.Expression.Convert(left, typeof(object));
                System.Linq.Expressions.Expression rightCasted = System.Linq.Expressions.Expression.Convert(right, typeof(object));
                return System.Linq.Expressions.Expression.PowerAssign(leftCasted, rightCasted, this.mPowerAssignMethod);
            }
        }

        [JavascriptType("arrayIndex")]
        public virtual System.Linq.Expressions.BinaryExpression ArrayIndex(System.Linq.Expressions.Expression array, System.Linq.Expressions.Expression index)
        {
            return System.Linq.Expressions.Expression.ArrayIndex(array, index);
        }

        [JavascriptType("block2x1")]
        public virtual System.Linq.Expressions.BlockExpression Block(System.Linq.Expressions.Expression arg0, System.Linq.Expressions.Expression arg1)
        {
            return System.Linq.Expressions.Expression.Block(arg0, arg1);
        }

        [JavascriptType("block2x2")]
        public virtual System.Linq.Expressions.BlockExpression Block(System.Type type, System.Linq.Expressions.Expression[] expressions)
        {
            return System.Linq.Expressions.Expression.Block(type, expressions);
        }

        [JavascriptType("block2x3")]
        public virtual System.Linq.Expressions.BlockExpression Block(System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> variables, System.Linq.Expressions.Expression[] expressions)
        {
            return System.Linq.Expressions.Expression.Block(variables, expressions);
        }

        [JavascriptType("block3x1")]
        public virtual System.Linq.Expressions.BlockExpression Block(System.Linq.Expressions.Expression arg0, System.Linq.Expressions.Expression arg1, System.Linq.Expressions.Expression arg2)
        {
            return System.Linq.Expressions.Expression.Block(arg0, arg1, arg2);
        }

        [JavascriptType("block3x2")]
        public virtual System.Linq.Expressions.BlockExpression Block(System.Type type, System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> variables, System.Linq.Expressions.Expression[] expressions)
        {
            return System.Linq.Expressions.Expression.Block(type, variables, expressions);
        }

        [JavascriptType("block4")]
        public virtual System.Linq.Expressions.BlockExpression Block(System.Linq.Expressions.Expression arg0, System.Linq.Expressions.Expression arg1, System.Linq.Expressions.Expression arg2, System.Linq.Expressions.Expression arg3)
        {
            return System.Linq.Expressions.Expression.Block(arg0, arg1, arg2, arg3);
        }

        [JavascriptType("block5")]
        public virtual System.Linq.Expressions.BlockExpression Block(System.Linq.Expressions.Expression arg0, System.Linq.Expressions.Expression arg1, System.Linq.Expressions.Expression arg2, System.Linq.Expressions.Expression arg3, System.Linq.Expressions.Expression arg4)
        {
            return System.Linq.Expressions.Expression.Block(arg0, arg1, arg2, arg3, arg4);
        }

        [JavascriptType("block1")]
        public virtual System.Linq.Expressions.BlockExpression Block(System.Linq.Expressions.Expression[] expressions)
        {
            return System.Linq.Expressions.Expression.Block(expressions);
        }

        [JavascriptType("condition3")]
        public virtual System.Linq.Expressions.ConditionalExpression Condition(System.Linq.Expressions.Expression test, System.Linq.Expressions.Expression ifTrue, System.Linq.Expressions.Expression ifFalse)
        {
            return System.Linq.Expressions.Expression.Condition(test, ifTrue, ifFalse);
        }

        [JavascriptType("condition4")]
        public virtual System.Linq.Expressions.ConditionalExpression Condition(System.Linq.Expressions.Expression test, System.Linq.Expressions.Expression ifTrue, System.Linq.Expressions.Expression ifFalse, System.Type type)
        {
            return System.Linq.Expressions.Expression.Condition(test, ifTrue, ifFalse, type);
        }

        [JavascriptType("ifThen")]
        public virtual System.Linq.Expressions.ConditionalExpression IfThen(System.Linq.Expressions.Expression test, System.Linq.Expressions.Expression ifTrue)
        {
            return System.Linq.Expressions.Expression.IfThen(test, ifTrue);
        }

        [JavascriptType("ifThenElse")]
        public virtual System.Linq.Expressions.ConditionalExpression IfThenElse(System.Linq.Expressions.Expression test, System.Linq.Expressions.Expression ifTrue, System.Linq.Expressions.Expression ifFalse)
        {
            return System.Linq.Expressions.Expression.IfThenElse(test, ifTrue, ifFalse);
        }

        [JavascriptType("constant1")]
        public virtual System.Linq.Expressions.ConstantExpression Constant(object value)
        {
            return System.Linq.Expressions.Expression.Constant(value);
        }

        [JavascriptType("constant2")]
        public virtual System.Linq.Expressions.ConstantExpression Constant(object value, System.Type type)
        {
            return System.Linq.Expressions.Expression.Constant(value, type);
        }

        [JavascriptType("empty")]
        public virtual System.Linq.Expressions.DefaultExpression Empty()
        {
            return System.Linq.Expressions.Expression.Empty();
        }

        [JavascriptType("default1")]
        public virtual System.Linq.Expressions.DefaultExpression Default(System.Type type)
        {
            return System.Linq.Expressions.Expression.Default(type);
        }

        [JavascriptType("arrayAccess")]
        public virtual System.Linq.Expressions.IndexExpression ArrayAccess(System.Linq.Expressions.Expression array, System.Linq.Expressions.Expression[] indexes)
        {
            return System.Linq.Expressions.Expression.ArrayAccess(array, indexes);
        }

        [JavascriptType("property3x1")]
        public virtual System.Linq.Expressions.IndexExpression Property(System.Linq.Expressions.Expression instance, string propertyName, System.Linq.Expressions.Expression[] arguments)
        {
            return System.Linq.Expressions.Expression.Property(instance, propertyName, arguments);
        }

        [JavascriptType("property3x2")]
        public virtual System.Linq.Expressions.MemberExpression Property(System.Linq.Expressions.Expression expression, System.Type type, string propertyName)
        {
            return System.Linq.Expressions.Expression.Property(expression, type, propertyName);
        }

        [JavascriptType("property2")]
        public virtual System.Linq.Expressions.MemberExpression Property(System.Linq.Expressions.Expression expression, string propertyName)
        {
            return System.Linq.Expressions.Expression.Property(expression, propertyName);
        }

        [JavascriptType("invoke")]
        public virtual System.Linq.Expressions.InvocationExpression Invoke(System.Linq.Expressions.Expression expression, System.Linq.Expressions.Expression[] arguments)
        {
            return System.Linq.Expressions.Expression.Invoke(expression, arguments);
        }

        [JavascriptType("lambda2")]
        public virtual System.Linq.Expressions.LambdaExpression Lambda(System.Linq.Expressions.Expression body, System.Linq.Expressions.ParameterExpression[] parameters)
        {
            return System.Linq.Expressions.Expression.Lambda(body, parameters);
        }

        [JavascriptType("lambda3x1")]
        public virtual System.Linq.Expressions.LambdaExpression Lambda(System.Linq.Expressions.Expression body, bool tailCall, System.Linq.Expressions.ParameterExpression[] parameters)
        {
            return System.Linq.Expressions.Expression.Lambda(body, tailCall, parameters);
        }

        [JavascriptType("lambda3x2")]
        public virtual System.Linq.Expressions.LambdaExpression Lambda(System.Type delegateType, System.Linq.Expressions.Expression body, System.Linq.Expressions.ParameterExpression[] parameters)
        {
            return System.Linq.Expressions.Expression.Lambda(delegateType, body, parameters);
        }

        [JavascriptType("lambda3x3")]
        public virtual System.Linq.Expressions.LambdaExpression Lambda(System.Linq.Expressions.Expression body, string name, System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> parameters)
        {
            return System.Linq.Expressions.Expression.Lambda(body, name, parameters);
        }

        [JavascriptType("lambda4x1")]
        public virtual System.Linq.Expressions.LambdaExpression Lambda(System.Type delegateType, System.Linq.Expressions.Expression body, bool tailCall, System.Linq.Expressions.ParameterExpression[] parameters)
        {
            return System.Linq.Expressions.Expression.Lambda(delegateType, body, tailCall, parameters);
        }

        [JavascriptType("lambda4x2")]
        public virtual System.Linq.Expressions.LambdaExpression Lambda(System.Linq.Expressions.Expression body, string name, bool tailCall, System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> parameters)
        {
            return System.Linq.Expressions.Expression.Lambda(body, name, tailCall, parameters);
        }

        [JavascriptType("lambda4x3")]
        public virtual System.Linq.Expressions.LambdaExpression Lambda(System.Type delegateType, System.Linq.Expressions.Expression body, string name, System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> parameters)
        {
            return System.Linq.Expressions.Expression.Lambda(delegateType, body, name, parameters);
        }

        [JavascriptType("lambda5")]
        public virtual System.Linq.Expressions.LambdaExpression Lambda(System.Type delegateType, System.Linq.Expressions.Expression body, string name, bool tailCall, System.Collections.Generic.IEnumerable<System.Linq.Expressions.ParameterExpression> parameters)
        {
            return System.Linq.Expressions.Expression.Lambda(delegateType, body, name, tailCall, parameters);
        }

        [JavascriptType("listInit")]
        public virtual System.Linq.Expressions.ListInitExpression ListInit(System.Linq.Expressions.NewExpression newExpression, System.Linq.Expressions.Expression[] initializers)
        {
            return System.Linq.Expressions.Expression.ListInit(newExpression, initializers);
        }

        [JavascriptType("loop")]
        public virtual System.Linq.Expressions.LoopExpression Loop(System.Linq.Expressions.Expression body)
        {
            return System.Linq.Expressions.Expression.Loop(body);
        }

        [JavascriptType("field2")]
        public virtual System.Linq.Expressions.MemberExpression Field(System.Linq.Expressions.Expression expression, string fieldName)
        {
            return System.Linq.Expressions.Expression.Field(expression, fieldName);
        }

        [JavascriptType("field3")]
        public virtual System.Linq.Expressions.MemberExpression Field(System.Linq.Expressions.Expression expression, System.Type type, string fieldName)
        {
            return System.Linq.Expressions.Expression.Field(expression, type, fieldName);
        }

        [JavascriptType("propertyOrField")]
        public virtual System.Linq.Expressions.MemberExpression PropertyOrField(System.Linq.Expressions.Expression expression, string propertyOrFieldName)
        {
            return System.Linq.Expressions.Expression.PropertyOrField(expression, propertyOrFieldName);
        }

        [JavascriptType("call4x1")]
        public virtual System.Linq.Expressions.MethodCallExpression Call(System.Linq.Expressions.Expression instance, string methodName, System.Type[] typeArguments, System.Linq.Expressions.Expression[] arguments)
        {
            return System.Linq.Expressions.Expression.Call(instance, methodName, typeArguments, arguments);
        }

        [JavascriptType("call4x2")]
        public virtual System.Linq.Expressions.MethodCallExpression Call(System.Type type, string methodName, System.Type[] typeArguments, System.Linq.Expressions.Expression[] arguments)
        {
            return System.Linq.Expressions.Expression.Call(type, methodName, typeArguments, arguments);
        }

        [JavascriptType("newArrayInit")]
        public virtual System.Linq.Expressions.NewArrayExpression NewArrayInit(System.Type type, System.Linq.Expressions.Expression[] initializers)
        {
            return System.Linq.Expressions.Expression.NewArrayInit(type, initializers);
        }

        [JavascriptType("newArrayBounds")]
        public virtual System.Linq.Expressions.NewArrayExpression NewArrayBounds(System.Type type, System.Linq.Expressions.Expression[] bounds)
        {
            return System.Linq.Expressions.Expression.NewArrayBounds(type, bounds);
        }

        [JavascriptType("new1")]
        public virtual System.Linq.Expressions.NewExpression New(System.Type type)
        {
            return System.Linq.Expressions.Expression.New(type);
        }

        [JavascriptType("parameter1")]
        public virtual System.Linq.Expressions.ParameterExpression Parameter(System.Type type)
        {
            return System.Linq.Expressions.Expression.Parameter(type);
        }

        [JavascriptType("parameter2")]
        public virtual System.Linq.Expressions.ParameterExpression Parameter(System.Type type, string name)
        {
            return System.Linq.Expressions.Expression.Parameter(type, name);
        }

        [JavascriptType("variable1")]
        public virtual System.Linq.Expressions.ParameterExpression Variable(System.Type type)
        {
            return System.Linq.Expressions.Expression.Variable(type);
        }

        [JavascriptType("variable2")]
        public virtual System.Linq.Expressions.ParameterExpression Variable(System.Type type, string name)
        {
            return System.Linq.Expressions.Expression.Variable(type, name);
        }

        [JavascriptType("runtimeVariables")]
        public virtual System.Linq.Expressions.RuntimeVariablesExpression RuntimeVariables(System.Linq.Expressions.ParameterExpression[] variables)
        {
            return System.Linq.Expressions.Expression.RuntimeVariables(variables);
        }

        [JavascriptType("tryFault")]
        public virtual System.Linq.Expressions.TryExpression TryFault(System.Linq.Expressions.Expression body, System.Linq.Expressions.Expression fault)
        {
            return System.Linq.Expressions.Expression.TryFault(body, fault);
        }

        [JavascriptType("tryFinally")]
        public virtual System.Linq.Expressions.TryExpression TryFinally(System.Linq.Expressions.Expression body, System.Linq.Expressions.Expression @finally)
        {
            return System.Linq.Expressions.Expression.TryFinally(body, @finally);
        }

        [JavascriptType("typeIs")]
        public virtual System.Linq.Expressions.TypeBinaryExpression TypeIs(System.Linq.Expressions.Expression expression, System.Type type)
        {
            return System.Linq.Expressions.Expression.TypeIs(expression, type);
        }

        [JavascriptType("typeEqual")]
        public virtual System.Linq.Expressions.TypeBinaryExpression TypeEqual(System.Linq.Expressions.Expression expression, System.Type type)
        {
            return System.Linq.Expressions.Expression.TypeEqual(expression, type);
        }

        [JavascriptType("negate")]
        public virtual System.Linq.Expressions.UnaryExpression Negate(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.Negate(expression);
        }

        [JavascriptType("unaryPlus")]
        public virtual System.Linq.Expressions.UnaryExpression UnaryPlus(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.UnaryPlus(expression);
        }

        [JavascriptType("negateChecked")]
        public virtual System.Linq.Expressions.UnaryExpression NegateChecked(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.NegateChecked(expression);
        }

        [JavascriptType("not")]
        public virtual System.Linq.Expressions.UnaryExpression Not(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.Not(expression);
        }

        [JavascriptType("isFalse")]
        public virtual System.Linq.Expressions.UnaryExpression IsFalse(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.IsFalse(expression);
        }

        [JavascriptType("isTrue")]
        public virtual System.Linq.Expressions.UnaryExpression IsTrue(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.IsTrue(expression);
        }

        [JavascriptType("onesComplement")]
        public virtual System.Linq.Expressions.UnaryExpression OnesComplement(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.OnesComplement(expression);
        }

        [JavascriptType("typeAs")]
        public virtual System.Linq.Expressions.UnaryExpression TypeAs(System.Linq.Expressions.Expression expression, System.Type type)
        {
            return System.Linq.Expressions.Expression.TypeAs(expression, type);
        }

        [JavascriptType("unbox")]
        public virtual System.Linq.Expressions.UnaryExpression Unbox(System.Linq.Expressions.Expression expression, System.Type type)
        {
            return System.Linq.Expressions.Expression.Unbox(expression, type);
        }

        [JavascriptType("convert")]
        public virtual System.Linq.Expressions.UnaryExpression Convert(System.Linq.Expressions.Expression expression, System.Type type)
        {
            return System.Linq.Expressions.Expression.Convert(expression, type);
        }

        [JavascriptType("convertChecked")]
        public virtual System.Linq.Expressions.UnaryExpression ConvertChecked(System.Linq.Expressions.Expression expression, System.Type type)
        {
            return System.Linq.Expressions.Expression.ConvertChecked(expression, type);
        }

        [JavascriptType("arrayLength")]
        public virtual System.Linq.Expressions.UnaryExpression ArrayLength(System.Linq.Expressions.Expression array)
        {
            return System.Linq.Expressions.Expression.ArrayLength(array);
        }

        [JavascriptType("quote")]
        public virtual System.Linq.Expressions.UnaryExpression Quote(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.Quote(expression);
        }

        [JavascriptType("rethrow0")]
        public virtual System.Linq.Expressions.UnaryExpression Rethrow()
        {
            return System.Linq.Expressions.Expression.Rethrow();
        }

        [JavascriptType("rethrow1")]
        public virtual System.Linq.Expressions.UnaryExpression Rethrow(System.Type type)
        {
            return System.Linq.Expressions.Expression.Rethrow(type);
        }

        [JavascriptType("throw1")]
        public virtual System.Linq.Expressions.UnaryExpression Throw(System.Linq.Expressions.Expression value)
        {
            return System.Linq.Expressions.Expression.Throw(value);
        }

        [JavascriptType("throw2")]
        public virtual System.Linq.Expressions.UnaryExpression Throw(System.Linq.Expressions.Expression value, System.Type type)
        {
            return System.Linq.Expressions.Expression.Throw(value, type);
        }

        [JavascriptType("increment")]
        public virtual System.Linq.Expressions.UnaryExpression Increment(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.Increment(expression);
        }

        [JavascriptType("decrement")]
        public virtual System.Linq.Expressions.UnaryExpression Decrement(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.Decrement(expression);
        }

        [JavascriptType("preIncrementAssign")]
        public virtual System.Linq.Expressions.UnaryExpression PreIncrementAssign(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.PreIncrementAssign(expression);
        }

        [JavascriptType("preDecrementAssign")]
        public virtual System.Linq.Expressions.UnaryExpression PreDecrementAssign(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.PreDecrementAssign(expression);
        }

        [JavascriptType("postIncrementAssign")]
        public virtual System.Linq.Expressions.UnaryExpression PostIncrementAssign(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.PostIncrementAssign(expression);
        }

        [JavascriptType("postDecrementAssign")]
        public virtual System.Linq.Expressions.UnaryExpression PostDecrementAssign(System.Linq.Expressions.Expression expression)
        {
            return System.Linq.Expressions.Expression.PostDecrementAssign(expression);
        }
    }
}
