import React, {useState} from 'react'
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const App = () => {
  const defaultState = {
    pickMethod: '病院',
    hospitalName: 'A病院',
    petName: '',
    wantHospital: '',
    name: '',
    email: '',
    submitDisabled: true,
    copyZone: '',
  };
  const [state, setState] = useState(defaultState);

  const isFormValid = (state) => {
    const {hospitalName, petName, name, email} = state;
    return hospitalName && petName && name && email;
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
      <div className="container">
        <a className="dna4x-logo" href="http://dna4x.bio/" target="_blank"><img src="./pic/dna4x-logo.png" alt=""/></a>
        <h1>DNA4X申込フォーム</h1>
        <form id="main-form" onSubmit={handleSubmit}>
          <label>氏名</label>
            <input className="textbox"
              name="name"
              type="text"
              value={state.name}
              onChange={handleChange} />
          

          <label>メールアドレス</label>
            <input className="textbox"
              name="email"
              type="電話番号"
              value={state.email}
              onChange={handleChange} />
          

          <label>採取方法</label>
            <select
              name="pickMethod"
              value={state.pickMethod}
              onChange={handleChange}>
              <option value="病院">病院</option>
              <option value="ご自身">ご自身</option>
            </select>

          {
            (state.pickMethod === '病院') &&
            <div>
              <label>病院名</label>
              <select
                name="hospitalName"
                value={state.hospitalName}
                onChange={handleChange}>
                <option value="A病院">A病院</option>
                <option value="B病院">B病院</option>
              </select>
            </div>
          }

          <label>ペットのお名前</label>
            <input className="textbox"
              name="petName"
              type="text"
              value={state.petName}
              onChange={handleChange} />

          <label>希望する病院（任意）</label>
            <input className="textbox"
              name="wantHospital"
              type="text"
              value={state.wantHospital}
              onChange={handleChange} />
          

          {
            (state.copyZone) &&
            <div className="App-copy-area">
              <p>必ず<span className="copy-highlight">購入ページの備考欄</span>に下記の内容をコピーしてください。</p>
              <img className="memo-img" src="./pic/memo.png" alt=""/>
              <div className="copy-text">
                {state.copyZone}
                <CopyToClipboard
                  text={state.copyZone}
                  onCopy={() => alert(`クリップボードに「${state.copyZone}」をコピーしました！`)}
                >
                  <button className="copy-button" type="button">コピー</button>
                </CopyToClipboard>
              </div>
            </div>
          }
          <input 
            className="button"
            type="submit"
            value="購入ページへ"
            disabled={state.submitDisabled} />
        </form>
      </div>
    </>
  );
}
export default App;
