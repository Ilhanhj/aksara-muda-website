const tl = gsap.timeline();

// Timeline biar urut dan rapi
const navTl = gsap.timeline();

// Navbar wrapper masuk dari atas
navTl
  .from("header", {
    opacity: 0,
    y: -50,
    duration: 1.4,
    ease: "power4.out",
  })

  // Logo delay dikit muncul
  .from(
    "header a[href='index.html']",
    {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power3.out",
    },
    "-=1"
  ) // mulai sebelum navbar selesai

  // Link nav muncul stagger
  .from(
    "header #hs-navbar-hcail a",
    {
      opacity: 0,
      y: -20,
      duration: 0.9,
      stagger: 0.2,
      ease: "power2.out",
    },
    "-=0.9"
  )

  // Tombol Kontak muncul belakangan
  .from(
    "header button",
    {
      opacity: 0,
      scale: 0.8,
      duration: 1.1,
      ease: "back.out(1.7)",
    },
    "-=1"
  );

// Logo tengah
tl.from("#logo-center", {
  opacity: 0,
  scale: 0.3,
  y: -80,
  duration: 2,
  ease: "power4.out",
});

gsap.from("#hero-item", {
  opacity: 0,
  y: 30,
  duration: 1.5,
  stagger: 0.4,
  ease: "power3.out",
});

gsap.from("#img", 4, {
  y: 100,
  clipPath: "inset(100% 0 0 0",
  ease: "power4.InOut",
});

gsap.from("#img-tim", 4, {
  y: 0,
  clipPath: "inset(100% 0 0 0",
  ease: "power4.InOut",
  stagger: 0.3,
});

// Chatbot Close
const chatBot = document.querySelector("#chatbot");
const openChatbot = document.querySelector("#chatbot-button");
const close = document.querySelector("#close");

openChatbot.addEventListener("click", (e) => {
  chatBot.classList.add("activate");
  chatBot.classList.remove("unactive");
  e.preventDefault();
});

close.addEventListener("click", (e) => {
  chatBot.classList.add("unactive");
  chatBot.classList.remove("activate");

  e.preventDefault();
});

// Chatbot Question & Answer
const chatHellos = document.querySelectorAll("#chat-hello");
const answerHello = document.querySelector("#answer-hello");
const question = document.querySelector("#question");
const chatHires = document.querySelectorAll("#chat-hire");
const chatConsults = document.querySelectorAll("#chat-consult");

for (chatHello of chatHellos) {
  chatHello.addEventListener("click", () => {
    setTimeout(userAnswerRight, 1000);
    setTimeout(userAnswerHello, 2000);
  });
}
for (chatHire of chatHires) {
  chatHire.addEventListener("click", () => {
    setTimeout(userAnswerRight2, 1000);
    setTimeout(userAnswerHire, 2000);
  });
}
for (chatConsult of chatConsults) {
  chatConsult.addEventListener("click", () => {
    setTimeout(userAnswerRight4, 1000);
    setTimeout(userAnswerConsult, 2000);
  });
}

function userAnswerRight() {
  const answerRight = document.createElement("div");
  answerRight.classList.add("flex");
  answerRight.classList.add("justify-end");
  answerRight.innerHTML = `<div class="container m-4 mr-2 lg:mr-2 lg:m-2 w-2/5 lg:w-[40%] bg-sand rounded-full flex items-center p-3" data-aos="fade-up"
  data-aos-duration="500"  data-aos-anchor="#chatbot">
    <h1 class="text-white ">Halo Aksmud ! </h1>
    </div>`;
  document.querySelector("#question").classList.add("hidden");
  document.querySelector("#chat-area").appendChild(answerRight);
}
function userAnswerRight2() {
  const answerRight2 = document.createElement("div");
  answerRight2.classList.add("flex");
  answerRight2.classList.add("justify-end");
  answerRight2.innerHTML = `<div class="container m-4 mr-2 lg:mr-2 lg:m-2 w-2/5 lg:w-[40%] bg-sand rounded-full flex items-center p-3" data-aos="fade-up"
  data-aos-duration="500">
    <h1 class="text-white">Ikut KKN nya dong, boleh?</h1>
    </div>`;
  document.querySelector("#question").classList.add("hidden");
  document.querySelector("#chat-area").appendChild(answerRight2);
}
function userAnswerRight3() {
  const answerRight3 = document.createElement("div");
  answerRight3.classList.add("flex");
  answerRight3.classList.add("justify-end");
  answerRight3.innerHTML = `<div class="container m-4 mr-2 lg:mr-2 lg:m-2 w-2/5 lg:w-[40%] bg-sand rounded-full flex items-center p-3" data-aos="fade-up"
  data-aos-duration="500">
    <h1 class="text-white ">Yang lainnya?</h1>  
    </div>`;
  document.querySelector("#question").classList.add("hidden");
  document.querySelector("#chat-area").appendChild(answerRight3);
}
function userAnswerRight4() {
  const answerRight4 = document.createElement("div");
  answerRight4.classList.add("flex");
  answerRight4.classList.add("justify-end");
  answerRight4.innerHTML = `<div id="chat-consult"
  class="container m-2 lg:m-2 w-3/5 bg-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
  data-aos-duration="500">
  <h1 class="text-white">Apa saja program kerja KKN kalian di desa ini?</h1>
</div>`;
  document.querySelector("#question").classList.add("hidden");
  document.querySelector("#chat-area").appendChild(answerRight4);
}

function userAnswerHello() {
  const answerLeft = document.createElement("div");
  answerLeft.classList.add("flex");
  answerLeft.classList.add("flex-col");
  answerLeft.classList.add("justify-start");
  answerLeft.innerHTML = `  <div
  class="container m-2 lg:m-2 w-20 h-14 bg-white rounded-xl flex justify-center items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="500"  data-aos-anchor="#chatbot" data-aos-delay="500">
  <h1 class="text-navy">Hi ! 👋🏻 </h1>
</div>
<div class="container m-2 lg:m-2 w-2/5 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1000"  data-aos-anchor="#chatbot" data-aos-delay="1000">
  <h1 class="text-navy">Terima Kasih telah mengklik !</h1>
</div>  
<div class="container m-2 lg:m-2 w-2/5 lg:w-1/2 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1500"  data-aos-anchor="#chatbot" data-aos-delay="1500">  
  <h1 class="text-navy"> Kami harap kamu menikmati website kami.</h1>
</div>
<div class="container m-2 lg:m-2 w-2/5 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="2000"  data-aos-anchor="#chatbot" data-aos-delay="2000">
  <h1 class="text-navy mr-1"> Ada yang bisa di bantu ?
  </h1>
</div>

<div id="question">
  <div id="chat-hello"
      class="container m-2 lg:m-2 w-2/5 bg-transparent border-2 border-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="2500"  data-aos-anchor="#chatbot" data-aos-delay="2500">
      <h1 class="text-sand">Halo Aksmud !</h1>
  </div>
  <div id="chat-consult"
                    class="container m-2 lg:m-2 w-3/5 bg-transparent border-2 border-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
                    data-aos-duration="2700"  data-aos-anchor="#chatbot" data-aos-delay="2700">
                    <h1 class="text-sand">Apa saja program kerja KKN kalian di desa ini?</h1>
                </div>
  <div id="chat-hire"
      class="container m-2 lg:m-2 w-3/4 bg-transparent border-2 border-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="3000"  data-aos-anchor="#chatbot" data-aos-delay="3000">
      <h1 class="text-sand">Ikut KKN-nya dong, boleh?</h1>
  </div>
</div>`;

  const chatHellos = answerLeft.querySelectorAll("#chat-hello");
  for (chatHello of chatHellos) {
    chatHello.addEventListener("click", () => {
      setTimeout(userAnswerRight, 1000);
      setTimeout(userAnswerHello, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatConsults = answerLeft.querySelectorAll("#chat-consult");
  for (chatConsult of chatConsults) {
    chatConsult.addEventListener("click", () => {
      setTimeout(userAnswerRight4, 1000);
      setTimeout(userAnswerConsult, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatHires = answerLeft.querySelectorAll("#chat-hire");
  for (chatHire of chatHires) {
    chatHire.addEventListener("click", () => {
      setTimeout(userAnswerRight2, 1000);
      setTimeout(userAnswerHire, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  document.querySelector("#chat-area").appendChild(answerLeft);
}

function userAnswerHire() {
  const answerLeft = document.createElement("div");
  answerLeft.classList.add("flex");
  answerLeft.classList.add("flex-col");
  answerLeft.classList.add("justify-start");
  answerLeft.innerHTML = `  
<div class="container m-2 lg:m-2 w-2/5 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="500"  data-aos-anchor="#chatbot" data-aos-delay="500">
  <h1 class="text-navy">Wah, tentu boleh dong! Beberapa kegiatan kami memang terbuka buat partisipasi warga maupun teman-teman relawan. </h1>
</div>
<div class="container m-2 lg:m-2 w-1/2 lg:w-1/2 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1000"  data-aos-anchor="#chatbot" data-aos-delay="1000">
  <h1 class="text-navy"> Langsung aja hubungi kami lewat menu Kontak atau klik tombol Ingin Kolaborasi di halaman ini. </h1>
</div>
<div class="container m-2 lg:m-2 w-1/2 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1500"  data-aos-anchor="#chatbot" data-aos-delay="1500">
  <h1 class="text-navy mr-1"> Kita senang banget kalau bisa bareng-bareng bikin kegiatan positif di desa ini!</h1>
</div>

<div id="question">
  <div id="chat-hire"
      class="container m-2 lg:m-2 w-1/2 bg-transparent border-2 border-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="2500"  data-aos-anchor="#chatbot" data-aos-delay="2500">
      <a href="mailto:ilhanzuldan11@gmail.com?subject=Exciting%20Opportunity%20to%20Collaborate"
          class="flex text-sand ml-2 text-base items-center">Kirim Pesan !
      </a>
  </div>
  <div id="chat-options"
      class="container m-2 lg:m-2 w-2/5 bg-transparent border-2 border-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="3000"  data-aos-anchor="#chatbot" data-aos-delay="3000">
      <h1 class="text-sand">Yang Lainnya ?</h1>
  </div>
</div>`;

  const chatHires = answerLeft.querySelectorAll("#chat-hire");
  for (chatHire of chatHires) {
    chatHire.addEventListener("click", () => {
      setTimeout(userAnswerRight2, 1000);
      setTimeout(userAnswerHire, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatOpts = answerLeft.querySelectorAll("#chat-options");
  for (chatOpt of chatOpts) {
    chatOpt.addEventListener("click", () => {
      setTimeout(userAnswerRight3, 1000);
      setTimeout(userAnswerOpt, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  document.querySelector("#chat-area").appendChild(answerLeft);
}

function userAnswerConsult() {
  const answerLeft = document.createElement("div");
  answerLeft.classList.add("flex");
  answerLeft.classList.add("flex-col");
  answerLeft.classList.add("justify-start");
  answerLeft.innerHTML = `        <div class="container m-2 lg:m-2 w-2/5 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="500"  data-aos-anchor="#chatbot" data-aos-delay="500">
  <h1 class="text-navy">Program kerja kami di antaranya:</h1>
</div>
<div class="container m-2 lg:m-2 w-1/2 lg:w-1/2 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1000"  data-aos-anchor="#chatbot" data-aos-delay="1000">
  <h1 class="text-navy"> 🌟 Digitalisasi, Pemasaran dan Pembuatan Website<br>
🌟 Lingkungan, Edukasi, dan Pengembangan Masyarakat</h1>
</div>
<div class="container m-2 lg:m-2 w-1/2 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1500"  data-aos-anchor="#chatbot" data-aos-delay="1500">
  <h1 class="text-navy mr-1"> 🌟 Penanaman TOGA (Tanaman Obat Keluarga) dan Edukasi Kesehatan<br>
🌟 Edukasi Bahasa Inggris
  </h1>
</div>
<div class="container m-2 lg:m-2 w-2/5 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="2000"  data-aos-anchor="#chatbot" data-aos-delay="2000">
  <h1 class="text-navy mr-1">Selengkapnya bisa cek di menu Program Kerja ya!”
  </h1>
</div>

<div id="question">
  <div id="chat-hire"
      class="container m-2 lg:m-2 w-1/2 bg-transparent border-2 border-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="2500"  data-aos-anchor="#chatbot" data-aos-delay="2500">
      <a href="mailto:ilhanzuldan11@gmail.com?subject=Exciting%20Opportunity%20to%20Collaborate"
          class="flex text-sand ml-2 text-base items-center">Kirim Pesan !
      </a>
  </div>
  <div id="chat-options"
      class="container m-2 lg:m-2 w-2/5 bg-transparent border-2 border-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="3000"  data-aos-anchor="#chatbot" data-aos-delay="3000">
      <h1 class="text-sand">Yang Lainnya ?</h1>
  </div>
</div>`;

  const chatHires = answerLeft.querySelectorAll("#chat-hire");
  for (chatHire of chatHires) {
    chatHire.addEventListener("click", () => {
      setTimeout(userAnswerRight2, 1000);
      setTimeout(userAnswerHire, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatConsults = answerLeft.querySelectorAll("#chat-consult");
  for (chatConsult of chatConsults) {
    chatConsult.addEventListener("click", () => {
      setTimeout(userAnswerRight4, 1000);
      setTimeout(userAnswerConsult, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatOpts = answerLeft.querySelectorAll("#chat-options");
  for (chatOpt of chatOpts) {
    chatOpt.addEventListener("click", () => {
      setTimeout(userAnswerRight3, 1000);
      setTimeout(userAnswerOpt, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  document.querySelector("#chat-area").appendChild(answerLeft);
}

function userAnswerOpt() {
  const answerLeft = document.createElement("div");
  answerLeft.classList.add("flex");
  answerLeft.classList.add("flex-col");
  answerLeft.classList.add("justify-start");
  answerLeft.innerHTML = ` <div class="container m-2 lg:m-2 w-2/5 bg-white rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="500"  data-aos-anchor="#chatbot" data-aos-delay="500">
  <h1 class="text-primary">Okay Lets Go</h1>
</div>
<div id="question">
  <div id="chat-hello"
      class="container m-2 lg:m-2 w-2/5 bg-transparent border-2 border-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="2500"  data-aos-anchor="#chatbot" data-aos-delay="2500">
      <h1 class="text-sand">Halo Aksmud !</h1>
  </div>
  <div id="chat-consult"
                    class="container m-2 lg:m-2 w-3/5 bg-transparent border-2 border-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
                    data-aos-duration="2700"  data-aos-anchor="#chatbot" data-aos-delay="2700">
                    <h1 class="text-sand">Apa aja nih program kerja kalian di
                                    desa ini?</h1>
                </div>
  <div id="chat-hire"
      class="container m-2 lg:m-2 w-3/4 bg-transparent border-2 border-sand rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="3000"  data-aos-anchor="#chatbot" data-aos-delay="3000">
      <h1 class="text-sand">Ikut KKN-nya dong, boleh?</h1>
  </div>
</div>`;

  const chatHellos = answerLeft.querySelectorAll("#chat-hello");
  for (chatHello of chatHellos) {
    chatHello.addEventListener("click", () => {
      setTimeout(userAnswerRight, 1000);
      setTimeout(userAnswerHello, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatConsults = answerLeft.querySelectorAll("#chat-consult");
  for (chatConsult of chatConsults) {
    chatConsult.addEventListener("click", () => {
      setTimeout(userAnswerRight4, 1000);
      setTimeout(userAnswerConsult, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatHires = answerLeft.querySelectorAll("#chat-hire");
  for (chatHire of chatHires) {
    chatHire.addEventListener("click", () => {
      setTimeout(userAnswerRight2, 1000);
      setTimeout(userAnswerHire, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  document.querySelector("#chat-area").appendChild(answerLeft);
}

AOS.init({
  duration: 800,
  once: false,
});
