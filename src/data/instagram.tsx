import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        processEmbeds: () => void;
      };
    };
  }
}

export const IG_PROFILE = {
  handle: "faloodaclubuae",
  url: "https://www.instagram.com/faloodaclubuae/",
};

export type IGPost = {
  permalink: string;
};

export const IG_POSTS: IGPost[] = [
  { permalink: "https://www.instagram.com/p/DWY3r-CjC8f/" },
  { permalink: "https://www.instagram.com/p/DYPFFj1MPcD/" },
  { permalink: "https://www.instagram.com/p/DaDOIGrszXw/" },
  { permalink: "https://www.instagram.com/p/DX2K1YLMtMP/" },
  { permalink: "https://www.instagram.com/p/DbIkCo1scr9/" },
  { permalink: "https://www.instagram.com/p/DaaEJYFsJ1g/" },
  { permalink: "https://www.instagram.com/p/DXtmxXODI5P/" },
  { permalink: "https://www.instagram.com/p/DZfCxQGMPNi/" },
  { permalink: "https://www.instagram.com/p/DOn0CHND2VB/" },
];

export function InstagramGrid() {
  useEffect(() => {
    // Process embeds if the Instagram script is already loaded
    if (window.instgrm) {
      window.instgrm.Embeds.processEmbeds();
      return;
    }

    // Otherwise, inject the embed script dynamically
    const scriptId = "instagram-embed-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    script.onload = () => {
      window.instgrm?.Embeds.processEmbeds();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {IG_POSTS.map((post) => (
        <div key={post.permalink} className="flex justify-center overflow-hidden">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={post.permalink}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "12px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.15), 0 1px 10px 0 rgba(0,0,0,0.1)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "calc(100% - 2px)",
            }}
          >
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 text-center text-sm text-ink/60 hover:underline"
            >
              View post on Instagram
            </a>
          </blockquote>
        </div>
      ))}
    </div>
  );
}
