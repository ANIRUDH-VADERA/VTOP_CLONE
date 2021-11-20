import SmallCard from './SmallCard';
import LargeCard from './LargeCard';

const HomeLogin = () => {
    return (      
    <div className="content">
        <div className="small_cards">
            <SmallCard colour="#3c8dbc" heading="VTOP for Employee and Students" subheading="With responsive fresh look and feel" login="Login to VTOP" />
            <SmallCard colour="#00a65a" heading="VTOP for Parents" subheading="With more information about students" login="Parent Login" />
            <SmallCard colour="#00c0ef" heading="VTOP for Alumni" subheading="Intoduced with Transcript Service" login="Alumni Login" />
        </div>
        <div className="large_cards">
            <LargeCard colour="#f39c12"/>
        </div>
    </div>  
  );
}
 
export default HomeLogin;