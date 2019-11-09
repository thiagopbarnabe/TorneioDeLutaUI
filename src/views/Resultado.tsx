import React, { Fragment } from 'react';
import { ApplicationState } from '../types';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationTorneioData, ResultadoJogo } from '../types/ApplicationState';
import { Card, CardImg, CardBody, CardTitle, Row, Col } from 'reactstrap';

const mapStateToProps = (state: ApplicationState) => {
    return {
        resultado: state.torneio
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
    }, dispatch);
};

interface Props {
    resultado: ApplicationTorneioData
}

class ResultadoView extends React.Component<Props> {
    state = {
        checkedLutadores: [] as Array<number>
    };

    constructor(props: Props) {
        super(props);
    }

    renderJogo(resultado: ResultadoJogo) {
        return <Card>
            <CardImg/>
            <CardBody>
                <CardTitle>{resultado.vencedor.nome + ' X ' + resultado.perdedor.nome}</CardTitle>
            </CardBody>
        </Card>;
    }

    render() {
        let faseDegrupos = null;
        if (this.props.resultado.faseDeGrupos) {
            faseDegrupos =
            <Fragment>
                <h4>Fase de Grupos</h4>
            {
                this.props.resultado.faseDeGrupos.map((x) => {
                    return this.renderJogo(x);
                })
            }
            </Fragment>;
        }

        let quartasDeFinal = null;
        if (this.props.resultado.quartasDeFinal) {
            quartasDeFinal =
            <Fragment>
                <h4>Quartas de Final</h4>
            {
                this.props.resultado.quartasDeFinal.map((x) => {
                    return this.renderJogo(x);
                })
            }
            </Fragment>;
        }

        let semiFinal = null;
        if (this.props.resultado.semiFinal) {
            semiFinal =
            <Fragment>
                <h4>SemiFinal</h4>
            {
                this.props.resultado.semiFinal.map((x) => {
                    return this.renderJogo(x);
                })
            }
            </Fragment>;
        }

        let terceiro = null;
        if (this.props.resultado.terceiroJogo) {
            terceiro =
            <Fragment>
                <h4>Terceiro lugar</h4>
            {
                this.renderJogo(this.props.resultado.terceiroJogo)
            }
            </Fragment>;
        }

        let final = null;
        if (this.props.resultado.final) {
            final =
            <Fragment>
                <h4>Final</h4>
            {
                this.renderJogo(this.props.resultado.final)
            }
            </Fragment>;
        }
        let resultado = null;
        if (this.props.resultado.vencedor) {
            resultado =
            <Fragment>
                <h2>Primeiro Colocado</h2>
                <Card>
                    <CardImg/>
                    <CardBody>
                        <CardTitle>{this.props.resultado.vencedor.nome}</CardTitle>
                            <Row><Col><b>Idade:</b> {this.props.resultado.vencedor.idade} anos</Col></Row>
                            <Row><Col><b>Artes Marciais:</b> {
                                this.props.resultado.vencedor.artesMarciais.join(', ')
                            }</Col></Row>
                            <Row><Col><b>Lutas:</b> {this.props.resultado.vencedor.lutas}</Col></Row>
                            <Row><Col><b>Vitorias:</b> {this.props.resultado.vencedor.vitorias}</Col></Row>
                            <Row><Col><b>Derrotas:</b> {this.props.resultado.vencedor.derrotas}</Col></Row>
                    </CardBody>
                </Card>
                <h2>Segundo Colocado</h2>
                <Card>
                    <CardImg/>
                    <CardBody>
                        <CardTitle>{this.props.resultado.vice.nome}</CardTitle>
                            <Row><Col><b>Idade:</b> {this.props.resultado.vice.idade} anos</Col></Row>
                            <Row><Col><b>Artes Marciais:</b> {
                                this.props.resultado.vice.artesMarciais.join(', ')
                            }</Col></Row>
                            <Row><Col><b>Lutas:</b> {this.props.resultado.vice.lutas}</Col></Row>
                            <Row><Col><b>Vitorias:</b> {this.props.resultado.vice.vitorias}</Col></Row>
                            <Row><Col><b>Derrotas:</b> {this.props.resultado.vice.derrotas}</Col></Row>
                    </CardBody>
                </Card>
                <h2>Terceiro Colocado</h2>
                <Card>
                    <CardImg/>
                    <CardBody>
                        <CardTitle>{this.props.resultado.terceiroColocado.nome}</CardTitle>
                            <Row><Col><b>Idade:</b> {this.props.resultado.terceiroColocado.idade} anos</Col></Row>
                            <Row><Col><b>Artes Marciais:</b> {
                                this.props.resultado.terceiroColocado.artesMarciais.join(', ')
                            }</Col></Row>
                            <Row><Col><b>Lutas:</b> {this.props.resultado.terceiroColocado.lutas}</Col></Row>
                            <Row><Col><b>Vitorias:</b> {this.props.resultado.terceiroColocado.vitorias}</Col></Row>
                            <Row><Col><b>Derrotas:</b> {this.props.resultado.terceiroColocado.derrotas}</Col></Row>
                    </CardBody>
                </Card>
            </Fragment>;
        }
        return <React.Fragment>
            {resultado}
            {faseDegrupos}
            {quartasDeFinal}
            {semiFinal}
            {terceiro}
            {final}
        </React.Fragment>;
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ResultadoView);
