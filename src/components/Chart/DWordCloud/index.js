// imageUrl   遮罩层图片  如果存在此属性，排序方式不生效 (注意给定的模板图片一定要轮廓分明，最好是外围都是白色)
// sequence   排序方式  default:默认样式横竖都有    horizontal水平   vertical 竖直   相交intersect
// dataSource 数据   formatData(data,colorArr)     formatData为将相数云处理为词云所需数据的函数  第一个参数data为需要处理的相数云数据，colorArr为渲染颜色数组，需要和colorArr一致
// colorArr   渲染颜色数组  ['rgb(11, 10, 138)', 'rgb(18, 61, 182)','rgb(0, 124, 211)','rgb(0, 213, 255)','rgb(13, 237, 236)','rgb(44, 254, 193)']
// 所有预定图片都在 @/pages/Dcharts/DantvWorldColud/imgages/ 文件夹下

import React from 'react';
import { Chart, Geom, Tooltip, Coord, Shape } from 'bizcharts';
import DataSet from '@antv/data-set';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

class Wordcloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
    };
  }
  componentDidMount() {
    if (this.node) {
      this.setState({ canvasWidth: 1 });
      this.setState({ canvasHeight: 1 });
    }
    window.addEventListener('resize', this.debounceResize);
    setTimeout(() => {
      this.setState({ canvasWidth: this.node.parentNode.clientWidth });
      this.setState({ canvasHeight: this.node.parentNode.clientHeight });
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceResize);
  }

  handleRef = n => {
    this.node = n;
  };

  debounceResize = debounce(() => {
    if (this.node.parentNode.clientWidth !== this.state.canvasWidth) {
      this.setState({ canvasWidth: this.node.parentNode.clientWidth });
      // this.setState({ canvasHeight: this.node.parentNode.clientHeight });
    }
    if (this.node.parentNode.clientHeight !== this.state.canvasHeight) {
      // this.setState({ canvasWidth: this.node.parentNode.clientWidth });
      this.setState({ canvasHeight: this.node.parentNode.clientHeight });
    }
  }, 400);

  render() {
    const { canvasWidth, canvasHeight } = this.state;
    let { imageUrl, sequence, dataSource, colorArr, warpStyle } = this.props;
    let imageMask = new Image();
    imageMask.crossOrigin = '';
    imageMask.src = imageUrl;
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
    const dv = new DataSet.View().source(dataSource);
    const range = dv.range('value');
    const min = range[0];
    const max = range[1];

    dv.transform({
      type: 'tag-cloud',
      fields: ['x', 'value'],
      size: [canvasWidth, canvasHeight],
      imageMask,
      font: 'Verdana',
      padding: 0,
      // timeInterval: 5000,
      // max execute time
      rotate() {
        let random = ~~(Math.random() * 4) % 4;
        if (sequence === 'horizontal') {
          return (random = 0);
        } else if (sequence === 'vertical') {
          return (random = 90);
        } else if (sequence === 'intersect') {
          return random == 2 ? (random = 45) : (random = random * 135);
        } else {
          return random == 2 ? (random = 0) : (random = 90);
        }
      },
      fontSize(d) {
        if (d.value) {
          const divisor = max - min !== 0 ? max - min : 1;
          return ((d.value - min) / divisor) * (80 - 24) + canvasWidth / 50;
        }
        return 0;
      },
      // fontSize(d) {
      //   if (d.value) {
      //     const divisor = max - min !== 0 ? max - min : 1;
      //     return ((d.value - min) / divisor) * (80 - 24) + 24;
      //   }
      //   return 0;
      // },
    });

    const scale = {
      x: {
        nice: false,
      },
      y: {
        nice: false,
      },
    };
    return (
      <div ref={this.handleRef} style={{ height: '100%', width: '100%', ...warpStyle }}>
        <Chart height={canvasHeight} width={canvasWidth} data={dv} scale={scale} padding={0}>
          <Tooltip
            showTitle={false}
            triggerOn="mousemove"
            g2-tooltip={{
              position: 'absolute',
              visibility: 'hidden',
              fontSize: '14px',
              border: 'none',
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              boxShadow: 'none',
              color: '#fff',
              opacity: '0.8',
              padding: '6px',
              transition: 'top 200ms,left 200ms',
              borderRadius: '2px',
            }}
            itemTpl='<tr class="g2-tooltip-list-item"><td>{value}</td></tr>'
          />
          <Coord reflect="y" />
          <Geom
            type="point"
            position="x*y"
            color={['category', colorArr]}
            shape="cloud"
            tooltip="value"
          />
        </Chart>
      </div>
    );
  }
}

export default Wordcloud;

Wordcloud.propTypes = {
  imageUrl: PropTypes.string,
  sequence: PropTypes.string,
  dataSource: PropTypes.array,
  colorArr: PropTypes.array,
};

Wordcloud.defaultProps = {
  imageUrl: '',
  sequence: 'default',
  dataSource: [],
  colorArr: [
    'rgb(11, 10, 138)',
    'rgb(18, 61, 182)',
    'rgb(0, 124, 211)',
    'rgb(0, 213, 255)',
    'rgb(13, 237, 236)',
    'rgb(44, 254, 193)',
  ],
};
