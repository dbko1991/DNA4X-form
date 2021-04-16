import React, {useState} from 'react'
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const App = () => {
  const defaultState = {
    pickMethod: '病院',
    hospitalName: 'A病院',
    petName: '',
    wantHospital: '',
    tubeNum: "1本",
    name: '',
    address: '',
    email: '',
    phone: '',
    submitDisabled: true,
    copyZone: '',
  };
  const [state, setState] = useState(defaultState);

  const isFormValid = (state) => {
    const {hospitalName, petName, wantHospital, name, email} = state;
    return hospitalName && petName && wantHospital && name && email;
  }

  const copyZone = (state) => {
    const {hospitalName, petName, wantHospital, name, email} = state;
    return `${name}/${email}/${hospitalName}/${petName}/${wantHospital}`;
  }

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const nextState = {
      ...state,
      [name]: value,
    }

    setState({
      ...nextState,
      copyZone: copyZone(nextState),
      submitDisabled: !isFormValid(nextState)
    });
  }

  const handleSubmit = (event) => {
    window.open("https://dna4x.official.ec/items/41519433");
    event.preventDefault();
  }

  return (
    <>
      <form id="main-form" onSubmit={handleSubmit}>
        <label>
          氏名:
          <input
            name="name"
            type="text"
            value={state.name}
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
          希望の病院
          <input
            name="wantHospital"
            type="text"
            value={state.wantHospital}
            onChange={handleChange} />
        </label>

        <div className="App-copy-area">
          コピー要素: {state.copyZone}
          <CopyToClipboard
            text={state.copyZone}
            onCopy={() => alert(`クリップボードに「${state.copyZone}」をコピーしました！`)}
          >
            <button>コピーする</button>
          </CopyToClipboard>
        </div>

        <input
          type="submit"
          value="Submit"
          className="clipboard-btn"
          data-clipboard-target="#note"
          disabled={state.submitDisabled} />
      </form>
    </>
  );
}
export default App;
