import { Carousel } from '@mantine/carousel';
import { createStyles,Image, Paper, Title,  rem } from '@mantine/core';


const useStyles = createStyles(() => ({
  card: {
    height: rem(334),
    width: rem(350),
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
      style={{marginTop:"10px",paddingTop:'1.5%',paddingLeft:'1.5%',paddingRight:'1.5%'}}
    >
      <Image radius="xl" src= {props.image} />
      <Title size={'20px'} style={{textAlign:'center' , width:'100%'}}>{props.title}</Title>
    </Paper>
  );
}

export default function CustomCarousel(props) {

  const{records} = props;

  const slides = records.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));


  return (
    <div>
        <Carousel
        loop   
        height={400}
        styles={{ margin: '20px', slide: { paddingBottom: '40px' }, indicator: { backgroundColor: '#9083D5' }, 
        controls:{marginLeft:"-100px", marginRight:"-100px", marginTop:"-50px",marginBottom:"50px",fontSize:"90px",},control:{height:"90px"} }}
        slideSize="28%"
        slideGap={49}
        align="center"
        slidesToScroll={1}
        >
        {slides}
        </Carousel>
    </div>
    
  );
}
