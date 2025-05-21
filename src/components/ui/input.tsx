import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ 
  type = 'text', 
  placeholder, 
  name,
  error, 
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        ref={ref}
        className={`w-full p-4 bg-black/30 backdrop-blur text-white placeholder-gray-300 border ${error ? 'border-red-500' : 'border-transparent'} rounded ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;