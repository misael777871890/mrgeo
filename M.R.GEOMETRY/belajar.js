// belajar.js
document.addEventListener('DOMContentLoaded', () => {
  const pilihLimas = document.getElementById('pilihLimas');
  const gambarLimas = document.getElementById('gambarLimas');

  const gambarMap = {
    segitiga: 'gambar/limas-segitiga.png',
    segiempat: 'gambar/limas-segiempat.png',
    segilima: 'gambar/limas-segilima.png',
    segienam: 'gambar/limas-segienam.png',
  };

  pilihLimas.addEventListener('change', () => {
    const bentuk = pilihLimas.value;
    gambarLimas.src = gambarMap[bentuk];
    gambarLimas.alt = `Model Limas dengan alas ${bentuk}`;
  });
});
