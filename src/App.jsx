import './app.scss';
import Navbar from './components/navbar/Navbar';
// import Text from './Text';


const App = () => {
  return <div>
    <section id='Home'>
      <Navbar />
    </section>
    <section id='services'>Services</section>
    <section id='about-us'>About Us</section>
    <section id='portolio'>Our Portfolio</section>
    <section id='contact'>Contact</section>
    {/* <Text /> */}
  </div>;
};

export default App;
