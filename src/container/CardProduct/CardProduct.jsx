import React, {Component} from 'react';

class CardProduct extends Component{

    state = {
        order: 4,
        name: 'Mandala'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);

    }
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () =>{
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }        
    }

    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee.id/img/content/img_prima_freshmart.svg" className="imag" alt="yamayamyamyam" />   
                </div>
                <p className ="product-title">Daging Ayam berbumbu</p>
                <p className ="product-price">Rp. 410,000</p>
                <div className ="counter">
                    <button className= "minus" onClick={this.handleMinus}>-</button>
                        <input type="text" 
                         value={this.state.order}
                         onChange={(event)=>this.handleCounterChange} 
                        /> {/*klo gak make onchange warning*/}
                    <button className= "plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;