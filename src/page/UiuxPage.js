import React from "react";
import UiuxImage1 from "../assets/images/ui-ux/desain-1.JPG";
import UiuxImage2 from "../assets/images/ui-ux/desain-2.JPG";
import UiuxImage3 from "../assets/images/ui-ux/desain-3.JPG";

const UiuxPage = () => {
  return (
    <>
      {/* <div className="uiux">Uiux</div>; */}
      <div className="container">
        <h2>3 Introduction UI/UX</h2>
        <h3 className="pt-3">Resume</h3>
        <p>Dalam materi ini, mempelajari:</p>
        <ol>
          <li>User Experience (UX)</li>
          <div className="paragraph-content">
            User Experience (UX) adalah apapun yang pengguna rasakan ketika
            menggunakan produk yang kita buat. UX terdiri dari 6 bagian,
            diantaranya : Business Logic, Technology, Incteraction Logic,
            Design, Computer Communication, dan Business. Dan beberapa tahapan
            Yang bisa dilakukan ketika hendak mendesain sebuah User Experience,
            yaitu : empathize, define, ideate, prototype, dan validate.
          </div>
          <li>User Interface (UI)</li>
          <div className="paragraph-content">
            User Interface (UI) adalah tampilan yang user gunakan ketika
            berinteraksi dengan produk yang kita buat. Terdapat 4 buah Pilar
            pada UI, diantaranya: Consistency (menggunakan desain pola yang sama
            pada setiap halaman dan urutan pada situasi pada halamannya mirip),
            Keep the interface simple (menghilangkan elemen-elemen yang tidak
            diperlukan pada sebuah halaman dan gunakan bahasa yang jelas), Good
            Typography (harus diperhatikan typeface, yaitu pola huruf yang
            digunakan harus memiliki pola yang sama. Dan perhatikan juga
            mengenai ukuran, jenis, dan susunan dari text dengan tujuan supaya
            memudahkan untuk dibaca), dan Offer Informative Feedback (feedback
            yang diberikan kepada user harus berarti, relevan, dan jelas).
          </div>
          <li>Prototyping</li>
          <div className="paragraph-content">
            Prototype merupakan sebuah simulasi atau contoh sample yang
            menggambarkan final produk yang kita buat. Tujuannya yaitu untuk
            melakukan testing mengenai produk yang dibuat sebelum menghabiskan
            waktu dan uang yang dihabiskan untuk membuat produk yang dibuat.
            Tujuan lainnya yaitu mendapatkan feedback dari user, stakeholder,
            dan tim agar mereka dapat memberikan mengenai produk yang akan
            dibuat.
          </div>
        </ol>

        <h3 className="pt-3">Task</h3>
        <ol>
          <li>Mengidentifikasi desain website</li>
          <div className="paragraph-content">
            Pada task ini, mengidentifikasi 3 buah desain website serta
            menjelaskan UI/UX nya beserta color palette.
          </div>
        </ol>

        <h3 className="pt-3">Link :</h3>
        <a href="https://docs.google.com/document/d/195kR_m6vdOyUv4josiMmulSV7knx1VHaWX1utf5VQok/edit">
          Introduction UI/UX
        </a>

        <h3 className="pt-3">Screenshots :</h3>
        <div className="task-images uiux-img">
          <img src={UiuxImage1} alt="tugas git" className="task-img" />
        </div>
        <div className="task-images uiux-img">
          <img src={UiuxImage2} alt="tugas git" className="task-img" />
        </div>
        <div className="task-images uiux-img">
          <img src={UiuxImage3} alt="tugas git" className="task-img" />
        </div>
      </div>
    </>
  );
};

export default UiuxPage;
