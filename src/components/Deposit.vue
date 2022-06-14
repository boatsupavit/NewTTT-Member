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
      <div class="mb-2">
        <div class="card bg-dark text-bg-dark border-secondary mb-3">
          <div class="card-body">
            <div class="row justify-content-start">
              <div class="col-auto">
                <img fluid :src="imgBank.ttb" width="50" class="mb-2" />
              </div>
              <div class="col-auto">
                <p class="fs-6 fw-lighter m-0">ธหารไทยธนชาต</p>
                <p class="small lh-1 text-white m-0">จริงใจ สมานสิน</p>
                <p class="fs-5 fw-bold fw-bolder lh-1 mb-2 text-warning">
                  1914502255
                </p>
              </div>
              <div class="col d-grid gap-2 d-flex justify-content-end">
                <button type="button" class="btn btn-secondary btn-sm">
                  <i class="bi bi-clipboard-check"></i>
                  คัดลอก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <div class="card bg-dark text-bg-dark border-secondary mb-3">
          <div class="card-body">
            <div class="row justify-content-start">
              <div class="col-auto">
                <img fluid :src="imgBank.bay" width="50" class="mb-2" />
              </div>
              <div class="col-auto">
                <p class="fs-6 fw-lighter m-0">กรุงศรีอยุธยา</p>
                <p class="small lh-1 text-white m-0">สมชาติ ประกาศเกล้า</p>
                <p class="fs-5 fw-bold fw-bolder lh-1 mb-2 text-warning">
                  0394819393
                </p>
              </div>
              <div class="col d-grid gap-2 d-flex justify-content-end">
                <button type="button" class="btn btn-secondary btn-sm">
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
export default {
  name: 'Deposit',
  components: {},
  setup() {
    return {
      imgBank,
    }
  },
}
</script>
