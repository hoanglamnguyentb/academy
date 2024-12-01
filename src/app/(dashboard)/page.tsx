import CourseItem from '@/components/course/CourseItem';
import Header from '@/components/Header';
import createUser from '@/lib/actions/user.actions';
import { CreateVM } from '@/types/user';
import React from 'react';

const page = () => {
  const user: CreateVM = {
    clerkId: 'clerk_12345',
    username: 'johndoe',
    email: 'johndoe@example.com',
    fullname: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
  };
  createUser(user);
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
