// pages/day03/navigation/navigation.js
Page({

  //programming navigation 
  /**
   * use programming navigation to go to  page wxss
   */
  gotoWxss(){
    wx.switchTab({
      url: '/pages/day02/WXSS/WXSS',
      success:()=>{
        console.log('switchTab')
      }
    })
  },
  /**
    * use programming navigation to go to  page navigation1
    */
  gotoNavigation1(){
    wx.navigateTo({
      url: '/pages/day03/navigation1/navigation1',
      success:()=>{
        console.log('navigateTo')
      }
    })
  },
/**
 * goto page Navigation1 With Parameter
 */
  gotoNavi1WithParam(){
    wx.navigateTo({
      url: '/pages/day03/navigation1/navigation1?name=abc&age=123',
    })
  },
  /**
   * get the input
   */
  getName(e){
    this.setData({name: e.detail.value})
  },
  getAge(e){
    this.setData({age: e.detail.value})
  },
  /**
   * Page initial data
   */
  data: {
    name:'',
    age:0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})