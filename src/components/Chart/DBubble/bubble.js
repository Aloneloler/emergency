import * as d3 from 'd3';

/**
 *  Usage:
 *  引入此js文件 import Bubble from '@url'
 *  new Bubble(dom,svgStyle)
 *
 *  Attributes:
 *  - dom  包裹此svg的元素的dom元素
 *  - svgStyle  绘制的svg样式  { }
 *    svgStyle.width   type:number   default:600
 *    svgStyle.height   type:number   default:600
 *    svgStyle.gridPadding   type:number   default:0
 *    svgStyle.colorArr   type:array    default:d3.schemeSet3
 *    svgStyle.valueFont   type: object   default:  valueFont.size=10; valueFont.color=#000; valueFont.family=#000; valueFont.weight=600
 *    svgStyle.labelFont   type: object   default:  labelFont.size=10; labelFont.color=#000; labelFont.family=#000; labelFont.weight=600
 *  - svgStyle.data 绘制的数据源       [{label: 'CRM', value: 1 }]
 *
 *  @class Bubble
 */

class Bubble {
  constructor(dom, svgStyle) {
    this.svg = null;
    this.dom = dom;
    this.svgStyle = svgStyle;
    this.init(this.dom, this.svgStyle);
  }

  render(w, h) {
    this.svg.style('width', w).style('height', h);
  }

  destroy() {
    this.svg.selectAll('svg').remove(); // Remove other elements from container
    this.svg.selectAll('*').remove(); // Remove inner text from container
  }

  draw(styles) {
    this.destroy();
    let { gridPadding, colorArr, valueFont, labelFont, data } = styles;
    let { clientWidth, clientHeight } = this.dom;
    valueFont = valueFont ? valueFont : {};
    labelFont = labelFont ? labelFont : {};
    clientWidth = clientWidth ? clientWidth : 600;
    clientHeight = clientHeight ? clientHeight : 600;
    const color = d3.scaleOrdinal(colorArr ? colorArr : d3.schemeSet3);
    const pack = d3
      .pack()
      .size([clientWidth, clientHeight])
      .padding(gridPadding);
    const root = d3
      .hierarchy({ children: data })
      .sum(function(d) {
        return d.value;
      })
      .sort(function(a, b) {
        return b.value - a.value;
      })
      .each(d => {
        if (d.data.label) {
          d.label = d.data.label;
          d.id = d.data.label.toLowerCase().replace(/ |\//g, '-');
        }
      });

    const nodes = pack(root).leaves();
    const leaf = this.svg
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('transform', d => `translate(${d.x + 1},${d.y + 1})`)
      .on('mouseenter', function(d) {
        d3.select(this)
          .select('circle')
          .attr('r', d.r * 1.5);
        tooltip
          .style('opacity', 1)
          .html(d.label + ':' + d.value)
          .style('top', d3.event.clientY - 10 + 'px')
          .style('left', d3.event.clientX - 0 + 'px'); //减去左侧导航的宽度
      })
      .on('mouseleave', function(d) {
        const r = d.r - d.r * 0.04;
        d3.select(this)
          .select('circle')
          .attr('r', r);
        tooltip.style('opacity', 0);
      });

    let tooltip = d3
      .select('#' + this.dom.id)
      .append('div')
      .style('opacity', 0)
      .style('position', 'fixed')
      .style('z-index', '10')
      .style('font-family', 'sans-seri')
      .style('background', 'rgba(0,0,0,0.65)')
      .style('color', '#fff')
      .style('padding', '6px')
      .style('border-radius', '2px')
      .text('a simple tooltip');

    leaf
      .append('circle')
      .attr('id', d => d.id)
      .attr('r', d => d.r)
      .attr('fill-opacity', 0.7)
      .style('transition', 'all 0.2s')
      .attr('fill', function(d) {
        return d.data.color ? d.data.color : color(nodes.indexOf(d));
      });

    leaf
      .append('clipPath')
      .attr('id', function(d) {
        return 'clip-' + d.id;
      })
      .append('use')
      .attr('xlink:href', function(d) {
        return '#' + d.id;
      });

    leaf
      .append('text')
      .attr('class', 'value-text')
      .style('font-size', `${valueFont.size}px`)
      .style('font-family', valueFont.family)
      .style('font-weight', valueFont.weight)
      .style('transform', valueFont.transform)
      .attr('clip-path', function(d) {
        return 'url(#clip-' + d.id + ')';
      })
      .attr('dy', '-0.5em')
      .style('fill', `${valueFont.color}`)
      .text(d => d.value);

    leaf
      .append('text')
      .attr('class', 'label-text')
      .style('font-size', `${labelFont.size}px`)
      .style('font-family', labelFont.family)
      .style('font-weight', labelFont.weight)
      .style('transform', labelFont.transform)
      .attr('clip-path', function(d) {
        return 'url(#clip-' + d.id + ')';
      })
      // .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0}em`)
      // .attr("x", '0')
      .attr('dy', '0.7em')
      .style('fill', `${labelFont.color}`)
      .text(d => d.label);
    // .on('mouseover', function(d) {
    //   tooltip
    //     .style('opacity', 1)
    //     .html(d.label + ' ' + d.value)
    //     .style('top', d3.event.clientY - 10 + 'px')
    //     .style('left', d3.event.clientX - 0 + 'px'); //减去左侧导航的宽度
    // })
    // .on('mouseout', function(d) {
    //   tooltip.style('opacity', 0);
    // });

    // leaf.append('title').text(function(d) {
    //   return `${d.label}\n${d.value} `;
    // });
  }

  //初始化图层
  init(dom, styles) {
    // Reset the svg element to a empty state.
    let { clientWidth, clientHeight } = dom;
    this.svg = d3
      .select('#' + dom.id)
      .append('svg')
      .attr('viewBox', [0, 0, clientWidth * 2, clientHeight * 2])
      .attr('font-size', 10)
      .attr('font-family', 'sans-serif')
      .attr('text-anchor', 'middle')
      .style('overflow', 'hidden')
      .style('width', clientWidth * 2)
      .style('height', clientHeight * 2)
      .style('transition', 'all 0.3s');

    this.draw(styles);
  }
}

export default Bubble;
