// pages/catalog/catalog.js
Page({

  //navigation

  /**
   * go to Day1-component-button
   */
  Day1_component_button(){
    wx.navigateTo({
      url: '/pages/day01/component/button/button'
    })
  },
  /**
   * go to Day1-component-image
   */
  Day1_component_image(){
    wx.navigateTo({
      url: '/pages/day01/component/image/image'
    })
  },
  /**
   * go to Day1-component-text
   */
  Day1_component_text(){
    wx.navigateTo({
      url: '/pages/day01/component/text/text'
    })
  },
  /**
   * go to Day1-component-view
   */
  Day1_component_view(){
    wx.navigateTo({
      url: '/pages/day01/component/view/view'
    })
  },
  
  Day2_request(){
    wx.navigateTo({
      url: '/pages/day02/request/request',
    })
  },
  Day2_WXML(){
    wx.navigateTo({
      url: '/pages/day02/WXML/WXML',
    })
  },
  Day2_WXSS(){
    wx.navigateTo({
      url: '/pages/day02/WXSS/WXSS',
    })
  },

  /**
   * Page initial data
   */
  data: {
    //list of day1
    Day1:[
      {id:1,folder:'component',pages:'button'},
      {id:2,folder:'component',pages:'image'},
      {id:3,folder:'component',pages:'text'},
      {id:4,folder:'component',pages:'view'}
    ],
    Day2:[
      {id:1,pages:'request'},
      {id:2,pages:'WXML'},
      {id:3,pages:'WXSS'}
    ]
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