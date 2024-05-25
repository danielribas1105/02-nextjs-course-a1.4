
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>{`
        * {
          font-family: Sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
