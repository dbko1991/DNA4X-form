import React, {useState} from 'react'
import './App.css';

const App = () => {
  const defaultState = {
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
  const [state, setState] = useState(defaultState);

  const isFormValid = (state) => {
    const {petName, name, address, email, phone} = state
    return petName && name && address && email && phone
  }

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      [name]: value
    });
    setState((prevState) => ({
      submitDisabled: !isFormValid(prevState)
    }));
  }

  const handleSubmit = (event) => {
    window.open("https://dna4x.official.ec/items/41519433");
    event.preventDefault();
  }

  return (
    <form id="main-form" onSubmit={handleSubmit}>
      <label>
        採取方法:
        <select
          name="pickMethod"
          value={state.pickMethod}
          onChange={handleChange}>
          <option value="病院">病院</option>
          <option value="ご自身">ご自身</option>
        </select>
      </label>

      {
        (state.pickMethod === '病院') &&
        <label>
          病院名:
          <select
            name="pickMethod"
            value={state.hospitalName}
            onChange={handleChange}>
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
          value={state.petName}
          onChange={handleChange} />
      </label>

      <label>
        申込チューブの本数:
        <select
          name="tubeNum"
          value={state.tubeNum}
          onChange={handleChange}>
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
          value={state.name}
          onChange={handleChange} />
      </label>


      <label>
        住所:
        <input
          name="address"
          type="text"
          value={state.address}
          onChange={handleChange} />
      </label>


      <label>
        メールアドレス:
        <input
          name="email"
          type="電話番号"
          value={state.email}
          onChange={handleChange} />
      </label>

      <label>
        電話番号:
        <input
          name="phone"
          type="tel"
          value={state.phone}
          onChange={handleChange} />
      </label>


      <div id="note">
        <ul>
          <li>採取方法: {state.pickMethod}</li>
          {
            (state.pickMethod === '病院') &&
            <li>病院名: {state.hospitalName}</li>
          }
          <li>ペットのお名前: {state.petName}</li>
          <li>申込チューブの本数: {state.tubeNum}</li>
          <li>氏名: {state.name}</li>
          <li>住所: {state.address}</li>
          <li>メールアドレス: {state.email}</li>
          <li>電話番号: {state.phone}</li>
        </ul>

      </div>
      <input
        type="submit"
        value="Submit"
        className="clipboard-btn"
        data-clipboard-target="#note"
        disabled={state.submitDisabled} />
    </form>
  );
}
export default App;
