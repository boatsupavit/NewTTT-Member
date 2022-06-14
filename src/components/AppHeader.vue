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
            <a class="nav-link" href="#">BANPONG-888</a>
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
              <a class="nav-link" href="#">BANPONG-888</a>
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
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
            >
              หน้าบ้าน
            </button>

            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
            >
              บทความ
            </button>

            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
            >
              ติดต่อเรา
            </button>

            <button
              type="button"
              class="btn btn-warning mx-1"
              data-bs-toggle="modal"
              data-bs-target="#modalRegisterID"
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
          BANPONG-888
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
          <li>
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
            >
              <i class="bi bi-book mx-3" style="font-size: 2rem"></i>
              บทความ
            </button>
          </li>
          <li>
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
            >
              <i
                class="bi bi-telephone-forward-fill mx-3"
                style="font-size: 2rem"
              ></i>
              ติดต่อเรา
            </button>
          </li>
          <li class="mb-3 mt-2">
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalRegisterID"
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
              href="https://line.me/ti/p/@BANPONG-888"
              class="link-warning"
              data-bs-dismiss="offcanvas"
            >
              @BANPONG-888
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
            class="btn-close btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="clearValue"
          ></button>
        </div>
        <div class="modal-body">
          <Register />
        </div>
        <!-- <div class="modal-footer px-4">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="clearValue"
          >
            ยกเลิก
          </button> -->
        <!-- <button type="button" class="btn btn-warning" @click="submit">
            สมัครสมาชิก
          </button> -->
        <!-- </div> -->
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
  setup() {
    return {
      imgSocial,
    }
  },
  components: {
    Register,
    Login,
  },
  methods: {
    clearValue() {
      this.$store.commit('clearall')
    },
    async login() {
      if (this.$store.getters.phonenumber === '') {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่หมายเลขโทรศัพท์',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else if (this.$store.getters.pin === '') {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่รหัสลับ 4 ตัว',
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
            console.log(this.$store.getters.phonenumber)
            console.log(this.$store.getters.pin)
            console.log(response.data)
            console.log(response.data.status)
            if (response.data.status == '200') {
              this.$store.commit('clearall')
              console.log(response.data.result.token)
              sessionStorage.setItem('token', response.data.result.token)
              // ------------------------------------------------------------------------------//
              this.bankacc = response.data.result.profile_mem.banking_account
              console.log(this.bankacc)
              // this.$store.commit(
              //   'setbkacc',
              //   response.data.result.profile_mem.banking_account.bank_acct,
              // )
              // this.$store.commit(
              //   'setbkname',
              //   response.data.result.profile_mem.banking_account.bank_name,
              // )
              // ------------------------------------------------------------------------------//
              this.$store.commit(
                'setphonenumber',
                response.data.result.profile_mem.profile.tel,
              )
              this.$store.commit(
                'setfname',
                response.data.result.profile_mem.profile.name,
              )
              this.$store.commit(
                'setlname',
                response.data.result.profile_mem.profile.surename,
              )
              this.$store.commit(
                'setidline',
                response.data.result.profile_mem.line_id,
              )
              this.$store.commit(
                'setcreatedate',
                response.data.result.profile_mem.create_date,
              )
              this.$store.commit(
                'setusername',
                response.data.result.profile_mem.username,
              )
              this.$store.commit(
                'setcredit',
                response.data.result.profile_mem.PD.credit,
              )
              Swal.fire({
                title: 'สำเร็จ!!!',
                text: 'เข้าสู่ระบบสำเร็จ ยินดีต้อนรับกลับค่ะ',
                icon: 'success',
                confirmButtonText: 'ตกลง',
              })
              // this.$('#modalLoginID').modal('hide')
              this.$router.push('/member')
            } else {
              Swal.fire({
                title: 'ผิดพลาด!!!',
                text: 'กรุณาตรวจสอบเบอร์โทรศัพท์และรหัสลับ 4 ตัวของท่าน',
                icon: 'error',
                confirmButtonText: 'ตกลง',
              })
            }
            console.log(sessionStorage.getItem('token'))
          })
          .catch((error) => {
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'ระบบขัดข้อง กรุณา Login อีกครั้งภายหลัง',
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
            console.log(error)
          })
      }
    },
  },
}
</script>
