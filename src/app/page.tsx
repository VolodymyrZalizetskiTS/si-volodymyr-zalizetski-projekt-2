import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container">
      <input
        type="checkbox"
        id="sidebar-toggle"
        className="sidebar-toggle"
        aria-hidden="true"
      />
      <label
        htmlFor="sidebar-toggle"
        className="burger-button"
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </label>
      <label
        htmlFor="sidebar-toggle"
        className="sidebar-overlay"
        aria-hidden="true"
      ></label>
      <div className="sidebar-div" aria-label="Primary navigation">
        <nav className="sidebar" aria-label="Dashboard links">
          <section className="sidebar-icons-top">
            <Image
              className="logo icon"
              src="/Logo_Icon.png"
              width={24}
              height={24}
              alt="logo"
            />
          </section>
          <section className="sidebar-icons-middle">
            <Image
              className="home icon"
              src="/Home_Icon.png"
              width={24}
              height={24}
              alt="home"
            />
            <section className="sidebar-icons">
              <Image
                className="message icon"
                src="/Message_Icon.png"
                width={24}
                height={24}
                alt="message"
              />
              <Image
                className="pie icon"
                src="/Pie_Icon.png"
                width={24}
                height={24}
                alt="pie"
              />
              <Image
                className="people icon"
                src="/People_Icon.png"
                width={24}
                height={24}
                alt="people"
              />
            </section>
          </section>
          <section className="sidebar-icons-bottom">
            <Image
              className="settings icon"
              src="/Settings_Icon.png"
              width={24}
              height={24}
              alt="settings"
            />
          </section>
        </nav>
      </div>
      <section className="main-content">
        <header className="Header">
          <section className="search-bar">
            <Image
              className="search icon"
              src="/Search_Icon.png"
              width={24}
              height={24}
              alt="search"
            />
            <p>Search</p>
          </section>
          <section className="header-misc">
            <Image
              className="bell icon"
              src="/Bell_Icon.png"
              width={24}
              height={24}
              alt="bell"
            />
            <section className="profile">
              <Image
                className="dots icon"
                src="/3Dots_Icon.png"
                width={24}
                height={24}
                alt="dots"
              />
              <Image
                className="profile-pic"
                src="/Profile_Pic.png"
                width={40}
                height={40}
                alt="pfp"
              />
            </section>
          </section>
        </header>
        <section className="main-middle">
          <section className="numbers">
            <article className="numbers-downloads">
              <header className="numbers-downloads-top">
                <section className="downloads-percentage">
                  <p>+16%</p>
                  <Image
                    className="downloads-icon"
                    src="/Downloads_Icon.png"
                    width={40}
                    height={40}
                    alt="downloads"
                  />
                </section>
                <p>DOWNLOADS</p>
              </header>
              <footer className="numbers-downloads-bottom">
                <h1>188,611</h1>
              </footer>
            </article>
            <article className="numbers-liveorders">
              <header className="numbers-liveorders-top">
                <section className="liveorders-percentage">
                  <p>+8%</p>
                  <Image
                    className="liveorders-icon"
                    src="/Microphone_Icon.png"
                    width={40}
                    height={40}
                    alt="liveorders"
                  />
                </section>
                <p>LIVE ORDERS</p>
              </header>
              <footer className="numbers-liveorders-bottom">
                <h1>45,740</h1>
              </footer>
            </article>
          </section>
          <article className="colored-box">
            <section className="colored-box-left">
              <header className="colored-box-left-top">
                <h1>Episode for Jun 05, 2022</h1>
                <p>Published Sep 16, 2022, by Jerry</p>
              </header>
              <p>Check it</p>
            </section>
            <section className="colored-box-right">
              <Image
                className="mainperson-image"
                src="/MainPerson_Image.png"
                width={40}
                height={40}
                alt="mainperson"
              />
            </section>
          </article>
        </section>

        <section className="main-bottom">
          <section className="main-bottom-left">
            <h1>Top Performing Podcasts</h1>
            <section className="chart-wrapper" aria-hidden="true">
              <aside className="chart-axis">
                <p>200</p>
                <p>150</p>
                <p>100</p>
                <p>50</p>
                <p>0</p>
              </aside>
              <section className="chart-area">
                <article className="chart-column">
                  <section className="bar-stack">
                    <aside className="chart-tooltip" aria-hidden="true">
                      <section className="chart-tooltip-text">
                        <p className="chart-tooltip-title">Downloads</p>
                        <p className="chart-tooltip-value">201</p>
                      </section>
                      <span className="chart-tooltip-dot" />
                    </aside>
                    <span
                      className="bar-segment"
                      style={{ backgroundColor: "#dfd3ff", height: "110px" }}
                    ></span>
                    <span
                      className="bar-segment"
                      style={{ backgroundColor: "#9d7adaff", height: "100px" }}
                    ></span>
                  </section>
                  <p className="chart-label">Stoic</p>
                </article>
                <article className="chart-column">
                  <section className="bar-stack">
                    <aside className="chart-tooltip" aria-hidden="true">
                      <section className="chart-tooltip-text">
                        <p className="chart-tooltip-title">Downloads</p>
                        <p className="chart-tooltip-value">186</p>
                      </section>
                      <span className="chart-tooltip-dot" />
                    </aside>
                    <span
                      className="bar-segment"
                      style={{ backgroundColor: "#c6dbe7ff", height: "90px" }}
                    ></span>
                    <span
                      className="bar-segment"
                      style={{ backgroundColor: "#1c84c0ff", height: "80px" }}
                    ></span>
                  </section>
                  <p className="chart-label">Weekly Show</p>
                </article>
                <article className="chart-column">
                  <section className="bar-stack">
                    <aside className="chart-tooltip" aria-hidden="true">
                      <section className="chart-tooltip-text">
                        <p className="chart-tooltip-title">Downloads</p>
                        <p className="chart-tooltip-value">152</p>
                      </section>
                      <span className="chart-tooltip-dot" />
                    </aside>
                    <span
                      className="bar-segment"
                      style={{ backgroundColor: "#ffe3ef", height: "70px" }}
                    ></span>
                    <span
                      className="bar-segment"
                      style={{ backgroundColor: "#ff58b2", height: "60px" }}
                    ></span>
                  </section>
                  <p className="chart-label">Stereo Pro</p>
                </article>
                <article className="chart-column">
                  <section className="bar-stack">
                    <aside className="chart-tooltip" aria-hidden="true">
                      <section className="chart-tooltip-text">
                        <p className="chart-tooltip-title">Downloads</p>
                        <p className="chart-tooltip-value">118</p>
                      </section>
                      <span className="chart-tooltip-dot" />
                    </aside>
                    <span
                      className="bar-segment"
                      style={{ backgroundColor: "#ffdccb", height: "60px" }}
                    ></span>
                    <span
                      className="bar-segment"
                      style={{ backgroundColor: "#ff5e24", height: "50px" }}
                    ></span>
                  </section>
                  <p className="chart-label">Run Podcast</p>
                </article>
                <article className="chart-column">
                  <section className="bar-stack">
                    <aside className="chart-tooltip" aria-hidden="true">
                      <section className="chart-tooltip-text">
                        <p className="chart-tooltip-title">Downloads</p>
                        <p className="chart-tooltip-value">96</p>
                      </section>
                      <span className="chart-tooltip-dot" />
                    </aside>
                    <span
                      className="bar-segment"
                      style={{ backgroundColor: "#fff2cc", height: "50px" }}
                    ></span>
                    <span
                      className="bar-segment"
                      style={{ backgroundColor: "#f9b11a", height: "40px" }}
                    ></span>
                  </section>
                  <p className="chart-label">Morning Brew</p>
                </article>
              </section>
            </section>
          </section>
          <aside className="main-bottom-right">
            <header className="main-bottom-right-top">
              <p className="main-bottom-right-top-1">Top Podcasters</p>
              <p className="main-bottom-right-top-2">Top Episodes</p>
            </header>
            <section className="main-bottom-right-bottom">
              <article className="profile-item">
                <section className="profile-pfp">
                  <Image
                    className="person1"
                    src="/person1.png"
                    width={70}
                    height={70}
                    alt="person1"
                  />
                </section>
                <section className="profile-info">
                  <h2>Earth Tones</h2>
                  <p>Wade Warren</p>
                </section>
                <footer className="profile-date">2d</footer>
              </article>
              <article className="profile-item">
                <section className="profile-pfp">
                  <Image
                    className="person2"
                    src="/person2.png"
                    width={70}
                    height={70}
                    alt="person2"
                  />
                </section>
                <section className="profile-info">
                  <h2>Around the World</h2>
                  <p>Guy Hawkings</p>
                </section>
                <footer className="profile-date">2d</footer>
              </article>
              <article className="profile-item">
                <section className="profile-pfp">
                  <Image
                    className="person3"
                    src="/person3.png"
                    width={70}
                    height={70}
                    alt="person3"
                  />
                </section>
                <section className="profile-info">
                  <h2>World of Kids</h2>
                  <p>Adam Thome</p>
                </section>
                <footer className="profile-date">2d</footer>
              </article>
            </section>
          </aside>
        </section>
      </section>
    </div>
  );
}
