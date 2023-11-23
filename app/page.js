import React from 'react';
import Coverpage from '@/components/Coverpage'
import Rooms from '@/components/Rooms';
import Sports from '@/components/Sports';
import Experience from '@/components/Experience';
import Featured from '@/components/Featured';

export default function Home() {
  return (
      <>
        <Coverpage />
        <Rooms />
        <Sports />
        <Experience />
        <Featured />
      </>
  )
}