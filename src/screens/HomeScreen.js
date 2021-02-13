import data from "../data.js";
import { rating } from "../utilit.js";

const HomeScreen = {
  after_render: () => {
    // INIT AOS ANIMATIONS
    AOS.init();

    // GLIDE SLIDER
    ////////////////////////
    // SLIDER IN HEADER
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      hoverpause: false,
      autoplay: 4000,
      animationDuration: 1500,
    });
    glide.mount();

    ////////////////////////
    // SLIDER PRODUCTS
    const glideProducts = new Glide(".glide-products", {
      type: "carousel",
      perView: 4.2,
      breakpoints: {
        900: { perView: 3.2 },
        700: { perView: 2.5 },
        600: { perView: 2.2 },
        500: { perView: 1.7 },
      },
    });
    glideProducts.mount();

    ////////////////////////
    // SLIDER TESTIMONIALS
    const glideTestimonial = new Glide(".glide-testimonial", {
      type: "carousel",
      perView: 1,
    });
    glideTestimonial.mount();

    ////////////////////////
    // SLIDER TESTIMONIALS
    const glideNews = new Glide(".glide-news", {
      type: "carousel",
      perView: 3,
      autoplay: 3000,
      gap: 30,
      breakpoints: {
        1000: {
          perView: 2,
        },
        700: {
          perView: 1,
        },
      },
    });
    glideNews.mount();

    ////////////////////////
    // SET MENU TOGGLE
    document.getElementById("menu-open-btn").addEventListener("click", () => {
      document.querySelector(".nav__menu").classList.add("active");
    });
    document.getElementById("menu-close-btn").addEventListener("click", () => {
      document.querySelector(".nav__menu").classList.remove("active");
    });
    document.querySelectorAll(".nav__link").forEach((link) =>
      link.addEventListener("click", () => {
        document.querySelector(".nav__menu").classList.remove("active");
      })
    );

    const productTarget = document.querySelectorAll(".product-target");
    productTarget.forEach((item) => {
      item.addEventListener("click", (e) => {
        //set active class
        productTarget.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");

        ////////////////////
        const { products } = data;
        const catigory = e.target.getAttribute("data-target");
        let productsToShow = [];
        catigory == "allProducts"
          ? (productsToShow = [...products])
          : (productsToShow = [...products].filter(
              (product) => product.category == catigory
            ));
        let output = "";
        productsToShow.map((product) => {
          output += `
            <div class="product" data-aos="fade-up">
                <div class="product__box-img">
                    <img
                    src="${product.image}"
                    alt="${product.name}"
                    />
                </div>
                <div class="product__info">
                    <p>${product.name}</p>
                    ${rating(product.rating)}
                    <p>$${product.price}</p>
                </div>
                <button class="btn btn-primary">add to cart</button>
                <ul class="product__quick-list">
                    <li>
                    <a href="#"><i class="far fa-eye"></i></a>
                    </li>
                    <li>
                    <a href="#"><i class="far fa-heart"></i></a>
                    </li>
                    <li>
                    <a href="#"><i class="fas fa-exchange-alt"></i></a>
                    </li>
                </ul>
            </div>
          `;
        });
        document.getElementById("products-showing").innerHTML = output;
      });
    });

    /////////////////////
    // set popup
    const popup = document.querySelector(".popup"),
      popupCloseBtn = document.querySelector(".popup__close");
    setTimeout(() => {
      popup.classList.add("active");
    }, 6000);
    popupCloseBtn.addEventListener("click", () =>
      popup.classList.remove("active")
    );
  },
  // RENDER FUNCTION
  render: () => {
    const { products } = data;
    const lastFiveProducts = [...products].reverse().splice(0, 5);

    return `
    <!-- SLIDER -->
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <!-- slide 1 -->
          <li class="glide__slide">
            <div class="glide__box">
              <div class="glide__box__text">
                <span>new inspiration 2021</span>
                <h2 class="heading-2">phone made for you!</h2>
                <p>Trending from mobile and headphone style collection</p>
                <a href="/#/" class="btn btn-primary dark">shop now</a>
              </div>
              <div class="glide__box__img">
                <img
                  src="images/banner_01.png"
                  alt="banner image"
                  class="glide__img"
                />
              </div>
            </div>
          </li>

          <!-- slide 2 -->
          <li class="glide__slide">
            <div class="glide__box">
              <div class="glide__box__text">
                <span>new inspiration 2021</span>
                <h2 class="heading-2">cell phone top deals!</h2>
                <p>Check out the latest deals on cell phones</p>
                <a href="/#/" class="btn btn-primary dark">shop now</a>
              </div>
              <div class="glide__box__img">
                <img
                  src="images/banner_02.png"
                  alt="banner image"
                  class="glide__img"
                />
              </div>
            </div>
          </li>
        </ul>

        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            <i class="fa fa-chevron-left"></i>
          </button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            <i class="fa fa-chevron-right"></i>
          </button>
        </div>

        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0"></button>
          <button class="glide__bullet" data-glide-dir="=1"></button>
        </div>
      </div>
    </div>
    <!-- COLLECTION -->
    <section class="collection"  id="category">
      <div class="container flex">
        <!-- ITEM 1 -->
        <div class="collection__item" data-aos="fade-up">
          <div class="collection__item__img-box">
            <img src="images/collection_01.png" alt="collection image" />
          </div>
          <div class="collection__item__text">
            <span>new color introduced</span>
            <h3 class="heading-3">headphones</h3>
            <a href="#" class="btn btn-secondary">shop now</a>
          </div>
        </div>
        <!-- ITEM 2 -->
        <div class="collection__item" data-aos="fade-up">
          <div class="collection__item__img-box">
            <img src="images/collection_02.png" alt="collection image" />
          </div>
          <div class="collection__item__text">
            <span>phone device preset</span>
            <h3 class="heading-3">smartphones</h3>
            <a href="#" class="btn btn-secondary">shop now</a>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="latest-products">
        <h4 class="heading-4 bg-light active mb-small" data-aos="fade-up">
          <span class="dot"></span> latest products
        </h4>

        <div class="glide-products">
          <!-- GLIDE ARROWS CONTROL -->
          <div
            class="glide-products__arrows"
            data-glide-el="controls"
            data-aos="fade-up"
          >
            <button
              class="glide-products__arrow glide-products__arrow--left"
              data-glide-dir="<"
            >
              <i class="fas fa-long-arrow-alt-left"></i>
            </button>
            <button
              class="glide-products__arrow glide-products__arrow--right"
              data-glide-dir=">"
            >
              <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div class="glide__track" data-glide-el="track">
            <div class="glide__slides">
              <!-- PRODUCT 1 -->
              ${lastFiveProducts
                .map(
                  (product) => `
              <div class="glide__slide product" data-aos="fade-up">
              <div class="product__box-img">
                <img
                  src="${product.image}"
                  alt="${product.name}"
                />
              </div>
              <div class="product__info">
                <p>${product.name}</p>
                ${rating(product.rating)}
                <p>$${product.price}</p>
              </div>
              <button class="btn btn-primary">add to cart</button>
              <ul class="product__quick-list">
                <li>
                  <a href="#"><i class="far fa-eye"></i></a>
                </li>
                <li>
                  <a href="#"><i class="far fa-heart"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-exchange-alt"></i></a>
                </li>
              </ul>
            </div>
              `
                )
                .join("\n")}

            </div>
          </div>
        </div>
      </div>

      <!-- ALL PRODUCTS -->
      <div class="all-products">
        <!-- HEADING -->
        <div class="all-products__heading bg-light" data-aos="fade-up">
          <h4 class="heading-4 product-target active" data-target="allProducts">
            <span class="dot"></span> all products
          </h4>
          <h4 class="heading-4 product-target" data-target="iphone">
            <span class="dot"></span> iphone
          </h4>
          <h4 class="heading-4 product-target" data-target="samsung">
            <span class="dot"></span> samsung
          </h4>
          <h4 class="heading-4 product-target" data-target="headphone">
            <span class="dot"></span> headphone
          </h4>
        </div>
        <!-- PRODUCTS -->
        <div class="products-container" id="products-showing">
            ${products
              .map(
                (product) => `
                <div class="product" data-aos="fade-up">
                <div class="product__box-img">
                  <img
                    src="${product.image}"
                    alt="${product.name}"
                  />
                </div>
                <div class="product__info">
                  <p>${product.name}</p>
                  ${rating(product.rating)}
                  <p>$${product.price}</p>
                </div>
                <button class="btn btn-primary">add to cart</button>
                <ul class="product__quick-list">
                  <li>
                    <a href="#"><i class="far fa-eye"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="far fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fas fa-exchange-alt"></i></a>
                  </li>
                </ul>
            </div>
                `
              )
              .join("\n")}
            </div>
        </div>
    </div>

    <section class="facility" data-aos="fade-up">
      <div class="container flex">
        <div class="facility__item">
          <span><i class="fa fa-plane"></i></span>
          <p>FREE SHIPPING WORLD WIDE</p>
        </div>
        <div class="facility__item">
          <span><i class="fa fa-credit-card"></i></span>
          <p>100% MONEY BACK GUARANTEE</p>
        </div>
        <div class="facility__item">
          <span><i class="far fa-credit-card"></i></span>
          <p>MANY PAYMENT GATEWAYS</p>
        </div>
        <div class="facility__item">
          <span><i class="fa fa-headphones-alt"></i></span>
          <p>24/7 ONLINE SUPPORT</p>
        </div>
      </div>
    </section>

    <section class="testimonial" data-aos="fade-up">
      <div class="container">
        <div class="glide-testimonial">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide testimonial__item">
                <div class="testimonial__box-img">
                  <img src="images/profile1.jpg" alt="testimonial photo" />
                </div>
                <p class="testimonial__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, perferendis voluptatum. Saepe ut vel ad placeat
                  maiores dicta nam alias neque ea nostrum excepturi, atque
                  dolor ipsa officiis eum itaque temporibus deserunt quidem
                  magnam vero. Excepturi vitae deserunt quod optio.
                </p>
                <span class="testimonial__name"> john smith </span>
                <span class="testimonial__info"> founder at apple </span>
              </li>

              <li class="glide__slide testimonial__item">
                <div class="testimonial__box-img">
                  <img src="images/profile2.jpg" alt="testimonial photo" />
                </div>
                <p class="testimonial__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores blanditiis consectetur officia recusandae illum
                  omnis assumenda itaque earum veniam facilis. Reiciendis
                  perspiciatis, nisi totam vel molestias harum quis voluptatem
                  officia ut, nostrum voluptatibus dolorem architecto!
                </p>
                <span class="testimonial__name"> sara machin </span>
                <span class="testimonial__info"> founder at apple </span>
              </li>

              <li class="glide__slide testimonial__item">
                <div class="testimonial__box-img">
                  <img src="images/profile3.jpg" alt="testimonial photo" />
                </div>
                <p class="testimonial__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, saepe! Debitis magnam ea velit id ratione unde quis
                  odio labore quam veniam porro temporibus quibusdam quas vel
                  impedit, animi incidunt tenetur! Libero inventore, impedit
                  eos nostrum omnis sint beatae ad vitae. Sit ipsum inventore
                  vitae.
                </p>
                <span class="testimonial__name"> mikel photen </span>
                <span class="testimonial__info"> founder at samsung </span>
              </li>

              <li class="glide__slide testimonial__item">
                <div class="testimonial__box-img">
                  <img src="images/profile4.jpg" alt="testimonial photo" />
                </div>
                <p class="testimonial__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Odio amet dicta ipsa repellendus? Aliquam expedita,
                  praesentium doloribus iure quod sequi.
                </p>
                <span class="testimonial__name"> jack weliam </span>
                <span class="testimonial__info"> founder at oppo </span>
              </li>
            </ul>
          </div>
          <div class="testimonial__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
            <button class="glide__bullet" data-glide-dir="=3"></button>
          </div>
        </div>
      </div>
    </section>

    <section class="news" data-aos="fade-up" id="blog">
      <div class="container">
        <h4 class="heading-4 bg-light active">
          <span class="dot"></span> phone news
        </h4>
        <div class="glide-news">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide news__item">
                <div class="news__box-img">
                  <img src="images/news1.jpg" alt="" />
                </div>
                <div class="news__content">
                  <h3 class="heading-3 news__heading">
                    styling white shirts after a cool day
                  </h3>
                  <span class="news__creator">by admin</span>
                  <p class="news__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae nemo distinctio quasi, magni sit quod possimus
                    fugiat nisi, earum velit inventore rem laboriosam, maxime
                    in?
                  </p>
                  <a href="#" class="btn btn-primary">read more</a>
                </div>
              </li>

              <li class="glide__slide news__item">
                <div class="news__box-img">
                  <img src="images/news2.jpg" alt="" />
                </div>
                <div class="news__content">
                  <h3 class="heading-3 news__heading">
                    styling white shirts after a cool day
                  </h3>
                  <span class="news__creator">by admin</span>
                  <p class="news__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae nemo distinctio quasi, magni sit quod possimus
                    fugiat nisi, earum velit inventore rem laboriosam, maxime
                    in?
                  </p>
                  <a href="#" class="btn btn-primary">read more</a>
                </div>
              </li>

              <li class="glide__slide news__item">
                <div class="news__box-img">
                  <img src="images/news3.jpg" alt="" />
                </div>
                <div class="news__content">
                  <h3 class="heading-3 news__heading">
                    styling white shirts after a cool day
                  </h3>
                  <span class="news__creator">by admin</span>
                  <p class="news__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae nemo distinctio quasi, magni sit quod possimus
                    fugiat nisi, earum velit inventore rem laboriosam, maxime
                    in?
                  </p>
                  <a href="#" class="btn btn-primary">read more</a>
                </div>
              </li>

              <li class="glide__slide news__item">
                <div class="news__box-img">
                  <img src="images/news4.jpg" alt="" />
                </div>
                <div class="news__content">
                  <h3 class="heading-3 news__heading">
                    styling white shirts after a cool day
                  </h3>
                  <span class="news__creator">by admin</span>
                  <p class="news__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae nemo distinctio quasi, magni sit quod possimus
                    fugiat nisi, earum velit inventore rem laboriosam, maxime
                    in?
                  </p>
                  <a href="#" class="btn btn-primary">read more</a>
                </div>
              </li>

              <li class="glide__slide news__item">
                <div class="news__box-img">
                  <img src="images/news5.jpg" alt="" />
                </div>
                <div class="news__content">
                  <h3 class="heading-3 news__heading">
                    styling white shirts after a cool day
                  </h3>
                  <span class="news__creator">by admin</span>
                  <p class="news__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae nemo distinctio quasi, magni sit quod possimus
                    fugiat nisi, earum velit inventore rem laboriosam, maxime
                    in?
                  </p>
                  <a href="#" class="btn btn-primary">read more</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="news__subscribe" data-aos="fade-up">
          <div class="news__subscribe__text">
            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            <span
              >A short sentence describing what someone will receive by
              subscribing
            </span>
          </div>
          <form class="form">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <input type="submit" value="subscribe" />
          </form>
        </div>
      </div>
    </section>
        `;
  },
};

export default HomeScreen;
