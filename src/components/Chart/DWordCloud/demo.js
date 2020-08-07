import React from 'react';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
} from 'bizcharts';
import DataSet from '@antv/data-set';
import data from './mock.json';



class Wordcloud extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.renderWordCloud();
    window.addEventListener('resize', this.debounceResize);
  }

  renderWordCloud() {
    let { clientWidth, clientHeight } = this.refs.mountNode;
    // console.log(clientWidth, clientHeight);
    let imageMask = new Image();
    imageMask.crossOrigin = '';
    imageMask.src =
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1185508753,3294372198&fm=23&gp=0.jpg';

    function getTextAttrs(cfg) {
      return Object.assign({}, cfg.style, {
        fillOpacity: cfg.opacity,
        fontSize: cfg.origin._origin.size,
        rotate: cfg.origin._origin.rotate,
        text: cfg.origin._origin.text,
        textAlign: 'center',
        fontFamily: cfg.origin._origin.font,
        fill: cfg.color,
        textBaseline: 'Alphabetic',
      });
    } // 给point注册一个词云的shape

    Shape.registerShape('point', 'cloud', {
      drawShape(cfg, container) {
        const attrs = getTextAttrs(cfg);
        return container.addShape('text', {
          attrs: Object.assign(attrs, {
            x: cfg.x,
            y: cfg.y,
          }),
        });
      },
    });
    this.dv = new DataSet.View().source(data);
    const range = this.dv.range('value');
    const min = range[0];
    const max = range[1];

    imageMask.onload = () => {
      this.dv.transform({
        type: 'tag-cloud',
        fields: ['x', 'value'],
        imageMask: imageMask,
        size: [clientWidth, clientHeight],
        font: 'Verdana',
        padding: 0,
        timeInterval: 5000,

        // max execute time
        rotate() {
          let random = ~~(Math.random() * 4) % 4;
          if (random == 2) {
            random = 0;
          }
          return random * 90; // 0, 90, 270
        },

        fontSize(d) {
          if (d.value) {
            const divisor = max - min !== 0 ? max - min : 1;
            return ((d.value - min) / divisor) * (80 - 24) + 24;
          }
          return 0;
        },
      });

      this.chart = new G2.Chart({
        container: 'mountNode',
        width: clientWidth, // 宽高设置最好根据 imageMask 做调整
        height: clientHeight,
        padding: 0,
        forceFit: false,
      });

      this.chart.source(this.dv, {
        x: {
          nice: false,
        },
        y: {
          nice: false,
        },
      });
      this.chart.legend(false);
      this.chart.axis(false);
      this.chart.tooltip({
        showTitle: false,
      });
      this.chart.coord().reflect();
      this.chart
        .point()
        .position('x*y')
        .color('text')
        .shape('cloud');
      this.chart.render();
    };
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceResize);
  }

  debounceResize = () => {
    let { clientWidth, clientHeight } = this.refs.mountNode;
    this.chart.changeSize(clientWidth, clientHeight);
  };

  render() {
    return <div id="mountNode" ref="mountNode" style={{ width: '100%', height: '100%' }} />;
  }
}

export default Wordcloud;
