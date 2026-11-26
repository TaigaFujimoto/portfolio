document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     1. ハンバーガーメニューの開閉処理
  ========================================== */
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }


  /* ==========================================
     2. ページトップへ戻るボタンの処理
  ========================================== */
  const pagetopBtn = document.getElementById('js-pagetop');
  const footer = document.querySelector('footer');

  if (pagetopBtn && footer) {
    window.addEventListener('scroll', () => {
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top <= windowHeight) {
        pagetopBtn.classList.add('is-show');
      } else {
        pagetopBtn.classList.remove('is-show');
      }
    });

    pagetopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  /* ==========================================
     3. トップページ専用（メインビジュアル＆NEWSスライダー）
  ========================================== */
  // メインビジュアルスライダー
  const images = document.querySelectorAll('.hero-img');
  const textItems = document.querySelectorAll('.hero-text-item');
  const prevBtn = document.getElementById('js-prev');
  const nextBtn = document.getElementById('js-next');
  const dots = document.querySelectorAll('#js-dots .dot');
  let currentIndex = 0;
  let slideInterval;

  if (images.length > 0) {
    function showImage(index) {
      images.forEach((img, i) => img.classList.toggle('active', i === index));
      textItems.forEach((item, i) => item.classList.toggle('active', i === index));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
      clearInterval(slideInterval);
      startAutoSlide();
    }

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });

      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
        resetAutoSlide();
      });
    });

    startAutoSlide();
  }

  // NEWSスライダー
  const newsSlides = document.querySelectorAll('.news-slide');
  const newsPrevBtn = document.getElementById('js-news-prev');
  const newsNextBtn = document.getElementById('js-news-next');
  const newsDots = document.querySelectorAll('#js-news-dots .dot');
  let currentNewsIndex = 0;
  let newsSlideInterval;

  if (newsSlides.length > 0) {
    function showNewsSlide(index) {
      newsSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
      newsDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    function nextNewsSlide() {
      currentNewsIndex = (currentNewsIndex + 1) % newsSlides.length;
      showNewsSlide(currentNewsIndex);
    }

    function prevNewsSlide() {
      currentNewsIndex = (currentNewsIndex - 1 + newsSlides.length) % newsSlides.length;
      showNewsSlide(currentNewsIndex);
    }

    function startNewsAutoSlide() {
      newsSlideInterval = setInterval(nextNewsSlide, 4000);
    }

    function resetNewsAutoSlide() {
      clearInterval(newsSlideInterval);
      startNewsAutoSlide();
    }

    if (newsNextBtn && newsPrevBtn) {
      newsNextBtn.addEventListener('click', () => {
        nextNewsSlide();
        resetNewsAutoSlide();
      });

      newsPrevBtn.addEventListener('click', () => {
        prevNewsSlide();
        resetNewsAutoSlide();
      });
    }

    newsDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentNewsIndex = index;
        showNewsSlide(currentNewsIndex);
        resetNewsAutoSlide();
      });
    });

    startNewsAutoSlide();
  }


  /* ==========================================
     4. ニュースページ専用（絞り込み & ページネーション）
  ========================================== */
  const tabButtons = document.querySelectorAll('#js-news-tabs button');
  const newsItems = Array.from(document.querySelectorAll('#js-news-list .news-item'));
  const paginationContainer = document.getElementById('js-pagination');

  if (newsItems.length && paginationContainer) {
    const ITEMS_PER_PAGE = 5;
    let currentFilter = 'all';
    let currentPage = 1;

    function getFilteredItems() {
      if (currentFilter === 'all') {
        return newsItems;
      }
      return newsItems.filter(item => item.getAttribute('data-category') === currentFilter);
    }

    function updateDisplay() {
      const filteredItems = getFilteredItems();
      const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;

      if (currentPage > totalPages) currentPage = totalPages;

      newsItems.forEach(item => item.classList.add('is-hidden'));

      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const pageItems = filteredItems.slice(startIndex, endIndex);

      pageItems.forEach(item => item.classList.remove('is-hidden'));

      renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
      paginationContainer.innerHTML = '';

      if (totalPages <= 1) return;

      const prevBtn = document.createElement('button');
      prevBtn.classList.add('nav-btn');
      prevBtn.textContent = '‹';
      prevBtn.disabled = currentPage === 1;
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          updateDisplay();
        }
      });
      paginationContainer.appendChild(prevBtn);

      for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        if (i === currentPage) pageBtn.classList.add('active');

        pageBtn.addEventListener('click', () => {
          currentPage = i;
          updateDisplay();
        });

        paginationContainer.appendChild(pageBtn);
      }

      const nextBtn = document.createElement('button');
      nextBtn.classList.add('nav-btn');
      nextBtn.textContent = '›';
      nextBtn.disabled = currentPage === totalPages;
      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          updateDisplay();
        }
      });
      paginationContainer.appendChild(nextBtn);
    }

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.parentElement.classList.remove('active'));
        button.parentElement.classList.add('active');

        currentFilter = button.getAttribute('data-filter');
        currentPage = 1;
        updateDisplay();
      });
    });

    updateDisplay();
  }

});