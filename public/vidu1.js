class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {mang: ['Android', 'iOS', 'NodeJS', 'Script']}
  }
  render(){
    return (
      <div>
        <h1>Hello Component</h1>
        {this.state.mang.map((e, i) => <Note key={i} index={i} parent={this}>{e}</Note>)}
      </div>
    );
  }
}

class Note extends React.Component{
  remove(){
    var {parent} = this.props;
    parent.state.mang.splice(this.props.index, 1);
    parent.setState(parent.state);
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

ReactDOM.render(
  <div>
    <List/>
    <List/>
  </div>,
  document.getElementById('root')
);
