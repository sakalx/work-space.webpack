export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = 'Bob';
  }

  render() {
    return (
        <h1>It's {this.name}</h1>
    );
  }
};