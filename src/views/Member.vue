<template>
  <div>
    <div class="alert alert-dark py-1 mb-1 bg-opacity-50 bg-dark text-white">
      <div class="d-inline-flex w-100">
        <i class="bi bi-megaphone"></i>
        <Vue3Marquee :pauseOnHover="true" :duration="20" class="ms-1">
          <span>
            นี่คือตัวอย่างอักษรเลื่อน
            อักษรเลื่อนนี้จะสามารถใส่ตัวอักษรได้ไม่เกิน 300 ตัวอักษร /
            นี่คือตัวอย่างอักษรเลื่อน
            อักษรเลื่อนนี้จะสามารถใส่ตัวอักษรได้ไม่เกิน 300 ตัวอักษร
          </span>
        </Vue3Marquee>
      </div>
    </div>
    <div class="credit-content pt-3 pb-2 px-3">
      <div class="container-sm text-white">
        <div class="row">
          <div class="col">
            <div class="profile-badge-new position-relative">
              <div
                class="txt-number-phone rounded-pill bg-white shadow d-flex align-items-center"
              >
                {{ this.$store.getters.username }}
              </div>
              <div class="member-front shadow">
                <img
                  src="./../assets/images/avatars/staff/20.png"
                  style="width: 3em"
                />
              </div>
            </div>
          </div>
        </div>
        <hr class="mb-2" />
        <!-- <div class="row">
          <div class="col">
            <span>สร้างบัญชีเมื่อวันที่ : </span>
            <span>{{ this.$store.getters.createdate }}</span>
          </div>
          <div class="col text-end position-relative">
            <span class="fs-5 me-2">ยอดเงิน</span>
            <div
              class="ms-auto rounded-pill bg-white text-dark px-2"
              style="width: fit-content; font-size: 2.2em; min-width: 150px"
            >
              <strong>{{ this.$store.getters.credit }}</strong>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="member-menubox p-3 mt-2">
      <div class="container">
        <div class="row row-cols-3 row-cols-sm-2 row-cols-md-6">
          <div class="col d-grid gap-2 p-1">
            <button
              type="button"
              class="btn btn-outline-secondary btn-menu"
              data-bs-toggle="modal"
              data-bs-target="#modalDeposit"
            >
              <i class="bi bi-wallet2" style="font-size: 2rem"></i>
              <p class="m-0">
                <strong>ฝาก</strong>
              </p>
            </button>
          </div>
          <div class="col d-grid gap-2 p-1">
            <button
              type="button"
              class="btn btn-outline-secondary btn-menu"
              data-bs-toggle="modal"
              data-bs-target="#modalWithdraw"
            >
              <i class="bi bi-cash-coin" style="font-size: 2rem"></i>
              <p class="m-0"><strong>ถอน</strong></p>
            </button>
          </div>
          <div class="col d-grid gap-2 p-1">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalhis"
              class="btn btn-outline-secondary btn-menu"
              @click="gethisdp(), gethiswd()"
            >
              <i class="bi bi-card-heading" style="font-size: 2rem"></i>
              <p class="m-0"><strong>ประวัติ</strong></p>
            </button>
          </div>
          <div class="col d-grid gap-2 p-1">
            <button
              type="button"
              class="btn btn-outline-secondary btn-menu"
              disabled
              data-bs-toggle="modal"
              data-bs-target="#modalsoon"
            >
              <i class="bi bi-people-fill" style="font-size: 2rem"></i>
              <p class="m-0"><strong>แนะนำ</strong></p>
            </button>
          </div>
          <div class="col d-grid gap-2 p-1">
            <button
              type="button"
              class="btn btn-outline-secondary btn-menu"
              disabled
              data-bs-toggle="modal"
              data-bs-target="#modalsoon"
            >
              <i class="bi bi-qr-code-scan" style="font-size: 2rem"></i>
              <p class="m-0"><strong>QR Code</strong></p>
            </button>
          </div>
          <div class="col d-grid gap-2 p-1">
            <button
              type="button"
              class="btn btn-outline-secondary btn-menu"
              disabled
              data-bs-toggle="modal"
              data-bs-target="#modalsoon"
            >
              <i class="bi bi-joystick" style="font-size: 2rem"></i>
              <p class="m-0"><strong>มินิเกมส์</strong></p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="member-menubg p-3 mt-2">
      <div class="container justify-content-center text-center">
        <p class="h5 text-white">เกมส์ล่าสุด</p>
        <LastGames />
      </div>
    </div> -->
    <div class="member-menubg p-3 mt-2">
      <div class="container justify-content-center">
        <GameCard />
      </div>
    </div>
  </div>
  <!-- Modal - GameView -->
  <div
    class="modal fade modal"
    id="modalGameview"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalGameview"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-body">
          <Iframe />
          <button
            type="button"
            data-bs-dismiss="modal"
            class="btn-close btn-close btn-close-white"
          ></button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal - SUSPEND -->
  <div
    class="modal fade modal"
    id="modalsuspend"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalsuspend"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="modalsuspend">
            <i class="bi bi-exclamation-circle-fill"></i>
            Warning !!!
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container text-content-color">
            <span class="text-center">
              <div class="container">
                <h2>บัญชีของคุณถูกระงับ กรุณาติดต่อเจ้าหน้าที่</h2>
                <img
                  src="https://www.freeiconspng.com/thumbs/alert-icon/alert-icon-red-11.png"
                  alt="Warning !!!"
                  width="50%"
                  height="50%"
                />
              </div>
            </span>
          </div>
        </div>
        <div class="modal-footer px-4">
          <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
            ติดต่อเจ้าหน้าที่
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import Iframe from './../components/Iframe.vue'
import 'vue3-marquee/dist/style.css'

import { imgBankSmoothSet as imgBank } from '@/assets/images/banking/th/smooth-corner'
import { imgSocialMedia as imgSocial } from '@/assets/images/social'

import GameCard from '@/components/GameType.vue'
// import LastGames from '@/components/GameLasted.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import moment from 'moment'

export default {
  name: 'HomeView',
  components: {
    Vue3Marquee,
    GameCard,
    Iframe,
    // LastGames,
  },
  data() {
    return {
      imgHallArray: [],
      img: require('@/assets/images/banking/th/smooth-corner/'),
    }
  },
  async mounted() {
    if (!!sessionStorage.getItem('token') == false) {
      this.$router.push('/home')
    }
    this.$store.commit('setapiname', 11001)
    this.$store.commit('setAPI')
    const token = sessionStorage.getItem('token')
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
        if (res.data.status == 200) {
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
          this.$store.commit('setstatusmem', res.data.result.profile_mem.status)
          this.$store.commit(
            'setusername',
            res.data.result.profile_mem.username,
          )
          this.$store.commit('setcredit', res.data.result.profile_mem.PD.credit)
          this.$store.commit(
            'setwdc',
            res.data.result.profile_mem.financial.withdraw_count,
          )
        } else if (res.data.status == 503) {
          Swal.fire({
            title: 'ผิดพลาด!!!',
            text: 'ตรวจพบการ Login ซ้อน กรุณาติดต่อเจ้าหน้าที่ หรือทำการ Login ใหม่อีกครั้ง',
            icon: 'error',
            confirmButtonText: 'ตกลง',
          })
          sessionStorage.clear()
          this.$store.commit('clearall')
          this.$router.push('/home')
        } else if (res.data.status == 502) {
          Swal.fire({
            title: 'ผิดพลาด!!!',
            text: 'กรุณา Login ใหม่อีกครั้ง',
            icon: 'error',
            confirmButtonText: 'ตกลง',
          })
          sessionStorage.clear()
          this.$store.commit('clearall')
          this.$router.push('/home')
        } else {
          Swal.fire({
            title: 'ผิดพลาด!!!',
            text: 'Call Profile Member : ' + res.data.message,
            icon: 'error',
            confirmButtonText: 'ตกลง',
          })
        }
      })
      .catch((error) => {
        console.error(error)
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'ระบบขัดข้องกรุณา ติดต่อเจ้าหน้าที่',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      })
  },
  methods: {
    getImg(pic) {
      return require('../assets/images/' + pic + '.png')
    },
    Convert_format(input) {
      return moment(input).format('DD / MM / yyyy HH : mm : ss')
    },
    async gethiswd() {
      this.$store.commit('setapiname', 11012)
      this.$store.commit('setAPI')
      const token = sessionStorage.getItem('token')
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
          console.log('History WD => ', res.data)
          if ((res.data.status == 200) | (res.data.status == 201)) {
            this.listwithdraw = res.data.history_withdraw
            console.log(this.listwithdraw)
            // console.log(this.listwithdraw.length)
          } else if (res.data.status == 503) {
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'พบการ Login ซ้อนกรุณาติดต่อเจ้าหน้าที่หรือ Login ใหม่อีกครั้ง',
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
            sessionStorage.clear()
            this.$store.commit('clearall')
            this.$router.push('/home')
          } else if (res.data.status == 502) {
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'กรุณา Login ใหม่อีกครั้ง',
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
            sessionStorage.clear()
            this.$store.commit('clearall')
            this.$router.push('/home')
          } else {
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'Call History Withdraw : ' + res.data.message,
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
          }
        })
        .catch((error) => {
          console.error(error)
          Swal.fire({
            title: 'ผิดพลาด!!!',
            text: 'ระบบขัดข้องกรุณา ติดต่อเจ้าหน้าที่',
            icon: 'error',
            confirmButtonText: 'ตกลง',
          })
        })
    },
    async gethisdp() {
      this.$store.commit('setapiname', 11014)
      this.$store.commit('setAPI')
      const token = sessionStorage.getItem('token')
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
          console.log('History DP => ', res.data)
          if ((res.data.status == 200) | (res.data.status == 201)) {
            this.listdeposit = res.data.history_deposit
            console.log(this.listdeposit)
            // console.log(this.listdeposit.length)
          } else if (res.data.status == 503) {
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'พบการ Login ซ้อนกรุณาติดต่อเจ้าหน้าที่หรือ Login ใหม่อีกครั้ง',
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
            sessionStorage.clear()
            this.$store.commit('clearall')
            this.$router.push('/home')
          } else if (res.data.status == 502) {
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'กรุณา Login ใหม่อีกครั้ง',
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
            sessionStorage.clear()
            this.$store.commit('clearall')
            this.$router.push('/home')
          } else {
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'Call History Deposit : ' + res.data.message,
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
          }
        })
        .catch((error) => {
          console.error(error)
          Swal.fire({
            title: 'ผิดพลาด!!!',
            text: 'ระบบขัดข้องกรุณา ติดต่อเจ้าหน้าที่',
            icon: 'error',
            confirmButtonText: 'ตกลง',
          })
        })
    },
    importAll(r) {
      r.keys().forEach((key) =>
        this.imgHallArray.push({ pathLong: r(key), pathShort: key }),
      )
    },
    setgametype(event) {
      this.$store.commit('preparevalue')
      this.$store.commit('setgametype', event.target.id)
    },
  },
  setup() {
    return {
      imgBank,
      imgSocial,
    }
  },
}
</script>
