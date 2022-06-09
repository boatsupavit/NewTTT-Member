import { createStore } from 'vuex'

export default createStore({
  state: {
    token: sessionStorage.getItem('token'),
    IP: '192.168.1.49',
    apiname: '',
    API: '',
    phonenumber: '',
    pin: '',
    msgRetrun: '',
    bankName: '',
    bankaccount: '',
    bankNameth: 'กรุณาเลือกธนาคาร...',
    bankid: '',
    fname: '',
    lname: '',
    chanel: 'กรุณาเลือกช่องทาง...',
    password: '',
    idline: '',
    captcha: '',
    username: 'Anonymous',
    createdate: '-',
    credit: '0.00',
    gametype: 'Casino',
    gamelink: '',
    captchaID: '',
    imgcaptcha: '',
  },
  getters: {
    token: (state) => state.token,
    IP: (state) => state.IP,
    password: (state) => state.password,
    API: (state) => state.API,
    phonenumber: (state) => state.phonenumber,
    pin: (state) => state.pin,
    bankName: (state) => state.bankName,
    bankNameth: (state) => state.bankNameth,
    bankid: (state) => state.bankid,
    bankaccount: (state) => state.bankaccount,
    fname: (state) => state.fname,
    lname: (state) => state.lname,
    chanel: (state) => state.chanel,
    idline: (state) => state.idline,
    captcha: (state) => state.captcha,
    username: (state) => state.username,
    createdate: (state) => state.createdate,
    credit: (state) => state.credit,
    gametype: (state) => state.gametype,
    gamelink: (state) => state.gamelink,
    captchaID: (state) => state.captchaID,
    imgcaptcha: (state) => state.imgcaptcha,
  },
  mutations: {
    preparevalue(state) {
      state.gamelink = ''
      state.gametype = ''
    },
    clearall(state) {
      state.phonenumber = ''
      state.pin = ''
      state.password = ''
      state.bankName = ''
      state.bankNameth = 'กรุณาเลือกธนาคาร...'
      state.bankid = ''
      state.bankaccount = ''
      state.fname = ''
      state.lname = ''
      state.password = ''
      state.chanel = 'กรุณาเลือกช่องทาง...'
      state.idline = ''
      state.captcha = ''
      state.username = ''
      state.createdate = '-'
      state.credit = ''
      state.gametype = ''
      state.gamelink = ''
      state.captchaID = ''
    },
    loginUser(state) {
      state.isLoggedIn = true
    },
    logoutUser(state) {
      state.isLoggedIn = false
    },
    setphonenumber(state, phonenumber) {
      state.phonenumber = phonenumber
    },
    setpin(state, pin) {
      state.pin = pin
    },
    setbkname(state, bankName) {
      state.bankName = bankName
    },
    setbkacc(state, bankaccount) {
      state.bankaccount = bankaccount
    },
    setbknameth(state, bankNameth) {
      state.bankNameth = bankNameth
    },
    setbkid(state, bankid) {
      state.bankid = bankid
    },
    setfname(state, fname) {
      state.fname = fname
    },
    setlname(state, lname) {
      state.lname = lname
    },
    setchanel(state, chanel) {
      state.chanel = chanel
    },
    setpassword(state, password) {
      state.password = password
    },
    setidline(state, idline) {
      state.idline = idline
    },
    setcaptcha(state, captcha) {
      state.captcha = captcha
    },
    setcaptchaID(state, captchaID) {
      state.captchaID = captchaID
    },
    setimgcaptcha(state, imgcaptcha) {
      state.imgcaptcha = imgcaptcha
    },
    setusername(state, username) {
      state.username = username
    },
    setcreatedate(state, createdate) {
      state.createdate = createdate
    },
    setcredit(state, credit) {
      state.credit = credit
    },
    setgametype(state, gametype) {
      state.gametype = gametype
    },
    setgamelink(state, gamelink) {
      state.gamelink = gamelink
    },
    setAPI() {
      this.state.API = 'http://' + this.state.IP + ':' + this.state.apiname
    },
    setapiname(state, apicode) {
      if (apicode == 12000) {
        state.apiname = apicode + '/whitelist'
      } else if (apicode == 11000) {
        state.apiname = apicode + '/register'
      } else if (apicode == 11001) {
        state.apiname = '10000/member/getprofileuser'
      } else if (apicode == 11002) {
        state.apiname = apicode + '/update-password'
      } else if (apicode == 11004) {
        state.apiname = apicode + '/getbanking'
      } else if (apicode == 11005) {
        state.apiname = apicode + '/Login'
      } else if (apicode == 11006) {
        state.apiname = '10000/member/logoff'
      } else if (apicode == 11007) {
        state.apiname = '10000/member/withdraw'
      } else if (apicode == 11008) {
        state.apiname = apicode
      } else if (apicode == 45003) {
        state.apiname = apicode + '/getgamelist'
      } else if (apicode == 45004) {
        state.apiname = '10000/provieder/startgame'
      }
    },
  },
  actions: {},
  modules: {},
})
