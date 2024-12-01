import CourseItem from '@/components/course/CourseItem';
import Header from '@/components/Header';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header>Trang khám phá</Header>
      <div className="grid grid-cols-4 pb-3 gap-4 p-5">
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </div>
    </div>
  );
};

export default page;
