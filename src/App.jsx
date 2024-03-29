import logomain from "./assets/images/mainlogo.svg";
import hayoge from "./assets/images/section-1_2.png";
import icon_1 from "./assets/images/Coffee.svg";
import icon_2 from "./assets/images/ClockClockwise.svg";
import icon_3 from "./assets/images/Package.svg";
import section from "./assets/images/section.png";



function App() {
  return (
    <>
    <main>
        <section id="section-1">
            <div class="header">
                <div class="container">
                    <nav>
                        <div class="mainlogo">
                            <img src={logomain} alt="main-logo" />
                            <div class="logo-title"><span class="digital">Digital</span> <span
                                    class="agency">Agency</span></div>
                        </div>

                        <ul class="nav-ul">
                            <li><a href="#">Ana Sayfa</a></li>
                            <li><a href="#">Kurumsal</a></li>
                            <li><a href="#">Neler Yapıyoruz?</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>

                        <div class="buttons">
                            <button class="lang">EN</button>
                            <button class="submit">Müşteri Girişi</button>
                        </div>
                    </nav>
                </div>
            </div>

            <div class="container section-1-title">
                <h1 class="main-h1">İşinize Uygun <span>Tasarım</span> Ve <span>Yazılımlar</span></h1>

                <p class="gradus360">360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin
                    ihtiyaçlarına uygun
                    web tasarım ve web
                    yazılım hizmetleri sunmaktayız.</p>

                <button class="delay-btn">HEMEN TEKLİF ALIN <svg xmlns="http://www.w3.org/2000/svg" width="21"
                        height="20" viewBox="0 0 21 20" fill="none">
                        <g clip-path="url(#clip0_2412_1718)">
                            <path d="M4.875 3.75L11.125 10L4.875 16.25" stroke="white" stroke-opacity="0.8"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.125 3.75L17.375 10L11.125 16.25" stroke="white" stroke-opacity="0.8"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2412_1718">
                                <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg></button>


                <img class="hayoge" src={hayoge} alt="section-1"/>
            </div>
        </section>

        <section id="section-2">
            <div class="container">
                <div class="section-2_wrapper">
                    <div class="title">
                        <h3 class="neler">Neler <span class="yapiyoruz">Yapıyoruz?</span></h3>
                        <h2 class="adim">3 adımda çalışma sürecimiz</h2>
                        <p class="nmagap-p">360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
                            İşletmelerin ihtiyaçlarına uygun web tasarım ve web
                            yazılım hizmetleri sunmaktayız.</p>
                    </div>

                    <div class="card-wrapper-info">
                        <div class="info">
                            <img src={icon_1} class="coffee" alt="coffee" />
                            <h3>Keşif ve Planlama</h3>
                            <p>Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.</p>
                        </div>

                        <div class="info">
                            <img src={icon_3} class="package" alt="package"/>
                            <h3>Tasarım ve Geliştirme</h3>
                            <p>Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.</p>
                        </div>

                        <div class="info">
                            <img src={icon_2} class="clock" alt="clock"/>
                            <h3>Test ve Yayına Alma</h3>
                            <p>Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-3">
            <div class="container">
                <div class="sectino-3_wrapper">
                    <h3 class="urunuz">Ürününüz veya hizmetiniz için en iyisini birlikte yapalım.</h3>

                    <p class="digital-p">360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin
                        ihtiyaçlarına
                        uygun web tasarım ve web
                        yazılım hizmetleri sunmaktayız.</p>

                    <button class="delay-btn-2">HEMEN TEKLİF ALIN <svg xmlns="http://www.w3.org/2000/svg" width="21"
                            height="20" viewBox="0 0 21 20" fill="none">
                            <g clip-path="url(#clip0_2412_1718)">
                                <path d="M4.875 3.75L11.125 10L4.875 16.25" stroke="white" stroke-opacity="0.8"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.125 3.75L17.375 10L11.125 16.25" stroke="white" stroke-opacity="0.8"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2412_1718">
                                    <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg></button>
                </div>
            </div>
        </section>

        <section id="section-4">
            <div class="container">
                <div class="section-2_wrapper">
                    <div class="title">
                        <h3 class="neler">Neler <span class="yapiyoruz">Yapıyoruz?</span></h3>
                        <h2 class="adim">Sizin için neler yapıyoruz?</h2>
                        <p class="nmagap-p">360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
                            İşletmelerin ihtiyaçlarına uygun web tasarım ve web
                            yazılım hizmetleri sunmaktayız.</p>
                    </div>


                    <div class="flex-wrapper">
                        <div class="flex-img">
                            <img src={section} alt="section" />
                        </div>

                        <div class="flex-title">
                            <h2 class="first-info">Sizin için neler yapabiliriz beraber bakalım.</h2>

                            <p class="second-info">Tüm platformlarda sunduğumuz, web tasarım hizmetimiz ile ilgili bilgiler edinelim.</p>

                            <div class="title-card-wrapper">

                                <div class="title-card-other">
                                    <h2>Web Tasarım</h2>
                                    <p>Var olan veya yeni kurulan işletmenizin, modern bir kurumsal kimliğe sahip olması
                                        için web sitesi.</p>
                                </div>

                                <div class="title-card">
                                    <h2>Dijital Pazarlama</h2>
                                    <p>Web sitenizin veya işletmenizin, daha popüler hale gelmesi için çeşitli hizmetler
                                        sunuyoruz.</p>
                                </div>

                                <div class="title-card">
                                    <h2>Prodüksiyon</h2>
                                    <p>İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf çekimi ve prodüksiyon yapıyoruz.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  );
}

export default App;
