// COMPONENT
import SearchForm from "@/components/SearchForm/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
  }>;
}) {
  const query = (await searchParams)?.query || "";
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup idea, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Ideas, Connect with Entrepreneurs and Get
          Inspired!
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
