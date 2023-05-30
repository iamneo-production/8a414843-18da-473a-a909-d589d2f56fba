import { Carousel } from '@mantine/carousel';
import { createStyles,Image, Paper, Title,  rem } from '@mantine/core';
import CarosuselImg from '../../assests/doctor.svg';


const useStyles = createStyles(() => ({
  card: {
    height: rem(344),
    width: rem(372),
    borderRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow : '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
  },
}));



function Card(props) {
  const { classes } = useStyles();

  return (
    <Paper onClick={(e) => {
        e.stopPropagation();
      }} 
      p="xl"
      radius="md"
      className={classes.card}
      style={{paddingTop:'1.5%',paddingLeft:'1.5%',paddingRight:'1.5%'}}
    >
      <Image radius="xl"  src= {props.image} />
      <Title size={'20px'} style={{textAlign:'center' , width:'100%'}}>{props.title}</Title>
    </Paper>
  );
}

const data = [
  {
    image: CarosuselImg,
    title: 'Orthopedics',
  },
  {
    image: CarosuselImg,
    title: 'Dermatology',
  },
  {
    image: CarosuselImg,
    title: 'General Surgery',
  },
  {
    image: CarosuselImg,
    title: 'Neurologist',
  },
  {
    image: CarosuselImg,
    title: 'Cardiology physician',
  },
  {
    image: CarosuselImg,
    title: 'Surgeon',
  },
];

export default function CustomCarousel() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));


  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Carousel
        onClick={(e) => {
            e.stopPropagation();
          }} 
        loop
        height={"55vh"}    
        withIndicators
        styles={{margin:'20px',slide:{padding:'15px'} ,indicator:{backgroundColor:'#9083D5'}}}
        slideSize="20.9888%"
        slideGap="xl"
        align="start"
        slidesToScroll={1}
        withControls={false}
        >
        {slides}
        </Carousel>
    </div>
    
  );
}