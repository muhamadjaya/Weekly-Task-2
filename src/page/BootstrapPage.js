import React from "react";

import BootstrapImage from "../assets/images/bootstrap/index.png";

const BootstrapPage = () => {
  return (
    <>
      <div className="container">
        <h2>7 Bootstrap</h2>
        <h3 className="pt-3">Resume</h3>
        <p>Dalam materi ini, mempelajari:</p>
        <ol>
          <li>Pengertian Bootstrap.</li>
          <div className="paragraph-content">
            Pengertian dari Bootstrap adalah sebuah framework CSS atau kerangka
            kerja CSS yang bersifat open source dan digunakan untuk membuat
            tampilan desain website supaya responsive dan mempercepat waktu
            pengerjaannya. Terdapat beberapa kelebihan yang dimiliki bootstrap
            untuk membangun sebuah halaman website diantaranya : gratis, mudah
            dipelajari untuk pemula, cepat dalam membaangun website, dan
            mendukung tampilan yang responsive.
          </div>
          <li>Penggunaan Boostrap dalam Membuat Website.</li>
          <div className="paragraph-content">
            Sebelum memulai menggunakan Bootstrap terdapat hal-hal yang perlu
            diperhatikan :
            <ul>
              <li className="list-paragraph-bootstrap">
                Untuk dapat menggunakan bootstrap, dapat langsung menuju website
                bootstrap dan unduh secara langsung di website resmi bootstrap.
              </li>
              <li className="list-paragraph-bootstrap">
                Setelah mengunduh bootstrap, langkah selanjutnya adalah bisa
                dengan cara mempelajari example, ataupun mempelajari
                komponen-komponen yang ada pada bootstrap
              </li>
            </ul>
            Untuk menggunakan Bootstrap dapat menggunakan starter template yang
            telah disediakan pada dokumentasi Bootstrap. Kemudian, dapat
            menambahkan beberapa class untuk melakukan customize tampilan
            website sesuai yang diinginkan.
          </div>
          <li>Class-Class Pada Bootstrap.</li>
          <div className="paragraph-content">
            Terdapat banyak sekali class yang disediakan oleh Bootstrap yang
            dapat digunakan untuk mempercantik tampilan website yang akan
            dibuat. Adapun beberapa diantaranya seperti :
            <table className="table table-sm mt-2">
              <thead>
                <tr>
                  <th>
                    <b>Class</b>
                  </th>
                  <th>
                    <b>Keterangan</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>container</td>
                  <td>
                    untuk membungkus blok di dalamnya, sehingga terlihat rapi
                    terhadap ukuran layar
                  </td>
                </tr>
                <tr>
                  <td>row dan col</td>
                  <td>
                    untuk membuat baris dan kolom. Kedua class ini gunakan untuk
                    membuat grid
                  </td>
                </tr>
                <tr>
                  <td>navbar</td>
                  <td>untuk membuat navbar</td>
                </tr>
                <tr>
                  <td>dan class lainnya.</td>
                </tr>
              </tbody>
            </table>
            Dari berbagai class yang ada dan telah disediakan pilihan style yang
            beragam, dapat juga ditambahkan custom CSS yang kita buat sendiri
            baik secara inline, internal, maupun eksternal.
          </div>
        </ol>

        <h3 className="pt-3">Task</h3>
        <ol>
          <li>Membuat Halaman Website Sederhana Menggunakan Bootstrap.</li>
          <div className="paragraph-content">
            Pada task ini diperintahkan untuk membuat sebuah tampilan website
            sederhana yang didalamnya terdapat header, body, dan footer
            menggunakan framework Bootstrap. Kemudian, website tersebut diatur
            supaya responsive diberbagai device.
          </div>
        </ol>

        <h3 className="pt-3">Link :</h3>
        <a href="https://github.com/muhamadjaya/tugas-section7-bootstrap">
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
