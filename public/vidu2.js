class List extends React.Component{
  remove(index){
    this.state.mang.splice(index, 1);
    this.setState(this.state);
  }
  add(txt){
    this.state.mang.push(txt);
    this.setState(this.state);
  }
  constructor(props){
    super(props);
    this.state = {mang: ['Android', 'iOS', 'NodeJS', 'Script']}
  }
  render(){
    return (
      <div>
        <NoteForm handleAdd={this.add.bind(this)}/>
        {this.state.mang.map((e, i) => <Note key={i} index={i}
        handleRemove={this.remove.bind(this)}>{e}</Note>)}
      </div>
    );
  }
}

class Note extends React.Component{
  remove(){
    var {handleRemove, index} = this.props;
    handleRemove(index);
  }
  render(){
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.remove.bind(this)}>Xoa</button>
      </div>
    )
  }
}

class NoteForm extends React.Component{
  add(){
    var {handleAdd} = this.props;
    handleAdd(this.refs.txt.value);
    this.refs.txt.value = '';
  }
  render(){
    return (
      <div>
        <input type="text" ref="txt" placeholder="Enter your note"/>
        <br/><br/>
        <button onClick={this.add.bind(this)}>Add</button>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <List/>
  </div>,
  document.getElementById('root')
);
