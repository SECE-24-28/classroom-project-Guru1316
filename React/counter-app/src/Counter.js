import './App.css'
import ButtonContainer from './ButtonContainer';

const Counter = ({val, handleIncrement, handleDecrement}) => {
    let v = null;
    if(val < 0)
    {
        v = <p id='Ne'>Negative Value</p>;
    }
    else if(val > 0)
    {
        v = <p id='Po'>Positive Value</p>;
    }
    else if(val === 0)
    {
        v = <p>Zero</p>;
    }
    return(
      <div className='counter'>
        <h1>{val}</h1>
        {v}
        <ButtonContainer handleIncrement = {handleIncrement} handleDecrement = {handleDecrement}></ButtonContainer>
      </div>
    )
}

export default Counter;