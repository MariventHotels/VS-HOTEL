import React from 'react';
import Coverpage from '@/components/Coverpage'
import Rooms from '@/components/Rooms';
import Sports from '@/components/Sports';
import Experience from '@/components/Experience';
import AdsModal from '@/components/Modal';
import IgWidget from '@/components/Widget';
import Location from '@/components/Location';
import Reviews from '@/components/Review';
import Staah from '@/components/Staah';

export default function Home() {
  return (
      <>
        <AdsModal />
        <Coverpage />
        <Staah />
        <Rooms />
        <Sports />
        <Experience />
        <Location />
        <Reviews/>
        <IgWidget />
      </>
  )
}