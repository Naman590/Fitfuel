import React, { useState } from 'react';
import { ArrowUpRight, Heart, MessageCircle, Play, Layers, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { INSTAGRAM_POSTS, CLUB_VISIT_DETAILS } from '../data/mockData';
import { InstagramPost } from '../types';

interface InstagramShowcaseProps {
  onBookSpace: (spaceName?: string) => void;
}

export const InstagramShowcase: React.FC<InstagramShowcaseProps> = ({ onBookSpace }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const activePost: InstagramPost | null =
    selectedIndex !== null ? INSTAGRAM_POSTS[selectedIndex] : null;

  const [leadPost, ...gridPosts] = INSTAGRAM_POSTS;

  return (
    <section id="instagram" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0B0B0B] border-b border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-mono text-[#FFD200] block mb-2">
              {CLUB_VISIT_DETAILS.instagramHandle}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#F5F5F5] uppercase leading-[1.03]">
              INSIDE THE FLOOR.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <p className="text-xs sm:text-sm text-[#787878] max-w-xs leading-relaxed">
              Early-morning barbell sessions, weekend sled work, and quiet afternoon light in Sector 15.
            </p>
            <a
              href={CLUB_VISIT_DETAILS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 border border-[#2D2D2D] hover:border-[#FFD200] text-xs font-display font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#FFD200] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>Follow {CLUB_VISIT_DETAILS.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>

        {/* Asymmetric Editorial Photo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
          {/* Featured Tall Lead Post (5 cols on desktop, full width on mobile) */}
          <button
            type="button"
            onClick={() => setSelectedIndex(0)}
            className="col-span-2 lg:col-span-5 group relative bg-[#141414] overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[520px] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD200]"
          >
            <img
              src={leadPost.image}
              alt={leadPost.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

            {/* Top subtle post indicator */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-[#F5F5F5]/90">
              <span className="font-mono">{leadPost.locationTag}</span>
              <span className="inline-flex items-center gap-1 font-medium">
                <Play className="w-3.5 h-3.5 fill-current" />
                {leadPost.type}
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-[#F5F5F5] leading-relaxed line-clamp-2 mb-3">
                {leadPost.caption}
              </p>
              <div className="flex items-center justify-between text-[11px] text-[#F5F5F5]/75">
                <div className="flex items-center gap-4 tabular-nums">
                  <span className="inline-flex items-center gap-1">
                    <Heart className={`w-3.5 h-3.5 ${likedIds[leadPost.id] ? 'fill-[#FFD200] text-[#FFD200]' : ''}`} />
                    {leadPost.likes + (likedIds[leadPost.id] ? 1 : 0)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {leadPost.comments}
                  </span>
                </div>
                <span className="font-mono text-[#787878]">{leadPost.timestamp}</span>
              </div>
            </div>
          </button>

          {/* Right 2x2 Grid (7 cols on desktop) */}
          <div className="col-span-2 lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            {gridPosts.map((post, idx) => {
              const postIdx = idx + 1;
              const isLiked = Boolean(likedIds[post.id]);
              return (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => setSelectedIndex(postIdx)}
                  className="group relative bg-[#141414] overflow-hidden aspect-square sm:aspect-[4/3] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD200]"
                >
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 sm:opacity-75 sm:group-hover:opacity-95 transition-opacity" />

                  {post.type === 'Carousel' && (
                    <div className="absolute top-3 right-3 text-[#F5F5F5]/90">
                      <Layers className="w-4 h-4" />
                    </div>
                  )}

                  <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4">
                    <div className="text-[10px] font-mono text-[#FFD200] mb-1 truncate">
                      {post.locationTag}
                    </div>
                    <p className="hidden sm:line-clamp-2 text-xs text-[#F5F5F5]/90 leading-snug mb-2">
                      {post.caption}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-[#F5F5F5]/75 tabular-nums">
                      <span className="inline-flex items-center gap-1">
                        <Heart className={`w-3 h-3 ${isLiked ? 'fill-[#FFD200] text-[#FFD200]' : ''}`} />
                        {post.likes + (isLiked ? 1 : 0)}
                      </span>
                      <span className="text-[10px] text-[#F5F5F5]/60">{post.timestamp}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Post Detail Modal */}
      {activePost && selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 overflow-y-auto"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#111111] border border-[#2D2D2D] grid grid-cols-1 md:grid-cols-12 overflow-hidden"
          >
            {/* Photo Pane */}
            <div className="md:col-span-7 bg-black relative aspect-[4/3] md:aspect-auto md:min-h-[460px]">
              <img
                src={activePost.image}
                alt={activePost.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex((selectedIndex - 1 + INSTAGRAM_POSTS.length) % INSTAGRAM_POSTS.length)
                  }
                  className="pointer-events-auto p-2 bg-[#0B0B0B]/85 border border-[#2D2D2D] text-[#F5F5F5] hover:border-[#FFD200] cursor-pointer"
                  aria-label="Previous post"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedIndex((selectedIndex + 1) % INSTAGRAM_POSTS.length)}
                  className="pointer-events-auto p-2 bg-[#0B0B0B]/85 border border-[#2D2D2D] text-[#F5F5F5] hover:border-[#FFD200] cursor-pointer"
                  aria-label="Next post"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Post Details Pane */}
            <div className="md:col-span-5 p-5 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#2D2D2D]">
                  <div>
                    <div className="text-sm font-bold font-display text-[#F5F5F5]">
                      {CLUB_VISIT_DETAILS.instagramHandle}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#787878] mt-0.5">
                      <MapPin className="w-3 h-3 text-[#FFD200]" />
                      <span>{activePost.locationTag}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(null)}
                    className="p-1.5 text-[#787878] hover:text-[#F5F5F5] cursor-pointer"
                    aria-label="Close post view"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-5 space-y-4">
                  <p className="text-sm text-[#F5F5F5]/90 leading-relaxed">
                    {activePost.caption}
                  </p>
                  <div className="text-xs font-mono text-[#787878]">
                    Posted {activePost.timestamp}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2D2D2D] space-y-4">
                <div className="flex items-center justify-between text-xs text-[#F5F5F5]">
                  <div className="flex items-center gap-5 tabular-nums">
                    <button
                      type="button"
                      onClick={() => toggleLike(activePost.id)}
                      className="inline-flex items-center gap-1.5 hover:text-[#FFD200] cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          likedIds[activePost.id] ? 'fill-[#FFD200] text-[#FFD200]' : ''
                        }`}
                      />
                      <span>{activePost.likes + (likedIds[activePost.id] ? 1 : 0)} likes</span>
                    </button>
                    <span className="inline-flex items-center gap-1.5 text-[#787878]">
                      <MessageCircle className="w-4 h-4" />
                      <span>{activePost.comments} comments</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      const space = activePost.linkedSpace;
                      setSelectedIndex(null);
                      onBookSpace(space);
                    }}
                    className="flex-1 py-2.5 px-4 bg-[#FFD200] hover:bg-[#f0c600] text-black text-xs font-display font-bold uppercase tracking-wider text-center whitespace-nowrap cursor-pointer"
                  >
                    Book This Floor
                  </button>
                  <a
                    href={CLUB_VISIT_DETAILS.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 border border-[#2D2D2D] hover:border-[#FFD200] text-xs font-display font-semibold uppercase tracking-wider text-[#F5F5F5] whitespace-nowrap"
                  >
                    Open IG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
