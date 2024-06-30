'use client'
import { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import ModalImage from 'react-modal-image';

// Dynamically import the ResponsiveMasonry and Masonry components
const ResponsiveMasonry = dynamic<ResponsiveMasonryProps>(() => import('react-responsive-masonry').then(mod => mod.ResponsiveMasonry), { ssr: false });
const Masonry = dynamic<MasonryProps>(() => import('react-responsive-masonry').then(mod => mod.Masonry), { ssr: false });

interface ResponsiveMasonryProps {
  children: React.ReactNode;
  columnsCountBreakPoints: { [key: number]: number };
}

interface MasonryProps {
  children: React.ReactNode;
  gutter?: string;
}

const ClientFeedback: FC = () => {
  const feedbacks = [
    '/feedback/2.png',
    '/feedback/3.png',
    '/feedback/4.png',
    '/feedback/5.png',
    '/feedback/1.png',
    '/feedback/6.png',
    '/feedback/7.png',
  ];

  return (
    <div className="container px-4 md:px-6">
      <div className="space-y-4 mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Feedback</h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Hear what my clients have to say about the work I&apos;ve done for them.
        </p>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {feedbacks.map((item, index) => (
            <div key={index} className="feedback-item">
              <ModalImage
                small={item}
                large={item}
                alt={`Feedback ${index + 1}`}
                className="feedback-image"
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ClientFeedback;
