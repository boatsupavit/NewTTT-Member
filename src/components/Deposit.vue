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
            <img fluid :src="getImgUrl('ttb')" width="50" class="mb-2" />
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
      <div
        class="mb-2"
        v-for="bank in this.$store.getters.bankdeposit"
        :key="bank.id"
      >
        <div class="card bg-dark text-bg-dark border-secondary mb-3">
          <div class="card-body">
            <div class="row justify-content-start">
              <div class="col-auto">
                <img
                  fluid
                  :src="getImgUrl(bank.bank_name_en)"
                  width="50"
                  class="mb-2"
                />
              </div>
              <div class="col-auto">
                <p class="fs-6 fw-lighter m-0">{{ bank.bank_name_th }}</p>
                <p class="small lh-1 text-white m-0">{{ bank.account_name }}</p>
                <p
                  class="fs-5 fw-bold fw-bolder lh-1 mb-2 text-warning"
                  ref="input"
                >
                  {{ bank.bank_account }}
                </p>
              </div>
              <div class="col d-grid gap-2 d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  @click="copyText"
                >
                  <i class="bi bi-clipboard-check"></i>
                  คัดลอก
                </button>
              </div>
            </div>
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

export default {
  name: 'Deposit',
  components: {},
  data() {
    return {
      acc_name: '',
      bank_name: '',
      bank_acc: '',
      bank_nameTH: '',
    }
  },
  setup() {
    return {
      imgBank,
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/images/banking/th/smooth-corner/' +
        pic +
        '.png')
    },
    copyText() {
      var copyText = this.$refs.input
      copyText.select()
      document.execCommand('copy')
      alert('Copied to text:' + copyText.value)
    },
    async getbankdp() {
      this.$store.commit('setapiname', 11009)
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
          console.log(res.data.result)
          this.$store.commit('setbkdp', res.data.result)
          console.log(this.$store.getters.bankdeposit)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    async getprofile() {
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
          this.bank_name =
            res.data.result.profile_mem.banking_account[0].bank_name
          console.log(this.bank_name)
          this.$store.commit(
            'setbknameth',
            this.$store.getters.bankmember[0].bank_name_th,
          )
          this.$store.commit(
            'setbkid',
            this.$store.getters.bankmember[0].bank_id,
          )
          // ------------------------------------------------------------------------------//
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
  mounted() {
    this.getprofile()
    this.getbankdp()
  },
}
</script>
