export const HighchartsConfig = (historical) => {
  return {
    title: {
      text: '6'
    },

    yAxis: {
      title: {
        text: 'Price'
      }
    },

    xAxis: {type: 'datetime'},

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOption: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: historical,

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOption: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }
}

export default HighchartsConfig
