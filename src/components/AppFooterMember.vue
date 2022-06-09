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
            <li class="list">
              <a href="#">
                <span class="icon">
                  <i class="bi bi-card-heading"></i>
                </span>
                <span class="text">ประวัติ</span>
              </a>
            </li>
            <li class="list">
              <a href="#">
                <span class="icon">
                  <i class="bi bi-person-badge"></i>
                </span>
                <span class="text">ข้อมูลส่วนตัว</span>
              </a>
            </li>
            <li class="list">
              <a href="#">
                <span class="icon">
                  <i class="bi bi-gift-fill"></i>
                </span>
                <span class="text">โปรโมชั่น</span>
              </a>
            </li>
            <li class="list d-none d-sm-block">
              <a href="#">
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
</template>

<script>
export default {
  name: 'AppFooterMember',
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
