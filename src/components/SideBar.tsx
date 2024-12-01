import { MenuList } from '@/types/menulist';
import React from 'react';
import MenuIcon from './MenuIcon';

const SideBar = () => {
  return (
    <div className="w-[300px] border border-r-gray-200 h-screen px-5 bg-white shadow-lg">
      <a className="block font-bold p-3 hover:text-blue-500 transition-all cursor-pointer">
        <span className="text-xl">H___</span>oanglamnguyentb
      </a>
      <ul>
        {menuList.map((item, index) => {
          return (
            <MenuIcon
              key={index}
              url={item.url}
              icon={item.icon}
              title={item.title}
            ></MenuIcon>
          );
        })}
      </ul>
    </div>
  );
};

const menuList: MenuList[] = [
  { icon: <i className="bi bi-house"></i>, title: 'Trang chủ', url: '/' },
  {
    icon: <i className="bi bi-airplane"></i>,
    title: 'Khám phá',
    url: '/explorer',
  },
  {
    icon: <i className="bi bi-book"></i>,
    title: 'Khoá học',
    url: '/courses',
  },
  {
    icon: <i className="bi bi-alarm"></i>,
    title: 'About',
    url: '/about',
  },
];

export default SideBar;
