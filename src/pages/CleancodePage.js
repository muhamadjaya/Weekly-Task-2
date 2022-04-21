import React from "react";

import CodeImage1 from "../assets/images/clean-code/analysis.jpg";
import CodeImage2 from "../assets/images/clean-code/rewrite.jpg";

const CleancodePage = () => {
  return (
    <>
      <div className="container">
        <h2 className="head-title">9 Clean Code</h2>
        <h3 className="pt-3">Resume</h3>
        <p>Dalam materi ini, mempelajari:</p>
        <ol>
          <li className="list-content">Pengertian Clean Code.</li>
          <div className="paragraph-content">
            Clean Code adalah istilah untuk kode yang mudah dibaca, difahami dan
            diubah oleh programmer. Alasan kenapa clean code harus diterapkan :
            Work Collaboration, Feature Development, dan Faster Development.
          </div>
          <li className="list-content">Karakteristik Clean Code.</li>
          <div className="paragraph-content">
            Terdapat beberapa karakteristik dari clean code, yaitu : mudah
            difahami, mudah dieja dan dicari, singkat namun mendeskripsikan
            konteks, konsisten, hindari penambahan konteks yang tidak perlu,
            komentar, good function, gGunakan konvensi, dan formatting.
          </div>
          <li className="list-content">Prinsip-Prinsip Clean Code.</li>
          <div className="paragraph-content">
            Beberapa prinsip yang diterapkan pada clean code, seperti :
            <ul>
              <li className="list-paragraph-clean-code">
                KISS (Keep It So Simple) yaitu, hindari membuat fungsi yang
                dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek
                fungsi C, dan sebagainya.
              </li>
              <li className="list-paragraph-clean-code">
                DRY (Don't Repeat Yourself) yaitu, duplikasi code terjadi karena
                sering copy paste. Untuk menghindari duplikasi code buatlah
                fungsi yang dapat digunakan secara berulang-ulang.
              </li>
            </ul>
          </div>
        </ol>

        <h3 className="pt-3">Task</h3>
        <ol>
          <li className="list-content">Melakukan Analysis dan Rewrite Code.</li>
          <div className="paragraph-content">
            Pada task ini, ditugaskan untuk menganalisis terhadap kesalahan
            penulisan yang terdapat pada suatu kode dan menulis ulang kode
            supaya lebih terbaca dan rapih.
          </div>
        </ol>

        <h3 className="pt-3">Link :</h3>
        <a
          href="https://github.com/muhamadjaya/tugas-section9-clean-code.git"
          className="link-task"
        >
          Clean Code
        </a>

        <h3 className="pt-3">Screenshots :</h3>
        <div className="task-images cleancode-img">
          <img src={CodeImage1} alt="tugas clean code" className="task-img" />
        </div>
        <div className="task-images cleancode-img">
          <img src={CodeImage2} alt="tugas clean code" className="task-img" />
        </div>
      </div>
    </>
  );
};

export default CleancodePage;
