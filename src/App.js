import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickMethod: '病院',
      hospitalName: 'A病院',
      petName: '',
      tubeNum: "1本",
      name: '',
      address: '',
      email: '',
      phone: '',
      submitDisabled: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  isFormValid = (state) => {
    const {petName, name, address, email, phone} = state
    return petName && name && address && email && phone
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.setState((prevState) => ({
      submitDisabled: !this.isFormValid(prevState)
    }));
  }

  handleSubmit(event) {
    window.open("https://dna4x.official.ec/items/41519433");
    event.preventDefault();
  }

  render() {
    return (
      <form id="main-form" onSubmit={this.handleSubmit}>
        <label>
          採取方法:
        <select
            name="pickMethod"
            value={this.state.pickMethod}
            onChange={this.handleChange}>
            <option value="病院">病院</option>
            <option value="ご自身">ご自身</option>
          </select>
        </label>

        {
          (this.state.pickMethod === '病院') &&
          <label>
            病院名:
            <select
              name="pickMethod"
              value={this.state.hospitalName}
              onChange={this.handleChange}>
              <option value="A病院">A病院</option>
              <option value="B病院">B病院</option>
            </select>
          </label>
        }

        <label>
          ペットのお名前:
          <input
            name="petName"
            type="text"
            value={this.state.petName}
            onChange={this.handleChange} />
        </label>

        <label>
          申込チューブの本数:
        <select
            name="tubeNum"
            value={this.state.tubeNum}
            onChange={this.handleChange}>
            <option value="1本">1本</option>
            <option value="2本">2本</option>
            <option value="3本">3本</option>
            <option value="4本">4本</option>
          </select>
        </label>

        <label>
          氏名:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange} />
        </label>


        <label>
          住所:
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleChange} />
        </label>


        <label>
          メールアドレス:
          <input
            name="email"
            type="電話番号"
            value={this.state.email}
            onChange={this.handleChange} />
        </label>

        <label>
          電話番号:
          <input
            name="phone"
            type="tel"
            value={this.state.phone}
            onChange={this.handleChange} />
        </label>


        <div id="note">
          <ul>
            <li>採取方法: {this.state.pickMethod}</li>
            {
              (this.state.pickMethod === '病院') && 
              <li>病院名: {this.state.hospitalName}</li>
            }
            <li>ペットのお名前: {this.state.petName}</li>
            <li>申込チューブの本数: {this.state.tubeNum}</li>
            <li>氏名: {this.state.name}</li>
            <li>住所: {this.state.address}</li>
            <li>メールアドレス: {this.state.email}</li>
            <li>電話番号: {this.state.phone}</li>
          </ul>

        </div>
        <input 
        type="submit" 
        value="Submit" 
        className="clipboard-btn" 
        data-clipboard-target="#note"
        disabled={this.state.submitDisabled} />
      </form>
    );
  }
}
export default App;
