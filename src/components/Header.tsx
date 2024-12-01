import React from 'react';

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="p-5 shadow-md bg-white">
      <div className="text-2xl">{children}</div>
    </header>
  );
};

export default Header;
