document.addEventListener('DOMContentLoaded', () => {
  
/* --- 1. ハンバーガーメニューの開閉制御 --- */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const body = document.body;

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      const isClosed = navMenu.classList.toggle('translate-x-full');

      if (!isClosed) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });
  }

  /* --- 2. スクロール時のヘッダー背景切り替え --- */
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-brand-dark');
        header.classList.remove('bg-gradient-to-b', 'from-black/80', 'to-transparent');
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
      } else {
        header.classList.remove('bg-brand-dark');
        header.classList.add('bg-gradient-to-b', 'from-black/80', 'to-transparent');
        header.style.boxShadow = 'none';
      }
    });
  }

  /* --- 3. ヒーローエリアの自動クロスフェードスライダー --- */
  const slides = document.querySelectorAll('.hero-slide');
  const texts = document.querySelectorAll('.hero-text');
  let currentSlide = 0;
  const slideInterval = 5000; // 5秒ごとにスライド切り替え

  const nextSlide = () => {
    // 現在のスライドを非アクティブ化
    slides[currentSlide].classList.remove('active');
    texts[currentSlide].classList.remove('active');
    
    // インデックスを加算
    currentSlide = (currentSlide + 1) % slides.length;
    
    // 次のスライドをアクティブ化
    slides[currentSlide].classList.add('active');
    texts[currentSlide].classList.add('active');
  };

  if (slides.length > 1) {
    setInterval(nextSlide, slideInterval);
  }

  /* --- 4. スクロール発火の要素フェードイン (IntersectionObserver) --- */
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.2, // 要素が20%画面に入ったら表示
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // 一度発火したら監視解除
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  /* --- 5. ページトップへ戻るボタン --- */
  const pageTopBtn = document.getElementById('js-pagetop');
  if (pageTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        pageTopBtn.classList.remove('opacity-0', 'invisible');
        pageTopBtn.classList.add('opacity-100', 'visible');
      } else {
        pageTopBtn.classList.remove('opacity-100', 'visible');
        pageTopBtn.classList.add('opacity-0', 'invisible');
      }
    });

    pageTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});

document.addEventListener('DOMContentLoaded', () => {
  const storeBtn = document.getElementById('store-menu-btn');
  const storeDropdown = document.getElementById('store-dropdown');
  const storeArrow = document.getElementById('store-arrow');

  if (storeBtn && storeDropdown) {
    // クリック時の挙動
    storeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // イベントのバブリングを止める
      
      // 開閉状態の切り替え
      const isOpen = storeDropdown.classList.toggle('opacity-100');
      storeDropdown.classList.toggle('invisible');
      
      if (isOpen) {
        storeArrow.classList.add('rotate-180');
      } else {
        storeArrow.classList.remove('rotate-180');
      }
    });

    // メニューが開いている時に、画面の他の場所をクリックしたら閉じる
    document.addEventListener('click', (e) => {
      if (!storeBtn.contains(e.target) && !storeDropdown.contains(e.target)) {
        storeDropdown.classList.remove('opacity-100', 'visible');
        storeDropdown.classList.add('invisible');
        storeArrow.classList.remove('rotate-180');
      }
    });
  }
});