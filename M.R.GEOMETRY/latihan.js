const soalContainer = document.getElementById("soal-container");

const soalData = [
  {
    pertanyaan: "Sebuah limas segiempat memiliki alas berbentuk persegi dengan panjang sisi 6 cm dan tinggi limas 10 cm. Berapakah volume limas tersebut?",
    opsi: ["60 cm³", "120 cm³", "180 cm³", "240 cm³"],
    jawaban: 1,
    penjelasan: "Volume = 1/3 × luas alas × tinggi = 1/3 × (6 × 6) × 10 = 1/3 × 36 × 10 = 120 cm³"
  },
  {
    pertanyaan: "Limas yang alasnya berbentuk segitiga disebut...",
    opsi: ["Limas segitiga", "Prisma segitiga", "Limas segiempat", "Kerucut"],
    jawaban: 0,
    penjelasan: "Nama limas ditentukan oleh bentuk alasnya. Jika alasnya segitiga, maka disebut limas segitiga."
  },
  {
    pertanyaan: "Jumlah sisi pada limas segilima adalah...",
    opsi: ["5", "6", "7", "10"],
    jawaban: 2,
    penjelasan: "Limas segilima memiliki 5 sisi tegak dan 1 sisi alas, jadi total 6 sisi."
  },
  {
    pertanyaan: "Jika sebuah limas mempunyai alas berbentuk segitiga dan tinggi 12 cm, serta luas alas 30 cm², berapakah volumenya?",
    opsi: ["90 cm³", "120 cm³", "180 cm³", "360 cm³"],
    jawaban: 2,
    penjelasan: "Volume = 1/3 × luas alas × tinggi = 1/3 × 30 × 12 = 120 cm³"
  },
  {
    pertanyaan: "Berapa jumlah titik sudut pada limas segienam?",
    opsi: ["6", "7", "8", "12"],
    jawaban: 1,
    penjelasan: "Limas segienam memiliki 6 titik sudut pada alas dan 1 titik puncak, total 7 titik sudut."
  }
];

soalData.forEach((item, index) => {
  const soalDiv = document.createElement("div");
  soalDiv.className = "soal";

  const pertanyaan = document.createElement("p");
  pertanyaan.textContent = `Soal ${index + 1}: ${item.pertanyaan}`;
  soalDiv.appendChild(pertanyaan);

  const opsiDiv = document.createElement("div");
  opsiDiv.className = "opsi";

  item.opsi.forEach((opsi, i) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="soal${index}" value="${i}">
      ${opsi}
    `;
    opsiDiv.appendChild(label);
  });

  soalDiv.appendChild(opsiDiv);

  const btnCek = document.createElement("button");
  btnCek.textContent = "Cek Jawaban";
  btnCek.className = "cek-btn";
  soalDiv.appendChild(btnCek);

  const penjelasan = document.createElement("div");
  penjelasan.className = "penjelasan";
  penjelasan.style.display = "none";
  penjelasan.innerHTML = `<strong>Penjelasan:</strong> ${item.penjelasan}`;
  soalDiv.appendChild(penjelasan);

  btnCek.addEventListener("click", () => {
    const pilihan = opsiDiv.querySelector("input[type='radio']:checked");

    if (!pilihan) {
      alert("Pilih salah satu jawaban terlebih dahulu.");
      return;
    }

    const jawabanBenar = parseInt(pilihan.value) === item.jawaban;

    if (jawabanBenar) {
      btnCek.textContent = "✅ Jawaban Benar!";
      btnCek.style.backgroundColor = "#4caf50";
    } else {
      btnCek.textContent = "❌ Jawaban Salah";
      btnCek.style.backgroundColor = "#f44336";
    }

    penjelasan.style.display = "block";

    if (!soalDiv.querySelector(".toggle-penjelasan")) {
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "Sembunyikan Penjelasan";
      toggleBtn.className = "toggle-penjelasan";
      soalDiv.appendChild(toggleBtn);

      toggleBtn.addEventListener("click", () => {
        if (penjelasan.style.display === "none") {
          penjelasan.style.display = "block";
          toggleBtn.textContent = "Sembunyikan Penjelasan";
        } else {
          penjelasan.style.display = "none";
          toggleBtn.textContent = "Tampilkan Penjelasan";
        }
      });
    }
  });

  soalContainer.appendChild(soalDiv);
});
