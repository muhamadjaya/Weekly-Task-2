import React from "react";

import BootstrapImage from "../assets/images/bootstrap/index.png";

const BootstrapPage = () => {
  return (
    <>
      <div className="container">
        <h2 className="head-title">7 Bootstrap</h2>
        <h3 className="pt-3">Resume</h3>
        <p>Dalam materi ini, mempelajari:</p>
        <ol>
          <li className="list-content">Pengertian Bootstrap.</li>
          <div className="paragraph-content">
            Pengertian dari Bootstrap adalah sebuah framework CSS atau kerangka
            kerja CSS yang bersifat open source dan digunakan untuk membuat
            tampilan desain website supaya responsive dan mempercepat waktu
            pengerjaannya.
          </div>
          <li className="list-content">Kelebihan Yang Dimiliki Bootstrap</li>
          <div className="paragraph-content">
            Terdapat beberapa kelebihan yang dimiliki bootstrap untuk membangun
            sebuah halaman website diantaranya : gratis, mudah dipelajari untuk
            pemula, cepat dalam membaangun website, dan mendukung tampilan yang
            responsive.
          </div>
          <li className="list-content">
            Penggunaan Boostrap dalam Membuat Website.
          </li>
          <div className="paragraph-content">
            Sebelum memulai menggunakan Bootstrap terdapat hal-hal yang perlu
            diperhatikan : Untuk dapat menggunakan bootstrap, dapat langsung
            menuju website bootstrap dan unduh secara langsung di website resmi
            bootstrap. Setelah mengunduh bootstrap, langkah selanjutnya adalah
            bisa dengan cara mempelajari example, ataupun mempelajari
            komponen-komponen yang ada pada bootstrap
          </div>
        </ol>

        <h3 className="pt-3">Task</h3>
        <ol>
          <li className="list-content">
            Membuat Halaman Website Sederhana Menggunakan Bootstrap.
          </li>
          <div className="paragraph-content">
            Pada task ini diperintahkan untuk membuat sebuah tampilan website
            sederhana yang didalamnya terdapat header, body, dan footer
            menggunakan framework Bootstrap. Kemudian, website tersebut diatur
            supaya responsive diberbagai device.
          </div>
        </ol>

        <h3 className="pt-3">Link :</h3>
        <a
          href="https://github.com/muhamadjaya/tugas-section7-bootstrap"
          className="link-task"
        >
          Bootstrap
        </a>

        <h3 className="pt-3">Screenshots :</h3>
        <div className="task-images figma-img">
          <img
            src={BootstrapImage}
            alt="tugas bootstrap"
            className="task-img"
          />
        </div>
      </div>
    </>
  );
};

export default BootstrapPage;
