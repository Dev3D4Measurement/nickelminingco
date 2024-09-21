document.addEventListener("DOMContentLoaded", function () {
  const pageContainer = document.body; // 전체 body에 이벤트 리스너 적용
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
  console.log("Current page index:", currentPageIndex);

  pageContainer.addEventListener(
    "touchstart",
    function (event) {
      touchStartX = event.changedTouches[0].screenX;
      console.log("Touch start:", touchStartX);
    },
    false
  );

  pageContainer.addEventListener(
    "touchend",
    function (event) {
      touchEndX = event.changedTouches[0].screenX;
      console.log("Touch end:", touchEndX);
      handleSwipe();
    },
    false
  );

  function handleSwipe() {
    const swipeThreshold = 100; // 최소 스와이프 거리
    const swipeDistance = touchEndX - touchStartX;
    console.log("Swipe distance:", swipeDistance);

    if (Math.abs(swipeDistance) < swipeThreshold) {
      console.log("Swipe distance too small, ignoring");
      return; // 스와이프 거리가 너무 작으면 무시
    }

    if (swipeDistance < 0) {
      // 왼쪽으로 스와이프
      if (currentPageIndex < pages.length - 1) {
        console.log("Navigating to next page");
        window.location.href = pages[currentPageIndex + 1];
      } else {
        console.log("Already at last page");
      }
    } else {
      // 오른쪽으로 스와이프
      if (currentPageIndex > 0) {
        console.log("Navigating to previous page");
        window.location.href = pages[currentPageIndex - 1];
      } else {
        console.log("Already at first page");
      }
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
