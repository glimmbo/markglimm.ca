import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Glimm</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* button, changes fonts, colours and: */}
        <section>
          <h1>Mark Glimm</h1>
          <h3>Software Developer</h3>
          <div>
            250-575-4910 Vancouver, BC
            <br />
            markglimm@gmail.com
            <br />
            markglimm.ca
          </div>
          {/* animated */}
          {/* 'creatively' highlighted w/ animation */}
          <p>
            I like to creatively wield technology as a tool to connect people
            and turn ideas into real value.
          </p>
        </section>
        <section>
          <h2>Development Experience</h2>
          {/* timeline, hover animations, carousel on click */}
          <ul>
            <li>
              <h3>Urban Farm</h3>
              <p>Created an app to help track plantings and yields</p>
            </li>
            <li>
              <h3>CodeCore</h3>
              <p>Teaching assistant for to bootcamp students</p>
            </li>
            <li>
              <h3>Freelance</h3>
              <p>TAGG: Vimeo linked NextJS site Tourism advertisements</p>
            </li>
            <li>
              <h3>HonestDoor.com</h3>
              <p>
                Designed and created a production cloud data pipeline,
                refactored a React application
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          {/* repos, commits */}
        </section>
        <section>
          <h2>Education</h2>
          {/* hover, popout diplomas */}
          <ul>
            <li>
              <h3>University of British Columbia</h3>
              <p>Bachelor of Arts, Economics</p>
            </li>
            <li>
              <h3>CodeCore College</h3>
              <p>Full Stack Web Development Diploma</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
