<template>
  <div>
    <div class="container text-content-color">
      <div class="mb-1 px-1">
        <div class="row justify-content-md-center">
          <div class="tabs">
            <div class="tab-2">
              <label for="tab2-1" @click="gethisdp">รายการฝาก</label>
              <input
                id="tab2-1"
                name="tabs-two"
                type="radio"
                checked="checked"
              />
              <div>
                <h4 id="dp">รายการฝาก</h4>
                <div class="row justify-content-start">
                  <li
                    style="list-style: none"
                    v-for="list in listdeposit"
                    :key="list.index"
                  >
                    <div class="col card bg-dark mb-1">
                      <div
                        class="card-body d-flex justify-content-between"
                        style="padding: 10px 1em"
                      >
                        <div class="row">
                          <div class="col-md-auto ml-auto">
                            <i class="bi bi-calendar3 mx-1"></i>
                            {{ Convert_formatdate(list.request_date) }}
                            <i class="bi bi-clock mx-1"></i>
                            {{ Convert_formattime(list.request_date) }}
                            <span class="fs-6 fw-lighter m-5">
                              <span class="mx-1" style="float: right">
                                <img
                                  fluid
                                  :src="getImg(list.status)"
                                  width="18"
                                  class="mx-1"
                                />
                                {{ replaceStatus(list.status) }}</span
                              >
                            </span>
                            <span
                              class="text-success d-flex align-items-center mx-5"
                            >
                              <div class="fs-4">+{{ list.amount }} บาท</div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </div>
            <div class="tab-2">
              <label for="tab2-2" @click="gethiswd">รายการถอน</label>
              <input id="tab2-2" name="tabs-two" type="radio" />
              <div>
                <h4 id="wd">รายการถอน</h4>
                <div class="row justify-content-start">
                  <li
                    v-for="list in listwithdraw"
                    :key="list.index"
                    style="list-style: none"
                  >
                    <div class="card bg-dark mb-1">
                      <div
                        class="card-body d-flex justify-content-between"
                        style="padding: 6px 1em"
                      >
                        <div class="row">
                          <div class="col-md-auto ml-auto">
                            <i class="bi bi-calendar3 mx-1"></i>
                            {{ Convert_formatdate(list.request_date) }}
                            <i class="bi bi-clock mx-1"></i>
                            {{ Convert_formattime(list.request_date) }}
                            <span class="fs-6 fw-lighter m-5">
                              <span class="mx-1" style="float: right">
                                <img
                                  fluid
                                  :src="getImg(list.status)"
                                  width="18"
                                  class="mx-1"
                                />
                                {{ replaceStatus(list.status) }}</span
                              >
                            </span>
                            <span
                              class="text-danger d-flex align-items-center mx-5"
                            >
                              <div class="fs-4">-{{ list.amount }} บาท</div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-4" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import moment from 'moment'

export default {
  name: 'History',
  components: {},
  data() {
    return {
      listdeposit: [],
      listwithdraw: [],
    }
  },
  methods: {
    replaceStatus(status) {
      if (
        status == 'failed' ||
        status == 'fail' ||
        status == 'processing' ||
        status == 'check'
      ) {
        status = 'pending'
      } else if (status == 'success') {
        status = 'approve'
      }
      return status
    },
    getImg(pic) {
      if (
        pic == 'failed' ||
        pic == 'fail' ||
        pic == 'processing' ||
        pic == 'check'
      ) {
        pic = 'pending'
      } else if (pic == 'success') {
        pic = 'approve'
      }
      return require('../assets/images/' + pic + '.png')
    },
    Convert_formatdate(input) {
      return moment(input).format('DD / MM / yyyy')
    },
    Convert_formattime(input) {
      return moment(input).format('HH : mm : ss')
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
          if (res.data.status == 200) {
            this.listwithdraw = res.data.history_withdraw
            console.log(this.listwithdraw)
          } else if (res.data.status == 201) {
            document.getElementById('wd').innerHTML = 'ไม่มีรายการถอน'
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
          if (res.data.status == 200) {
            this.listdeposit = res.data.history_deposit
            console.log(this.listdeposit)
          } else if (res.data.status == 201) {
            document.getElementById('dp').innerHTML = 'ไม่มีรายการฝาก'
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
  },
  mounted() {
    this.gethiswd()
    this.gethisdp()
  },
}
</script>

<style scoped>
@import './../styles/_history.css';
</style>
