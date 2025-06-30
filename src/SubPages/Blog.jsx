import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then(() => {
        const rewrittenPosts = [
          {
            id: 1,
            title: "Trends in Modern Building Construction in Nigeria",
            body: "Rapid urban growth has led to overcrowded housing, traffic congestion, and inadequate infrastructure in cities like Lagos, Port Harcourt, and Abuja. Developers are adopting modern technologies like smart concrete, 3D printed components, and green roofing solutions. As cities grow, sustainable practices and innovations in architecture will define the future of urban infrastructure in Nigeria...",
          },
          {
            id: 2,
            title: "Urban Development Challenges in Nigerian Cities",
            body: "From foundation to roofing, strict quality control prevents structural failures, delays, and unsafe living conditions. At Parker Integrated Engineering LTD, we ensure that materials and workmanship meet both local and international standards on every projectFrom foundation to roofing, strict quality control prevents structural failures, delays, and unsafe living conditions...",
          },
          {
            id: 3,
            title:
              "Why Quality Control is Vital on Nigerian Construction Sites",
            body: "Building approvals, environmental regulations, and taxation influence timelines and budgets in Nigerian construction. Understanding and complying with these laws is crucial for risk-free project delivery and long-term operational success...",
          },
          {
            id: 4,
            title: "Government Policies Impacting Construction Projects",
            body: "Building approvals, environmental regulations, and taxation influence timelines and budgets in Nigerian construction. Understanding and complying with these laws is crucial for risk-free project delivery and long-term operational success...",
          },
          {
            id: 5,
            title: "Building Materials: What Works Best in Nigeria?",
            body: "Choosing durable materials like reinforced concrete, aluminum roofing, and treated wood helps structures withstand heat, humidity, and soil shifts. Our projects prioritize both quality and availability of materials for cost-effective, resilient construction..",
          },
          {
            id: 6,
            title: "How Construction Drives Nigeria's Economy",
            body: "The construction industry creates jobs, boosts local suppliers, and supports infrastructure needed for national development. As Nigeria grows, sustainable and large-scale construction projects will continue to be economic drivers across sectors...",
          },
        ];
        setPosts(rewrittenPosts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="min-h-screen px-6 pt-44 pb-16 bg-gradient-to-br from-black via-yellow-500 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white text-black rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-600 mb-6">Our Blog</h2>
          {loading ? (
            <p className="text-center text-gray-600">Loading blog posts...</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">{post.body}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
