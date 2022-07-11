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
      if (keyCode < 48 || (keyCode > 57 && keyCode !== 46)) {
        $event.preventDefault()
      }
    },
    SetmobileNumberValue(event) {
      this.$store.commit('setphonenumber', event.target.value)
    },
    SetPasswordValue(event) {
      this.$store.commit('setpin', event.target.value)
    },
    login() {
      setTimeout(function () {
        document.querySelector('#loginbtn').click()
      }, 50)
    },
  },
}
</script>
