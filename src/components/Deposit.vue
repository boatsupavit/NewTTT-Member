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
                  id="myInput"
                  :value="bank.bank_account"
                >
                  {{ bank.bank_account }}
                </p>
              </div>
              <div class="col d-grid gap-2 d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  @click="copyText"
                  @mouseout="outfocus"
                >
                  <span class="tooltiptext" id="myTooltip"
                    >Copy to clipboard</span
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
      imgbankmember: '',
    }
  },
  setup() {
    return {
      imgBank,
    }
  },
  methods: {
    copyText() {
      var copyText = document.getElementById('myInput').innerText
      console.log(copyText)
      navigator.clipboard.writeText(copyText)
      var tooltip = document.getElementById('myTooltip')
      tooltip.innerHTML = 'Copied: ' + copyText
      console.log(tooltip)
    },
    outfocus() {
      var tooltip = document.getElementById('myTooltip')
      tooltip.innerHTML = 'Copy to clipboard'
    },
    getImgUrl(pic) {
      return require('../assets/images/banking/th/smooth-corner/' +
        pic +
        '.png')
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
          this.$store.commit('setbkdp', res.data.result)
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
          this.bank_name = this.$store.getters.bankmember[0].bank_name
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

<style scoped>
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
