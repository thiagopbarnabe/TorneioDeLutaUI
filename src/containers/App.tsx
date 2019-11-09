import * as React from 'react';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import {
    Lutadores,
    Resultado
} from '../views';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                    <div className="app">
                        <div className="app-body">
                            <main className="main" style={{marginTop: '30px'}}>
                                <Container fluid={true}>
                                    <Switch>
                                        <Route path="/lutadores" component={Lutadores} />
                                        <Route path="/resultado" component={Resultado} />
                                        <Route component={Lutadores} />
                                    </Switch>
                                </Container>
                            </main>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default App;
