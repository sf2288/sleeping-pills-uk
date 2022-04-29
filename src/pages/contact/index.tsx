import React from "react";
import dynamic from 'next/dynamic';

const ContactComponent = dynamic(() => import('@/components/Contact'))

const Index = () => {

    return <ContactComponent />;
};

export default Index;
