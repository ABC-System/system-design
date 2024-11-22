document.addEventListener("DOMContentLoaded", function() {
    // タブの切り替え機能
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            const tab_id = tab.getAttribute("data-tab");

            tabs.forEach(function(item) {
                item.classList.remove("current");
            });

            contents.forEach(function(item) {
                item.classList.remove("current");
            });

            tab.classList.add("current");
            document.getElementById(tab_id).classList.add("current");
        });
    });

    // フローチャートの機能を追加
    const flowTab = document.getElementById('tab-2');
    if (flowTab) {
        const flowSteps = flowTab.querySelectorAll('.flow-step');
        const flowContents = flowTab.querySelectorAll('.flow-content');

        flowSteps.forEach(function(step, index) {
            step.addEventListener('click', function() {
                // 全てのステップとコンテンツからactiveクラスを削除
                flowSteps.forEach(s => s.classList.remove('active'));
                flowContents.forEach(c => c.classList.remove('active'));

                // クリックされたステップと対応するコンテンツにactiveクラスを追加
                step.classList.add('active');
                flowContents[index].classList.add('active');
            });
        });

        // 初期表示として最初のステップをアクティブにする
        if (flowSteps.length > 0 && flowContents.length > 0) {
            flowSteps[0].classList.add('active');
            flowContents[0].classList.add('active');
        }
    }

    // スライダーの初期設定
    const slideIndices = [1, 1, 1, 1];
    const slideId = ["slider-justdb", "slider-nidashi", "slider-schedule", "slider-teams"];
    const slidesArray = [];

    // スライダーのセットアップ
    slideId.forEach(function(id, index) {
        const slider = document.getElementById(id);
        if (slider) {
            slidesArray[index] = slider.querySelectorAll('.slides img');
            showSlides(1, index);

            // 矢印ボタンにイベントリスナーを追加
            const prevButton = slider.querySelector('.prev');
            const nextButton = slider.querySelector('.next');

            prevButton.addEventListener('click', function() {
                plusSlides(-1, index);
            });

            nextButton.addEventListener('click', function() {
                plusSlides(1, index);
            });
        }
    });

    // スライドを進める関数
    function plusSlides(n, index) {
        showSlides(slideIndices[index] += n, index);
    }

    // スライドを表示する関数
    function showSlides(n, index) {
        const slides = slidesArray[index];
        if (n > slides.length) { slideIndices[index] = 1 }
        if (n < 1) { slideIndices[index] = slides.length }
        slides.forEach(function(slide) {
            slide.style.display = "none";
        });
        slides[slideIndices[index]-1].style.display = "block";
    }
});
