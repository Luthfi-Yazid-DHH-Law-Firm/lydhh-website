"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validationSchema';
import { easeIn } from 'motion';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/text-area';
import AnimationWrapper from '@/components/wrappers/animation-wrapper';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: '',
      subject: '',
      email: '',
      message: ''
    }
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Send data to API (commented for now)
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      
      // For demonstration, just log the data
      console.log("Form submitted successfully:", data);
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form after success
      reset();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimationWrapper 
      classname="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeIn, delay: 0.3 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Your name.."
            {...register('name')}
            error={errors.name?.message}
          />
          
          <Input
            placeholder="Subject.."
            {...register('subject')}
            error={errors.subject?.message}
          />
          
          <Input
            type="email"
            placeholder="Email Address.."
            {...register('email')}
            error={errors.email?.message}
          />
        </div>
        
        <Textarea
          placeholder="Message.."
          {...register('message')}
          error={errors.message?.message}
        />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-4 bg-linear-to-r from-[#E1BC1C] to-[#a98e16] text-white font-medium transition-colors duration-200 rounded cursor-pointer"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        
        {submitSuccess && (
          <div className="p-4 bg-green-500/80 text-white rounded">
            Thank you! Your message has been sent successfully.
          </div>
        )}
      </form>
    </AnimationWrapper>
  );
}