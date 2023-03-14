import logo from "./logo.svg";
import "./App.scss";

import Nav from "./navbar/Nav";
import { useEffect, useState } from "react";
function App() {
  const [dataFaq, setDataFaq] = useState([]);
  const [boollData, seBboollData] = useState([false, false, false, false, false, false]);
  const dataFaqs = [
    {
      id: 1,
      question: "Apa itu Netflix",
      describes:
        "Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet.Kamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun  semuanya dengan satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!",
    },
    {
      id: 2,

      question: "Berapa biaya berlangganan Netflix?",
      describes:
        "Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp54.000 hingga Rp186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak.",
    },
    {
      id: 3,

      question: "Di mana saya bisa menonton?",
      describes:
        "Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.",
    },
    {
      id: 4,

      question: "Bagaimana cara membatalkannya?",
      describes: "Netflix fleksibel. Tanpa kontrak menyebalkan dan tanpa komitmen. Kamu dapat dengan mudah membatalkan akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau hentikan akunmu kapan pun.",
    },
    {
      id: 5,

      question: "Apa yang bisa ditonton di Netflix?",
      describes: "Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau.",
    },
    {
      id: 6,

      question: "Apakah netflix sesuai bagi anak-anak",
      describes: "Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga di rumah.",
    },
  ];

  useEffect(() => {
    // setTimeout(() => {
    //   dispatch({ type: "UPDATE_NAME" });
    // }, 3000);
    // axios
    //   .get("http://localhost:4000/v1/blog/indexPost")
    //   .then((result) => {
    //     const responseApi = result.data;

    //     // setDataBlog(responseApi.data);
    //     dispatch(setDataBlog(responseApi.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log(boollData);
    setDataFaq(dataFaqs);
    console.log(dataFaqs);
  }, []);

  const handleBool = (index) => {
    const boolDATA = [...boollData];
    boolDATA[index] = !boolDATA[index];

    // boollData[index] = !boollData[index];
    // setDataFaq(dataFaqs);
    seBboollData(boolDATA);

    console.log(boolDATA);
  };
  return (
    <div>
      <Nav />

      <div className="container">
        <div className="kartu-film1">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/d018d3cd-2602-44a4-a9e2-5b66e5fef473/ID-id-20230227-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
          <div className="text-wrapper">
            <h1 className="text-h1">Film, acara TV tak terbatas, dan lebih banyak lagi.</h1>
            <h2 className="text-h2">Tonton dimana pun dan diperangkat apa pun, mulai dari Rp65.000/bulan.</h2>
            <p className="text-h3">Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu</p>
            <div className="email-wrapper">
              <input type="text" placeholder="Alamat email" className="text"></input>
              <button className="button">Mulai {">"} </button>
            </div>
          </div>
        </div>

        <div className="kartu-film2">
          <div className="text-film2">
            <h1>Nikmati di TV-mu.</h1>
            <h2>Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.</h2>
          </div>
          <div className="gambar-text2">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
            {/* <div className="video">
              <video autoPlay loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}
          </div>
        </div>
        <div className="kartu-film3">
          <div className="text-film3">
            <h1>Download acara TV untuk menontonnya secara offline.</h1>
            <h2>Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.</h2>
          </div>
          <div className="gambar-text3">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
          </div>
        </div>
        <div className="kartu-film4">
          <div className="text-film4">
            <h1>Tonton di mana pun.</h1>
            <h2>Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu.</h2>
          </div>
          <div className="gambar-text4">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png" />
          </div>
        </div>
        <div className="kartu-film5">
          <div className="text-film5">
            <h1>Buat profil untuk anak.</h1>
            <h2>Kirim anak-anak untuk bertualang bersama karakter favorit mereka di dunia yang dibuat khusus untuk mereka—gratis dengan keanggotaanmu.</h2>
          </div>
          <div className="gambar-text5">
            <img src="https://occ-0-4566-993.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABQzEb4vjsdT9D7Ptz3RFZUCJhQWl7hhFgeydEmKjJJbrodhfBkjir2wvq3XksYKVPj-TfOZ9rz19ZPPWaUjPA4IfvIwJEyfXVgv_.png?r=fee" />
          </div>
        </div>

        <div className="kartu-film6">
          <div className="text-film6">
            <h1>Tanya Jawab Umum</h1>
          </div>
          {dataFaq.map((datanya) => {
            return (
              <>
                <div className="kotak-text6" onClick={() => handleBool(datanya.id - 1)}>
                  <h1>{datanya.question} </h1>
                  <div className="logo">
                    {boollData[datanya.id - 1] ? (
                      <svg id="thin-x" width="20" height="20" fill="white" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                        <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-1bzktvf e1tuurd64" alt="">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13,2v9h9v2h-9v9h-2v-9h-9v-2h9v-9z" fill="currentColor"></path>
                      </svg>
                    )}
                  </div>
                </div>

                <div className="deskripsi" style={boollData[datanya.id - 1] ? { display: "block" } : { display: "none", animation: "ease-in-out" }}>
                  <p>{datanya.describes} </p>
                </div>
              </>
            );
          })}
          <p className="text-h3">Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu</p>
          <div className="email-wrapper">
            <input type="text" placeholder="Alamat email" className="text"></input>
            <button className="button">Mulai {">"} </button>
          </div>
        </div>
        <div className="kartu-film7">
          <div className="text-1">
            <ul>
              <li>
                {" "}
                <a href="">Tanya jawab</a>
              </li>
              <li>
                {" "}
                <a href="">Akun</a>
              </li>

              <li>
                {" "}
                <a href="">Lowongan Kerja</a>
              </li>

              <li>
                {" "}
                <a href="">Cara Menonton</a>
              </li>
              <li>
                {" "}
                <a href="">Preferensi Cookie</a>
              </li>
              <li>
                {" "}
                <a href="">Uji Kecepatan</a>
              </li>
            </ul>
          </div>
          <div className="text-2">
            <ul>
              <li>
                {" "}
                <a href="">Ketentuan Kartu Hadiah</a>
              </li>
              <li>
                {" "}
                <a href="">Pusat Media</a>
              </li>

              <li>
                {" "}
                <a href="">Tukar Kartu Hadiah</a>
              </li>

              <li>
                {" "}
                <a href="">Ketentuan Penggunaan</a>
              </li>

              <li>
                {" "}
                <a href="">Informasi Perusahaan</a>
              </li>
              <li>
                {" "}
                <a href="">Informasi Legal</a>
              </li>
            </ul>
          </div>
          <div className="text-3">
            <ul>
              <li>
                {" "}
                <a href="">Pusat Bantuan</a>
              </li>
              <li>
                {" "}
                <a href="">Hubungan Investor</a>
              </li>

              <li>
                {" "}
                <a href="">Beli Kartu Hadiah</a>
              </li>

              <li>
                {" "}
                <a href="">Privasi</a>
              </li>
              <li>
                {" "}
                <a href="">Hubungi Kami</a>
              </li>
              <li>
                {" "}
                <a href="">Hanya di Netflix</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </div>
  );
}

export default App;
