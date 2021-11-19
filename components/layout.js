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
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
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
