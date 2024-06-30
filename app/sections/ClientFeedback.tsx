'use client'
import { FC } from 'react';
import ModalImage from 'react-modal-image';

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
      <div className={'grid-container-masonry'}>
        {feedbacks.map((item, index) => (
          <div key={index} className={'grid-item-masonry'}>
            <ModalImage
              small={item}
              large={item}
              alt={`Feedback ${index + 1}`}
              className="feedback-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
