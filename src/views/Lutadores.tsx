import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Row, Col, CardColumns, Button } from 'reactstrap';
import { ApplicationState } from '../types';
import { connect } from 'react-redux';
import {
    getLutadores,
    carregarLutadores
} from '../redux/actions/Lutadores/LutadoresAction';
import {
    iniciarTorneio
} from '../redux/actions/Torneio/TorneioAction';
import { Dispatch, bindActionCreators } from 'redux';
import { Lutador } from '../types/ApplicationState';
import { push } from 'connected-react-router';

const mapStateToProps = (state: ApplicationState) => {
    return {
        lutadoresList: state.lutador.lutadoresList
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        getLutadores,
        carregarLutadores,
        iniciarTorneio,
        push
    }, dispatch);
};

interface Props {
    getLutadores: () => any,
    carregarLutadores: (callback: any) => void,
    iniciarTorneio: (lutadoresId: Array<number>) => void,
    lutadoresList: Array<Lutador>,
    push: (p: any) => any
}

class LutadoresView extends React.Component<Props> {
    state = {
        checkedLutadores: [] as Array<number>
    };

    constructor(props: Props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.carregarLutadores = this.carregarLutadores.bind(this);
        this.iniciarTorneio = this.iniciarTorneio.bind(this);
    }

    componentDidMount() {
        this.props.getLutadores();
    }

    handleInputChange(event: any) {
        const target = event.target;
        const id = parseInt(target.id,10);

        const estaSelecionado = this.state.checkedLutadores.some((l)=> l === id);
        if (estaSelecionado) {
            this.setState({
                checkedLutadores: this.state.checkedLutadores.filter((l)=> l !== id)
            });
        } else if (this.state.checkedLutadores.length <20) {
            this.setState({
                checkedLutadores: this.state.checkedLutadores.concat(id)
            });
        }
    }

    carregarLutadores(event: any) {
        this.props.carregarLutadores(this.props.getLutadores);
    }

    iniciarTorneio() {
        this.props.iniciarTorneio(this.state.checkedLutadores);
        this.props.push('/resultado');
    }

    render() {
        let lutadores = null;
        if (this.props && this.props.lutadoresList) {
            lutadores = this.props.lutadoresList.map((item,i)=> {
                return (
                <Card key={i}>
                    <CardImg/>
                    <CardBody>
                        <input
                            id={item.id.toString()}
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.checkedLutadores.some((l)=> l === item.id)}
                            onChange={this.handleInputChange}
                        />
                        <CardTitle>{item.nome}</CardTitle>
                            <Row><Col><b>Idade:</b> {item.idade} anos</Col></Row>
                            <Row><Col><b>Lutas:</b> {item.lutas}</Col></Row>
                            <Row><Col><b>Artes Marciais:</b> {
                                item.artesMarciais.join(', ')
                            }</Col></Row>
                            <Row><Col><b>Vitorias:</b> {item.vitorias}</Col></Row>
                            <Row><Col><b>Derrotas:</b> {item.derrotas}</Col></Row>
                    </CardBody>
                </Card>
                );
            });
        }
        return <React.Fragment>
            <h1 className="text-center display-3">Torneio de Lutas</h1>
            <h5 className="text-center">Selecione 20 lutadores para iniciar o torneio</h5>
            <br/>
            <Row>
                <Col><Button onClick={this.carregarLutadores}>Carregar Lutadores</Button></Col>
                <Col align="center">
                <Button
                    color="primary"
                    disabled={this.state.checkedLutadores.length!==20}
                    onClick={this.iniciarTorneio}
                >Iniciar Torneio
                </Button></Col>
                <Col align="right" vertical>{this.state.checkedLutadores.length} de 20</Col>
            </Row>
            <CardColumns>{lutadores}</CardColumns>
        </React.Fragment>;
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LutadoresView);
