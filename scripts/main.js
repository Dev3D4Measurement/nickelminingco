
  // Scroll event
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.querySelector("header").classList.add("scrolled");
    } else {
      document.querySelector("header").classList.remove("scrolled");
    }
  });

  // Highlight current page menu item
  const currentPage = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll("header nav ul li a");
  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("active");
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('header nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('show');
        this.classList.toggle('active');
    });

    // 현재 페이지 메뉴 항목 강조
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const menuItems = document.querySelectorAll('.nav-menu a');
    menuItems.forEach(item => {
        if(item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});

    // 스크롤 이벤트
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 창 크기 변경 시 메뉴 상태 리셋
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

   document.addEventListener("DOMContentLoaded", function () {
     const contactForm = document.getElementById("contactForm");
     const submitBtn = document.getElementById("submitBtn");

     if (contactForm && submitBtn) {
       contactForm.addEventListener("submit", function (e) {
         e.preventDefault();

         const name = document.getElementById("name").value;
         const email = document.getElementById("email").value;
         const subject = document.getElementById("subject").value;
         const message = document.getElementById("message").value;

         const mailtoLink = `mailto:thewjk1629@gmail.com?subject=${encodeURIComponent(
           subject
         )}&body=Name: ${encodeURIComponent(
           name
         )}%0D%0AEmail: ${encodeURIComponent(
           email
         )}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

         // Create a hidden link element
         const linkElement = document.createElement("a");
         linkElement.href = mailtoLink;
         linkElement.style.display = "none";
         document.body.appendChild(linkElement);

         // Simulate a click on the link
         linkElement.click();

         // Remove the link element
         document.body.removeChild(linkElement);

         // Reset the form
         contactForm.reset();

         // Provide feedback to the user
         alert("Thank you for your message. We will get back to you soon!");
         alert(
           "If your email client does not open, please send an email directly to thewjk1629@gmail.com"
         );
       });

       // Add button click event
       submitBtn.addEventListener("click", function (e) {
         if (contactForm.checkValidity()) {
           e.preventDefault();
           contactForm.dispatchEvent(new Event("submit"));
         }
       });
     }
   });