import React from "react";

import HtmlImage1 from "../assets/images/html/index.png";
import HtmlImage2 from "../assets/images/html/form.png";
import HtmlImage3 from "../assets/images/html/welcome.png";

const HtmlPage = () => {
  return (
    <>
      <div className="container">
        <h2>5 HTML</h2>
        <h3 className="pt-3">Resume</h3>
        <p>Dalam materi ini, mempelajari:</p>
        <ol>
          <li>Pengertian HTML serta kegunaannya.</li>
          <div className="paragraph-content">
            HTML (Hypertext Markup Language) adalah sebuah standar yang
            digunakan secara luas untuk menampilkan halaman web. Terdapat
            beberapa kegunaan dari HTML seperti : membuat struktur dari halaman
            website, mengatur tampilan dan isi dari halaman web, membuat tabel
            dengan tag HTML table, membuat form HTML, dan lain-lain.
          </div>
          <li>Dokumentasi dan Struktur HTML.</li>
          <div className="paragraph-content">
            Berikut merupakan dokumentasi pada HTML yang harus diperhatikan :
            <table>
              <tr>
                <td>
                  <code>&lt;!DOCTYPE html&gt;</code>
                </td>
                <td>mendefinisikan dokumen tersebut sebagai HTML5</td>
              </tr>
              <tr>
                <td>
                  <code>&lt;html&gt;</code>
                </td>
                <td>elemen root dari halaman HTML</td>
              </tr>
              <tr>
                <td>
                  <code>&lt;head&gt;</code>
                </td>
                <td>berisi informasi meta tentang dokumen</td>
              </tr>
              <tr>
                <td>
                  <code>&lt;title&gt;</code>
                </td>
                <td>menentukan judul dari dokumen</td>
              </tr>
              <tr>
                <td>
                  <code>&lt;body&gt;</code>
                </td>
                <td>berisi konten halaman yang terlihat</td>
              </tr>
            </table>
            <br />
            Struktur halaman pada HTML : <br />
            <code>
              &lt;!DOCTYPE html&gt;
              <br />
              &lt;html&gt;
              <br />
              &lt;head&gt;
              <br />
              &lt;title&gt;Judul Website &lt;/title&gt;
              <br />
              &lt;/head&gt;
              <br />
              &lt;body&gt;
              <br />
              &lt;p&gt;Konten Website&lt;/p&gt;
              <br />
              &lt;/body&gt;
              <br />
              &lt;/html&gt;
              <br />
            </code>
          </div>
          <li>Macam-macam tag HTML dan fungsinya.</li>
          <div className="paragraph-content">
            <table>
              <tr>
                <td>Tag</td>
                <td>Keterangan</td>
              </tr>
              <tr>
                <td>
                  <code>&lt;div&gt;</code>
                </td>
                <td>untuk membuat sebuah bagian dalam dokumen</td>
              </tr>
              <tr>
                <td>
                  <code>&lt;h1&gt;</code> sampai <code>&lt;h6&gt;</code>
                </td>
                <td>untuk membuat heading</td>
              </tr>
              <tr>
                <td>
                  <code>&lt;a href=&quot; &quot;&gt;</code>
                </td>
                <td>untuk membuat hyperlink</td>
              </tr>
              <tr>
                <td>
                  <code>&lt;img src=&quot; &quot;&gt;</code>
                </td>
                <td>untuk menyisipkan gambar</td>
              </tr>
              <tr>
                <td colspan="2">dan tag lainnya.</td>
              </tr>
            </table>
          </div>
        </ol>

        <h3 className="pt-3">Task</h3>
        <ol>
          <li>
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
        <a href="https://github.com/muhamadjaya/react_muhamad-jaya/tree/main/05_HTML/praktikum">
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
