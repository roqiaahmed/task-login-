<template>
  <div class="row">
    <div class="col-md-6 view">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/bug-reporting.91a2a9fd.svg"
              class="d-block w-100"
              alt="..."
            />
            <p>Accelerate Your Entire Mobile Team Workfloow</p>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/overview.c936fa7d.svg"
              class="d-block w-100"
              alt="..."
            />
            <p>Accelerate Your Entire Mobile Team Workflow</p>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/crash-reporting.26e257ae.svg"
              class="d-block w-100"
              alt="..."
            />
            <p>Accelerate Your Entire Mobilephon Team Workfloow</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="login">
        <div class="container">
          <img src="../assets/logo.5c872e96.svg" alt="logo" />
          <h4>Log in to Instabug</h4>
          <div class="d-grid gap-3 brands">
            <button class="btn btn-primary google" type="button">
              <span> <fa :icon="['fab', 'google']" /> </span>google
            </button>
            <button class="btn btn-primary github" type="button">
              <span> <fa :icon="['fab', 'github']" /> </span>github
            </button>
            <button class="btn btn-primary microsoft" type="button">
              <span> <fa :icon="['fab', 'microsoft']" /> </span>microsoft
            </button>
          </div>
          <div class="divider">
            <span>OR</span>
          </div>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Work Email</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="you@company.com"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <span>Forget password? </span>
              <input
                type="password"
                class="form-control"
                placeholder="6+ Characters"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary">log in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style lang="scss">
.view {
  background-color: #00287a;
  height: 100vh;
  padding-bottom: 30px;

  .carousel {
    margin: 20% auto;
    width: 70%;
    height: 75%;

    .carousel-indicators {
      button {
        border-radius: 50%;
        height: 10px;
        width: 10px;
      }
    }

    .carousel-inner {
      p {
        color: #fff;
        margin: 15% auto;
        font-size: 22px;
        font-weight: bold;
      }
    }
  }
}

.login {
  margin: 12% auto;
  width: 60%;
  h4 {
    color: #495466;
  }
  .brands {
    margin: auto;
    color: #fff;

    .google {
      background-color: #4285f4;
      border: none;
      font-weight: bold;
    }
    .github {
      background-color: #000000;
      border: none;
      font-weight: bold;
    }
    .microsoft {
      background-color: #aaa;
      color: #000000;
      border: none;
      font-weight: bold;
    }
    span {
      float: left;
      margin-left: 15px;
      color: #fff;
    }
  }
  .divider {
    background-color: #cdcccd;
    height: 0.5px;
    line-height: 1px;
    margin: 1.5rem auto;

    span {
      background: #fff;
      padding: 0 0.5rem;
      color: #495466;
      font-weight: 700;
    }
  }
  form {
    label {
      float: left;
    }
    span {
      float: right;
    }
  }
}
</style>
