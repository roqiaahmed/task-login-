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
              <!-- <span><fa :icon="['fab', 'google']" /> </span> -->
              google
            </button>
            <button class="btn btn-primary github" type="button">
              <!-- <span> <fa :icon="['fab', 'github']" /> </span> -->
              github
            </button>
            <button class="btn btn-primary microsoft" type="button">
              <!-- <span> <fa :icon="['fab', 'microsoft']" /> </span> -->
              microsoft
            </button>
          </div>
          <div class="divider">
            <span>OR</span>
          </div>
          <form>
            <div class="md-3">
              <div class="error-message" :class="{ errorr: erroor }">
                <p>Your email and/or password are incorrect</p>
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Work Email</label
              >
              <input
                type="email"
                class="form-control"
                :class="[v$.email.$error ? 'fildinput' : '']"
                id="exampleInputEmail1"
                placeholder="you@company.com"
                aria-describedby="emailHelp"
                v-model="state.email"
              />
              <div class="error" v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <span>Forget password? </span>
              <input
                v-model="state.password"
                type="password"
                class="form-control"
                :class="[v$.password.$error ? 'fildinput' : '']"
                placeholder="6+ Characters"
                id="exampleInputPassword1"
              />
              <div class="error" v-if="v$.password.$error">
                {{ v$.password.$errors[0].$message }}
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="signupnow()"
              @click="newUser"
              :disabled="
                v$.password.$error ||
                v$.email.$error ||
                !state.email ||
                !state.password
              "
            >
              log in
            </button>
          </form>
          <div class="info">
            <span class="signup"
              >Don't have an acconunt ? <a href="#">sign up</a>
            </span>
            <span class="sso"><a href="#">login via SSO</a></span>
          </div>
          <div class="companies">
            <h5>Trusted by the top companies</h5>
            <ul>
              <li>
                <img src="../assets/lyft-full-logo.dae8f3d6.svg" alt="" />
              </li>
              <li>
                <img
                  src="../assets/buzzfeed-full-logo.2833d9f1.svg"
                  alt="buzzfeed"
                />
              </li>
              <li>
                <img src="../assets/asana-full-logo.9ae9c7da.svg" alt="asana" />
              </li>
              <li>
                <img
                  src="../assets/one-plus-logo.c52c0338.svg"
                  alt="oneplus"
                  style="width: 106px"
                />
              </li>
              <li>
                <img
                  src="../assets/house-party-logo.e67b3abc.svg"
                  alt="houseparty"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/index";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { email, required, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "HomeView",
  setup() {
    const router = useRouter();
    const user = ref();
    const auth = getAuth();
    const erroor = ref(true);
    console.log(erroor);
    const state = reactive({
      email: "",
      password: "",
    });
    const newUser = () => {
      signInWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
          router.push({ path: "/about" });
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          // erroor.value.push(errorMessage);
          erroor.value = false;
          console.log(erroor);
          console.log("error", errorMessage);
        });
    };
    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(6) },
      };
    });

    const v$ = useVuelidate(rules, state);
    const signupnow = () => {
      v$.value.$touch();
      if (!v$.value.$error) {
        return;
      } else {
        console.log("error");
      }
    };

    return {
      erroor,
      state,
      db,
      auth,
      newUser,
      signupnow,
      v$,
      user,
    };
  },
};
</script>

<style lang="scss">
.view {
  background-color: #00287a;
  height: 100%;
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
  margin: 15% auto;
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
    }
  }

  .info {
    font-size: 13px;

    a {
      text-decoration: none;
    }

    .signup {
      float: left;
    }

    span {
      float: right;
    }
  }

  form {
    .errorr {
      display: none;
    }
    .error-message {
      // display: none;
      background: #fce6e2;
      color: #606778;
      text-align: start;
      height: 2.5rem;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.25);
      font-weight: bold;
      margin-bottom: 10px;
    }
    .fildinput {
      border: #f00 1px solid;
    }

    .error {
      font-size: 16px;
      color: #f00;
    }

    label {
      float: left;
      margin-bottom: 0.5rem;
      font-size: 13px;
      font-weight: bold;
      color: #465266;
    }

    span {
      float: right;
      font-size: 13px;
      color: #a1a7b2;
      font-weight: bold;
    }

    button {
      width: 100%;
      background-color: #0089e5;
      font-weight: bolder;
    }
  }

  .companies {
    margin-top: 31px;
    color: #999999;

    h5 {
      font-size: 17px;
    }

    ul {
      display: flex;
      padding-left: 0;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      gap: 0.6rem;
    }
  }
}
</style>
