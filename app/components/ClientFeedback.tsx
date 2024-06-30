'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import StackGrid from "react-stack-grid";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ModalImage from 'react-modal-image';

export const ClientFeedback = () => {
  const feedbacks = [
    'feedback/2.png',
    'feedback/3.png',
    'feedback/4.png',
    'feedback/5.png',
    'feedback/1.png',
    'feedback/6.png',
    'feedback/7.png',
  ];

  return (
    <>
      <div className="container px-4 md:px-6">
        <div className="space-y-4 mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Feedback</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear what my clients have to say about the work I&apos;ve done for them.
          </p>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
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
    </>

  );
};

{/* <Card className="p-6 bg-background">
  <div className="flex items-center gap-4 mb-4">
    <Avatar>
      <AvatarImage src="/placeholder-user.jpg" />
      <AvatarFallback>C3</AvatarFallback>
    </Avatar>
    <div>
      <h3 className="text-lg font-semibold">Client 3</h3>
      <p className="text-sm text-muted-foreground">Creative Director, Stark Industries</p>
    </div>
  </div>
  <blockquote className="text-muted-foreground">
    "John's attention to detail and creative flair really elevated our video content to the next level.
    Highly recommended!"
  </blockquote>
</Card> */}