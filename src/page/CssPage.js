import React from "react";

import CssImage1 from "../assets/images/css/file1.png";
import CssImage2 from "../assets/images/css/file2.png";

const CssPage = () => {
  return (
    <>
      <div className="container">
        <h2>6 CSS</h2>
        <h3 className="pt-3">Resume</h3>
        <p>Dalam materi ini, mempelajari:</p>
        <ol>
          <li>Pengertian CSS serta fungsinya.</li>
          <div className="paragraph-content">
            CSS adalah kependekan dari Cascading Style Sheet. CSS adalah suatu
            kode pemrograman yang berfungsi untuk mendekorasi gaya tampilan
            halaman web supaya lebih menarik. Berikut merupakan beberapa fungsi
            dari CSS : dapat menghias halaman web. (Seperti mengatur color,
            size, font, background, width, height, dan lainnya), dapat mengatur
            posisi pada halaman web. (Misalnya mengatur float, align, display,
            position, dan lainnya), dan lain-lain.
          </div>
          <li>Menambahkan file CSS.</li>
          <div className="paragraph-content">
            Terdapat 3 cara untuk menambahkan file CSS ke dalam HTML, yaitu :
            <ol>
              <li className="list-paragraph">
                External CSS Contoh penulisan syntax external CSS :
              </li>
              <code className="paragraph-content">
                &lt;link rel=&quot;stylesheet&quot; href=&quot;main.css&quot;
                &gt;
              </code>
              <p className="css-content-point2">
                Syntax tersebut disisipkan kedalam tag &lt;head&gt; pada HTML.
                Dan ekstensi untuk file CSS adalah .css.
              </p>
              <li className="list-paragraph">
                Internal CSS Contoh penulisan internal CSS :
              </li>
              <code className="paragraph-content">
                &lt;style&gt; body &#10100; background-color: #FFFFFF; &#10101;
                h1 &#10100; color: #f47523; margin-left: 70px; &#10101;
              </code>
              <p className="css-content-point2">
                Syntax ini dapat digunakan di dalam satu file HTML.
                Didefinisikan di dalam elemen &lt;style&gt;, di dalam bagian
                &lt;head&gt; atau di dalam bagian &lt;body&gt;.
              </p>
              <li className="list-paragraph">
                Inline CSS Contoh penulisan inline CSS :
              </li>
              <code className="paragraph-content">
                &lt;h1 style=&quot;color: #19355f;&quot;Hello World&lt;/h1&gt;
              </code>
              <p className="css-content-point2">
                Syntax tersebut disisipkan kedalam tag &lt;head&gt; pada HTML.
                Dan ekstensi untuk file CSS adalah .css.
              </p>
            </ol>
          </div>
          <li>Penggunaan CSS Selector.</li>
          <div className="paragraph-content">
            CSS Selector adalah pola yang digunakan untuk memilih element, yang
            ingin di styling. Penanda HTML ke dalam CSS. Dapat menggunakan
            selector ID dan Class. <br />
            ID → (#) Setiap elemen hanya dapat memiliki satu tag id. Dalam satu
            halaman tidak boleh ada dua penamaan id yang berbeda. <br />
            Class → (.) Tag class dengan nama yang sama dapat dipakai
            berulang-ulang pada satu halaman. Satu elemen boleh memiliki lebih
            dari satu Class yang berbeda-beda.
          </div>
        </ol>

        <h3 className="pt-3">Task</h3>
        <ol>
          <li>
            Mengubah tampilan dari file 1.html dan membuat file 2.html kemudian
            mendesain file tersebut.
          </li>
          <div className="paragraph-content">
            Pada task ini diperintahkan untuk mengubah sebuah tampilan dari file
            1.html menjadi tampilan yang sesuai dengan beberapa ketentuan yaitu
            menggunakan font-family: 'Slabo 27px', serif; dan font-size: 20px;.
            Serta, membuat tampilan website dengan menambahkan header dan konten
            yang responsif.
          </div>
        </ol>

        <h3 className="pt-3">Link :</h3>
        <a href="https://github.com/muhamadjaya/tugas-section6-css">CSS</a>

        <h3 className="pt-3">Screenshots :</h3>
        <div className="task-images css-img">
          <img src={CssImage1} alt="tugas git" className="task-img" />
        </div>
        <div className="task-images css-img">
          <img src={CssImage2} alt="tugas git" className="task-img" />
        </div>
      </div>
    </>
  );
};

export default CssPage;
