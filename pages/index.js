import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useFlags } from "@happykit/flags";

export default function Home() {
  const flags = useFlags();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {flags.dog ? (
          <img
            width="400"
            src="https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          />
        ) : (
          <React.Fragment>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className={styles.description}>
              Get started by editing{" "}
              <code className={styles.code}>pages/index.js</code>
            </p>

            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h3>Learn &rarr;</h3>
                <p>
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className={styles.card}
              >
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
              >
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>
          </React.Fragment>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feature Flags by{" "}
          <img
            src="/happykit.svg"
            alt="Vercel Logo"
            className={styles.happykit}
          />
        </a>
      </footer>
    </div>
  );
}
