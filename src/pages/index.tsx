import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'React Avançado!' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <h1>{title}</h1>
      </main>
      <footer></footer>
    </div>
  )
}
