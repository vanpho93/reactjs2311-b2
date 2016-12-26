class Hello extends React.Component{
  render(){
    return (
      <h1>Hello Component</h1>
    );
  }
}

ReactDOM.render(
  <Hello/>,
  document.getElementById('root')
);
