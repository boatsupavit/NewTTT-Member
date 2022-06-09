<template>
  <div>
    <nav class="skew-menu mt-2" id="navmenu">
      <ul>
        <li class="menu active">
          <a id="Sports" @click="startgamesport" href="#">กีฬา</a>
        </li>
        <li class="menu">
          <a id="slot" @click="setgametype" href="#">สล็อต</a>
        </li>
        <li class="menu">
          <a id="casino" @click="setgametype" href="#">ไลฟ์คาสิโน</a>
        </li>
        <li class="menu"><a id="Card" @click="setgametype" href="#">ไพ่</a></li>
        <li class="menu">
          <a id="Fish" @click="setgametype" href="#">ตกปลา</a>
        </li>
        <li class="menu">
          <a id="keno" @click="setgametype" href="#">คีโน่</a>
        </li>
      </ul>
    </nav>
    <div class="row align-items-start member-menubg-gamelist px-2 py-3">
      <div class="col-auto">
        <div class="d-flex flex-column flex-shrink-0 nav-provider-list">
          <ul
            class="nav nav-pills nav-flush flex-column mb-auto mt-1 text-center"
          >
            <li
              class="nav-item"
              v-for="track in gamelists"
              :key="track.id"
              :value="track.providerName"
            >
              <a
                class="nav-link border-bottom border-secondary rounded-3 p-1"
                aria-current="page"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                href="#"
              >
                <img
                  :src="track.logoURL"
                  :value="track.providerName"
                  class="rounded-3"
                  aria-label="Home"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="wrapper-game-list" v-for="data in gamelists" :key="data.id">
          <h2>
            <strong
              >{{ data.provider }}<span>({{ data.games.length }})</span></strong
            >
          </h2>
          <div class="cards">
            <figure class="card" v-for="game in data.games" :key="game.id">
              <a
                href="#"
                :gameCategory="game.gameCategory"
                :gameprovider="game.provider"
                :gameid="game.id"
                @click="startgame"
              >
                <img
                  data-bs-toggle="modal"
                  data-bs-target="#modalGameview"
                  :src="game.image.horizontal"
                  :gameCategory="game.gameCategory"
                  :gameprovider="game.provider"
                  :gameid="game.id"
                />
                <figcaption
                  data-bs-toggle="modal"
                  data-bs-target="#modalGameview"
                  :gameCategory="game.gameCategory"
                  :gameprovider="game.provider"
                  :gameid="game.id"
                >
                  {{ game.gameName }}
                </figcaption>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Back to top button -->
  <button
    type="button"
    class="btn btn-danger btn-floating btn-lg"
    id="btn-back-to-top"
    @click="backToTop"
  >
    <i class="bi bi-arrow-up-circle"></i>
  </button>
  <!-- Modal - GameView -->
  <div
    class="modal fade modal"
    id="modalGameview"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalGameview"
    aria-hidden="true"
  >
    <div class="modal-dialog fullscreen">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-body">
          <Iframe />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Iframe from './../components/Iframe.vue'
import axios from 'axios'

export default {
  name: 'GameType',
  components: {
    Iframe,
  },
  data() {
    return {
      gamelists: [],
    }
  },
  methods: {
    async setgametype(event) {
      this.gamelists = []
      this.$store.commit('preparevalue')
      this.$store.commit('setapiname', 45003)
      this.$store.commit('setAPI')
      this.$store.commit('setgametype', event.target.id)
      console.log(event.target.id)
      console.log('gametype', this.$store.getters.gametype)
      await axios
        .post(this.$store.getters.API, {
          gametype: this.$store.getters.gametype,
        })
        .then(
          (resp) => (
            (this.gamelists = resp.data.result.data),
            console.log('gamelist', this.gamelists)
          ),
        )
    },
    async startgame(event) {
      this.$store.commit('preparevalue')
      this.$store.commit('setapiname', 45004)
      this.$store.commit('setAPI')
      const token = this.$store.getters.token
      const headers = { Authorization: 'Bearer ' + token }
      console.log(event.target.attributes.gameid.value)
      console.log(event.target.attributes.gameprovider.value)
      console.log(event.target.attributes.gameCategory.value)
      await axios
        .post(
          this.$store.getters.API,
          {
            gameID: event.target.attributes.gameid.value,
            provider: event.target.attributes.gameprovider.value,
            tab: event.target.attributes.gameCategory.value,
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
        })
    },
    async startgamesport(event) {
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
        })
    },
    scrollFunction() {
      let mybutton = document.getElementById('btn-back-to-top')
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = 'block'
      } else {
        mybutton.style.display = 'none'
      }
    },
    backToTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
  },
  created() {
    window.addEventListener('scroll', this.scrollFunction)
  },
  async mounted() {
    const list = document.querySelectorAll('.menu')
    function activeLink() {
      list.forEach((item) => {
        item.classList.remove('active')
      })
      this.classList.add('active')
    }
    list.forEach((item) => item.addEventListener('click', activeLink))
    if (!!sessionStorage.getItem('token') == false) {
      this.$router.push('/home')
    }
    this.$store.commit('setapiname', 45003)
    this.$store.commit('setAPI')
    console.log('API', this.$store.getters.API)
    console.log('gametype', this.$store.getters.gametype)
    await axios
      .post(this.$store.getters.API, {
        gametype: this.$store.getters.gametype,
      })
      .then(
        (resp) => (
          (this.gamelists = resp.data.result.data),
          console.log('gamelist', this.gamelists)
        ),
      )
  },
}
</script>
<style scoped>
@import './../styles/_gamelist.css';
</style>
