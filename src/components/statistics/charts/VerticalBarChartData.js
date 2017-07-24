import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'USA',
      backgroundColor: palette.primary,
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    },
    {
      label: 'USSR',
      backgroundColor: palette.info,
      data: [50, 10, 22, 39, 15, 20, 85, 32, 60, 50, 20, 30]
    }
  ]
}