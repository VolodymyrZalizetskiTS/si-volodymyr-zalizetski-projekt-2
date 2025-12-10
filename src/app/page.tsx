import Image from "next/image";

export default function Home() {
  return (
    <main className="main-container">
      <div className="sidebar-div">
        <aside className="sidebar">
          <section className="sidebar-icons-top">
            <Image
              className="logo icon"
              src="/Logo_Icon.png"
              width={24}
              height={24}
              alt=""
            />
          </section>
          <div className="sidebar-icons-middle">
            <Image
              className="home icon"
              src="/Home_Icon.png"
              width={24}
              height={24}
              alt=""
            />
            <section className="sidebar-icons">
              <Image
                className="message icon"
                src="/Message_Icon.png"
                width={24}
                height={24}
                alt=""
              />
              <Image
                className="pie icon"
                src="/Pie_Icon.png"
                width={24}
                height={24}
                alt=""
              />
              <Image
                className="people icon"
                src="/People_Icon.png"
                width={24}
                height={24}
                alt=""
              />
            </section>
          </div>
          <section className="sidebar-icons-bottom">
            <Image
              className="settings icon"
              src="/Settings_Icon.png"
              width={24}
              height={24}
              alt=""
            />
          </section>
        </aside>
      </div>
      <main className="main-content">
        <header className="Header">
          <section className="search-bar">
            <Image
              className="search icon"
              src="/Search_Icon.png"
              width={24}
              height={24}
              alt=""
            />
            <p>Search</p>
          </section>
          <section className="header-misc">
            <Image
              className="bell icon"
              src="/Bell_Icon.png"
              width={24}
              height={24}
              alt=""
            />
            <section className="profile">
              <Image
                className="dots icon"
                src="/3Dots_Icon.png"
                width={24}
                height={24}
                alt=""
              />
              <Image
                className="profile-pic"
                src="/Profile_Pic.png"
                width={40}
                height={40}
                alt=""
              />
            </section>
          </section>
        </header>
        <div className="main-middle">
          <section className="numbers">
            <div className="numbers-downloads">
              <div className="numbers-downloads-top">
                <div className="downloads-percentage">
                  <p>+16%</p>
                  <Image
                    className="downloads-icon"
                    src="/Downloads_Icon.png"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <p>DOWNLOADS</p>
              </div>
              <div className="numbers-downloads-bottom">
                <h1>188,611</h1>
              </div>
            </div>
            <div className="numbers-liveorders">
              <div className="numbers-liveorders-top">
                <div className="liveorders-percentage">
                  <p>+8%</p>
                  <Image
                    className="liveorders-icon"
                    src="/Microphone_Icon.png"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <p>LIVE ORDERS</p>
              </div>
              <div className="numbers-liveorders-bottom">
                <h1>45,740</h1>
              </div>
            </div>
          </section>
          <section className="colored-box">
            <div className="colored-box-left">
              <div className="colored-box-left-top">
                <h1>Episode for Jun 05, 2022</h1>
                <p>Published Sep 16, 2022, by Jerry</p>
              </div>
              <p>Check it</p>
            </div>
            <div className="colored-box-right">
              <Image
                className="mainperson-image"
                src="/MainPerson_Image.png"
                width={40}
                height={40}
                alt=""
              />
            </div>
          </section>
        </div>

        <div className="main-bottom">
          <div className="main-bottom-left"></div>
          <div className="main-bottom-right"></div>
        </div>
      </main>
    </main>
  );
}
