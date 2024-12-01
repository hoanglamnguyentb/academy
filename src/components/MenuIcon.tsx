'use client';
import { MenuList } from '@/types/menulist';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MenuIcon = ({ url, icon, title }: MenuList) => {
  const pathname = usePathname();
  const isActive = pathname == url;
  return (
    <li
      className={` py-2 px-3 mb-2 bg-opacity-50 rounded-2xl transition-all text-gray-500 ${
        isActive
          ? 'bg-blue-100 text-blue-400'
          : 'hover:bg-blue-100 hover:text-blue-400'
      } `}
    >
      <Link href={url} className="block">
        {icon} {title}
      </Link>
    </li>
  );
};

export default MenuIcon;
