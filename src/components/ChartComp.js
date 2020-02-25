import React from 'react'
import Chart from 'chart.js'

class ChartComp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      chart: null,
    }
    this.createChart = this.createChart.bind(this)
  }
  
  render() {
    return (
      <div className="chart">
        <div className="chart-name">{this.props.name}</div>
        <canvas className="chart-canvas" id={this.props.name}></canvas>
        <div className="rating">{this.props.note} / 5</div>
      </div>
    )
  }

  componentDidMount() {
    this.createChart(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.updateChart(nextProps)
  }

  updateChart(nextProps) {
    this.state.chart.data.datasets[0].data[0] = nextProps.note
    this.state.chart.data.datasets[0].data[1] = 5 - nextProps.note
    this.state.chart.update()
  }

  createChart(props) {
    this.setState({
      chart: 
      new Chart(document.getElementById(props.name), {
        type: 'doughnut',
        data: {
          datasets: [
            {
              label: props.name,
              backgroundColor: ["#3047E2", 'rgba(0,0,0,0.02)'],
              hoverBackgroundColor: ["#3047E2", 'rgba(0,0,0,0.02)'],
              data: [props.note, 5-props.note]
            }
          ]
        },
        options: {
          tooltips: {enabled: false},
          hover: {mode: null},
          segmentShowStroke: false,
          elements: {
            arc: {
                borderWidth: 0
            }
          },
          animation: {
            duration: 2000
          },
          layout: {
            padding: {
              left: -95,
            }
          },
          aspectRatio: 1.6
        }
      })
    })
  }
}

export default ChartComp