import {
    Image
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import banner1 from "../../assests/banner1.jpg"
import banner2 from "../../assests/banner 2.png"
import banner3 from "../../assests/banner 3.png"

export default function VerticalCarousel() {
  return (
    <Carousel slideGap="xs" orientation='vertical' sx={{ maxWidth: '100%'}} withControls={false} withIndicators height={350}>
        <Carousel.Slide sx={{ backgroundColor: "#eee" }}>
            <Image style={{width:"100%",height:"300px"}} src={banner1} />
        </Carousel.Slide>
        <Carousel.Slide sx={{ backgroundColor: "#eee" }}>
            <Image style={{width:"100%",height:"300px"}} src={banner2} />
        </Carousel.Slide>
        <Carousel.Slide sx={{ backgroundColor: "#eee" }}>
            <Image style={{width:"100%",height:"300px"}} src={banner3} />
        </Carousel.Slide>
      </Carousel>
  );
}