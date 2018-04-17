/* eslint react/no-multi-comp: 0, max-len: 0 */

import React from 'react';

import Slider from 'rc-slider';
import cx from 'classnames';
import s from './estimateSlider.scss';

const marks = {
  0: {
    label: '0',
    style: {
      marginTop: '10px',
      marginLeft: '-10.25%',
      fontSize: '14px',
      fontFamily: 'GothamRoundedBook',
    },
  },
  1: {
    label: '1 year',
    style: {
      marginTop: '10px',
      marginLeft: '-9.25%',
      fontSize: '14px',
      fontFamily: 'GothamRoundedBook',
    },
  },
  2: {
    label: '2 years',
    style: {
      marginTop: '10px',
      marginLeft: '-9.25%',
      fontSize: '14px',
      fontFamily: 'GothamRoundedBook',
    },
  },
  3: {
    label: '3 years',
    style: {
      marginTop: '10px',
      marginLeft: '-9.25%',
      fontSize: '14px',
      fontFamily: 'GothamRoundedBook',
    },
  },
  4: {
    label: '4 years',
    style: {
      marginTop: '10px',
      marginLeft: '-9.25%',
      fontSize: '14px',
      fontFamily: 'GothamRoundedBook',
    },
  },
};

class CustomizedRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 4,
    };
    this.yearSavings = 300;
  }
  onLowerBoundChange = () => {
  }
  onUpperBoundChange = () => {
  }
  onSliderChange = () => {
  }
  handleApply = () => {
  }
  render() {
    const { step } = this.state;
    const labelZeroClass = cx('detailLabel', 'detailLabelZero', {
      detailLabelActive: step === 0,
    });
    const labelOneClass = cx('detailLabel', 'detailLabelOne', {
      detailLabelActive: step === 1,
    });
    const labelTwoClass = cx('detailLabel', 'detailLabelTwo', {
      detailLabelActive: step === 2,
    });
    const labelThreeClass = cx('detailLabel', 'detailLabelThree', {
      detailLabelActive: step === 3,
    });
    const labelFourClass = cx('detailLabel', 'detailLabelFour', {
      detailLabelActive: step === 4,
    });
    const stepOneClass = cx('stepIndicator', 'stepIndicatorOne', {
      stepIndicatorActive: step > 0,
    });
    const stepTwoClass = cx('stepIndicator', 'stepIndicatorTwo', {
      stepIndicatorActive: step > 1,
    });
    const stepThreeClass = cx('stepIndicator', 'stepIndicatorThree', {
      stepIndicatorActive: step > 2,
    });
    const stepFourClass = cx('stepIndicator', 'stepIndicatorFour', {
      stepIndicatorActive: step > 3,
    });
    const stepFiveClass = cx('stepIndicator', 'stepIndicatorFive', {
      stepIndicatorActive: step > 4,
    });

    return (
      <div className="sliderContainer">
        <div className="savingsContainer">
          <div className={labelZeroClass} />
          <div className={labelOneClass}>
            <h1>${this.yearSavings * this.state.step}</h1>
            <p>in savings</p>
          </div>
          <div className={labelTwoClass}>
            <h1>${this.yearSavings * this.state.step}</h1>
            <p>in savings</p>
          </div>
          <div className={labelThreeClass}>
            <h1>${this.yearSavings * this.state.step}</h1>
            <p>in savings</p>
          </div>
          <div className={labelFourClass}>
            <h1>${this.yearSavings * this.state.step}</h1>
            <p>in savings</p>
          </div>
        </div>
        <div className={s.stepContainer}>
          <div className={stepOneClass} />
          <div className={stepTwoClass} />
          <div className={stepThreeClass} />
          <div className={stepFourClass} />
          <div className={stepFiveClass} />
        </div>
        <Slider
          step={1}
          defaultValue={[4]}
          min={0}
          max={5}
          onAfterChange={console.log}
          count={1}
          marks={marks}
          handleStyle={{
            border: '6px solid #5BC4B8',
            height: 32,
            width: 32,
            marginLeft: -14,
            marginTop: -4,
            backgroundColor: '#FFFFFF',
            zIndex: 3,
          }}
          railStyle={{
            height: 24,
            backgroundColor: '#E4EBF0',
            borderRadius: '12px',
            opacity: 0.5,
          }}
          trackStyle={{
            display: 'none',
          }}
          dotStyle={{
            display: 'none',
          }}
          onChange={(newStep) => { this.setState({ step: newStep }); }}
        />
        <style jsx>{s}</style>
      </div>
    );
  }
}

export default CustomizedRange;
