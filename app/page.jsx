import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center text-5xl">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="text-center orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-sorce AI promting tool for modern world to
        discover, create and share creative promps
      </p>

      <Feed />
    </section>
  );
}
