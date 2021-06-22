import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Resume.module.css"

export default function Resume() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Glimm</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image src="/resume-basic.png" width="850px" height="1100px" />

        {/* <embed src="resume-basic.pdf" width="850px" height="1100px" /> */}
      </main>
    </div>
  )
}
