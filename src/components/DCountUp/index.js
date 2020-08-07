import React, { PureComponent } from 'react';
import styles from './styles.less';
import CountUp from 'react-countup/build';
import PropTypes from 'prop-types';
// import DCarousel from '@/components/Common/DCarousel';

class Index extends PureComponent {
  componentDidMount() {
    this.time = null;
  }

  componentWillMount() {
    if (this.time) {
      clearInterval(this.time);
      this.time = null;
    }
  }

  setDom = (number, numberStyle) => {
    return (
      <CountUp
        start={0}
        end={number}
        duration={3}
        decimals={number ? (number.toString().split('.')[1] ? 2 : 0) : 0}
        //   separator={option?.division}
        redraw={false}
      >
        {({ countUpRef, start }) => {
          if (number) {
            setTimeout(start.bind(this), 1);
            this.time = setInterval(start.bind(this), 10000);
          }
          let Dom = (
            <>
              <span style={numberStyle} className={styles.number} ref={countUpRef} />
            </>
          );
          return Dom;
        }}
      </CountUp>
    );
  };

  render() {
    let { number, numberStyle } = this.props;
    return <span className={styles.normal}>{this.setDom(number, numberStyle)}</span>;
  }
}

Index.defaultProps = {
  numberStyle: {
    fontSize: 12,
  },
};
Index.propTypes = {
  option: PropTypes.object,
  dataSources: PropTypes.array,
  numberStyle: PropTypes.object,
};

export default Index;
