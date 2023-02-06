import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'
import './styles.css';
import { useSwiper } from 'swiper/react';
import Welcome from './Welcome';
import WelcomeMenu from './WelcomeMenu';
import { toast, ToastContainer } from 'react-toastify';

export default function WelcomeSwiper() {

    if(window.innerWidth > 770 ) {
        toast.warn("Infelizmente o site ainda não possui versão para desktop, porem você ainda pode criar sua conta!");    
    }
    const swipe = useSwiper()
    return (
        <>
            <ToastContainer/>
            <Swiper
                modules={[ Pagination ]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <Welcome />
                </SwiperSlide>
                <SwiperSlide>
                    <WelcomeMenu/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
