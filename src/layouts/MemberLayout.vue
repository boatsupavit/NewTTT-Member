<template>
  <div>
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeaderMember />
      <div class="body flex-grow-1 px-2 pb-2">
        <div class="container">
          <router-view />
        </div>
        <div class="container-fluid">
          <AppFooterMember />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderMember from '@/components/AppHeaderMember.vue'
import AppFooterMember from '@/components/AppFooterMember.vue'

export default {
  name: 'MemberLayout',
  components: {
    AppHeaderMember,
    AppFooterMember,
  },
}
</script>
