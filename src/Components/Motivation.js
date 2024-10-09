import React from 'react';

const Motivation = () => {
  return (
    <div className="p-9 flex justify-between items-center bg-orange-300">
      {/* Video Section */}
      <div className="rounded-md overflow-hidden w-[52rem]">
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/TYWI929nZKg"
          title="How to Manage Stress? | Sadhguru"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="mr-8  max-w-md">
        <h1 className="text-2xl font-bold mb-4">How to Relieve Stress ?</h1>
        <p className="text-lg">
        To relieve stress, practice mindfulness through meditation, dedicating a few minutes daily to focus on your breath. Connect with nature by spending time outdoors, which calms the mind. Incorporate yoga to release tension and promote relaxation. Practice conscious breathing—inhale deeply, hold, and exhale slowly. Reflect on gratitude to shift focus to positivity. Learn to let go of attachments and expectations to reduce anxiety. Engage in selfless service, as helping others fosters fulfillment. By integrating these practices into your routine, you can cultivate a more peaceful and balanced state of mind.</p>
      </div>
    </div>
  );
};

export default Motivation;
