export const rating = (num) => {
  return `
          <div class="rating">
              ${
                num < 1
                  ? `<i class="far fa-star"></i>`
                  : `<i class="fas fa-star"></i>`
              }
              ${
                num < 2
                  ? `<i class="far fa-star"></i>`
                  : `<i class="fas fa-star"></i>`
              }
              ${
                num < 3
                  ? `<i class="far fa-star"></i>`
                  : `<i class="fas fa-star"></i>`
              }
              ${
                num < 4
                  ? `<i class="far fa-star"></i>`
                  : `<i class="fas fa-star"></i>`
              }
              ${
                num < 5
                  ? `<i class="far fa-star"></i>`
                  : `<i class="fas fa-star"></i>`
              }
          </div>
        `;
};

export const scrollTop = () => {
  const scrollTopBtn = document.querySelector(".scrollTop");
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.opacity = "1";
  } else {
    scrollTopBtn.style.opacity = "0";
  }
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};
