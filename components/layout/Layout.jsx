'use client'

import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
}
