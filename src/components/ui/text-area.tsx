import { forwardRef, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ 
  placeholder, 
  name,
  error, 
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      <textarea
        placeholder={placeholder}
        name={name}
        ref={ref}
        className={`w-full p-4 bg-black/30 backdrop-blur text-white placeholder-gray-300 border ${error ? 'border-red-500' : 'border-transparent'} rounded h-52 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

Textarea.displayName = 'Textarea';
export default Textarea;