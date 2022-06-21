<template>
  <div>
    <section class="hero-section">
      <div class="card1-grid">
        <a
          class="card1"
          id="Sports"
          @click="startgamesport"
          data-bs-toggle="modal"
          :data-bs-target="modalname"
          href="#"
        >
          <div
            class="card1__background"
            id="Sports"
            :style="{ 'background-image': 'url(' + content_sport_1 + ')' }"
          ></div>
          <div class="card1__content" id="Sports">
            <p class="card1__category" id="Sports">Sport</p>
            <h3 class="card1__heading" id="Sports">กีฬา</h3>
          </div>
        </a>
        <router-link
          class="card1"
          id="Slot"
          @click="setgametype"
          to="/member/games"
        >
          <div
            class="card1__background"
            id="Slot"
            :style="{ 'background-image': 'url(' + content_slot_1 + ')' }"
          ></div>
          <div class="card1__content" id="Slot">
            <p class="card1__category" id="Slot">Slot</p>
            <h3 class="card1__heading" id="Slot">เกมสล็อต</h3>
          </div>
        </router-link>
        <router-link
          class="card1"
          id="Casino"
          @click="setgametype"
          to="/member/games"
        >
          <div
            class="card1__background"
            id="Casino"
            :style="{ 'background-image': 'url(' + content_casino_1 + ')' }"
          ></div>
          <div class="card1__content" id="Casino">
            <p class="card1__category" id="Casino">Baccarat</p>
            <h3 class="card1__heading" id="Casino">ไลฟ์คาสิโน</h3>
          </div>
        </router-link>
        <router-link
          class="card1"
          id="Card"
          @click="setgametype"
          to="/member/games"
        >
          <div
            class="card1__background"
            id="Card"
            :style="{ 'background-image': 'url(' + content_card_1 + ')' }"
          ></div>
          <div class="card1__content" id="Card">
            <p class="card1__category" id="Card">Poker</p>
            <h3 class="card1__heading" id="Card">เกมไพ่</h3>
          </div>
        </router-link>
        <router-link
          class="card1"
          id="Fish"
          @click="setgametype"
          to="/member/games"
        >
          <div
            class="card1__background"
            id="Fish"
            :style="{ 'background-image': 'url(' + content_fishing_1 + ')' }"
          ></div>
          <div class="card1__content" id="Fish">
            <p class="card1__category" id="Fish">Fishing</p>
            <h3 class="card1__heading" id="Fish">เกมตกปลา</h3>
          </div>
        </router-link>
        <router-link
          class="card1"
          id="keno"
          @click="setgametype"
          to="/member/games"
        >
          <div
            class="card1__background"
            id="keno"
            :style="{ 'background-image': 'url(' + content_keno_1 + ')' }"
          ></div>
          <div class="card1__content" id="keno">
            <p class="card1__category" id="keno">Kenno</p>
            <h3 class="card1__heading" id="keno">คีโน่</h3>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style lang="css">
@import './../styles/_gamecard.css';
</style>

<script>
import content_card_1 from '@/assets/images/gamescard/content_card_1.png'
import content_casino_1 from '@/assets/images/gamescard/content_casino_1.png'
import content_fishing_1 from '@/assets/images/gamescard/content_fishing_1.png'
import content_keno_1 from '@/assets/images/gamescard/content_keno_1.png'
import content_slot_1 from '@/assets/images/gamescard/content_slot_1.png'
import content_sport_1 from '@/assets/images/gamescard/content_sport_1.png'

import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'GameType',
  data() {
    return {
      modalname: '',
    }
  },
  setup() {
    return {
      content_card_1: content_card_1,
      content_casino_1: content_casino_1,
      content_fishing_1: content_fishing_1,
      content_keno_1: content_keno_1,
      content_slot_1: content_slot_1,
      content_sport_1: content_sport_1,
      itemsCount: 42,
    }
  },
  methods: {
    setgametype(event) {
      this.$store.commit('setgametype', event.target.id)
      sessionStorage.setItem('GT', this.$store.getters.gametype)
    },
    async startgamesport(event) {
      let staus = this.$store.getters.statusmem
      if (staus.toString().toLowerCase() == 'suspend') {
        this.modalname = '#modalsuspend'
      } else {
        this.modalname = '#modalGameview'
        this.$store.commit('preparevalue')
        this.$store.commit('setapiname', 45004)
        this.$store.commit('setAPI')
        const token = this.$store.getters.token
        const headers = { Authorization: 'Bearer ' + token }
        console.log(token)
        console.log(headers)
        await axios
          .post(
            this.$store.getters.API,
            {
              tab: event.target.id,
            },
            {
              headers,
            },
          )
          .then((response) => {
            console.log(response.data)
            this.$store.commit('setgamelink', response.data.uri)
            console.log(this.$store.getters.gamelink)
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
      }
    },
  },
  mounted() {
    let staus = this.$store.getters.statusmem
    if (staus.toString().toLowerCase() == 'suspend') {
      this.modalname = '#modalsuspend'
    } else {
      this.modalname = '#modalGameview'
    }
  },
}
</script>
