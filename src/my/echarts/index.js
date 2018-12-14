module.exports = {
 
    title: {
        text: '文稿',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#000'
        }
    },
        xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
         
        },
        series: [
            {
            data: [120, 200, 150, 80, 70, 110, 130],
            type:'bar',
        }]
   
};

// title: { text: 'ECharts 入门示例' },
// tooltip: {},
// xAxis: {
//     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
// },
// yAxis: {},
// series: [{
//     name: '销量',
//     type: 'bar',
//     data: [5, 20, 36, 10, 10, 20]
// }]
// });