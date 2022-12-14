import Head from 'next/head';
import Navbar from 'shared/components/Navbar';
import styles from './MainLayout.module.css'

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />


      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}