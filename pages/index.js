import Button from 'react-bootstrap/Button';
import BootstrapLink from './Link'
class Home extends React.Component {

    state = {
        word: 'World'
    }


    changeWord = ()=>{
        this.setState({word: 'Stephan'})
    }

    render() {
        return (
            <div>
                <BootstrapLink />
                <h1>Hello {this.state.word}!</h1>
                <Button onClick={this.changeWord} variant="primary">Primary</Button>
            </div>
        )
    }
}

export default Home