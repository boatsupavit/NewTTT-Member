<template>
  <div>
    <div class="container text-content-color">
      <div class="text-center">
        <span class="small"> จำนวนเงินที่ถอนได้ปัจจุบันคือ : </span>
        <p class="mb-2">
          <span class="text-warning">{{ this.$store.getters.credit }}</span> บาท
        </p>
      </div>
      <hr class="mt-1 mb-0" />
      <div class="text-center">
        <small class="small" style="font-size: 0.73rem">
          จำนวนการถอนต่อวัน : <span class="text-danger">5</span> ครั้ง /
          ถอนไปแล้ว
          <span class="text-info">{{
            this.$store.getters.withdraw_count
          }}</span>
          ครั้ง
        </small>
      </div>
      <div class="input-group mx-auto mt-3" style="max-width: 24em">
        <span class="input-group-text">
          <i class="bi bi-cash-stack"></i>
        </span>
        <input
          type="number"
          class="form-control"
          style="text-align: right"
          :value="this.withdrawvalue"
          @input="SetWithdrawValue"
        />
        <span class="input-group-text"> บาท </span>
      </div>
      <div class="row justify-content-center row-cols-6 mt-3">
        <div
          class="col-auto mb-2"
          v-for="amount in withdraw_config"
          :key="amount.index"
        >
          <button
            type="button"
            class="btn btn-outline-warning btn-sm rounded-pill"
            :value="amount"
            @click="sum"
          >
            + {{ amount }}
          </button>
        </div>
        <div class="col-auto mb-2">
          <button
            type="button"
            class="btn btn-outline-warning btn-sm rounded-pill"
            :value="this.$store.getters.credit"
            @click="settotal"
          >
            ทั้งหมด ({{ this.$store.getters.credit }} ฿)
          </button>
        </div>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-center mt-2">
        <button
          type="button"
          class="btn btn-warning w-100"
          style="max-width: 24em"
          @click="withdraw"
        >
          ถอนเงิน
        </button>
      </div>
      <hr />
      <div class="text-center mt-3">
        <span> ระบบจะดำเนินการโอนเงินเข้าบัญชีที่ลงทะเบียนไว้เท่านั้น </span>
      </div>
      <div class="mb-2">
        <div class="card bg-dark text-bg-dark border-secondary mb-3">
          <div class="card-body">
            <div class="row justify-content-center">
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
        </div>
      </div>
      <hr class="mt-4" />
      <p class="fst-italic small text-danger m-0">
        * หากทำการถอนไม่ได้ หรือต้องการเปลี่ยนข้อมูลบัญชี กรุณาติดต่อเจ้าหน้าที่
      </p>
    </div>
  </div>
  <button @click="resetvalue" id="resetvalue" hidden></button>
</template>

<script>
import { imgBankSmoothSet as imgBank } from '@/assets/images/banking/th/smooth-corner'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Withdraw',
  components: {},
  data() {
    return {
      withdrawvalue: 0,
      imgbankmember: '',
      withdraw_config: [],
    }
  },
  setup() {
    return {
      imgBank,
    }
  },
  methods: {
    getImgUrl(pet) {
      return require('../assets/images/banking/th/smooth-corner/' +
        pet +
        '.png')
    },
    resetvalue() {
      this.withdrawvalue = 0
    },
    sum(e) {
      console.log(e.target.value)
      this.withdrawvalue = Number(this.withdrawvalue) + Number(e.target.value)
    },
    settotal(e) {
      this.withdrawvalue = Number(e.target.value)
    },

    SetWithdrawValue(event) {
      this.withdrawvalue = event.target.value
    },
    //---------------withdraw--------------//
    async withdraw() {
      this.$store.commit('setapiname', 11007)
      this.$store.commit('setAPI')
      const token = sessionStorage.getItem('token')
      const headers = { Authorization: 'Bearer ' + token }
      console.log(headers)
      if (this.withdrawvalue == 0) {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาระบุจำนวนที่ต้องการถอน',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else {
        axios
          .post(
            this.$store.getters.API,
            {
              balance: this.withdrawvalue,
            },
            {
              headers,
            },
          )
          .then((respon) => {
            console.log(respon.data)
            if (respon.data.status == 200) {
              Swal.fire({
                title: 'สำเร็จ!!!',
                text: respon.data.message,
                icon: 'info',
                confirmButtonText: 'ตกลง',
              })
              this.$store.commit('setwdc', respon.data.withdraw_count)
              this.withdrawvalue = 0
            } else {
              Swal.fire({
                title: 'ผิดพลาด!!!',
                text: respon.data.message,
                icon: 'error',
                confirmButtonText: 'ตกลง',
              })
              this.withdrawvalue = 0
            }
          })
          .catch((error) => {
            console.log(error)
            this.withdrawvalue = 0
          })
      }
    },
    //--------------get withdraw amount------------//
    async getwithdraw_amount() {
      this.$store.commit('setapiname', 11010)
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
          console.log('withdraw_config => ', res.data)
          if (res.data.status == 200) {
            this.withdraw_config = res.data.result
          } else {
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'Withdraw_Config : ' + res.data.message,
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
          }
        })
    },
    //-----------------get profile--------------------//
    async getprofile() {
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
            this.$store.commit(
              'setbkname',
              this.$store.getters.bankmember[0].bank_name,
            )
            this.bank_name = this.$store.getters.bankmember[0].bank_name
            // console.log('bank_name', this.bank_name)
            this.imgbankmember = this.getImgUrl(this.bank_name)
            this.$store.commit(
              'setbknameth',
              this.$store.getters.bankmember[0].bank_name_th,
            )
            this.$store.commit(
              'setbkid',
              this.$store.getters.bankmember[0].bank_id,
            )
            // ------------------------------------------------------------------------------//
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
    this.getwithdraw_amount()
  },
}
</script>
