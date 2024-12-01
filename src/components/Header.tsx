import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="p-5 shadow-md bg-white flex justify-between">
      <div className="text-2xl">{children}</div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
