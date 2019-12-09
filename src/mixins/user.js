export default {
  data () {
    return {
      userInfo: null
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      console.log('getUserInfo')
      this.userInfo = ['test']
    }
  }
}
