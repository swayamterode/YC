// COMPONENT
import SearchForm from "@/components/SearchForm/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
  }>;
}) {
  const query = (await searchParams)?.query || "";
  const posts = await client.fetch(STARTUP_QUERY);
  console.log(JSON.stringify(posts, null, 2));

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     Views: 55,
  //     author: { _id: 1, name: "Swayam" },
  //     _id: 1,
  //     description: "This is a description",
  //     image:
  //       "https://images.unsplash.com/photo-1730058304300-fa684086e87d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup idea, <br /> Connect With Entrepreneurs
        </h1>
        <div className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Ideas, Connect with Entrepreneurs and Get
          Inspired!
        </div>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <div className="text-30-semibold">
          {query ? `Showing results for "${query}"` : "All Startup"}
        </div>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <div className="no-result">No results found</div>
          )}
        </ul>
      </section>
    </>
  );
}
