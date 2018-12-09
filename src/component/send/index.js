import React, { Component } from 'react';
import 'firebase/firestore';
import { firestore } from '../../firebase';

// const API_URL = 'https://script.google.com/macros/s/AKfycbz_KrttSaskVtAK72XuBt6eYp0QMtgaW66oubVjpoWImQvsZqc/exec';
// const fbRef = firebaseDB.ref('data');


class Send extends Component {
  state = {
    key: [],
    text: '',
  };
  constructor(props) {
    super(props)

    this.onTextChange = this.onTextChange.bind(this)
  }

  handleSubmit = event => {
    console.debug('submibt')
    event.preventDefault();


    if(this.state.text === "") {
      alert('text empty')
      return
    }

    firestore.settings({
      timestampsInSnapshots: true
    });
    const textsRef = firestore.collection('texts').add({
      text: this.state.text,
      key: this.state.text,
    });
    this.setState({
      text: '',
      key: [],
    });
  };



  onTextChange(e) {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    console.debug(this.state)

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          送信:
         <input type="text" name="text" onChange={this.onTextChange} />
        </label>
        <input type="submit" value="送信" />
      </form>
      <div>
        {
          this.state.key.map(data => {
            return (
            <div>
              {data.id}{data.text}
            </div>
            )
          })
        }
      </div>
    </>
    );
  }
}

export default Send;
