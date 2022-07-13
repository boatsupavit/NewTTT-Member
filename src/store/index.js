import { createStore } from 'vuex'

export default createStore({
  state: {
    webname: 'BANPONG-888',
    social_line: 'https://line.me/ti/p/@',
    token: sessionStorage.getItem('token'),
    IP: 'taetrueteam.fun',
    // IP: '192.168.1.53',
    apiname: '',
    API: '',
    phonenumber: '',
    pin: '',
    msgRetrun: '',
    bankdeposit: [],
    bankmember: [],
    bankName: '',
    bankaccount: '',
    bankNameth: 'กรุณาเลือกธนาคาร...',
    bankid: '',
    fname: '',
    lname: '',
    imgbank: '',
    chanel: 'กรุณาเลือกช่องทาง...',
    statusmem: '',
    password: '',
    idline: '',
    captcha: '',
    username: '',
    createdate: '-',
    credit: '0',
    privilege: '',
    gametype: '',
    gamelink: '',
    captchaID: '',
    imgcaptcha: '',
    withdraw_count: 0,
    agent_id: '',
  },
  getters: {
    webname: (state) => state.webname,
    social_line: (state) => state.social_line + state.webname,
    token: (state) => state.token,
    IP: (state) => state.IP,
    password: (state) => state.password,
    API: (state) => state.API,
    phonenumber: (state) => state.phonenumber,
    pin: (state) => state.pin,
    bankdeposit: (state) => state.bankdeposit,
    bankmember: (state) => state.bankmember,
    bankName: (state) => state.bankName,
    bankNameth: (state) => state.bankNameth,
    bankid: (state) => state.bankid,
    bankaccount: (state) => state.bankaccount,
    imgbank: (state) => state.imgbank,
    fname: (state) => state.fname,
    lname: (state) => state.lname,
    name: (state) => state.fname + '  ' + state.lname,
    chanel: (state) => state.chanel,
    idline: (state) => state.idline,
    captcha: (state) => state.captcha,
    username: (state) => state.username,
    statusmem: (state) => state.statusmem,
    createdate: (state) => state.createdate,
    credit: (state) => state.credit,
    privilege: (state) => state.privilege,
    gametype: (state) => state.gametype,
    gamelink: (state) => state.gamelink,
    captchaID: (state) => state.captchaID,
    imgcaptcha: (state) => state.imgcaptcha,
    withdraw_count: (state) => state.withdraw_count,
    agent_id: (state) => state.agent_id,
  },
  mutations: {
    preparevalue(state) {
      state.gamelink = ''
      state.gametype = ''
      state.token = sessionStorage.getItem('token')
    },
    clearall(state) {
      state.phonenumber = ''
      state.pin = ''
      state.password = ''
      state.bankdeposit = []
      state.bankmember = []
      state.bankName = ''
      state.bankNameth = 'กรุณาเลือกธนาคาร...'
      state.bankid = ''
      state.bankaccount = ''
      state.imgbank = ''
      state.fname = ''
      state.lname = ''
      state.password = ''
      state.chanel = 'กรุณาเลือกช่องทาง...'
      state.idline = ''
      state.captcha = ''
      state.username = ''
      state.statusmem = ''
      state.createdate = '-'
      state.credit = ''
      state.privilege = ''
      state.gametype = ''
      state.gamelink = ''
      state.withdraw_count = 0
    },
    setphonenumber(state, phonenumber) {
      state.phonenumber = phonenumber
    },
    setpin(state, pin) {
      state.pin = pin
    },
    settoken(state, token) {
      state.token = token
    },
    setbkdp(state, bankdeposit) {
      state.bankdeposit = bankdeposit
    },
    setbkmb(state, bankmember) {
      state.bankmember = bankmember
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
    setimgbk(state, imgbank) {
      state.imgbank = imgbank
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
    setstatusmem(state, statusmem) {
      state.statusmem = statusmem
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
    setprivilege(state, privilege) {
      state.privilege = privilege
    },
    setgametype(state, gametype) {
      state.gametype = gametype
    },
    setgamelink(state, gamelink) {
      state.gamelink = gamelink
    },
    setwdc(state, withdraw_count) {
      state.withdraw_count = withdraw_count
    },
    setagentid(state, agent_id) {
      state.agent_id = agent_id
    },
    setAPI() {
      this.state.API = 'http://' + this.state.IP + ':' + this.state.apiname
    },
    setapiname(state, apicode) {
      if (apicode == 11000) {
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
      } else if (apicode == 11009) {
        state.apiname = '10000/member/getbankdeposit'
      } else if (apicode == 11010) {
        state.apiname = '10000/member/getwithdrawamount'
      } else if (apicode == 11011) {
        state.apiname = apicode + '/getchannel'
      } else if (apicode == 11012) {
        state.apiname = '10000/member/getwithdrawhistory'
      } else if (apicode == 11013) {
        state.apiname = apicode + '/whitelist'
      } else if (apicode == 11014) {
        state.apiname = '10000/member/getdeposithistory'
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
