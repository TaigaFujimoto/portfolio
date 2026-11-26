

/* ========================================
   1. 作品データ
======================================== */

const works = {

    // 1. AKISETO
    akiseto: {
        title: "架空の居酒屋「AKISETO」のホームページ",
        image: "img/AKISETO_large.png",
        tools: "Figma, Adobeソフト(Photoshop、illustrator）, VSCode（HTML・CSS・JavaScript）",
        date: "2026年7月",
        period: "約10時間",
        link: "AKISETO_website/index.html",
        memo: "Figmaでデザインを制作した後、AIのサポートを活用しながらコーディング。写真はAI画像生成素材と一部外部素材を使用。",
        concept: "広島のレモンやクラフトビールを楽しみながら、スポーツ観戦でも盛り上がれる居酒屋をイメージ。若い世代にも興味を持ってもらい、気軽に足を運びたくなるWebサイトを目指した。",
        design: "レモンを連想させる黄色やオレンジを取り入れ、明るく親しみやすい印象に仕上げた。また、料理やドリンクの写真を大きく配置し、商品の魅力が視覚的に伝わるデザインを意識した。",
        point: "メニューの内容を把握しやすいよう、写真と情報の配置を工夫。また、店舗情報やアクセス情報を整理し、初めて訪れる人でも必要な情報を見つけやすい構成にした。"
    },

    // 2. 安芸・瀬戸
    akiSeto: {
        title: "架空の居酒屋「安芸・瀬戸」のホームページ",
        image: "img/AKI_SETO_large.png",
        tools: "Figma, Adobeソフト(Photoshop、illustrator）, VSCode（HTML・CSS・JavaScript）",
        date: "2026年8月",
        period: "約6時間",
        link: "AKI_SETO_website/index.html",
        memo: "「AKISETO」のホームページ制作後、クライアントから大人の雰囲気を取り入れたデザインへの変更を依頼されたという想定で制作。既存のデザインや割烹料理店のWebサイトを参考に、AIのサポートを活用してコーディング。写真はAI画像生成素材と一部外部素材を使用。",
        concept: "落ち着いた雰囲気の中で、上質な料理や特別な時間を楽しめる居酒屋をイメージ。",
        design: "AKISETOとは対照的に、黒を基調とした配色で高級感と落ち着きを表現。料理が引き立つよう、スポットライトを当てたような写真の見せ方を意識した。",
        point: "AKISETOの制作経験を活かし、予約ページへの導線や店舗情報の配置を改善。利用者が必要な情報を見つけやすいよう、操作性と情報の分かりやすさを意識した。"
    },

    // 3. Cat Cafe
    catcafe: {
        title: "Figma「catcafe」Webデザイン",
        image: "img/catcafe_pc_large.png",
        imageSp: "img/catcafe_sp_large.png",
        tools: "Figma",
        date: "2026年6月",
        period: "約2日間",
        link: "design-prototype.html#catcafe",
        memo: "ヒューマンアカデミーの授業課題として制作。講師のお手本をもとに、レクチャーを受けながら作成。デザインカンプとプロトタイプを掲載。",
        concept: "授業で提示された課題の目的や想定ユーザーに沿って制作。",
        design: "講師のお手本を参考に、配色や文字の配置、余白、情報の優先順位などを意識してデザインを再現。",
        point: "デザインカンプの作成に加え、プロトタイプで画面遷移やボタン操作を設定。実際の利用を想定した操作性についても学んだ。"
    },

    // 4. Corporate Site
    corporateSite: {
        title: "Corporate Site",
        image: "img/corporateSite_large.png",
        tools: "Figma",
        date: "2026年6月",
        period: "約1日",
        link: "design-prototype.html#corporateSite",
        memo: "ヒューマンアカデミーの授業課題として制作。講師のお手本をもとに、レクチャーを受けながら作成。",
        concept: "企業サイトの基本的な構成や情報の伝え方を学ぶことを目的に制作。",
        design: "講師のお手本を参考に、企業の信頼感や情報の見やすさを意識したレイアウトを学習。",
        point: "各コンテンツの配置や情報の整理方法を確認しながら制作。企業サイトに必要なページ構成や導線設計について学んだ。"
    },

    // 5. Login Image
    loginImage: {
        title: "Login Image",
        image: "img/login_large.png",
        tools: "Figma",
        date: "2026年6月",
        period: "約1日",
        link: "design-prototype.html#loginImage",
        memo: "ヒューマンアカデミーの授業課題として制作。講師のお手本をもとに、レクチャーを受けながら作成。",
        concept: "ログイン画面のデザインを通して、ユーザーが迷わず操作できる画面構成を学ぶことを目的に制作。",
        design: "入力欄やボタンの配置、配色、余白の取り方などを意識し、シンプルで使いやすい画面デザインを学習。",
        point: "ログイン画面だけでなく、関連する画面のデザインも制作。画面ごとの統一感や操作の分かりやすさを意識した。"
    },

    // 6. むさし陶器
    musashiTouki: {
        title: "むさし陶器",
        image: "img/musashi_touki_large.png",
        tools: "HTML, CSS, JavaScript",
        date: "2026年7月",
        period: "約1日",
        link: "musashi_touki_website/index.html",
        memo: "ヒューマンアカデミーの授業課題として制作。講師のお手本をもとに、レクチャーを受けながら作成。",
        concept: "陶器を扱う店舗のWebサイト制作を通して、商品の魅力や店舗の特徴を伝える方法を学ぶことを目的に制作。",
        design: "陶器の雰囲気や商品の魅力が伝わるよう、写真の見せ方や文字の配置、全体のレイアウトを学習。",
        point: "商品情報や店舗情報を整理し、閲覧者が必要な情報を探しやすい構成を意識して制作。"
    },

    /* ========================================
       バナー作品
    ======================================== */

    // 7. Photo Contest Banner
    figmaBanner: {
        title: "Photo Contest Banner",
        image: "img/photocontest_banner.png",
        tools: "Figma",
        date: "2026年5月",
        period: "約2時間",
        link: "",
        memo: "ヒューマンアカデミーの授業課題として制作。講師のレクチャーを受けながら、お手本を参考に作成。",
        concept: "バナー制作の基本的な構成や情報の伝え方を学ぶことを目的に制作。",
        design: "文字の大きさや配置、配色、写真とのバランスなど、視認性を意識したデザインを学習。",
        point: "限られたスペースの中で情報を整理し、伝えたい内容を分かりやすく見せる方法を学んだ。",
        category: "banner"
    },

    // 8. Banner 1
    banner1: {
        title: "焼肉食べ放題のバナー",
        image: "img/banner1.png",
        tools: "Adobeソフト(Photoshop、illustrator）",
        date: "2026年5月",
        period: "約3時間",
        link: "",
        memo: "自主制作。実際のチェーン店の広告バナーを参考に、デザインやレイアウトを企画・制作。",
        concept: "焼肉食べ放題の魅力を視覚的に伝え、商品やサービスへの関心を高めることを目的に制作。",
        design: "写真と文字のバランスを意識し、金色のグラデーションを取り入れることで、華やかさとインパクトのあるデザインに仕上げた。",
        point: "文字の視認性と全体のバランスを調整し、食べ放題の魅力や広告の訴求内容が目に留まりやすいよう工夫。",
        category: "banner"
    },

    // 9. Banner 2
    banner2: {
        title: "お菓子の広告",
        image: "img/banner2.png",
        tools: "Adobeソフト(Photoshop、illustrator）",
        date: "2026年6月",
        period: "約2時間",
        link: "",
        memo: "自主制作。テーマの設定からデザイン、レイアウトまで自分で企画・制作。",
        concept: "商品の魅力を引き立て、上質さや特別感を感じてもらうことを目的に制作。",
        design: "緑を基調とした背景と寺院の写真を組み合わせ、和の雰囲気と高級感を表現。異なる素材を組み合わせることで、商品のイメージに合った世界観を演出した。",
        point: "文字の視認性と全体のバランスを調整。金粉の素材も作成して差し色として配置し、華やかさを加えた。",
        category: "banner"
    },

    // 10. Banner 3
    banner3: {
        title: "安芸・瀬戸の新商品の広告",
        image: "img/banner3.png",
        tools: "Adobeソフト(Photoshop、illustrator）",
        date: "2026年8月",
        period: "約2時間",
        link: "",
        memo: "自主制作。「安芸・瀬戸」の新商品を想定し、広告のテーマ設定からデザイン、レイアウトまで企画・制作。",
        concept: "広島のスポーツをモチーフに、商品の魅力と視覚的なインパクト、高級感を伝えることを目的に制作。",
        design: "カープやサンフレッチェをイメージしたエンブレムを加工し、平面的な素材に立体感を持たせるデザインを意識。",
        point: "視覚的なインパクトと上品さの両立を意識し、文字や装飾の配置を工夫することで、商品の魅力が伝わる広告に仕上げた。",
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
