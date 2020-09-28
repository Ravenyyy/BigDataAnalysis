const conditionTemplate = `
    <Button type="primary" icon="ios-search" @click="search" style="width:80px; height:40px; font-size:15px">查询</Button>
`
const condition = new Vue({
    el: '#condition',
    template: conditionTemplate,
    data () {
        return {

        }
    },
    methods: {
        search () {
            $.ajax({
                type: 'GET',
                url: localStorage.getItem("url") + 'educationPerson/test',
                data: JSON.stringify({
                    uid: 1,
                    month: '2020-08'
                }),
                success: function (response) {
                    // condition.zhiduiSelect = response.extra.zhiduiList
                    console.log(response)
                },
                error: function (response) {
                    console.log(response);
                }
            })
        }
    }
})