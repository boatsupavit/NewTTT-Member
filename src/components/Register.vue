<template>
  <swiper
    :pagination="{
      type: 'progressbar',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper text-content-color"
    ref="hits"
    :options="swiperOption"
  >
    <swiper-slide id="tab1">
      <div class="container">
        <div class="mb-2">
          <label for="phoneID" class="form-label mb-1 mt-4"
            >เบอร์โทรศัพท์</label
          >
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-phone-fill" id="phoneID"></i>
            </span>
            <input
              id="inputphoneID"
              type="text"
              maxlength="10"
              class="form-control"
              placeholder="เบอร์โทรศัพท์"
              :value="this.$store.getters.phonenumber"
              @input="SetmobileNumberValue"
              @keypress="onlyNumber"
            />
          </div>
          <span class="small text-muted" id="lbphoneID"
            ><small>เช่น: 0912345678</small></span
          >
        </div>
        <div class="mb-2">
          <label for="pinID" class="form-label mb-1">PIN (รหัสลับ 4 ตัว)</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-key-fill"></i>
            </span>
            <input
              id="inputpinID"
              type="password"
              class="form-control"
              placeholder="XXXX"
              maxlength="4"
              :value="this.$store.getters.pin"
              @input="SetPasswordValue"
              @keypress="onlyNumber"
            />
          </div>
          <span class="small text-muted" id="lbpinID">
            <small>ตัวเลข 4 ตัวสำหรับ Login</small>
          </span>
          <br />
          <label for="pinID" class="form-label mb-1"
            >ยืนยัน PIN (รหัสลับ 4 ตัว)</label
          >
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-key-fill"></i>
            </span>
            <input
              id="inputpinconfirmID"
              type="password"
              class="form-control"
              placeholder="XXXX"
              maxlength="4"
              :value="this.$store.getters.password"
              @input="SetPasswordConfirmValue"
              @keypress="onlyNumber"
            />
          </div>
          <span class="small text-muted" id="lbpinconfirmID">
            <small>รหัสลับ 4 ตัว อีกครั้ง</small>
          </span>
        </div>
        <div class="modal-footer px-4">
          <button type="button" class="btn btn-warning" @click="next">
            Next
          </button>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide id="tab2">
      <br />
      <div class="mb-2">
        <label for="bankID" class="form-label mb-1">ธนาคาร</label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-bank2"></i>
          </span>
          <select
            class="form-select"
            :value="this.$store.getters.bankNameth"
            @input="SetbankValue"
          >
            <option selected>กรุณาเลือกธนาคาร...</option>
            <option
              v-for="(item, index) in listbank"
              :key="index"
              :value="item.banknameth"
            >
              {{ item.banknameth }}
            </option>
          </select>
        </div>
        <label for="bankAcctID" class="form-label mb-1 mt-2">
          เลขที่บัญชี
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-credit-card-2-front-fill"></i>
          </span>
          <input
            id="inputbankAcctID"
            type="text"
            maxlength="12"
            class="form-control"
            placeholder="กรุณากรอกเลขที่บัญชี"
            :value="this.$store.getters.bankaccount"
            @input="SetbankAccountValue"
            @keypress="onlyNumber"
          />
        </div>
        <span class="small text-muted" id="lbbankAcctID">
          <small>ตัวเลขล้วนไม่มีช่องว่าง</small>
        </span>
      </div>
      <div class="mb-2">
        <label for="nameID" class="form-label mb-1">ชื่อจริง</label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-person-lines-fill"></i>
          </span>
          <input
            id="nameID"
            type="text"
            class="form-control"
            placeholder="กรุณากรอกชื่อจริง"
            :value="this.$store.getters.fname"
            @input="SetNameValue"
            @keypress="controlkey"
          />
        </div>
        <label for="surnameID" class="form-label mb-1">นามสกุล</label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-person-lines-fill"></i>
          </span>
          <input
            id="surnameID"
            type="text"
            class="form-control"
            placeholder="กรุณากรอกนามสกุลจริง"
            :value="this.$store.getters.lname"
            @input="SetLastNameValue"
            @keypress="controlkey"
          />
        </div>
        <br />
        <div class="modal-footer px-4">
          <button type="button" class="btn btn-secondary" @click="back">
            Back
          </button>
          <button type="button" class="btn btn-warning" @click="next">
            Next
          </button>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      ><br />
      <br />
      <div class="mb-2">
        <label for="applyID" class="form-label mb-1">รู้จักเราผ่านทาง</label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-diagram-3-fill"></i>
          </span>
          <select
            id="applyID"
            class="form-select"
            :value="this.$store.getters.chanel"
            @input="SetSocialMediaValue"
          >
            <option value="กรุณาเลือกช่องทาง..." selected>
              กรุณาเลือกช่องทาง...
            </option>
            <option
              v-for="(item, index) in channel"
              :key="index"
              :value="item.channel_id"
            >
              {{ item.channel }}
            </option>
          </select>
        </div>
        <label for="lineID" class="form-label mb-1 mt-2">
          ไลน์ (ไม่บังคับ)
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-line"></i>
          </span>
          <input
            id="lineID"
            type="text"
            class="form-control"
            placeholder="Line ID"
            :value="this.$store.getters.idline"
            @input="SetIDLineValue"
          />
        </div>
      </div>
      <div class="mb-2">
        <label for="captchaID" class="form-label mb-1 mt-2">
          ฉันไม่ใช่โปรแกรมอัตโนมัติ
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-robot"></i>
          </span>
          <input
            id="captchaID"
            type="text"
            maxlength="4"
            class="form-control"
            placeholder="XXXX"
            :value="this.$store.getters.captcha"
            @input="SetCaptchaValue"
          />
          <span class="input-group-text p-1">
            <img height="50" :src="this.$store.getters.imgcaptcha" />
          </span>
          <span class="input-group-text p-1">
            <a
              class="bi bi-arrow-repeat"
              style="font-size: 32px"
              href="#"
              @click="refreshcap"
            ></a>
          </span>
        </div>
        <br />
        <br />
        <div class="modal-footer px-4">
          <button type="button" class="btn btn-secondary" @click="back">
            Back
          </button>
          <button
            type="button"
            class="btn btn-warning"
            data-bs-dismiss="modal"
            @click="submit"
          >
            สมัครสมาชิก
          </button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      ipinfo: {},
      listbank: [],
      channel: [],
      isActive: true,
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    }
  },
  methods: {
    next() {
      document.querySelector('.swiper-button-next').click()
    },
    back() {
      document.querySelector('.swiper-button-prev').click()
    },
    controlkey($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which
      console.log(keyCode)
      if (
        ((keyCode < 65 || keyCode > 122) && keyCode < 3585) ||
        (keyCode > 3675 && keyCode !== 32)
      ) {
        $event.preventDefault()
      }
    },
    onlyNumber($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which
      if (keyCode < 48 || (keyCode > 57 && keyCode !== 46)) {
        $event.preventDefault()
      }
    },
    SetmobileNumberValue(event) {
      this.$store.commit('setphonenumber', event.target.value)
      let input = event.target.value
      if (input.length < 10 && input.length > 0) {
        document.querySelector('#inputphoneID').style.border =
          '2px solid #FA402A'
        document.querySelector('#lbphoneID').textContent =
          'กรุณาใส่หมายเลขโทรศัพท์ให้ครบ 10 หลัก'
        document.querySelector('#lbphoneID').style.color = '#FA402A'
        this.$store.commit('setphonenumber', event.target.value)
      } else if (input.length == 10 || input.length == 0) {
        document.querySelector('#inputphoneID').style.borderColor = null
        document.querySelector('#lbphoneID').textContent = 'เช่น: 0912345678'
        this.$store.commit('setphonenumber', event.target.value)
      }
    },
    SetbankValue(event) {
      let bank = this.listbank[event.target.options.selectedIndex - 1]
      this.$store.commit('setbkname', bank.banknameen)
      this.$store.commit('setbknameth', bank.banknameth)
      this.$store.commit('setbkid', bank._id)
    },
    SetbankAccountValue(event) {
      this.$store.commit('setbkacc', event.target.value)
      let input = event.target.value
      if (input.length < 10 && input.length > 0) {
        document.querySelector('#inputbankAcctID').style.border =
          '2px solid #FA402A'
        document.querySelector('#lbbankAcctID').textContent =
          'กรุณาใส่เลขบัญชีให้ถูกต้อง'
        this.$store.commit('setbkacc', event.target.value)
      } else if (input.length == 10 || input.length == 0) {
        document.querySelector('#inputbankAcctID').style.borderColor = null
        document.querySelector('#lbbankAcctID').textContent =
          'ตัวเลขล้วนไม่มีช่องว่าง'
        this.$store.commit('setbkacc', event.target.value)
      }
    },
    SetNameValue(event) {
      this.$store.commit('setfname', event.target.value)
    },
    SetLastNameValue(event) {
      this.$store.commit('setlname', event.target.value)
    },
    SetSocialMediaValue(event) {
      this.$store.commit('setchanel', event.target.value)
    },
    SetPasswordValue(event) {
      this.$store.commit('setpin', event.target.value)
      let input = event.target.value
      if (input.length < 4 && input.length > 0) {
        document.querySelector('#inputpinID').style.border = '2px solid #FA402A'
        document.querySelector('#lbpinID').textContent =
          'กรุณาใส่ตัวเลขรหัสลับให้ครบ 4 ตัว'
        this.$store.commit('setpin', event.target.value)
      } else if (input.length == 4 || input.length == 0) {
        document.querySelector('#inputpinID').style.borderColor = null
        document.querySelector('#lbpinID').textContent =
          'ตัวเลขรหัสลับ 4 ตัวใช้สำหรับ Login'
        this.$store.commit('setpin', event.target.value)
      }
    },
    SetPasswordConfirmValue(event) {
      this.$store.commit('setpassword', event.target.value)
      let input = event.target.value
      if (input.length < 4 && input.length > 0) {
        document.querySelector('#inputpinconfirmID').style.border =
          '2px solid #FA402A'
        document.querySelector('#lbpinconfirmID').textContent =
          'กรุณาใส่ตัวเลขรหัสลับให้ครบ 4 ตัว'
        this.$store.commit('setpassword', event.target.value)
      } else if (input.length == 0) {
        document.querySelector('#inputpinconfirmID').style.borderColor = null
        document.querySelector('#lbpinconfirmID').textContent =
          'รหัสลับ 4 ตัว อีกครั้ง'
        this.$store.commit('setpassword', event.target.value)
      } else if (
        input.length == 4 &&
        this.$store.getters.pin !== this.$store.getters.password
      ) {
        document.querySelector('#inputpinconfirmID').style.border =
          '2px solid #FA402A'
        document.querySelector('#lbpinconfirmID').textContent =
          'ตัวเลขรหัสลับไม่ตรงกัน'
        this.$store.commit('setpassword', event.target.value)
      } else if (
        input.length == 4 &&
        this.$store.getters.pin == this.$store.getters.password
      ) {
        document.querySelector('#inputpinconfirmID').style.border = null
        document.querySelector('#lbpinconfirmID').textContent =
          'ตัวเลขรหัสลับสามารถใช้ได้'
        this.$store.commit('setpassword', event.target.value)
      }
    },
    SetIDLineValue(event) {
      this.$store.commit('setidline', event.target.value)
    },
    SetCaptchaValue(event) {
      this.$store.commit('setcaptcha', event.target.value)
    },
    //--------------captcha---------------//
    async refreshcap() {
      this.$store.commit('setapiname', 11008)
      this.$store.commit('setAPI')
      await axios
        .get(this.$store.getters.API, {})
        .then((resp) => {
          this.$store.commit('setimgcaptcha', resp.data.result.image)
          this.$store.commit('setcaptchaID', resp.data.result.captchaID)
          console.log(this.$store.getters.captchaID)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //---------------register--------------//
    async submit() {
      if (
        this.$store.getters.phonenumber === '' ||
        this.$store.getters.phonenumber.length !== 10
      ) {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่หมายเลขโทรศัพท์ให้ถูกต้อง',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else if (this.$store.getters.bankName === 'กรุณาเลือกธนาคาร...') {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาเลือกบัญชีธนาคาร',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else if (
        this.$store.getters.bankaccount === '' ||
        this.$store.getters.bankaccount.length < 10
      ) {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่หมายเลขเลขบัญชีธนาคารให้ถูกต้อง',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else if (this.$store.getters.fname === '') {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่ชื่อจริง',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else if (this.$store.getters.lname === '') {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่ชื่อนามสกุลจริง',
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
      } else if (this.PasswordConfirm === '') {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณายืนยันรหัสลับ 4 ตัว',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else if (this.$store.getters.pin !== this.$store.getters.password) {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'Pin 4 ตัวไม่ตรงกันกรุณาตรวจสอบ',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else if (this.$store.getters.captcha == '') {
        Swal.fire({
          title: 'ผิดพลาด!!!',
          text: 'กรุณาใส่ Captcha เพื่อยืนยันตัวตน',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      } else {
        // -------call API---------//
        this.$store.commit('setapiname', 11000)
        this.$store.commit('setAPI')
        console.log(this.$store.getters.API)
        const body = {
          agent_id: this.$store.getters.agent_id,
          // username: '',
          password: this.$store.getters.password,
          tel: this.$store.getters.phonenumber,
          pin: this.$store.getters.pin,
          line_id: this.$store.getters.idline,
          name: this.$store.getters.fname,
          surename: this.$store.getters.lname,
          // tag: ['6281446d5aa7df0156f3b467'],
          channel: this.$store.getters.chanel,
          bank_id: this.$store.getters.bankid,
          bank_acct: this.$store.getters.bankaccount,
          // domain_name: 'https://www.banpong888.com',
          captchaID: this.$store.getters.captchaID,
          value: this.$store.getters.captcha,
          ipinfo: this.ipinfo,
        }
        console.log(body)
        await axios
          .post(this.$store.getters.API, { body })
          .then((response) => {
            console.log(response.data)
            this.$store.commit('setapiname', 11005)
            this.$store.commit('setAPI')
            console.log(this.$store.getters.API)
            if (response.data.status == '200') {
              setTimeout(function () {
                document.querySelector('button#loginbtn').click()
              }, 50)
            } else if (response.data.status == '300') {
              Swal.fire({
                title: 'ผิดพลาด!!!',
                text: 'Captcha ไม่ถูกต้องกรุณาใส่ให้ถูกต้อง',
                icon: 'error',
                confirmButtonText: 'ตกลง',
              })
              this.$store.commit('setcaptcha', '')
            } else {
              Swal.fire({
                title: 'ผิดพลาด!!!',
                text: response.data.message,
                icon: 'error',
                confirmButtonText: 'ตกลง',
              })
              this.refreshcap()
              this.$store.commit('clearall')
            }
          })
          .catch((error) => {
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'ระบบขัดข้อง กรุณาสมัครอีกครั้งภายหลัง',
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
            this.refreshcap()
            this.$store.commit('clearall')
            console.log(error)
          })
      }
    },
    async getchanel() {
      this.$store.commit('setapiname', 11011)
      this.$store.commit('setAPI')
      await axios
        .post(this.$store.getters.API, {})
        .then((resp) => {
          console.log(resp.data.channel)
          this.channel = resp.data.channel
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            title: 'ผิดพลาด!!!',
            text: 'ระบบขัดข้องกรุณา ติดต่อเจ้าหน้าที่',
            icon: 'error',
            confirmButtonText: 'ตกลง',
          })
        })
    },
    async getbank() {
      this.$store.commit('setapiname', 11004)
      this.$store.commit('setAPI')
      await axios
        .post(this.$store.getters.API, {
          status: 'active',
        })
        .then((resp) => {
          console.log(resp.data)
          console.log(resp.data.result.banking)
          this.listbank = resp.data.result.banking
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            title: 'ผิดพลาด!!!',
            text: 'ระบบขัดข้องกรุณา ติดต่อเจ้าหน้าที่',
            icon: 'error',
            confirmButtonText: 'ตกลง',
          })
        })
    },
  },
  async mounted() {
    this.getbank()
    this.getchanel()
    this.refreshcap()
    document.querySelector('.swiper-button-next').style.display = 'none'
    document.querySelector('.swiper-button-prev').style.display = 'none'
  },
}
</script>
