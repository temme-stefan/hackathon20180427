import React from 'react';
import template from './NumberForm.jsx';

export default class NumberForm extends React.Component {

    static defaults = {
        min: null,
        max: null,
        step: 1,
        digits: 0,
        unit: '',
        label: ''
    }


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
    }


    round(v) {
        let parsed = Number.parseFloat(v);
        const min=this.getConfig('min');
        if (min!=null){
            parsed=Math.max(min,parsed);
        }
        const max=this.getConfig('max');
        if (max!=null){
            parsed=Math.min(max,parsed);
        }
        parsed=Number.parseFloat(parsed.toFixed(this.getConfig('digits')));

        return parsed;
    }

    setValue(v) {
        this.props.onNumberChange({id: this.props.id, value: this.round(v)});
    }

    getValue(){
        return Number.isNaN(this.props.value)?'':this.props.value;
    }

    handleChange(event) {
        this.setValue(event.target.value);
    }

    handlePlus(event) {
        this.setValue(this.props.value+this.getConfig('step'));
    }

    handleMinus(event) {
        this.setValue(this.props.value-this.getConfig('step'));
    }

    getConfig(key) {
        return this.props.config[key]!=null?this.props.config[key]:NumberForm.defaults[key];
    }

    getStepwidth(){
        return 1/(10**this.getConfig('digits'))
    }

    render() {
        return template.call(this);
    }
}