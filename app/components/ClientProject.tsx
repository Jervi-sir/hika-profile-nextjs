'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { XEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

export const ClientProject = () => {
  const clients = [
    {
      avatarImage: 'https://yt3.ggpht.com/mEztL1Sj850Ud8B9EptXX4BAKP7QFzBsnqZ4iTy1wmCbxab8Z2DUWq_n-PXYC0YOEFYqFfiSJug=s176-c-k-c0x00ffffff-no-rj-mo',
      avatarFallback: 'BEE',
      clientName: 'BEE\'S LIFE',
      youtubeURL: 'https://www.youtube.com/watch?v=FeUVqbgQMpQ',
      youtubeIframe: 'https://www.youtube.com/embed/FeUVqbgQMpQ?si=r6LhLXMd1rEX04To',
    }, 
    {
      avatarImage: 'https://yt3.googleusercontent.com/jd2CmVW7KFgULCA1qVaKUPQ96RwSaEgKsQExKkvSJDeXjMVtypNhmOqESwSzzi5UPYu0SFOJ0_0=s176-c-k-c0x00ffffff-no-rj',
      avatarFallback: 'BEEJAY',
      clientName: 'BEEJAY TV',
      youtubeURL: 'https://www.youtube.com/watch?v=JsLF30x0Ov8',
      youtubeIframe: 'https://www.youtube.com/embed/JsLF30x0Ov8?si=Ll4V67fgqdjJYVbL',
    }, 
  ];
  return (
    <>
      <div className="container px-0 md:px-0">
        <div className="space-y-4 mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Projects</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of the amazing Youtube video projects I&apos;ve worked on for my clients.
          </p>
        </div>
        {/* Youtube Videos */}
        <div className="grid gap-6 sm:grid-cols-2 px-4 md:px-6 md:grid-cols- md:max-w-[70%] md:mx-auto">
          {
            clients.map((client, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={ client.avatarImage } />
                    <AvatarFallback>{ client.avatarFallback }</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{ client.clientName }</h3>
                    <Link href={ client.youtubeURL } className="text-sm text-muted-foreground hover:underline" prefetch={false}>
                      View Project
                    </Link>
                  </div>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={ client.youtubeIframe }
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))
          }
        </div>
        <div className="space-y-4 my-8 text-center">
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of the amazing Youtube video projects I&apos;ve worked on for my clients.
          </p>
        </div>
        {/* Shorts */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 md:max-w-[70%] md:mx-auto">
          <div className="flex flex-col items-center md:items-end ">
            <div>
              <XEmbed url="https://x.com/HikaEdits/status/1785323226559881587" width={300}   />
            </div>
            <div className="pattern-background hidden md:flex" style={{ width: 300, }} ></div>
          </div>
          <div className="flex flex-col items-start">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <TikTokEmbed url="https://www.tiktok.com/@_laflxm/video/7213436201364147462?lang=en" width={320} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};