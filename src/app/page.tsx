// eslint-disable-next-line import/order
// import { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Convey",
//   description: "Generated by create next app",
//   metadataBase: new URL("https://acme.com"),
//   openGraph: {
//     title: "Convey",
//     description: "The React Framework for the Web",
//     url: "https://next-enterprise.vercel.app/",
//     siteName: "Convey",
//     images: [
//       {
//         url: "https://nextjs.org/og.png",
//         width: 800,
//         height: 600,
//         alt: "My custom alt",
//       },
//       {
//         url: "https://nextjs.org/og-alt.png",
//         width: 1800,
//         height: 1600,
//         alt: "My custom alt",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//   },
// }

export default function Home() {
  return (
    <>
      <h1>heading 1</h1>
      <p className="label-1">label-1</p>
      <code className="code-1">Code</code>
      <div className="codicon codicon-add"></div>
    </>
  )
}
