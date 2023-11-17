/** @format */

export default function TestingFooter() {
  return (
    <div className="min-h-screen flex flex-col">
      <div class="grow"></div>

      <footer className="bg-[#555] text-[#bbb] leading-normal">
        {/* <!-- Footer main --> */}
        <section className="px-[1.25rem] py-[1.875rem] flex flex-wrap">
          <div class="p-[1.25rem] mim-w-[12.5rem] justify-around md:justify-evenly">
            <h2 class="text-[#fff] text-[1.375rem] pb-[0.625rem]">About</h2>
            <ul>
              <li>
                <a href="#" className="text-[#eee] hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div class="p-[1.25rem] mim-w-[12.5rem] justify-around md:justify-evenly">
            <h2 class="text-[#fff] text-[1.375rem] pb-[0.625rem]">Resources</h2>
            <ul>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">eBooks</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>

          <div class="p-[1.25rem] mim-w-[12.5rem] justify-around md:justify-evenly">
            <h2 class="text-[#fff] text-[1.375rem] pb-[0.625rem]">Contact</h2>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </div>

          <div class="p-[1.25rem] mim-w-[12.5rem]">
            <h2 class="text-[#fff] text-[1.375rem] pb-[0.625rem]">
              Stay Updated
            </h2>
            <p>Subscribe to our newsletter to get our latest news.</p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </section>

        {/* <!-- Footer social --> */}
        <section class="ft-social">
          <ul class="ft-social-list">
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </section>

        {/* <!-- Footer legal --> */}
        <section class="ft-legal">
          <ul class="ft-legal-list">
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>&copy; 2019 Copyright Nowrap Inc.</li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
