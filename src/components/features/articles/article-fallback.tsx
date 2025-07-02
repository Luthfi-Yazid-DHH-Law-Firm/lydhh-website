import AnimationWrapper from "@/components/wrappers/animation-wrapper";

const ArticleFallback = () => (
  <AnimationWrapper classname='w-full'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <div className='text-center col-span-full'>Loading articles...</div>
    </div>
  </AnimationWrapper>
);

export default ArticleFallback;