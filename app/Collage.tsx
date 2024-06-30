'use client'
import StackGrid from "react-stack-grid";
export const Collage = () => {
  const img = [
    'feedback/1.jpg',
    'feedback/2.png',
    'feedback/3.png',
    'feedback/4.png',
    'feedback/5.png',
    'feedback/6.png',
    'feedback/7.png',
  ]
  return (
    <div style={{ maxWidth: '300px', height: '100vh'}}>
      <StackGrid
        columnWidth={100}
        appearDelay={100}
        >
        {
          img.map((item, index) => (
            <div key={index} style={{ color: 'white '}}>
              <img src={item} alt="" />
            </div>
          ))
        }
      </StackGrid>
    </div>
  );
};