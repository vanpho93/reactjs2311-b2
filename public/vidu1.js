class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {mang: ['Android', 'iOS', 'NodeJS', 'Script']}
  }
  render(){
    return (
      <div>
        <h1>Hello Component</h1>
        {this.state.mang.map((e, i) => <Note key={i}>{e}</Note>)}
      </div>
    );
  }
}

class Note extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.children}</p>
        <button>Xoa</button>
      </div>
    )
  }
}

ReactDOM.render(
  <List/>,
  document.getElementById('root')
);
