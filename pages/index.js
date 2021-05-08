import Head from 'next/head'
import GlobalStyle from '../src/style/global';
import QuestionWindow from '../src/components/QuestionWindow'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <GlobalStyle/>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QuestionWindow/>
    </div>
  )
}
