// libraries
import Head from "next/head";

// components
import Layout from "@/components/layout.component";
import ResultScore from "@/components/result-score.component";
import ResultSummary from "@/components/result-summary.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Result Summary Component</title>
        <meta name="description" content="Frontend.io challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Layout>
        <div className="grid max-w-3xl sm:grid-cols-2 sm:rounded-[2rem] shadow-xl overflow-hidden sm:mx-4">
          <ResultScore />
          <ResultSummary />
        </div>
      </Layout>
    </>
  );
}
