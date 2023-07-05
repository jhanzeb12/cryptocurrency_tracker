import twStyleSheet from "~/styles/tailwind.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Layout from "./components/layout/default_layout";
import PageTitle from "./components/page_title/page_title";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: twStyleSheet },
];

export const meta: MetaFunction = () => {
  return { title: 'Cryptocurrency Tracker' };
};

export default function App() {
  return (
    <html lang="en" data-theme="winter">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <div className="container mx-auto mt-[20px] mb-[20px]">
            {/* This Page title should be handled via Redux */}
            <PageTitle text="Crypto Currencies" />
            <Outlet />
          </div>
        </Layout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
