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

      <main className={styles.main}>
        <section>
          <div
            className={styles["row"]}
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 className={styles["name"]}>Mark Glimm</h1>
            <div
              className={styles["p"]}
              style={{ marginRight: "32px", marginTop: "32px" }}
            >
              <a href="tel:+12505754910" target="blank">
                (250) 575-4910
              </a>
              <br />
              <a href="mailto:mark@markglimm.ca" target="blank">
                mark@markglimm.ca
              </a>
              <div className={styles["row"]}>
                <a href="http://gitlab.com/markglimm" target="blank">
                  <img
                    src="/images/gitlab-logo-1-color-white-rgb.png"
                    height="40px"
                    style={{ marginLeft: "-10px" }}
                  />
                </a>
                <a href="http://github.com/glimmbo" target="blank">
                  <img
                    src="/images/GitHub_Logo_White.png"
                    height="40px"
                    style={{ padding: "3px" }}
                  />
                </a>
                <a href="http://linkedin.com/in/markglimm" target="blank">
                  <img
                    src="/images/white-linkedin-icon-transparent-background-28.jpeg"
                    height="40px"
                    style={{ padding: "8px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles["row"]} id="2" style={{ marginLeft: "32px" }}>
            <div className={styles["info"]}>
              <h3 className={styles["developer"]}>
                Software
                <br />
                Developer
              </h3>
            </div>

            <p className={styles["p"]} style={{ padding: "1em" }}>
              I like to creatively wield technology as a tool to connect people
              and turn ideas into real value.
            </p>
          </div>
        </section>
        <section>
          <h2 className={styles["section-heading"]}>Software Experience</h2>
          {/* timeline, hover animations, carousel on click */}
          <ul className={styles["row"]} style={{ padding: 0 }}>
            <li className={styles.exp}>
              <h3 className={styles["exp-heading"]}>Urban Farm</h3>
              <p className={styles["p-item"]} className={styles["p"]}>
                Created an app to help track plantings and yields
              </p>
            </li>
            <li className={styles.exp}>
              <h3 className={styles["exp-heading"]}>CodeCore</h3>
              <p className={styles["p-item"]} className={styles["p"]}>
                Teaching assistant for to bootcamp students
              </p>
            </li>
            <li className={styles.exp}>
              <h3 className={styles["exp-heading"]}>Freelance</h3>
              <p className={styles["p-item"]} className={styles["p"]}>
                TAGG: Vimeo linked NextJS site Tourism advertisements
              </p>
            </li>
            <li className={styles.exp}>
              <h3 className={styles["exp-heading"]}>HonestDoor.com</h3>
              <p className={styles["p-item"]} className={styles["p"]}>
                Designed and created a production cloud data pipeline,
                refactored a React application
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2 className={styles["section-heading"]}>Projects</h2>
          {/* repos, commits */}
        </section>
        <section>
          <h2 className={styles["section-heading"]}>Education</h2>
          {/* hover, popout diplomas */}
          <ul>
            <li>
              <h3 className={styles["exp-heading"]}>
                University of British Columbia
              </h3>
              <p className={styles.p}>Bachelor of Arts, Economics</p>
            </li>
            <li>
              <h3 className={styles["exp-heading"]}>CodeCore College</h3>
              <p className={styles.p}>Full Stack Web Development Diploma</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
