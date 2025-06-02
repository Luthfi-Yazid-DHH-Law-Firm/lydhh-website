import MemberBio from '@/components/composites/team/member-bio';
import MemberProfileImage from '@/components/composites/team/member-profile-image';
import React from 'react'

const MemberProfileDetail = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-start gap-10'>
        <MemberProfileImage />
        <MemberBio />
    </div>
  );
};

export default MemberProfileDetail;