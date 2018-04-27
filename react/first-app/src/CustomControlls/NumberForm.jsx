import React from 'react';
import './NumberFrom.css';


export default function template() {
    return (
        <div className="numberFormGroup form-group row" id={this.props.id}>
            <label htmlFor={this.props.id}
                   className="col-form-label offset-sm-2 col-sm-2">{this.getConfig('label')}</label>
            <div className="input-group col-sm-4">
                <input type="number" className="form-control" id={this.props.id}
                       value={this.getValue()}
                       step={this.getStepwidth()}
                       min={this.getConfig('min')}
                       max={this.getConfig('max')}
                       onChange={this.handleChange}/>
                <div className="unit input-group-append">
                    {this.getConfig('unit') &&
                    <span className="input-group-text">{this.getConfig('unit')}</span>
                    }
                    <button className="btn btn-outline-secondary" onClick={this.handlePlus}><span
                        className="fa fa-plus"></span></button>
                    <button className="btn btn-outline-secondary" onClick={this.handleMinus}><span
                        className="fa fa-minus"></span></button>
                </div>
            </div>
        </div>
    );
}