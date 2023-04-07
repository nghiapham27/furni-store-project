import AnimationPage from './AnimationPage';
import AboutImg from '../assets/about.jpg';

const AboutPage = () => {
  return (
    <AnimationPage>
      <div className="grid">
        <h1 className="font-section-header text-center">About Us</h1>
        <div className="mt-4 grid md:grid-cols-2 md:gap-10">
          <img src={AboutImg} className="rounded-lg w-full md:my-auto" />
          <p className="mt-4 md:mx-auto md:my-auto text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            atque ducimus facere ea placeat deserunt magnam quod facilis harum
            nostrum? Optio aut nam recusandae error natus dolore tenetur iusto
            aliquid! Soluta accusantium sint autem maxime repudiandae
            consectetur quis nihil error, neque et, sed ipsa minima. Similique
            necessitatibus blanditiis beatae odit quibusdam sit molestias esse
            eligendi quos corrupti asperiores, dicta velit. Voluptatum, porro
            consequuntur dolore autem pariatur quas maiores ex libero deleniti
            facilis, aut quam nobis, blanditiis velit distinctio nemo possimus
            explicabo eaque ducimus. Facere maxime amet obcaecati veritatis
            nemo. Suscipit. Eos ea corporis beatae facilis magnam quas saepe
            atque expedita sit cupiditate maxime quod unde blanditiis asperiores
            excepturi perspiciatis sint doloremque rem perferendis quibusdam
            minus, ipsa a. Minus, ratione aut!
          </p>
        </div>
      </div>
    </AnimationPage>
  );
};
export default AboutPage;
