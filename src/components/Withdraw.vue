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
          ถอนไปแล้ว <span class="text-info">0</span> ครั้ง
        </small>
      </div>
      <div class="input-group mx-auto mt-3" style="max-width: 24em">
        <span class="input-group-text">
          <i class="bi bi-cash-stack"></i>
        </span>
        <input type="number" class="form-control" />
        <span class="input-group-text"> บาท </span>
      </div>
      <div class="row justify-content-md-center row-cols-6 mt-3">
        <div class="col-auto mb-2">
          <button
            type="button"
            class="btn btn-outline-warning btn-sm rounded-pill"
          >
            + 50
          </button>
        </div>
        <div class="col-auto mb-2">
          <button
            type="button"
            class="btn btn-outline-warning btn-sm rounded-pill"
          >
            + 100
          </button>
        </div>
        <div class="col-auto mb-2">
          <button
            type="button"
            class="btn btn-outline-warning btn-sm rounded-pill"
          >
            + 200
          </button>
        </div>
        <div class="col-auto mb-2">
          <button
            type="button"
            class="btn btn-outline-warning btn-sm rounded-pill"
          >
            + 300
          </button>
        </div>
        <div class="col-auto mb-2">
          <button
            type="button"
            class="btn btn-outline-warning btn-sm rounded-pill"
          >
            + 500
          </button>
        </div>
        <div class="col-auto mb-2">
          <button
            type="button"
            class="btn btn-outline-warning btn-sm rounded-pill"
          >
            + 1000
          </button>
        </div>
        <div class="col-auto mb-2">
          <button
            type="button"
            class="btn btn-outline-warning btn-sm rounded-pill"
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
                <img fluid :src="imgBank.kbank" width="50" class="mb-2" />
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
</template>

<script>
import { imgBankSmoothSet as imgBank } from '@/assets/images/banking/th/smooth-corner'
export default {
  name: 'Withdraw',
  components: {},
  setup() {
    return {
      imgBank,
    }
  },
}
</script>
