<template>
  <div class="container text-content-color">
    <span class="text-center">
      สมาชิกใหม่รับสิทธิประโยชน์และโปรโมชั่นมากมาย
    </span>
    <hr />
    <div class="mb-2">
      <label for="phoneID" class="form-label mb-1">เบอร์โทรศัพท์</label>
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
          @keypress="onlyNumber"
        />
      </div>
    </div>
    <div class="mb-2">
      <label for="pinID" class="form-label mb-1">PIN (รหัสลับ 4 ตัว)</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-key-fill"></i>
        </span>
        <input
          id="pinID"
          type="password"
          class="form-control"
          placeholder="XXXX"
          maxlength="4"
          :value="this.$store.getters.pin"
          @input="SetPasswordValue"
          @keydown.enter="login"
          @keypress="onlyNumber"
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
export default {
  data() {
    return {
      bankacc: [],
    }
  },
  methods: {
    onlyNumber($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which
      console.log(keyCode)
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
        document.querySelector('#lbphoneID').classList.remove('text-muted')
        document.querySelector('#lbphoneID').classList.add('text-danger')
        this.$store.commit('setphonenumber', event.target.value)
      } else if (input.charAt(0) != 0) {
        document.querySelector('#inputphoneID').style.border =
          '2px solid #FA402A'
        document.querySelector('#lbphoneID').textContent =
          'กรุณาใส่หมายเลขโทรศัพท์ให้ถูกต้อง'
        document.querySelector('#lbphoneID').classList.remove('text-muted')
        document.querySelector('#lbphoneID').classList.add('text-danger')
        this.$store.commit('setphonenumber', event.target.value)
      } else if (input.length == 10 || input.length == 0) {
        document.querySelector('#inputphoneID').style.borderColor = null
        document.querySelector('#lbphoneID').textContent = 'เช่น: 0912345678'
        document.querySelector('#lbphoneID').classList.remove('text-danger')
        document.querySelector('#lbphoneID').classList.add('text-muted')
        this.$store.commit('setphonenumber', event.target.value)
      }
    },
    SetPasswordValue(event) {
      this.$store.commit('setpin', event.target.value)
      let input = event.target.value
      if (input.length < 4 && input.length > 0) {
        document.querySelector('#inputpinID').style.border = '2px solid #FA402A'
        document.querySelector('#lbpinID').textContent =
          'กรุณาใส่ตัวเลขรหัสลับให้ครบ 4 ตัว'
        document.querySelector('#lbpinID').classList.remove('text-muted')
        document.querySelector('#lbpinID').classList.add('text-danger')
        this.$store.commit('setpin', event.target.value)
      } else if (input.length == 4 || input.length == 0) {
        document.querySelector('#inputpinID').style.borderColor = null
        document.querySelector('#lbpinID').textContent =
          'ตัวเลขรหัสลับ 4 ตัวใช้สำหรับ Login'
        document.querySelector('#lbpinID').classList.remove('text-danger')
        document.querySelector('#lbpinID').classList.add('text-muted')
        this.$store.commit('setpin', event.target.value)
      }
    },
    login() {
      setTimeout(function () {
        document.querySelector('#loginbtn').click()
      }, 50)
    },
  },
}
</script>
