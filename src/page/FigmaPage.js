import React from "react";

import FigmaImage from "../assets/images/figma/figma.JPG";

const FigmaPage = () => {
  return (
    <>
      <div className="container">
        <h2>4 Figma</h2>
        <h3 className="pt-3">Resume</h3>
        <p>Dalam materi ini, mempelajari:</p>
        <ol>
          <li>Pengertian Figma</li>
          <div className="paragraph-content">
            Figma adalah editor grafik vektor dan alat prototyping dengan
            keutamaannya yang berbasis web, dengan fitur offline tambahan yang
            diaktifkan oleh aplikasi desktop untuk macOS dan Windows.
          </div>
          <li>Kelebihan dan Kekurangan Figma</li>
          <div className="paragraph-content">
            Kelebihan dari figma yaitu : bersifat gratis, dapat berjalan pada
            Mac dan PC, dapat mengimport file sketsa, dapat mengintegrasikan
            para developer yang terpisah, memiliki library untuk tim secara
            baik, dan dapat integrasi prototype secara maksimal. <br />
            Kekurangan dari figma yaitu : Harus terhubung dengan internet.
          </div>
          <li>Melakukan Desain dengan Figma</li>
          <div className="paragraph-content">
            Terdapat beberapa hal yang harus diperhatikan sebelum mendesain
            dengan figma, diantaranya : melakukan pengaturan pada frame baru
            atau disebut juga artboards, tetapkan grid dan layout columns sesuai
            dengan desain yang akan dibuat, perhatikan layer dan groups, pilih
            vector shapes yang sesuai, import gambar dan lakukan manipulasi
            sesuai keinginan, dan buat typography yang menarik.
          </div>
        </ol>

        <h3 className="pt-3">Task</h3>
        <ol>
          <li>
            Membuat desain UI/UX dan membuat prototype dari desain tersebut.
          </li>
          <div className="paragraph-content">
            Pada task ini, membuat sebuah desain UI/UX dari desain yang dipilih
            pada tugas sebelumnya menggunakan tools Figma dan membuat prototype
            dari desain tersebut.
          </div>
        </ol>

        <h3 className="pt-3">Link :</h3>
        <a href="https://www.figma.com/file/VIijqBWw0zykeNMN8QzGzh/task-figma-%5BMuhamad-Jaya%5D?node-id=2%3A2">
          Figma
        </a>

        <h3 className="pt-3">Screenshots :</h3>
        <div className="task-images figma-img">
          <img src={FigmaImage} alt="tugas git" className="task-img" />
        </div>
      </div>
    </>
  );
};

export default FigmaPage;
