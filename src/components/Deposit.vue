<template>
  <div>
    <div class="container text-content-color">
      <span class="text-center">
        ลูกค้าต้องใช้บัญชีที่ทำการลงทะเบียนไว้เท่านั้นในการฝากเงิน
      </span>
      <hr />
      <div class="mb-3 px-3">
        <div class="row justify-content-md-center">
          <div class="col-auto">
            <img fluid :src="imgbankmember" width="50" class="mb-2" />
          </div>
          <div class="col-auto">
            <p class="fs-6 fw-lighter m-0">
              {{ this.$store.getters.bankNameth }}
            </p>
            <p class="fs-5 lh-1 text-white m-0">
              {{ this.$store.getters.name }}
            </p>
            <p class="fs-5 fw-bold fw-bolder lh-1 m-0 text-warning">
              {{ this.$store.getters.bankaccount }}
            </p>
          </div>
        </div>
      </div>
      <div class="accordion accordion-flush" id="accordionFlush">
        <div
          class="mb-2"
          v-for="(bank, index) in this.$store.getters.bankdeposit"
          :key="bank.id"
        >
          <div class="card bg-dark text-bg-dark border-secondary mb-3">
            <div class="card-body tabs-qr">
              <div class="row justify-content-start">
                <div class="col-auto">
                  <img
                    fluid
                    :src="getImgUrl(bank.bank_code)"
                    width="50"
                    class="mb-2"
                  />
                </div>
                <div class="col-auto">
                  <p class="fs-6 fw-lighter m-0">{{ bank.bank_name_th }}</p>
                  <p class="small lh-1 text-white m-0">
                    {{ bank.account_name }}
                  </p>
                  <p
                    class="fs-5 fw-bold fw-bolder lh-1 mb-1 text-warning"
                    :value="index"
                  >
                    {{ bank.bank_account }}
                  </p>
                </div>
                <div class="col d-grid gap-1 justify-content-end">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    @click="copyText"
                    @mouseover="outfocus"
                    :value="bank.bank_account"
                  >
                    <i class="bi bi-clipboard-check"></i>
                    <div class="tooltip">
                      <span class="tooltiptext" id="myTooltip"
                        >Copy to clipboard</span
                      >
                    </div>
                    คัดลอก
                  </button>
                  <button
                    v-if="bank?.qr_code"
                    class="collapsed btn btn-secondary btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + 'bank' + bank.bank_account"
                    aria-expanded="false"
                    :aria-controls="'flush-' + 'bank' + bank.bank_account"
                  >
                    <i class="bi bi-search"></i>
                    QR Code
                  </button>
                </div>
              </div>
              <!-- qr code -->
              <div
                v-if="bank?.qr_code"
                :id="'bank' + bank.bank_account"
                class="accordion-collapse collapse"
                :aria-labelledby="'flush-' + 'bank' + bank.bank_account"
                data-bs-parent="#accordionFlush"
              >
                <div class="row justify-content-start d-flex mt-2">
                  <div class="col d-grid gap-1">
                    <img :src="bank.qr_code" width="200" class="mx-auto" />
                  </div>
                </div>
              </div>
            </div>
            <!-- <input /> -->
          </div>
        </div>
      </div>
      <hr class="mt-4" />
      <p class="fst-italic small text-danger m-0">
        * หากต้องการเปลี่ยนข้อมูลบัญชี กรุณาติดต่อเจ้าหน้าที่
      </p>
    </div>
  </div>
</template>

<script>
import { imgBankSmoothSet as imgBank } from '@/assets/images/banking/th/smooth-corner'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Deposit',
  components: {},
  data() {
    return {
      imgbankmember: '',
    }
  },
  setup() {
    return {
      imgBank,
    }
  },
  methods: {
    openqr() {
      document.querySelector('#dpbtn').click()
      setTimeout(function () {
        document.querySelector('#qrbtn').click()
      }, 100)
    },
    copyText(e) {
      var copyText = e.target.value
      console.log(copyText)
      navigator.clipboard.writeText(copyText)
      var tooltip = document.getElementById('myTooltip')
      tooltip.innerHTML = 'Copied: ' + copyText
      console.log(tooltip.innerHTML)
    },
    outfocus() {
      var tooltip = document.getElementById('myTooltip')
      tooltip.innerHTML = 'Copy to clipboard'
      console.log(tooltip.innerHTML)
    },
    getImgUrl(pic) {
      return require('../assets/images/banking/th/smooth-corner/' +
        pic +
        '.png')
    },
    async getbankdp() {
      this.$store.commit('setapiname', 11009)
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
          console.log('BKDP', res.data)
          if (res.data.status == 200) {
            this.$store.commit('setbkdp', res.data.result)
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
              text: 'Call Bank Deposit : ' + res.data.message,
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
    async getprofile() {
      this.$store.commit('clearall')
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
            // ------------------------------------------------------------------------------//
            this.$store.commit(
              'setbkmb',
              res.data.result.profile_mem.banking_account,
            )
            this.$store.commit(
              'setbkacc',
              this.$store.getters.bankmember[0].bank_acct,
            )
            this.bank_name = this.$store.getters.bankmember[0].bank_code
            // console.log('bank_name', this.bank_name)
            this.imgbankmember = this.getImgUrl(this.bank_name)
            // console.log('imgbankmember', this.imgbankmember)
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
            this.$store.commit(
              'setcredit',
              res.data.result.profile_mem.PD.credit,
            )
            this.$store.commit(
              'setwdc',
              res.data.result.profile_mem.financial.withdraw_count,
            )
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
  },
  mounted() {
    this.getprofile()
    this.getbankdp()
  },
}
</script>

<style scoped>
@import './../styles/_qrcode.css';

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: rgb(201, 201, 201);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgb(201, 201, 201) transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
