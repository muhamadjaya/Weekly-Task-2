import React from "react";

import HtmlImage1 from "../assets/images/html/index.png";
import HtmlImage2 from "../assets/images/html/form.png";
import HtmlImage3 from "../assets/images/html/welcome.png";

const HtmlPage = () => {
  return (
    <>
      <div className="container">
        <h2 className="head-title">5 HTML</h2>
        <h3 className="pt-3">Resume</h3>
        <p>Dalam materi ini, mempelajari:</p>
        <ol>
          <li className="list-content">Pengertian HTML.</li>
          <div className="paragraph-content">
            HTML (Hypertext Markup Language) adalah sebuah standar yang
            digunakan secara luas untuk menampilkan halaman web.
          </div>
          <li className="list-content">Fungsi HTML.</li>
          <div className="paragraph-content">
            Terdapat beberapa fungsi dari HTML seperti : membuat struktur dari
            halaman website, mengatur tampilan dan isi dari halaman web, membuat
            tabel dengan tag HTML table, membuat form HTML, dan lain-lain.
          </div>
          <li className="list-content">Macam-macam tag HTML dan fungsinya.</li>
          <div className="paragraph-content">
            Ada banyak sekali tag HTML yang dapat digunakan untuk merancang
            suatu website seperti : &lt;div&gt; &lt;/div&gt; untuk membuat
            sebuah bagian dalam dokumen, &lt;h1&gt; hingga &lt;h6&gt; untuk
            membuat heading, &lt;p&gt; &lt;/p&gt; untuk membuat paragraf, dan
            lainnya.
          </div>
        </ol>

        <h3 className="pt-3">Task</h3>
        <ol>
          <li className="list-content">
            Membuat beberapa file HTML dengan nama index.html, form.html, dan
            welcome.html.
          </li>
          <div className="paragraph-content">
            Pada task ini, membuat 3 buah halaman web sederhana. Pada halaman
            index.html akan menampilkan halaman utama dan terdapat link untuk
            melakukan sign up untuk menuju ke halaman form.html, kemudian
            apabila telah mengisi form dan menekan tombol submit pada halaman
            form.html kemudian akan diarahkan menuju ke halaman welcome.html.
          </div>
        </ol>

        <h3 className="pt-3">Link :</h3>
        <a
          href="https://github.com/muhamadjaya/react_muhamad-jaya/tree/main/05_HTML/praktikum"
          className="link-task"
        >
          HTML
        </a>

        <h3 className="pt-3">Screenshots :</h3>
        <div className="task-images figma-img">
          <img src={HtmlImage1} alt="index" className="task-img" />
        </div>
        <div className="task-images figma-img">
          <img src={HtmlImage2} alt="form" className="task-img" />
        </div>
        <div className="task-images figma-img">
          <img src={HtmlImage3} alt="welcome" className="task-img" />
        </div>
      </div>
    </>
  );
};

export default HtmlPage;
