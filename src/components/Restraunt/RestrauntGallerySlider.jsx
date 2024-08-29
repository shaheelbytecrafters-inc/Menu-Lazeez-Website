import { Box } from '@mui/material';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const RestrauntGallerySlider = ({images}) => {
  const sliderStyle = {
    height: '400px',
    borderRadius: '20px'
  };
  
//   const responsiveSliderHeight = ({
//     base: '200px',
//     sm: '300px',
//     md: '400px',
//     lg: '500px',
//   });

  return (
    <Box backgroundColor={""}>
      <AwesomeSlider style={{ ...sliderStyle,  }}  >
        {images.map((ele, i) => (
          <Box key={i} height={"100px"} bgcolor={"#f6f7f9"} data-src={ele} />
        ))}
      </AwesomeSlider>
    </Box>
  );
};

export default RestrauntGallerySlider;