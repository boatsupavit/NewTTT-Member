<template>
  <div class="sticky-menu">
    <nav class="skew-menu mt-2" id="navmenu">
      <ul>
        <li class="menu" id="Sports">
          <a
            id="Sports"
            @click="startgamesport"
            data-bs-toggle="modal"
            :data-bs-target="modalname"
            href="#"
            >กีฬา</a
          >
        </li>
        <li class="menu" id="slot">
          <a
            id="slot"
            @click="setgametype"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalspin"
            >สล็อต</a
          >
        </li>
        <li class="menu" id="casino">
          <a
            id="casino"
            @click="setgametype"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalspin"
            >ไลฟ์คาสิโน</a
          >
        </li>
        <li class="menu" id="Card">
          <a
            id="Card"
            @click="setgametype"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalspin"
            >ไพ่</a
          >
        </li>
        <li class="menu" id="Fish">
          <a
            id="Fish"
            @click="setgametype"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalspin"
            >ตกปลา</a
          >
        </li>
        <li class="menu" id="keno">
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
                :data-bs-target="modalname"
                :src="game.image.horizontal"
                :gameCategory="game.gameCategory"
                :gameprovider="game.provider"
                :gameid="game.id"
              />
              <figcaption
                data-bs-toggle="modal"
                :data-bs-target="modalname"
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

  <div>
    <button
      id="callspin"
      data-bs-toggle="modal"
      data-bs-target="#modalspin"
      hidden
    />
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
  <!-- Modal - SUSPEND -->
  <div
    class="modal fade modal"
    id="modalsuspend"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="modalsuspend"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-2 modal-shadow">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="modalsuspend">
            <i class="bi bi-exclamation-circle-fill"></i>
            Warning !!!
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container text-content-color">
            <span class="text-center">
              <div class="container">
                <h2>บัญชีของคุณถูกระงับ กรุณาติดต่อเจ้าหน้าที่</h2>
                <img
                  src="https://www.freeiconspng.com/thumbs/alert-icon/alert-icon-red-11.png"
                  alt="Warning !!!"
                  width="50%"
                  height="50%"
                />
              </div>
            </span>
          </div>
        </div>
        <div class="modal-footer px-4">
          <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
            ติดต่อเจ้าหน้าที่
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Iframe from './../components/Iframe.vue'
import Spinner from './../components/LoadingBar.vue'
import axios from 'axios'
import Swal from 'sweetalert2'

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
      modalname: '',
      state: '',
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
          Swal.fire({
            title: 'ผิดพลาด!!!',
            text: 'ระบบขัดข้องกรุณา ติดต่อเจ้าหน้าที่',
            icon: 'error',
            confirmButtonText: 'ตกลง',
          })
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
      setTimeout(function () {
        document.querySelector('button#callspin').click()
      }, 50)
      this.providerlist = []
      this.gamelists = []
      this.$store.commit('preparevalue')
      this.$store.commit('setapiname', 45003)
      this.$store.commit('setAPI')
      this.$store.commit('setgametype', event.target.id)
      console.log(event.target.id)
      console.log('gametype', this.$store.getters.gametype)
      const token = this.$store.getters.token
      const headers = { Authorization: 'Bearer ' + token }
      console.log(headers)
      await axios
        .post(
          this.$store.getters.API,
          {
            gametype: this.$store.getters.gametype,
          },
          {
            headers,
          },
        )
        .then((resp) => {
          console.log(resp.data)
          if (resp.data.status == 200) {
            this.providerlist = resp.data.result.data
            console.log('providerlist', this.providerlist)
            this.gamelists = this.providerlist
            console.log('gamelists', this.gamelists)
            setTimeout(function () {
              document.querySelector('button#modalspin').click()
            }, 1000)
          } else {
            setTimeout(function () {
              document.querySelector('button#modalspin').click()
            }, 1000)
            Swal.fire({
              title: 'ผิดพลาด!!!',
              text: 'Call Games List : ' + resp.data.message,
              icon: 'error',
              confirmButtonText: 'ตกลง',
            })
          }
        })
    },
    async startgame(event) {
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
            if (response.data.status == 200) {
              this.$store.commit('setgamelink', response.data.uri)
              console.log(this.$store.getters.gamelink)
            } else {
              Swal.fire({
                title: 'ผิดพลาด!!!',
                text: 'Start Game : ' + response.data.message,
                icon: 'error',
                confirmButtonText: 'ตกลง',
              })
            }
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
            if (response.data.status == 200) {
              this.$store.commit('setgamelink', response.data.uri)
              console.log(this.$store.getters.gamelink)
            } else {
              Swal.fire({
                title: 'ผิดพลาด!!!',
                text: 'Start Game : ' + response.data.message,
                icon: 'error',
                confirmButtonText: 'ตกลง',
              })
            }
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
    //-------------Get URL------------//
    // this.state = window.location.href
    // console.log('URL =>', this.state)
    // this.state = this.$route.params.gametype
    // console.log('gametype URL =>', this.state)
    // this.$store.commit('setgametype', this.state)
    // console.log('gametype : ', this.$store.getters.gametype)
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
    this.getprofile()
    // get gamelists
    if (this.$store.getters.gametype != '') {
      document.querySelector('button#callspin').click()
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
            console.log(resp.data),
            (this.providerlist = resp.data.result.data),
            console.log('providerlist', this.providerlist),
            (this.gamelists = this.providerlist),
            console.log('gamelists', this.gamelists)
          ),
          setTimeout(function () {
            document.querySelector('button#modalspin').click()
          }, 500),
        )
    }
  },
}
</script>
<style scoped>
@import './../styles/_gamelist.css';
</style>
