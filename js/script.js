
/* ========================================
   1. 作品データ
======================================== */

const works = {

    akiseto: {
        title: "AKISETO",
        image: "img/AKISETO_large.png",
        tools: "Figma, Illustrator, VSCode（HTML・CSS）",
        date: "2025年9月〜11月",
        period: "約30時間",
        link: "AKISETO_website/index.html",
        memo: "デザイン・コーディング。写真は外部素材を使用。",
        concept: "広島のレモンや瀬戸内のクラフトビールを楽しめるお店をイメージ。",
        design: "瀬戸内らしさと親しみやすさを意識したデザイン。",
        point: "メニューや店舗情報を分かりやすく伝える構成に工夫。"
    },

    akiSeto: {
        title: "安芸・瀬戸",
        image: "img/AKI_SETO_large.png",
        tools: "Figma, Illustrator, VSCode（HTML・CSS）",
        date: "",
        period: "",
        link: "AKI_SETO_website/index.html",
        memo: "",
        concept: "",
        design: "瀬戸内らしさと親しみやすさを意識したデザイン。",
        point: ""
    },

    catcafe: {
        title: "Figma「catcafe」Webデザイン",
        image: "img/catcafe_pc_large.png",
        imageSp: "img/catcafe_sp_large.png",
        tools: "Figma",
        date: "",
        period: "",
        link: "design-prototype.html#catcafe",
        memo: "デザインカンプとプロトタイプを掲載しています。",
        concept: "",
        design: "",
        point: ""
    },

    corporateSite: {
        title: "Corporate Site",
        image: "img/corporateSite_large.png",
        tools: "Figma",
        date: "",
        period: "",
        link: "design-prototype.html#corporateSite",
        memo: "",
        concept: "",
        design: "",
        point: ""
    },

    loginImage: {
        title: "Login Image",
        image: "img/login_large.png",
        tools: "Figma",
        date: "",
        period: "",
       link: "design-prototype.html#loginImage",
        memo: "",
        concept: "",
        design: "",
        point: ""
    },

    musashiTouki: {
        title: "むさし陶器",
        image: "img/musashi_touki_large.png",
        tools: "HTML, CSS, JavaScript",
        date: "",
        period: "",
        link: "/portfolio/musashi_touki_website/index.html",
        memo: "",
        concept: "",
        design: "",
        point: ""
    },

    /* バナー作品 */

    figmaBanner: {
        title: "Photo Contest Banner",
        image: "img/photocontest_banner.png",
        tools: "Figma",
        date: "",
        period: "",
        link: "",
        memo: "",
        concept: "",
        design: "",
        point: "",
        category: "banner"
    },

    banner1: {
        title: "Banner 1",
        image: "img/banner1.png",
        tools: "Figma",
        date: "",
        period: "",
        link: "",
        memo: "",
        concept: "",
        design: "",
        point: "",
        category: "banner"
    },

    banner2: {
        title: "Banner 2",
        image: "img/banner2.png",
        tools: "Figma",
        date: "",
        period: "",
        link: "",
        memo: "",
        concept: "",
        design: "",
        point: "",
        category: "banner"
    },

    banner3: {
        title: "Banner 3",
        image: "img/banner3.png",
        tools: "Figma",
        date: "",
        period: "",
        link: "",
        memo: "",
        concept: "",
        design: "",
        point: "",
        category: "banner"
    }

};


/* ========================================
   2. 作品詳細モーダル
======================================== */

function openModal(workId) {

    const work = works[workId];

    if (!work) return;

    const modal = document.getElementById("modal");

    if (!modal) return;

    // 作品情報
    document.getElementById("modal-title").textContent = work.title;
    document.getElementById("modal-tools").textContent = work.tools;
    document.getElementById("modal-date").textContent = work.date;
    document.getElementById("modal-period").textContent = work.period;
    document.getElementById("modal-memo").textContent = work.memo;
    document.getElementById("modal-concept").textContent = work.concept;
    document.getElementById("modal-design").textContent = work.design;
    document.getElementById("modal-point").textContent = work.point;

    // メイン画像
    const modalImage = document.getElementById("modal-image");
    const modalImageSp = document.getElementById("modal-image-sp");

    if (modalImage) {
        modalImage.src = work.image;
        modalImage.alt = work.title;
    }

    // SP画像がある場合のみ表示
    if (modalImageSp) {

        if (work.imageSp) {
            modalImageSp.src = work.imageSp;
            modalImageSp.alt = work.title + " SP版";
            modalImageSp.classList.remove("is-hidden");
        } else {
            modalImageSp.src = "";
            modalImageSp.classList.add("is-hidden");
        }

    }

    // リンク先
    const link = document.getElementById("modal-link");
    const linkRow = document.getElementById("modal-link-row");

    if (link && linkRow) {

        if (work.category === "banner" || !work.link) {
            linkRow.style.display = "none";
            link.removeAttribute("href");
        } else {
            linkRow.style.display = "";
            link.href = work.link;
        }

    }

    // モーダル表示
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

}


function closeModal() {

    const modal = document.getElementById("modal");

    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "";

}


/* ========================================
   3. catcafe：プロトタイプURL
======================================== */

const prototypeUrls = {

    PC: "https://embed.figma.com/proto/RRQgfBSWFgTFDN5etksieR/lesson08-practice-finish?node-id=6001-641&starting-point-node-id=6001%3A641&embed-host=portfolio",

    SP: "https://embed.figma.com/proto/RRQgfBSWFgTFDN5etksieR/lesson08-practice-finish?node-id=2001-10&starting-point-node-id=2001%3A10&embed-host=portfolio"

};


/* ========================================
   4. catcafe：デザインカンプ画像
======================================== */

const designs = {

    PC: [
        "top-pc.png",
        "menu-pc.png",
        "catsList-pc.png",
        "catsDetail-pc.png",
        "shop-pc.png",
        "header-pc.png"
    ],

    SP: [
        "top-sp.png",
        "menu-sp.png",
        "catsList-sp.png",
        "catsDetail-sp.png",
        "shop-sp.png",
        "header-sp.png",
        "drawerMenu-sp.png"
    ]

};


/* ========================================
   5. Corporate Site：デザインカンプ
======================================== */

const corporateDesigns = [
    "UrbanNest.png"
];


/* ========================================
   6. Login Image：デザインカンプ
======================================== */

const loginDesigns = [
    "welcome.png",
    "login01.png",
    "login02.png",
    "login03.png",
    "splash01.png",
    "splash02.png"
];


/* ========================================
   7. 画像ギャラリー共通処理
======================================== */

function renderGallery(galleryId, folder, files) {

    const gallery = document.getElementById(galleryId);

    if (!gallery) return;

    gallery.innerHTML = "";

    files.forEach(file => {

        const img = document.createElement("img");

        img.src = `img/design%26prototype/${folder}/${file}`;
        img.alt = file;
        img.className = "design-image";
        img.loading = "eager";

        img.addEventListener("click", () => {
            openImage(img.src, img.alt);
        });

        gallery.appendChild(img);

    });

}


/* ========================================
   8. catcafe：PC・スマホ切り替え
======================================== */

function showCatcafeVersion(version, button) {

    if (!designs[version]) return;

    // ボタンの選択状態
    document.querySelectorAll(".version-switch button").forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    // デザインカンプ切り替え
    renderGallery("design-gallery", version, designs[version]);

    // Figmaプロトタイプ切り替え
    const prototypeFrame = document.getElementById("catcafe-prototype");

    if (prototypeFrame) {
        prototypeFrame.src = prototypeUrls[version];
    }

}


/* ========================================
   9. デザイン画像の拡大表示
======================================== */

function openImage(src, alt = "拡大画像") {

    const modal = document.getElementById("image-modal");
    const modalImage = document.querySelector("#image-modal img");

    if (!modal || !modalImage) return;

    modalImage.src = src;
    modalImage.alt = alt;

    modal.classList.add("show");
    document.body.style.overflow = "hidden";

}


function closeImage() {

    const modal = document.getElementById("image-modal");

    if (!modal) return;

    modal.classList.remove("show");
    document.body.style.overflow = "";

}


/* ========================================
   10. ページ上部へ戻るボタン
======================================== */

function setupBackToTop() {

    const button = document.getElementById("back-to-top");

    if (!button) return;

    // スクロール位置に応じて表示
    const updateButton = () => {

        if (window.scrollY > 300) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }

    };

    window.addEventListener("scroll", updateButton, { passive: true });

    // クリックでページ上部へ
    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    updateButton();

}


/* ========================================
   11. モーダル・キーボード操作
======================================== */

function setupModalEvents() {

    const workModal = document.getElementById("modal");
    const imageModal = document.getElementById("image-modal");

    // 作品詳細モーダルの背景クリックで閉じる
    if (workModal) {

        workModal.addEventListener("click", event => {

            if (event.target === workModal) {
                closeModal();
            }

        });

    }

    // 画像拡大モーダルの背景クリックで閉じる
    if (imageModal) {

        imageModal.addEventListener("click", event => {

            if (event.target === imageModal) {
                closeImage();
            }

        });

        const closeButton = imageModal.querySelector(".image-modal-close");

        if (closeButton) {
            closeButton.addEventListener("click", closeImage);
        }

    }

    // Escキーで開いているモーダルを閉じる
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (imageModal && imageModal.classList.contains("show")) {
                closeImage();
            }

            if (workModal && workModal.style.display === "flex") {
                closeModal();
            }

        }

    });

}


/* ========================================
   12. 初期表示
======================================== */

window.addEventListener("DOMContentLoaded", () => {

    // catcafe：PC版を初期表示
    const catcafeGallery = document.getElementById("design-gallery");

    if (catcafeGallery) {

        const pcButton = document.querySelector(".version-switch button");

        if (pcButton) {
            showCatcafeVersion("PC", pcButton);
        }

    }

   // Corporate Site
renderGallery("corporate-gallery", "corporate", corporateDesigns);

// Login Image
renderGallery("login-gallery", "login", loginDesigns);

    // ページ上部へ戻るボタン
    setupBackToTop();

    // モーダル操作
    setupModalEvents();

});


/* ========================================
   Profile Modal
======================================== */

function openProfile() {
    const modal = document.getElementById("profile-modal");
    modal.classList.add("active");
}

function closeProfile() {
    const modal = document.getElementById("profile-modal");
    modal.classList.remove("active");
}

// モーダルの背景をクリックしたときも閉じる
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("profile-modal");

    if (modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeProfile();
            }
        });
    }
});
