import { useState, useMemo } from "react";

const PAGE_SIZE = 9;
const POSTS = [
  {
    id: 1,
    title: "What Is Salesforce Agentforce? A Complete Guide for Businesses in 2026",
    image:
      "/images/blog/what-is-salesforce-agentforce-guide/what-is-salesforce-agentforce-guide-2026.png",
    href: "/resources/what-is-salesforce-agentforce-guide",
  },
];

function Card({ post }) {
  return (
    <a href={post.href} className="group flex flex-col">
      <div className="w-full aspect-[5/3] overflow-hidden bg-[#F1EFE8]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="mt-4 text-[17px] font-medium leading-snug text-[#171B26] group-hover:text-[#1857C4] transition-colors">
        {post.title}
      </h3>
    </a>
  );
}

function Pagination({ page, totalPages, onChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-center gap-2 mt-16">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-3 py-2 text-sm text-[#5B5A54] disabled:opacity-30 hover:text-[#171B26]"
        aria-label="Previous page"
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-9 h-9 text-sm font-medium transition-colors ${
            p === page ? "bg-[#171B26] text-white" : "text-[#5B5A54] hover:bg-[#F1EFE8]"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="px-3 py-2 text-sm text-[#5B5A54] disabled:opacity-30 hover:text-[#171B26]"
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
}

export default function ResourcesGrid() {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(POSTS.length / PAGE_SIZE));
  const visible = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return POSTS.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16" style={{ backgroundColor: "#FAFAF7" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
        * { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-medium text-[#171B26] mb-3">Resources</h1>
        <p className="text-[#5B5A54] text-base">
          Guides, case studies, and updates from our team.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {visible.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>

      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onChange={setPage} />}
    </div>
  );
}
