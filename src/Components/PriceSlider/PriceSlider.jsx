import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState , useEffect } from 'react';

function valuetext(value) {
  return `$${value}`;
}

const minDistance = 10;

export default function RangeSlider(props) {
  const [value1, setValue1] = React.useState([999, 4999]);

  useEffect(()=>{setValue1([999,4999])},[props.reset])

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

    // console.log(value1);
    function passValues(){
      props.valuesPass(value1[0],value1[1])
    }
    useEffect(()=>{passValues()},[value1[0],value1[1]])
     

  return (
    
    <Box sx={{ }}>
      <div className='flex'>
        <div className='w-1/2 md:p-2'>
          From
          <p className='border-2 p-1 '>$ {value1[0]}</p>
        </div>
        <div className='w-1/2 md:p-2'>
          To
          <p className='border-2 p-1 '>$ {value1[1]}</p>
        </div>
      </div>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={999}
        max={4999}
        sx={{
          color: 'gray.400',
          '& .MuiSlider-thumb': {
            borderRadius: '50%',
            backgroundColor: '#2dd4bf',
            border: '2px solid #9ca3af',
          },
          '& .MuiSlider-track': {
            color: '#2dd4bf',
          },
          '& .MuiSlider-rail': {
            color: '#9ca3af',
          },
        }}
      />
    </Box>
  );
}
