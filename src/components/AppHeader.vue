<template>
  <div class="sticky-top fixed-top">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!-- Container wrapper -->
      <div class="container">
        <!-- Navbar brand -->
        <!-- <a class="navbar-brand me-2" href="https://mdbgo.com/">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="16"
            alt="MDB Logo"
            loading="lazy"
            style="margin-top: -1px"
          />
        </a> -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">{{ this.$store.getters.webname }}</a>
          </li>
        </ul>

        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i class="bi bi-list"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="navbar-collapse collapse" id="navbar">
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">{{ this.$store.getters.webname }}</a>
            </li> -->
          </ul>
          <!-- <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button> -->

          <!-- Left links -->
          <div class="d-flex align-items-center">
            <router-link
              to="/"
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
            >
              หน้าบ้าน
            </router-link>

            <!-- <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              disabled
            >
              บทความ
            </button> -->

            <a
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              :href="this.$store.getters.social_line"
            >
              ติดต่อเรา
            </a>

            <button
              type="button"
              class="btn btn-warning mx-1"
              data-bs-toggle="modal"
              data-bs-target="#modalRegisterID"
              @click="clickback"
            >
              <i class="bi bi-person-plus-fill"></i>
              สมัครสมาชิก
            </button>

            <button
              type="button"
              class="btn btn-warning mx-1"
              data-bs-toggle="modal"
              data-bs-target="#modalLoginID"
            >
              <i class="bi bi-box-arrow-in-right"></i>
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </div>

  <!-- Collapsible offcanvas -->
  <div
    class="offcanvas offcanvas-end bg-dark"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <!-- Left links -->
    <div class="offcanvas-header">
      <li class="nav-item">
        <h1 class="text-decoration-none link-light" data-bs-dismiss="offcanvas">
          {{ this.$store.getters.webname }}
        </h1>
      </li>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <!-- Left links -->
    <div class="offcanvas-body">
      <div class="d-flex align-items-center">
        <ul data-bs-dismiss="offcanvas">
          <li>
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
            >
              <i class="bi bi-house-fill mx-3" style="font-size: 2rem"></i>
              หน้าบ้าน
            </button>
          </li>
          <!-- <li>
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              disabled
            >
              <i class="bi bi-book mx-3" style="font-size: 2rem"></i>
              บทความ
            </button>
          </li> -->
          <li>
            <a
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              :href="this.$store.getters.social_line"
            >
              <i
                class="bi bi-telephone-forward-fill mx-3"
                style="font-size: 2rem"
              ></i>
              ติดต่อเรา
            </a>
          </li>
          <li class="mb-3 mt-2">
            <button
              type="button"
              id="register"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalRegisterID"
              @click="document.querySelector('.swiper-button-prev').click()"
            >
              <i
                class="bi bi-person-plus-fill mx-3"
                style="font-size: 2rem"
              ></i>
              สมัครสมาชิก
            </button>
          </li>
          <li class="mb-3 mt-2">
            <button
              type="button"
              id="login"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalLoginID"
            >
              <i
                class="bi bi-box-arrow-in-right mx-3"
                style="font-size: 2rem"
              ></i>
              เข้าสู่ระบบ
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="offcanvas-footer">
        <ul class="text-decoration-none link-light mx-3 my-4">
          <strong>ติดต่อผ่านช่องทางออนไลน์</strong>
          <p class="mb-3">
            <a
              :href="this.$store.getters.social_line"
              class="link-warning"
              data-bs-dismiss="offcanvas"
            >
              {{ this.$store.getters.webname }}
            </a>
          </p>
          <span>
            <img fluid :src="imgSocial.facebook" width="50" class="ms-1 me-1" />
            <img
              fluid
              :src="imgSocial.instagram"
              width="50"
              class="ms-1 me-1"
            />
            <img fluid :src="imgSocial.line" width="50" class="ms-1 me-1" />
            <img fluid :src="imgSocial.telegram" width="50" class="ms-1 me-1" />
            <img fluid :src="imgSocial.twitter" width="50" class="ms-1 me-1" />
            <img fluid :src="imgSocial.youtube" width="50" class="ms-1 me-1" />
          </span>
        </ul>
      </div>
    </div>
  </div>

  <!-- Modal - Register -->
  <div
    class="modal fade"
    id="modalRegisterID"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalRegister"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="modalRegister">
            <i class="bi bi-file-earmark-person"></i>
            สมัครสมาชิก
          </h5>
          <button
            type="button"
            id="btnclose"
            class="btn-close btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="clearValue"
          ></button>
        </div>
        <div class="modal-body">
          <Register />
        </div>
      </div>
    </div>
  </div>

  <!-- Modal - Login -->
  <div
    class="modal fade modal"
    id="modalLoginID"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalRegister"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="modalRegister">
            <i class="bi bi-link-45deg"></i>
            เข้าสู่ระบบ
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="clearValue"
          ></button>
        </div>
        <div class="modal-body">
          <Login />
          <hr />
          <div class="container">
            <div class="d-grid gap-2">
              <button
                type="button"
                id="loginbtn"
                class="btn btn-warning"
                data-bs-dismiss="modal"
                @click="login"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
          <hr />
          <div class="row mb-3">
            <div class="col justify-content-start">
              <button
                class="btn btn-link"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modalRegisterID"
              >
                สมัครสมาชิก
              </button>
            </div>
            <div class="col d-flex justify-content-md-end">
              <button class="btn btn-link" type="button">
                ต้องการความช่วยเหลือ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imgSocialMedia as imgSocial } from '@/assets/images/social'
import axios from 'axios'
import Swal from 'sweetalert2'
import Register from './../components/Register.vue'
import Login from './../components/Login.vue'

export default {
  name: 'AppHeader',
  data() {
    return {
      ipinfo: {},
    }
  },
  setup() {
    return {
      imgSocial,
    }
  },
  components: {
    Register,
    Login,
  },
  async mounted() {
    this.getvanip()
  },
  methods: {
    clickback() {
      setTimeout(function () {
        document.querySelector('.swiper-button-prev').click()
        document.querySelector('.swiper-button-prev').click()
      }, 500)
    },
    async getvanip() {
      await axios.get('https://ipinfo.io/json').then((response) => {
        this.ipinfo = response.data
        console.log('ipinfo => ', this.ipinfo)
      })
    },
    clearValue() {
      this.$store.commit('clearall')
    },
    // -----------login-----------//
    async login() {
      let phonenumber = /^\d+$/.test(this.$store.getters.phonenumber)
      let pin = /^\d+$/.test(this.$store.getters.pin)
      if (
        this.$store.getters.phonenumber === '' ||
        this.$store.getters.phonenumber.length !== 10 ||
        this.$store.getters.phonenumber.charAt(0) != 0
      ) {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่หมายเลขโทรศัพท์ให้ถูกต้อง',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else if (phonenumber == false) {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่หมายเลขโทรศัพท์เป็นตัวเลขเท่านั้น',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else if (
        this.$store.getters.pin === '' ||
        this.$store.getters.pin.length !== 4
      ) {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่รหัสลับ 4 ตัว',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else if (pin == false) {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่รหัสลับเป็นตัวเลขเท่านั้น',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else {
        this.$store.commit('setapiname', 11005)
        this.$store.commit('setAPI')
        await axios
          .post(this.$store.getters.API, {
            tel: this.$store.getters.phonenumber,
            pin: this.$store.getters.pin,
          })
          .then((response) => {
            console.log(response.data)
            if (response.data.status == '200') {
              this.$store.commit('clearall')
              sessionStorage.setItem('token', response.data.result.token)
              this.$store.commit('settoken', response.data.result.token)
              console.log(sessionStorage.getItem('token'))
              Swal.fire({
                title: 'สำเร็จ!!!',
                text: 'เข้าสู่ระบบสำเร็จ ยินดีต้อนรับกลับค่ะ',
                icon: 'success',
                confirmButtonText: 'ตกลง',
              })
              this.$router.push('/member')
            } else {
              Swal.fire({
                title: 'ผิดพลาด!!!',
                text: 'กรุณาตรวจสอบเบอร์โทรศัพท์และรหัสลับ 4 ตัวของท่าน',
                icon: 'error',
                confirmButtonText: 'ตกลง',
              })
              this.$store.commit('clearall')
            }
          })
          .catch((error) => {
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'ระบบขัดข้อง กรุณา Login อีกครั้งภายหลัง',
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
            this.$store.commit('clearall')
            console.log(error)
          })
      }
    },
  },
}
</script>
