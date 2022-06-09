<template>
  <div class="container text-content-color">
    <span class="text-center">
      สมาชิกใหม่รับสิทธิประโยชน์และโปรโมชั่นมากมาย
    </span>
    <hr />
    <div class="mb-2">
      <label for="phoneID" class="form-label mb-1"
        >เบอร์โทรศัพท์ 0991678334 {{ this.$store.getters.phonenumber }}</label
      >
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-phone-fill"></i>
        </span>
        <input
          id="phoneID"
          type="text"
          class="form-control"
          placeholder="เบอร์โทรศัพท์"
          maxlength="10"
          :value="this.$store.getters.phonenumber"
          @input="SetmobileNumberValue"
        />
      </div>
    </div>
    <div class="mb-2">
      <label for="pinID" class="form-label mb-1"
        >PIN (รหัสลับ 4 ตัว) 123456 {{ this.$store.getters.pin }}</label
      >
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-key-fill"></i>
        </span>
        <input
          id="pinID"
          type="password"
          class="form-control"
          placeholder="XXXX"
          :value="this.$store.getters.pin"
          @input="SetPasswordValue"
          @keypress.enter="login"
        />
      </div>
    </div>
    <!-- <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault"
        >Remember me</label
      >
    </div> -->
  </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      bankacc: [],
    }
  },
  methods: {
    SetmobileNumberValue(event) {
      this.$store.commit('setphonenumber', event.target.value)
    },
    SetPasswordValue(event) {
      this.$store.commit('setpin', event.target.value)
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
