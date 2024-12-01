import Link from 'next/link';
import Image from 'next/image';

import React from 'react';

const CourseItem = () => {
  return (
    <div className="border border-gray-20 bg-white rounded-lg shadow-xl p-3 ">
      <Link
        href="/"
        className="block h-[200px] rounded-md overflow-hidden relative"
      >
        <Image
          className="h-100 w-100 object-cover"
          src="https://images.unsplash.com/photo-1732482124606-697008dab09c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          width={500}
          height={500}
          alt="Picture of the author"
        ></Image>
        <span className="absolute top-2 right-2 rounded-full bg-green-500 text-white px-2">
          new
        </span>
      </Link>

      <h3 className="font-bold mt-3">
        Cách truyền trực tiếp title vào layout (ít phổ biến hơn)
      </h3>
      <div className="flex justify-between mt-3">
        <span className="bg-blue-100 px-3 rounded-full text-blue-600">
          3h25p
        </span>
        <span className="text-xl font-bold text-blue-500">500.000vnđ</span>
      </div>
    </div>
  );
};

export default CourseItem;
