import React from "react";

import GitImage from "../assets/images/git/git.JPG";

const GitPage = () => {
  return (
    <>
      <div className="container">
        <h2 className="head-title">
          2 Version Control and Branch Management (Git)
        </h2>
        <h3 className="pt-3">Resume</h3>
        <p>Dalam materi ini, mempelajari:</p>
        <ol>
          <li className="list-content">
            Pengertian dan jenis-jenis Versioning
          </li>
          <div className="paragraph-content">
            Versioning adalah melakukan pengaturan versi atau pelacakan setiap
            perubahan dari setiap code program. Adapun tujuan utamanya yaitu
            melakukan manajemen project serta tarcking terhadap perubahan yang
            terjadi pada code program, baik yang dilakukan oleh personal ataupun
            tim. Didalam membangun setiap project pasti ada sebuah perubahan dan
            koreksi, meskipun itu adalah sebuah project profesional dan besar.
          </div>
          <li className="list-content">
            Pengertian Git dan macam-macam Git command
          </li>
          <div className="paragraph-content">
            Adapun version control yang paling populer hingga sekarang adalah
            GIT. GIT merupakan version control system populer yang digunakan
            para developer untuk mengembangkan software secara bersama-sama. GIT
            sendiri bersifat terdistribusi, yaitu dapat diakses secara bersama
            sama. GIT dibuat oleh Linus Torvalds pada tahun 2005. Dalam GIT
            terdapat 3 buah area yaitu working tree, stagging area, dan history.
            Dari masing-masing area tersebut terdapat berbagai git command untuk
            melakukan berbagai tugas. Mulai dari git init untuk menyiapkan
            repository lokal untuk mengontrol berbagai perubahan, git status
            untuk mengetahui perubahan apa saja yang terjadi, git add untuk
            memindahkan dari working tree area ke stagging area, git commit
            untuk memindahkan dari stagging area ke history, dan masih banyak
            command lainnya yang dapat digunakan sesuai dengan kondisi yang
            terjadi.
          </div>
          <li className="list-content">Manajemen Branch pada Git</li>
          <div className="paragraph-content">
            Dalam git dapat ditambahkan beberapa branch dengan tujuan membuat
            sebuah jalur baru tanpa mengganggu jalur utama, dalam hal ini dapat
            berlaku apabila dalam pengembangan code akan ditambahkan atau
            membuat eksperimen sebuah fitur baru. Pada praktiknya brach tersebut
            dapat dilakukan berbagai manajemen, mulai dari membuat branch baru
            dan menambahkan fitur lain hingga melakukan merge pada branch yang
            diinginkan.
          </div>
        </ol>

        <h3 className="pt-3">Task</h3>
        <ol>
          <li className="list-content">
            Membuat repository baru di github dan melakukan manajemen branch
          </li>
          <div className="paragraph-content">
            Pada task ini, membuat sebuah repository baru dan membuat 3 buah
            branch tambahan selain dari branch master, dengan ketentuan
            menambahkan branch develop kemudian lakukan pengembangan fitur
            dengan menambahkan 2 buah branch baru, pada masing-masing branch
            tambahkan fitur lalu merge dengan branch develop.
          </div>
        </ol>

        <h3 className="pt-3">Link :</h3>
        <a
          href="https://github.com/muhamadjaya/tugas-section2-branch"
          className="link-task"
        >
          Version Control and Branch Management (Git)
        </a>

        <h3 className="pt-3">Screenshots :</h3>
        <div className="task-images git-img">
          <img src={GitImage} alt="tugas git" className="task-img" />
        </div>
      </div>
    </>
  );
};

export default GitPage;
