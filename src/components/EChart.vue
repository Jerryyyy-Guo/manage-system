<template>
  <div style="height:100%" ref="echart">
    echart
  </div>
</template>

<script>
import echart from 'echarts'
export default {
  // 父组件传过来的数据
  props: {
    chartData: {
      type: Object,
      default () {
        return {
          xData: [],
          series: []
        }
      }
    },
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {

      echart: null,
      // 有坐标轴
      axisOption: {
        legend: {
          textStyle: {
            color: '#333'
          }
        },
        grid: {
          left: '20%'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            color: '#333'
          }
        }
        ,
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        color: [
          '#2ec7c9',
          '#b6a2de',
          '#5ab1ef',
          '#ffb980',
          '#d87a80',
          '#8d98b3',
          '#e5cf0d',
          '#97b552',
          '#95706d',
          '#dc69aa',
          '#07a2a4',
          '#9a7fd1',
          '#588dd5',
          '#f5994e',
          '#c05050',
          '#59678c',
          '#c9ab00',
          '#7eb00a',
          '#6f5553',
          '#c14089'
        ],
        series: [
        ]
      },

      // 无坐标轴
      normalOption: {
        tooltip: {
          trigger: 'item'
        },
        color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
        series: [
        ]
      }
    }
  },
  computed: {
    // 设置计算属性判断有无坐标轴 
    options () {
      return this.isAxisChart ? this.axisOption : this.normalOption
    },
    isCollapse () {
      return this.$store.state.tab.isCollapse
    }
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart()
      },
      deep: true
    },
    isCollapse () {
      setTimeout(() => {
        this.resizeChart()
      }, 300)
    }
  },
  methods: {
    initChart () {
      this.initChartData()
      if (this.echart) {
        // 容器存在
        this.echart.setOption(this.options)
      } else {
        // 容器不存在
        this.echart = echart.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData () {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        this.normalOption.series = this.chartData.series
      }
    },
    resizeChart () {
      this.echart ? this.echart.resize() : ''
    }
  },
  mounted () {
    window.addEventListener('resize', this.resizeChart)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeChart)
  }
}
</script>

<style lang="scss" scoped>
</style>