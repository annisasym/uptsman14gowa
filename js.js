// Fungsi untuk menggeser gambar di carousel
function moveSlide(direction, id) {
  const carousel = document.getElementById(id);
  const images = carousel.getElementsByClassName('carousel-image');
  const totalSlides = images.length;
  
  // Menyimpan indeks slide yang sedang ditampilkan
  let currentSlide = parseInt(carousel.getAttribute('data-slide') || 0);

  // Menentukan slide berikutnya
  currentSlide += direction;

  // Memastikan indeks slide berada dalam rentang yang valid
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  // Menggeser gambar berdasarkan indeks slide
  for (let i = 0; i < totalSlides; i++) {
    images[i].style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Menyimpan indeks slide baru ke dalam atribut data
  carousel.setAttribute('data-slide', currentSlide);
}

// Menambahkan event listener ke tombol prev dan next secara dinamis
document.querySelectorAll('.prev, .next').forEach(button => {
  button.addEventListener('click', (event) => {
    const direction = event.target.classList.contains('prev') ? -1 : 1;
    const id = event.target.closest('.carousel').querySelector('.carousel-images').id;
    moveSlide(direction, id);
  });
});
