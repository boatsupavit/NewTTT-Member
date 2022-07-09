<template>
  <div class="container-fluid">
    <div class="border border-warning border-2">
      <BannerSlider />
      <div
        class="alert alert-dark px-2 py-1 m-1 bg-opacity-50 bg-dark text-white"
      >
        <div class="d-inline-flex w-100">
          <i class="bi bi-megaphone"></i>
          <Vue3Marquee :pauseOnHover="true" :duration="20" class="ms-1">
            <span>
              นี่คือตัวอย่างอักษรเลื่อน
              อักษรเลื่อนนี้จะสามารถใส่ตัวอักษรได้ไม่เกิน 300 ตัวอักษร /
              นี่คือตัวอย่างอักษรเลื่อน
              อักษรเลื่อนนี้จะสามารถใส่ตัวอักษรได้ไม่เกิน 300 ตัวอักษร
            </span>
          </Vue3Marquee>
        </div>
      </div>
      <!-- <div>
        <button class="btn btn-warning btn-lg" @click="callwhitelist">
          call whitelist
        </button>
      </div> -->
      <!-- <div class="container my-2">
        <div
          class="row row-cols-2 row-cols-sm-4 row-cols-md-4 justify-content-center"
        >
          <div class="col">
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-warning btn-lg">
                สมัคร
              </button>
            </div>
          </div>
          <div class="col">
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-warning btn-lg">
                โอนเงิน
              </button>
            </div>
          </div>
          <div class="col">
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-warning btn-lg">
                เล่นเกมส์
              </button>
            </div>
          </div>
          <div class="col">
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-warning btn-lg">
                ติดต่อเจ้าหน้าที่
              </button>
            </div>
          </div>
        </div>
      </div> -->
      <div class="container my-2">
        <div class="row row-cols-1 row-cols-md-3 g-3">
          <div class="col">
            <div class="card game-entrance text-center">
              <img
                src="./../assets/images/banner-slot-01.png"
                class="card-img-top"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
                alt=""
              />
              <div
                class="card-body p-1"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
              >
                <h3 class="card-title">
                  <strong>Slot</strong>
                </h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card game-entrance text-center">
              <img
                src="./../assets/images/banner-baccarat-01.png"
                class="card-img-top"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
                alt=""
              />
              <div
                class="card-body p-1"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
              >
                <h3 class="card-title"><strong>Baccarat</strong></h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card game-entrance text-center">
              <img
                src="./../assets/images/banner-lotto-01.png"
                class="card-img-top"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
                alt=""
              />
              <div
                class="card-body p-1"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
              >
                <h3 class="card-title"><strong>Lotto</strong></h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card game-entrance text-center">
              <img
                src="./../assets/images/banner-sport-01.png"
                class="card-img-top"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
                alt=""
              />
              <div
                class="card-body p-1"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
              >
                <h3 class="card-title"><strong>Sport</strong></h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card game-entrance text-center">
              <img
                src="./../assets/images/banner-poker-01.png"
                class="card-img-top"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
                alt=""
              />
              <div
                class="card-body p-1"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
              >
                <h3 class="card-title"><strong>Poker</strong></h3>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card game-entrance text-center">
              <img
                src="./../assets/images/banner-keno-01.png"
                class="card-img-top"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
                alt=""
              />
              <div
                class="card-body p-1"
                data-bs-toggle="modal"
                data-bs-target="#modalLoginID"
              >
                <h3 class="card-title"><strong>Kenno</strong></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-2">
        <div class="row px-4">
          <div
            class="col-sm-6 d-flex flex-column align-items-center justify-content-center"
          >
            <p class="text-content">
              โปรโมชั่นของเรา รวยเร็ว ถอนไม่อั้น คบกันไปนานแล้ว งานหนัก
              มีเพียงสิ่งเดียว ที่ทำให้คนมันไม่ต่างกัน แต่เราคงไม่เข้าใจ
              ไม่ต่างกัน ไม่อาจร่วมทางจะเหนื่อยถ้ามีใครถาม เลือกเขามีวันนี้
            </p>
            <img
              src="./../assets/images/home-promotion-02.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-sm-6 d-none d-md-block">
            <img
              src="./../assets/images/home-promotion-01.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container my-2 p-0">
        <Vue3Marquee
          :gradient="true"
          :gradientColor="[147, 134, 17]"
          :gradientWidth="`18%`"
          :pauseOnHover="true"
          :duration="25"
        >
          <img
            v-for="img in imgHallArray"
            :src="img.pathLong"
            :key="img._id"
            class="image"
            width="90"
          />
        </Vue3Marquee>
      </div>
      <hr class="mb-2" />
      <div class="container text-white mt-3 mb-5">
        <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2">
          <div
            class="col d-flex flex-column align-items-center justify-content-start"
          >
            <h3 class="m-0">
              <strong>ติดต่อผ่านช่องทางออนไลน์</strong>
            </h3>
            <p class="mb-3">
              <a :href="this.$store.getters.social_line" class="link-warning">
                @{{ this.$store.getters.webname }}
              </a>
            </p>
            <div>
              <img
                fluid
                :src="imgSocial.facebook"
                width="50"
                class="ms-1 me-1"
              />
              <img
                fluid
                :src="imgSocial.instagram"
                width="50"
                class="ms-1 me-1"
              />
              <img fluid :src="imgSocial.line" width="50" class="ms-1 me-1" />
              <img
                fluid
                :src="imgSocial.telegram"
                width="50"
                class="ms-1 me-1"
              />
              <img
                fluid
                :src="imgSocial.twitter"
                width="50"
                class="ms-1 me-1"
              />
              <img
                fluid
                :src="imgSocial.youtube"
                width="50"
                class="ms-1 me-1"
              />
            </div>
          </div>
          <div
            class="col d-flex flex-column align-items-center justify-content-start"
          >
            <h3 class="m-0">
              <strong>ฝาก - ถอน อัตโนมัติ</strong>
            </h3>
            <p class="mb-3 text-muted">ตลอด 24 ชั่วโมง</p>
            <div>
              <img fluid :src="imgBank.ttb" width="50" class="ms-1 me-1" />
              <img fluid :src="imgBank.bay" width="50" class="ms-1 me-1" />
              <img fluid :src="imgBank.kbank" width="50" class="ms-1 me-1" />
              <img fluid :src="imgBank.ktb" width="50" class="ms-1 me-1" />
              <img fluid :src="imgBank.scb" width="50" class="ms-1 me-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

import { imgBankSmoothSet as imgBank } from '@/assets/images/banking/th/smooth-corner'
import { imgSocialMedia as imgSocial } from '@/assets/images/social'

import BannerSlider from './../widgets/BannerSlider.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    BannerSlider,
    Vue3Marquee,
  },
  data() {
    return {
      imgHallArray: [],
      state: '',
      page: '',
    }
  },
  mounted() {
    this.callwhitelist()
    this.importAll(
      require.context('../assets/images/gameshall/', true, /\.png$/),
    )
    this.state = window.location.href
    this.state = this.$route.params.tel
    this.page = this.$route.params.page
    console.log(this.page)
    if (this.page == 'login' && this.state != '') {
      this.$store.commit('setphonenumber', this.state)
      setTimeout(function () {
        document.querySelector('button#login').click()
      }, 500)
    }
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.imgHallArray.push({ pathLong: r(key), pathShort: key }),
      )
    },
    async callwhitelist() {
      this.$store.commit('setapiname', 11013)
      this.$store.commit('setAPI')
      await axios
        .post(this.$store.getters.API, {
          domain_name: 'http://banpong888.taetrueteam.fun',
        })
        .then((resp) => {
          console.log(resp.data)
          this.$store.commit('setagentid', resp.data.result.agent_id)
          console.log(this.$store.getters.agent_id)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  setup() {
    return {
      imgBank,
      imgSocial,
    }
  },
}
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}
</style>
