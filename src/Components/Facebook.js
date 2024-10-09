import React from "react";

const Facebook = () => {
  return (
    <div className="flex items-center pl-32 p-8 bg-zinc-200"> {/* Flex container for horizontal alignment */}
      {/* Heading Section */}
      <h1 className="bungee-spice-regular bold text-5xl mr-8"> {/* Add margin-right for spacing */}
        Social Media & Helpline
      </h1>

      {/* Iframe Section */}
      <iframe className="ml-[32rem]"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheStressManagementSociety%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="500"
        style={{
          border: "none",
          overflow: "hidden",
          borderRadius: "10px", // Adjust radius as needed
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
          // Add shadow effect
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Facebook;
