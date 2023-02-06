import { Button } from "../generics/Button";
import { Container } from "../generics/generics";
import IconLight from "../generics/IconLight";

export default function Welcome({ swiper }) {
    return (
        <Container>
            <IconLight/>
            <Button text={"Primeiros passos"} swiper={swiper}/>
        </Container>
    );
}
