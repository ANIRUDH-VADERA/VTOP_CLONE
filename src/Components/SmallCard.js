import { Link } from "react-router-dom";

const SmallCard = (props) => {
    return ( 
        <div className="small_card" style={{backgroundColor : props.colour}}>
            <div className="small_card_content">
                <div className="small_card_top">
                    <h4>{props.heading}</h4>
                </div>
                <div className="small_card_middle">
                    <h5>{props.subheading}</h5>
                </div>
                <div className="small_card_bottom">
                    <Link to="/Login">
                    <button className="small_card_bottom_button" style={{
                        backgroundColor: props.colour,
                        borderColor: props.colour,
                        color: "#ffffff",
                        display: "inline-block",
                        marginTop: "10px",
                        fontWeight:" normal",
                        textAlign: "center",
                        verticalAlign: "middle",
                        touchAction: "manipulation",
                        cursor: "pointer",
                        border: "1px solid transparent",
                        whiteSpace: "nowrap",
                        padding: "6px 12px",
                        fontSize: "12px",
                        lineHeight: "1.42857143",
                        borderRadius: "4px",
                        userSelect: "none",
                        fontFamily: "'Roboto', sans-serif",
                        textTransform: "none"
                        }}>
    {props.login}</button></Link>
                </div>
            </div>
        </div>
     );
}
 
export default SmallCard;