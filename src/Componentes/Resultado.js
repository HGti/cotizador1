import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component {
    render() {
        const resultado = this.props.resultado;

          return(
            <div clasName="gran-total">
                {/*Comment*/}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition
                        className="resultado"
                        key={resultado}
                        timeout={enter: 500,exit:500}>
                    </CSSTransition>
                 </TransitionGroup>
            </div>
           )



    }
}

export default Resultado;