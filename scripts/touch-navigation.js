document.addEventListener("DOMContentLoaded", function () {
  const pageContainer = document.body;
  let touchStartX = 0;
  let touchEndX = 0;

  const pages = [
    "index.html",
    "about.html",
    "operations.html",
    "community.html",
    "contact.html",
  ];

  let currentPageIndex = pages.indexOf(
    window.location.pathname.split("/").pop() || "index.html"
  );

  if (pageContainer) {
    pageContainer.addEventListener(
      "touchstart",
      function (event) {
        touchStartX = event.changedTouches[0].screenX;
        // 스와이프 시작 시 클래스 추가
        pageContainer.classList.add("swiping");
      },
      false
    );

    pageContainer.addEventListener(
      "touchmove",
      function (event) {
        const currentX = event.changedTouches[0].screenX;
        const diffX = touchStartX - currentX;

        if (diffX > 5) {
          pageContainer.classList.add("swiping-left");
          pageContainer.classList.remove("swiping-right");
        } else if (diffX < -5) {
          pageContainer.classList.add("swiping-right");
          pageContainer.classList.remove("swiping-left");
        }
      },
      false
    );

    pageContainer.addEventListener(
      "touchend",
      function (event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
        // 스와이프 종료 시 클래스 제거
        pageContainer.classList.remove(
          "swiping",
          "swiping-left",
          "swiping-right"
        );
      },
      false
    );
  }

  function handleSwipe() {
    const swipeThreshold = 100;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) < swipeThreshold) {
      return;
    }

    if (swipeDistance < 0 && currentPageIndex < pages.length - 1) {
      window.location.href = pages[currentPageIndex + 1];
    } else if (swipeDistance > 0 && currentPageIndex > 0) {
      window.location.href = pages[currentPageIndex - 1];
    }
  }

  // 현재 페이지 메뉴 항목에 'active' 클래스 추가
  const currentPage = pages[currentPageIndex];
  const menuItems = document.querySelectorAll(".nav-menu a");
  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("active");
    }
  });
});
