import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      balance: ' ',
      rate: ' ',
      term: ' ',
      result: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculateChange(balance, rate, term) {
    const P = Number(balance);
    const r = Number((rate / 100) / 12);
    const n = (Number(term) * 12);
    const numerator = P * (r * (1 + r) ** n);
    const denomonator = ((1 + r) ** n) - 1;
    const answer = (numerator / denomonator).toFixed(2);
    this.setState({ result: answer });
  }

  render() {
    return (
      <div>
      <div className='container'>
        <h3>Mortgage Calculator</h3>

          <div className='form-group row'>
            <label htmlFor='inputBalance' className='col-sm-2 form-control-label'>Balance</label>
            <div className='col-sm-10'>
              <input
                type='number'
                name='balance'
                value={ this.state.balance }
                onChange={ this.handleChange }
                className='form-control'
                id='inputBalance'
                placeholder='Balance'
              />
            </div>
          </div>

          <div className='form-group row'>
            <label htmlFor='inputAPR' className='col-sm-2 form-control-label'>APR</label>
            <div className='col-sm-10'>
              <input
                type='number'
                name='rate'
                value={ this.state.rate }
                onChange={ this.handleChange }
                className='form-control'
                id='inputAPR'
                placeholder='APR'
                step='0.1'
              />
            </div>
          </div>

          <div className='form-group row'>
            <label htmlFor='termSelect' className='col-sm-2 form-control-label'>Select Term</label>
            <select className='custom-select mr-sm-2' name='term' value={ this.state.term } onChange={ this.handleChange }id='termSelect'>
              <option value='15'>15</option>
              <option value='30'>30</option>
            </select>
          <div className='row nav-row'>
            <button type='button' className='btn btn-primary btn-sm' name='submit' onClick={ () => { this.calculateChange(this.state.balance, this.state.rate, this.state.term)} } >Calculate</button>
          </div>

          <div name='output' id='output' onChange={ this.handleChange }>
          
            <h4 id='result'>{this.state.result}</h4>
          
          </div>

          </div>







      </div>
      </div>
    );
  }
}
