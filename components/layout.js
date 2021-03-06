import Head from "next/head";
import Link from "next/link";
import ThemeChangeDropdown from "./theme-change-dropdown";

export const siteTitle = "Nikema's Brag File";
export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Displaying the brags from my Airtable base"
        />
      </Head>
      <header>
        <ThemeChangeDropdown />
        {!home && (
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        <h1 className="text-4xl p-8 text-center">Brag File</h1>
      </header>
      <main className="flex flex-column justify-evenly">{children}</main>
    </div>
  );
}
