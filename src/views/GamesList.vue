<template>
  <div class="sticky-menu">
    <nav class="skew-menu mt-2" id="navmenu">
      <ul>
        <li class="menu">
          <a
            id="Sports"
            @click="startgamesport"
            data-bs-toggle="modal"
            data-bs-target="#modalGameview"
            href="#"
            >กีฬา</a
          >
        </li>
        <li class="menu">
          <a
            id="slot"
            @click="setgametype"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalspin"
            >สล็อต</a
          >
        </li>
        <li class="menu">
          <a
            id="casino"
            @click="setgametype"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalspin"
            >ไลฟ์คาสิโน</a
          >
        </li>
        <li class="menu">
          <a
            id="Card"
            @click="setgametype"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalspin"
            >ไพ่</a
          >
        </li>
        <li class="menu">
          <a
            id="Fish"
            @click="setgametype"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalspin"
            >ตกปลา</a
          >
        </li>
        <li class="menu">
          <a
            id="keno"
            @click="setgametype"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalspin"
            >คีโน่</a
          >
        </li>
      </ul>
    </nav>
  </div>
  <div class="row align-items-start member-menubg-gamelist px-2 py-3">
    <div class="col-auto">
      <div class="d-flex flex-column flex-shrink-0 nav-provider-list">
        <ul
          class="nav nav-pills nav-flush flex-column mb-auto mt-1 text-center"
        >
          <li
            class="nav-item"
            v-for="track in providerlist"
            :key="track.id"
            @click="Filtergamelist"
          >
            <a
              class="nav-link border-bottom border-secondary rounded-3 p-1"
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              href="#"
              :value="track.provider"
            >
              <img
                :src="track.logoURL"
                :value="track.provider"
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
            >{{ data.providerName
            }}<span>({{ data.games.length }})</span></strong
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
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-body">
          <Iframe />
          <button
            type="button"
            data-bs-dismiss="modal"
            class="btn-close btn-close btn-close-white"
            @click="getprofile"
          ></button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal - Spinner -->
  <div
    class="modal fade modal"
    id="modalspin"
    data-bs-backdrop="static"
    data-bs-keyboard="true"
    tabindex="-1"
    aria-labelledby="modalspin"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-body">
        <button
          type="button"
          data-bs-dismiss="modal"
          id="modalspin"
          hidden
        ></button>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import Iframe from './../components/Iframe.vue'
import Spinner from './../components/LoadingBar.vue'
import axios from 'axios'

export default {
  name: 'GameType',
  components: {
    Iframe,
    Spinner,
  },
  data() {
    return {
      gamelists: [],
      providerlist: [],
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollFunction)
  },
  methods: {
    async getprofile() {
      this.$store.commit('preparevalue')
      this.$store.commit('settoken', sessionStorage.getItem('token'))
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
          this.$store.commit(
            'setbknameth',
            this.$store.getters.bankmember[0].bank_name_th,
          )
          this.$store.commit(
            'setbkid',
            this.$store.getters.bankmember[0].bank_id,
          )
          // ------------------------------------------------------------------------------//
          this.$store.commit(
            'setphonenumber',
            res.data.result.profile_mem.profile.tel,
          )
          this.$store.commit(
            'setfname',
            res.data.result.profile_mem.profile.name,
          )
          this.$store.commit(
            'setlname',
            res.data.result.profile_mem.profile.surename,
          )
          this.$store.commit('setidline', res.data.result.profile_mem.line_id)
          this.$store.commit(
            'setcreatedate',
            res.data.result.profile_mem.create_date,
          )
          this.$store.commit(
            'setusername',
            res.data.result.profile_mem.username,
          )
          this.$store.commit('setcredit', res.data.result.profile_mem.PD.credit)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    Filtergamelist(e) {
      console.log(e.target.attributes.value.value)
      const filterArray = (array, fields, value) => {
        fields = Array.isArray(fields) ? fields : [fields]
        return array.filter((item) =>
          fields.some((field) => item[field] === value),
        )
      }
      ;(this.gamelists = filterArray(
        this.providerlist,
        'provider',
        e.target.attributes.value.value,
      )),
        console.log(this.gamelists)
    },
    async setgametype(event) {
      this.providerlist = []
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
            (this.providerlist = resp.data.result.data),
            console.log('providerlist', this.providerlist),
            (this.gamelists = this.providerlist),
            console.log('gamelists', this.gamelists)
          ),
          setTimeout(function () {
            document.querySelector('button#modalspin').click()
          }, 500),
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
  async mounted() {
    // menu add active
    const list = document.querySelectorAll('.menu')
    function activeLink() {
      list.forEach((item) => {
        item.classList.remove('active')
      })
      this.classList.add('active')
    }
    list.forEach((item) => item.addEventListener('click', activeLink))
    // check token
    if (!!sessionStorage.getItem('token') == false) {
      this.$router.push('/home')
    }
    // get profile
    this.$store.commit('settoken', sessionStorage.getItem('token'))
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
        this.$store.commit(
          'setbknameth',
          this.$store.getters.bankmember[0].bank_name_th,
        )
        this.$store.commit('setbkid', this.$store.getters.bankmember[0].bank_id)
        // ------------------------------------------------------------------------------//
        this.$store.commit(
          'setphonenumber',
          res.data.result.profile_mem.profile.tel,
        )
        this.$store.commit('setfname', res.data.result.profile_mem.profile.name)
        this.$store.commit(
          'setlname',
          res.data.result.profile_mem.profile.surename,
        )
        this.$store.commit('setidline', res.data.result.profile_mem.line_id)
        this.$store.commit(
          'setcreatedate',
          res.data.result.profile_mem.create_date,
        )
        this.$store.commit('setusername', res.data.result.profile_mem.username)
        this.$store.commit('setcredit', res.data.result.profile_mem.PD.credit)
      })
      .catch((error) => {
        console.error(error)
      })
    // get gamelists
    if (this.$store.getters.gametype != '') {
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
            (this.providerlist = resp.data.result.data),
            console.log('providerlist', this.providerlist),
            (this.gamelists = this.providerlist),
            console.log('gamelists', this.gamelists)
          ),
        )
    }
  },
}
</script>
<style scoped>
@import './../styles/_gamelist.css';
</style>
