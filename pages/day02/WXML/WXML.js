// pages/day02/WXML/WXML.js
Page({

  //input handler
  inputHandler(e){
    this.setData({inputMsg : e.detail.value})
  },

  // button tap handler

  hiddenBtnHandler(e){
    this.setData({HiddenCondition:!this.data.HiddenCondition})

  },

  btnTapHandler(e){
    this.setData({count:this.data.count+1})

  },
  btnTap3(e){
    this.setData({outputMsg:this.data.inputMsg})
    
  },
  btnTap2(e){
    console.log(e),
    // e.target.dataset to get the data transferred from the target
    //the 'this.data.count' is the older value,and the 'count' is the newest one
    this.setData({count:this.data.count+ e.target.dataset.times})
  },
  /**
   * Page initial data
   */
  data: {
    info: 'hello there',
    imgSrc: 'https://img.zcool.cn/community/011aad554be56f000001bf72c38864.jpg@1280w_1l_2o_100sh.jpg',
    randomNum: Math.random()*10,
    count:0,
    inputMsg:'' ,
    outputMsg:'',
    HiddenCondition:false,
    arr1:['apple','bear','car','deer'],
    list1:[
      {id:1,type:'drink',name:'coffee'},
      {id:2,type:'snack',name:'cookie'},
      {id:3,type:'drink',name:'tea'}
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