
const appGranit = Vue.createApp({
  data: ()=>{
    return {
      viewerID: {
        qgisViewerID: 'qgisViewerID',
        forgeViewerID: 'forgeViewerID'
      }, 
      givenAttr: 'default'
      
    }
  },
  methods: {
    switchQGIS() {
      this.givenAttr = this.viewerID.qgisViewerID
      console.log(this.givenAttr)
      return this.givenAttr
    },
    switchForge() {
      this.givenAttr = this.viewerID.forgeViewerID
      console.log(this.givenAttr)
      return this.givenAttr
    }
    
  }
})
appGranit.mount('#granitApp')
