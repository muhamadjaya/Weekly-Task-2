import React from "react";

import JavascriptImage1 from "../assets/images/javascript/soalno1.png";
import JavascriptImage2 from "../assets/images/javascript/soalno3to6.png";

const JavascriptPage = () => {
  return (
    <>
      <div className="container">
        <h2 className="head-title">8 Javascript Refreshment</h2>
        <h3 className="pt-3">Resume</h3>
        <p>Dalam materi ini, mempelajari:</p>
        <ol>
          <li className="list-content">
            Pengertian Javascript dan Alasan Untuk Mempelajarinya.
          </li>
          <div className="paragraph-content">
            Javascript adalah bahasa pemrograman yang high-level, scripting,
            untyped dan interpreted. Terdapat beberapa alasan untuk mempelajari
            javascript : javascript merupakan bahasa pemrograman tingkat tinggi,
            diciptakan supaya dapat berinteraksi dengan web browser, tidak
            berpengaruh pada tipe data, dan bahasanya fleksibel dan mudah untuk
            diuji.
          </div>
          <li className="list-content">
            Declaration dan Scope pada Javascript.
          </li>
          <div className="paragraph-content">
            Declaration adalah proses pembuatan variabel untuk menyimpan data.
            Variabel ada 3 : var (umumnya, kita jarang memakai ini), let
            (digunakan saat membutuhkan nilai yang dapat diubah), dan const
            (digunakan saat membutuhkan nilai yang tidak bisa di "reasign").
            <br />
            Saat mendeklarasikan variabel const, maka harus membri nilai pada
            variabel tersebut. Proses redeclaration hanya dapat dilakukan pada
            var, sedangkan let dan const tidak dapat dilakukan redeclaratio.
            Proses reassignment dapat dilakukan pada var dan let, sedangkan
            const tidak dapat dilakukan reassignment. Scooping adalah menentukan
            dimana variabel, fungsi, dan objek diatur dan dapat diakses dalam
            kode kita. Ini berarti ruang lingkup variabel dikendalikan oleh
            lokasi deklarasi variabel.
            <br />
            Scoope terdiri dari 3 bagian : Global (dapat diakses oleh semua
            bagian kode), Function (hanya dapat diakses didalam area scope
            function itu sendiri), dan Block (hanya dapat diakses oleh bagian
            block tersebut)
          </div>
          <li className="list-content">Function dan Class.</li>
          <div className="paragraph-content">
            Function di dalam javascript adalah sebuah objek. Karena memiliki
            properti dan method. Function digunakan untuk melakukan serangkaian
            komputasi / prosedur yang dapat digunakan berulang kali. Class
            adalah prototype dari suatu object yang akan dibuat.
          </div>
        </ol>

        <h3 className="pt-3">Task</h3>
        <ol>
          <li className="list-content">
            Membuat kode program yang sesuai dengan ketentuan.
          </li>
          <div className="paragraph-content">
            Mengambil index ke 2 di dalam array kemudian menampilkannya pada
            console. Mengubah kode sehingga menampilkan statement yang terdapat
            pada block if. Memanggil sebuah fungsi yang telah dideklarasikan.
            Mengubah kode sehingga menampilkan output yang sesuai ketentuan.
          </div>
          <li className="list-content">Menjelaskan suatu kode program.</li>
          <div className="paragraph-content">
            Menjelaskan kenapa block if tidak dapat tampil. Menjelaskan kenapa
            kode pada baris 26 dapat menyebabkan error. Menjelaskan jika kode
            pada baris 26 diberi komentar apakah baris 28 dapat dijalankan.
          </div>
          <li className="list-content">Destructuring suatu kode program.</li>
          <div className="paragraph-content">
            Melakukan destructuring pada sebuah variabel yang bertipe array.
          </div>
          <li className="list-content">
            Mengkonversi value dari suatu variable.
          </li>
          <div className="paragraph-content">
            Mengubah karakter yang terdapat pada nilai dari sebuah variabel.
          </div>
          <li className="list-content">
            Mengambil dan mengalikan nilai array.
          </li>
          <div className="paragraph-content">
            Memanfaatkan built-in function javascript.
          </div>
          <li className="list-content">
            Mengambil dan mengalikan nilai array.
          </li>
          <div className="paragraph-content">
            Membulatkan nilai pada sebuah array.
          </div>
        </ol>

        <h3 className="pt-3">Link :</h3>
        <a
          href="https://github.com/muhamadjaya/tugas-section8-javascript.git"
          className="link-task"
        >
          Javascript Refreshment
        </a>

        <h3 className="pt-3">Screenshots :</h3>
        <div className="task-images js-img">
          <img src={JavascriptImage1} alt="tugas git" className="task-img" />
        </div>
        <div className="task-images js-img">
          <img src={JavascriptImage2} alt="tugas git" className="task-img" />
        </div>
      </div>
    </>
  );
};

export default JavascriptPage;
