<template>
  <div class="container">
    <router-view />
    <div class="row">
      <main class="col-12 col-lg-9">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <h1>{{ title }}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-9 text-left">
              <h2>Trends</h2>
            </div>
            <div class="col-3">
              <router-link class="btn btn-primary" to="/trends"
                >Discover more</router-link
              >
            </div>
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src="https://wallpapercave.com/wp/wp4074461.jpg" class="d-block w-100" alt="Venom" />
                  <div class="carousel-caption d-none d-md-block movie-description">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="https://wallpapercave.com/wp/wp3982534.jpg" class="d-block w-100" alt="Avengers" />
                  <div class="carousel-caption d-none d-md-block movie-description">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://wallpaper.dog/large/20493700.jpg" class="d-block w-100" alt="Thor" />
                  <div class="carousel-caption d-none d-md-block movie-description">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <aside class="col-12 col-lg-3">
        <div class="card">
          <div class="card-header">Categories</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Action</li>
            <li class="list-group-item">Drama</li>
            <li class="list-group-item">Thriller</li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      msg: "Hello Vue!",
    };
  },
};
</script>


<style lang="scss">
@import '@/assets/styles/_variables.scss';
.movie-description{
  background-color: rgba($color: $secondary, $alpha: 0.4);
  padding: 1rem;
  border-radius: 15px 0 15px 0;
}
</style>