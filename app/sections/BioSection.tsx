export const BioSection = () => {
  return (
    <div className="container px-4 py-12 my-4 w-full rounded-lg shadow-lg bg-black">
      <div className="text-center mx-auto max-w-lg">
        <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
          Hi, I&apos;m <span className="font-bold text-white">Hika</span>, a video editor proficient in
        </p>
        <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" alt="Premiere Pro" style={{ width: 24, height: 24 }} />
          <span className="font-bold text-white">Adobe Premiere Pro</span>
          <span className="text-white">and</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" alt="After Effects" style={{ width: 24, height: 24 }} />
          <span className="font-bold text-white">After Effects</span>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mt-4">
          I speak 🗣️
          <span className="font-bold text-white"> English</span>, 
          <span className="font-bold text-white"> Arabic</span>, and 
          <span className="font-bold text-white"> French</span>
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed pt-3">
          I blend creativity with technical expertise to craft compelling visual stories.
        </p>
      </div>
    </div>
  );
};
