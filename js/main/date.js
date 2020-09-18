const monthPickerTemplate = `
<DatePicker :value ="month" class="showTime" size="middle" type="month" placeholder="选择月份" @on-change="changeTime"></DatePicker>
`
const monthPicker = new Vue({
  el: '#showTime',
  template: monthPickerTemplate,
  data () {
    return {
      month: ""
    }
  },
  mounted () {
    this.showMonth();
  },
  methods: {
    showMonth () {
      this.month = localStorage.getItem("month")
      console.log(this.month)
    },
    changeTime (date) {
      console.log(date)
      localStorage.setItem("month", date)
      location.reload()
    }
  },
})