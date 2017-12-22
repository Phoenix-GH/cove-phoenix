/* eslint react/no-multi-comp: 0, max-len: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import s from './estimateSlider.scss';

const marks = {
  0: { label: '0', style: { marginTop: '10px', marginLeft: '-10.25%', fontSize: '14px', fontFamily: 'GothamRoundedBook' }},
  1: { label: '1 year', style: { marginTop: '10px', marginLeft: '-9.25%', fontSize: '14px', fontFamily: 'GothamRoundedBook' }},
  2: { label: '2 year', style: { marginTop: '10px', marginLeft: '-9.25%', fontSize: '14px', fontFamily: 'GothamRoundedBook' }},
  3: { label: '3 year', style: { marginTop: '10px', marginLeft: '-9.25%', fontSize: '14px', fontFamily: 'GothamRoundedBook' }},
  4: { label: '4 year', style: { marginTop: '10px', marginLeft: '-9.25%', fontSize: '14px', fontFamily: 'GothamRoundedBook' }},
}

const handleStyle = {
  border: '6px solid #5BC4B8'
}
class CustomizedRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: 20,
      upperBound: 40,
      value: [20, 40],
      step: 4,
    };
    this.yearSavings = 300;
  }
  onLowerBoundChange = (e) => {
    this.setState({ lowerBound: +e.target.value });
  }
  onUpperBoundChange = (e) => {
    this.setState({ upperBound: +e.target.value });
  }
  onSliderChange = (value) => {
    log(value);
    this.setState({
      value,
    });
  }
  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [lowerBound, upperBound] });
  }
  render() {
    return (
      <div className={s.sliderContainer}>
      <div className={s.savingsContainer}>
        <div className={`${s.detailLabel} ${s.detailLabelZero} ${this.state.step === 0 ? s.detailLabelActive : '' }`}></div>
        <div className={`${s.detailLabel} ${s.detailLabelOne} ${this.state.step === 1 ? s.detailLabelActive : '' }`}>
          <h1>${this.yearSavings * this.state.step}</h1>
          <p>in savings</p>
        </div>
        <div className={`${s.detailLabel} ${s.detailLabelTwo} ${this.state.step === 2 ? s.detailLabelActive : '' }`}>
          <h1>${this.yearSavings * this.state.step}</h1>
          <p>in savings</p>
        </div>
        <div className={`${s.detailLabel} ${s.detailLabelThree} ${this.state.step === 3 ? s.detailLabelActive : '' }`}>
          <h1>${this.yearSavings * this.state.step}</h1>
          <p>in savings</p>
        </div>
        <div className={`${s.detailLabel} ${s.detailLabelFour} ${this.state.step === 4 ? s.detailLabelActive : '' }`}>
          <h1>${this.yearSavings * this.state.step}</h1>
          <p>in savings</p>
        </div>
      </div>
      <div className={s.stepContainer}>
        <div className={`${s.stepIndicator} ${s.stepIndicatorOne} ${this.state.step > 0 ? s.stepIndicatorActive : '' }`}></div>
        <div className={`${s.stepIndicator} ${s.stepIndicatorTwo} ${this.state.step > 1 ? s.stepIndicatorActive : '' }`}></div>
        <div className={`${s.stepIndicator} ${s.stepIndicatorThree} ${this.state.step > 2 ? s.stepIndicatorActive : '' }`}></div>
        <div className={`${s.stepIndicator} ${s.stepIndicatorFour} ${this.state.step > 3 ? s.stepIndicatorActive : '' }`}></div>
        <div className={`${s.stepIndicator} ${s.stepIndicatorFive} ${this.state.step > 4 ? s.stepIndicatorActive : '' }`}></div>
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
          zIndex: 3
        }}
        railStyle={{
          height: 24,
          backgroundColor: '#E4EBF0',
          borderRadius: '12px',
          opacity: .5,
        }}
        trackStyle={{
          display: 'none'
        }}
        dotStyle={{
          display: 'none'
        }}
        onChange={(step)=> {this.setState({ step })}}
     />
    </div>
    );
  }
}

export default CustomizedRange;
