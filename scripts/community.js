document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector(".create-post textarea");
  const postActions = document.querySelector(".post-actions");
  const postsContainer = document.querySelector(".posts");

  textarea.addEventListener("focus", function () {
    postActions.style.display = "flex";
  });

  postActions.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const action = e.target.textContent.toLowerCase();
      const content = textarea.value.trim();

      if (content) {
        const post = document.createElement("div");
        post.className = "post";
        post.innerHTML = `
                    <h3>${action.charAt(0).toUpperCase() + action.slice(1)}</h3>
                    <p>${content}</p>
                `;
        postsContainer.prepend(post);
        textarea.value = "";
      }
    }
  });
});
