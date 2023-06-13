import React, { useState } from 'react';
import './styles.css'; 
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
const ShoeSizeForm = () => {
  const [size, setSize] = useState('');


  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  const inlineStyles = {
    fontFamily: 'serif',
    fontSize: '25px',
  };
        const handleClick = () => {
          alert('Proceed to payment');
        };

  return (
    <Container className='d flex justify-content'>
              <h1 className="mx-3"style={{ textAlign: 'center' }}> <span style={inlineStyles}>BOOTCART Cart</span></h1><br></br>

    <form>
      <label className="size-option">
        <input
          type="radio"
          name="size"
          value="6"
          checked={size === '6'}
          onChange={handleSizeChange}
        />
       UK 6
      </label>
      <label className="size-option">
        <input
          type="radio"
          name="size"
          value="7"
          checked={size === '7'}
          onChange={handleSizeChange}
        />
        UK 7
      </label>
      <label className="size-option">
        <input
          type="radio"
          name="size"
          value="8"
          checked={size === '8'}
          onChange={handleSizeChange}
        />
        UK 8
      </label><div>
      <Button variant="primary" onClick={handleClick} type="submit">
            BUY
          </Button></div>
    </form>
    </Container>
  );
};

export default ShoeSizeForm;
