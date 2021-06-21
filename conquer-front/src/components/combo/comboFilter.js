// eslint-disable-next-line no-undef
class ComboFilter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    	items: [
      	{ id: 1, text: "Learn JavaScript" },
        { id: 2, text: "Learn React" },
        { id: 3, text: "Play around in JSFiddle" },
        { id: 4, text: "Build something awesome" }
      ],
      selectItem: 4
    };
    this.handleSelectItem = this.handleSelectItem.bind(this);
  }
  
  handleSelectItem(e) {
  	this.setState({selectItem: e.target.value});
  };
  
  render() {
    return (
      <div>
        <h2>Todos: {this.state.selectItem}</h2>
        <select value={this.state.selectItem} onChange={this.handleSelectItem}>
          {this.state.items.map((item, index) => (
          	<option key={index} value={item.id}>{item.text}</option>
          ))}
        </select>
      </div>
    )
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<ComboFilter />, document.querySelector("#app"))