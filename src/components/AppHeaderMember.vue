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
          <li class="nav-item px-auto">
            <router-link to="/member" class="nav-link" href="#"
              >BANPONG-888</router-link
            >
          </li>
        </ul>

        <div
          class="mx-3 ms-auto rounded-pill bg-white text-dark px-2"
          style="width: fit-content; font-size: 1em; min-width: 50px"
        >
          <span>
            <a
              class="bi bi-arrow-repeat mx-1"
              style="font-size: 20px"
              href="#"
              @click="refreshprofile"
            ></a>
          </span>
          <span>
            <strong>ยอดเงิน : {{ this.$store.getters.credit }} ฿ </strong>
          </span>
        </div>

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
          <div class="navbar-nav ms-auto align-items-center">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <!-- <li class="nav-item">
              <router-link to="/member" class="nav-link" href="#"
                >BANPONG-888</router-link
              >
            </li> -->
            </ul>
            <!-- Left links -->
            <div class="d-flex align-items-center">
              <li class="nav-item">
                <router-link
                  to="/member"
                  type="button"
                  class="btn btn-link px-2 text-decoration-none link-light"
                >
                  หน้าบ้าน
                </router-link>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-link px-2 text-decoration-none link-light"
                >
                  ติดต่อเรา
                </button>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-link px-2 text-decoration-none link-light"
                  data-bs-toggle="modal"
                  data-bs-target="#modalDeposit"
                >
                  ฝากเงิน
                </button>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-link px-2 text-decoration-none link-light"
                  data-bs-toggle="modal"
                  data-bs-target="#modalWithdraw"
                >
                  ถอนเงิน
                </button>
              </li>
              <button
                type="button"
                class="btn btn-secondary mx-1"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
                @click="cleartoken"
              >
                ออกจากระบบ
                <i class="bi bi-box-arrow-right"></i>
              </button>
            </div>
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
          <li class="nav-item">
            <router-link
              to="/member"
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
            >
              <i class="bi bi-house mx-3" style="font-size: 2rem"></i>
              หน้าบ้าน
            </router-link>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalDeposit"
            >
              <i class="bi bi-wallet2 mx-3" style="font-size: 2rem"></i>
              ฝากเงิน
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalWithdraw"
            >
              <i class="bi bi-cash-coin mx-3" style="font-size: 2rem"></i>
              ถอนเงิน
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalsoon"
            >
              <i class="bi bi-card-heading mx-3" style="font-size: 2rem"></i>
              ประวัติ
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalsoon"
            >
              <i class="bi bi-person-badge mx-3" style="font-size: 2rem"></i>
              ข้อมูลส่วนตัว
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalsoon"
            >
              <i class="bi bi-people-fill mx-3" style="font-size: 2rem"></i>
              แนะนำ
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalsoon"
            >
              <i class="bi bi-qr-code-scan mx-3" style="font-size: 2rem"></i>
              QR Code
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalsoon"
            >
              <i class="bi bi-joystick mx-3" style="font-size: 2rem"></i>
              มินิเกมส์
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn btn-link px-2 text-decoration-none link-light"
              data-bs-toggle="modal"
              data-bs-target="#modalsoon"
            >
              <i class="bi bi-gift-fill mx-3" style="font-size: 2rem"></i>
              โปรโมชั่น
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="offcanvas-footer">
        <ul class="text-decoration-none link-light mx-3 my-4">
          <button
            type="button"
            class="btn btn-secondary mx-1"
            data-bs-dismiss="offcanvas"
            data-bs-toggle="modal"
            data-bs-target="#modalLoginID"
            @click="cleartoken"
          >
            ออกจากระบบ
            <i class="bi bi-box-arrow-right"></i>
          </button>
        </ul>
      </div>
    </div>
  </div>
  <!-- Modal - Deposit -->
  <div
    class="modal fade modal"
    id="modalDeposit"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalDeposit"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="modalDeposit">
            <i class="bi bi-piggy-bank-fill"></i>
            ฝากเงิน
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <Deposit />
        </div>
      </div>
    </div>
  </div>
  <!-- Modal - Withdraw -->
  <div
    class="modal fade modal"
    id="modalWithdraw"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalWithdraw"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="modalWithdraw">
            <i class="bi bi-cash-coin"></i>
            ถอนเงิน
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <Withdraw />
        </div>
      </div>
    </div>
  </div>
  <!-- Modal - coming soon -->
  <div
    class="modal fade modal"
    id="modalsoon"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalsoon"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="modalsoon">
            <i class="bi bi-exclamation-circle mx-2"></i>
            Coming Soon
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/opening-soon%2C-coming-soon-design-template-2ad6ecb3bfc0d528a9999c00a642d447_screen.jpg?ts=1593776133"
            alt="Coming Soon"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Deposit from './../components/Deposit.vue'
import Withdraw from './../components/Withdraw.vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'AppHeaderMember',
  components: {
    Deposit,
    Withdraw,
  },
  methods: {
    async cleartoken() {
      this.$store.commit('setapiname', 11006)
      this.$store.commit('setAPI')
      const token = this.$store.getters.token
      const headers = { Authorization: 'Bearer ' + token }
      console.log(this.$store.getters.API)
      console.log(token)
      console.log(headers)
      await axios
        .post(
          this.$store.getters.API,
          {},
          {
            headers,
          },
        )
        .then((res) => {
          console.log(res.data)
          Swal.fire({
            title: 'สำเร็จ!!!',
            text: 'ออกจากระบบสำเร็จ',
            icon: 'success',
            confirmButtonText: 'ตกลง',
          })
          this.$router.push('/home')
        })
        .catch((error) => {
          console.error(error)
        })
      sessionStorage.clear()
      this.$store.commit('clearall')
    },
    async refreshprofile() {
      this.$store.commit('setcredit', '')
      this.$store.commit('setapiname', 11001)
      this.$store.commit('setAPI')
      const token = this.$store.getters.token
      const headers = { Authorization: 'Bearer ' + token }
      console.log(headers)
      console.log(this.$store.getters.API)
      await axios
        .post(
          this.$store.getters.API,
          {},
          {
            headers,
          },
        )
        .then((res) => {
          console.log(res.data)
          // ------------------------------------------------------------------------------//
          this.$store.commit(
            'setbkmb',
            res.data.result.profile_mem.banking_account,
          )
          this.$store.commit(
            'setbkacc',
            this.$store.getters.bankmember[0].bank_acct,
          )
          this.$store.commit(
            'setbkname',
            this.$store.getters.bankmember[0].bank_name,
          )
          this.$store.commit(
            'setbknameth',
            this.$store.getters.bankmember[0].bank_name_th,
          )
          this.$store.commit(
            'setbkid',
            this.$store.getters.bankmember[0].bank_id,
          )
          // ------------------------------------------------------------------------------//
          this.$store.commit(
            'setphonenumber',
            res.data.result.profile_mem.profile.tel,
          )
          this.$store.commit(
            'setfname',
            res.data.result.profile_mem.profile.name,
          )
          this.$store.commit(
            'setlname',
            res.data.result.profile_mem.profile.surename,
          )
          this.$store.commit('setidline', res.data.result.profile_mem.line_id)
          this.$store.commit(
            'setcreatedate',
            res.data.result.profile_mem.create_date,
          )
          this.$store.commit(
            'setusername',
            res.data.result.profile_mem.username,
          )
          this.$store.commit('setcredit', res.data.result.profile_mem.PD.credit)
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
  async mounted() {
    if (this.$store.isLoggedIn == false) {
      this.checker = true
    } else {
      this.checker = false
    }
    this.$store.commit('setcredit', '')
    this.$store.commit('setapiname', 11001)
    this.$store.commit('setAPI')
    const token = this.$store.getters.token
    const headers = { Authorization: 'Bearer ' + token }
    console.log(headers)
    console.log(this.$store.getters.API)
    await axios
      .post(
        this.$store.getters.API,
        {},
        {
          headers,
        },
      )
      .then((res) => {
        console.log(res.data)
        // ------------------------------------------------------------------------------//
        this.$store.commit(
          'setbkmb',
          res.data.result.profile_mem.banking_account,
        )
        this.$store.commit(
          'setbkacc',
          this.$store.getters.bankmember[0].bank_acct,
        )
        this.$store.commit(
          'setbkname',
          this.$store.getters.bankmember[0].bank_name,
        )
        this.$store.commit(
          'setbknameth',
          this.$store.getters.bankmember[0].bank_name_th,
        )
        this.$store.commit('setbkid', this.$store.getters.bankmember[0].bank_id)
        // ------------------------------------------------------------------------------//
        this.$store.commit(
          'setphonenumber',
          res.data.result.profile_mem.profile.tel,
        )
        this.$store.commit('setfname', res.data.result.profile_mem.profile.name)
        this.$store.commit(
          'setlname',
          res.data.result.profile_mem.profile.surename,
        )
        this.$store.commit('setidline', res.data.result.profile_mem.line_id)
        this.$store.commit(
          'setcreatedate',
          res.data.result.profile_mem.create_date,
        )
        this.$store.commit('setusername', res.data.result.profile_mem.username)
        this.$store.commit('setcredit', res.data.result.profile_mem.PD.credit)
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>
