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

        <!-- Toggle button -->
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>
        </button> -->

        <!-- Collapsible wrapper -->
        <!-- <div class="collapse navbar-collapse" id="navbarButtonsExample"> -->
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/member" class="nav-link" href="#"
              >BANPONG-888</router-link
            >
          </li>
        </ul>
        <!-- Left links -->

        <div class="d-flex align-items-center">
          <router-link
            to="/member"
            type="button"
            class="btn btn-link px-2 text-decoration-none link-light"
          >
            หน้าบ้าน
          </router-link>
          <button
            type="button"
            class="btn btn-link px-2 text-decoration-none link-light"
          >
            ติดต่อเรา
          </button>
          <button
            type="button"
            class="btn btn-link px-2 text-decoration-none link-light"
            data-bs-toggle="modal"
            data-bs-target="#modalDeposit"
          >
            ฝากเงิน
          </button>
          <button
            type="button"
            class="btn btn-link px-2 text-decoration-none link-light"
            data-bs-toggle="modal"
            data-bs-target="#modalWithdraw"
          >
            ถอนเงิน
          </button>
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
        <!-- </div> -->
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
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
    mounted() {
      if (this.$store.isLoggedIn == false) {
        this.checker = true
      } else {
        this.checker = false
      }
    },
  },
}
</script>
