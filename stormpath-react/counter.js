class Counter extends React.Component {
  state = {
    current: 0
  }

  constructor() {
    super(arguments...);
    this.intervalId = null;
  }

  updateCounter() {
    this.setState({ counter: this.state.current + 1 });
  }

  componentWillMount() {
    this.setState({ counter: this.props.from || 0 });
    this.intervalId = setInterval(this.updateCounter.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <span>{ this.state.current }</span>;
  }
}
