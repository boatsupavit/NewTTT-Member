<template>
  <footer class="fixed-bottom">
    <div class="container">
      <div class="container-bg">
        <hr class="my-2" />
        <div class="navigation">
          <ul>
            <li class="list active">
              <router-link to="/member">
                <span class="icon">
                  <i class="bi bi-house-fill"></i>
                </span>
                <span class="text">หน้าแรก</span>
              </router-link>
            </li>
            <li class="list" data-bs-toggle="modal" data-bs-target="#modalhis">
              <a href="#">
                <span class="icon">
                  <i class="bi bi-card-heading"></i>
                </span>
                <span class="text">ประวัติ</span>
              </a>
            </li>
            <!-- <li class="list" data-bs-toggle="modal" data-bs-target="#modalsoon">
              <a href="#">
                <span class="icon">
                  <i class="bi bi-person-badge"></i>
                </span>
                <span class="text">ข้อมูลส่วนตัว</span>
              </a>
            </li>
            <li class="list" data-bs-toggle="modal" data-bs-target="#modalsoon">
              <a href="#">
                <span class="icon">
                  <i class="bi bi-gift-fill"></i>
                </span>
                <span class="text">โปรโมชั่น</span>
              </a>
            </li> -->
            <li class="list">
              <a :href="this.$store.getters.social_line">
                <span class="icon">
                  <i class="bi bi-telephone-forward-fill"></i>
                </span>
                <span class="text">ติดต่อเรา</span>
              </a>
            </li>
            <div class="indicator"></div>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <!-- Modal - History -->
  <div
    class="modal fade modal"
    id="modalhis"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalhis"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="modalhis">
            <i class="bi bi-card-heading"></i>
            ประวัติรายการฝาก / รายการถอน
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <History />
        </div>
        <div class="modal-footer">
          <p class="fst-italic small text-danger">
            *รายการฝาก/รายการถอน มีอายุ 1 เดือน
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import History from './../components/History.vue'

export default {
  name: 'AppFooterMember',
  components: {
    History,
  },
  data() {
    return {
      list: '',
    }
  },
  mounted() {
    const list = document.querySelectorAll('.list')
    function activeLink() {
      list.forEach((item) => {
        item.classList.remove('active')
      })
      this.classList.add('active')
    }
    list.forEach((item) => item.addEventListener('click', activeLink))
  },
}
</script>

<style lang="css">
@import './../styles/_footer.css';
</style>
