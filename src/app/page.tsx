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
          <div className="main-bottom-left">
            <h1>Top Performing Products</h1>
            <div className="main-bottom-left-left">
              <p>200</p>
              <p>150</p>
              <p>100</p>
              <p>50</p>
              <p>0</p>
            </div>
            <div className="main-bottom-left-right">
              <div className="main-bottom-left-right-top">
                <div className="main-bottom-left-right-top-column">
                  <div className="main-bottom-left-right-top-column-purple-top"></div>
                  <div className="main-bottom-left-right-top-column-purple-bottom"></div>
                </div>
                <div className="main-bottom-left-right-top-column">
                  <div className="main-bottom-left-right-top-column-cyan-top"></div>
                  <div className="main-bottom-left-right-top-column-cyan-bottom"></div>
                </div>
                <div className="main-bottom-left-right-top-column">
                  <div className="main-bottom-left-right-top-column-pink-top"></div>
                  <div className="main-bottom-left-right-top-column-pink-bottom"></div>
                </div>
                <div className="main-bottom-left-right-top-column">
                  <div className="main-bottom-left-right-top-column-orange-top"></div>
                  <div className="main-bottom-left-right-top-column-orange-bottom"></div>
                </div>
                <div className="main-bottom-left-right-top-column">
                  <div className="main-bottom-left-right-top-column-yellow-top"></div>
                  <div className="main-bottom-left-right-top-column-yellow-bottom"></div>
                </div>
              </div>
              <div className="main-bottom-left-right-bottom">
                <p>Stoic</p>
                <p>Weekly Show</p>
                <p>Stereo Pro</p>
                <p>Run Podcast</p>
                <p>Morning Brew</p>
              </div>
            </div>
          </div>
          <div className="main-bottom-right">
            <div className="main-bottom-right-top">
              <p className="main-bottom-right-top-1">Top Podcasters</p>
              <p className="main-bottom-right-top-2">Top Episodes</p>
            </div>
            <div className="main-bottom-right-bottom">
              <div className="profile-item">
                <div className="profile-pfp">
                  <Image
                    className="person1"
                    src="/person1.png"
                    width={70}
                    height={70}
                    alt=""
                  />
                </div>
                <div className="profile-info">
                  <h2>Earth Tones</h2>
                  <p>Wade Warren</p>
                </div>
                <div className="profile-date">2d</div>
              </div>
              <div className="profile-item">
                <div className="profile-pfp">
                  <Image
                    className="person2"
                    src="/person2.png"
                    width={70}
                    height={70}
                    alt=""
                  />
                </div>
                <div className="profile-info">
                  <h2>Around the World</h2>
                  <p>Guy Hawkings</p>
                </div>
                <div className="profile-date">2d</div>
              </div>
              <div className="profile-item">
                <div className="profile-pfp">
                  <Image
                    className="person3"
                    src="/person3.png"
                    width={70}
                    height={70}
                    alt=""
                  />
                </div>
                <div className="profile-info">
                  <h2>World of Kids</h2>
                  <p>Adam Thome</p>
                </div>
                <div className="profile-date">2d</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
