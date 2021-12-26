
export default class UserAgent {
  constructor () {
    this.$html = $('html')
  }
  test1 () {
    console.log('test1')
  }

  init () {
      this.test1()
      console.log('test2')
  }
}

new UserAgent().init()
