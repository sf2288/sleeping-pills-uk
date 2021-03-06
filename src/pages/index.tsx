import React from "react";
import dynamic from 'next/dynamic';

const HomeComponent = dynamic(() => import('@/components/Home'))

const Index = () => {

  return <HomeComponent />;
};

export default Index;
