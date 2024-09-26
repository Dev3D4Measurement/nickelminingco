document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav");
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

  // 햄버거 메뉴 토글 기능
  if (hamburgerMenu && nav) {
    hamburgerMenu.addEventListener("click", function () {
      nav.classList.toggle("show");
      hamburgerMenu.classList.toggle("active");
    });
  }

  pageContainer.addEventListener(
    "touchstart",
    function (event) {
      touchStartX = event.changedTouches[0].screenX;
    },
    false
  );

  pageContainer.addEventListener(
    "touchend",
    function (event) {
      touchEndX = event.changedTouches[0].screenX;
      handleSwipe();
    },
    false
  );

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

document.addEventListener("DOMContentLoaded", function() {
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.playbackRate = 0.2; // 5배 느리게 재생
        
        // 비디오 요소와 부모 요소의 배경 강제 제거
        heroVideo.style.background = 'none';
        heroVideo.parentElement.style.background = 'none';
        
        // 비디오 불투명도 강제 설정
        heroVideo.style.opacity = '1';
        
        heroVideo.addEventListener('loadedmetadata', function() {
            console.log('Video metadata loaded');
        });
        
        heroVideo.addEventListener('playing', function() {
            console.log('Video is playing');
        });
        
        heroVideo.addEventListener('error', function(e) {
            console.error('Video error:', e);
            // 오류 발생 시 비디오 재로드 시도
            setTimeout(() => {
                heroVideo.load();
            }, 1000);
        });
    } else {
        console.error('Hero video element not found');
    }
});
document.addEventListener("DOMContentLoaded", function () {
  const heroVideo = document.getElementById("hero-video");
  if (heroVideo) {
    heroVideo.playbackRate = 0.2; // 5배 느리게 재생
  }

  // 기존의 페이지 스와이프 코드 유지
  // ...
});

// 현재 페이지 메뉴 항목에 'active' 클래스 추가
  const currentPage = pages[currentPageIndex];
  const menuItems = document.querySelectorAll(".nav-menu a");
  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("active");
    }
  });

  // Add Image Gallery