const LargeCard = (props) => {
    return (
        <div className="large_card" style={{backgroundColor : props.colour}}>
        <div className="large_card_content">
            <div className="large_card_top">
                <h4>Spotlight</h4>
            </div>
            <div className="large_card_bottom">
                <ul>
                    <l1>
                        <a href="www.google.com"><p>Regular arrear and Re-FAT on 20th Nov and 22nd Nov 2021</p></a>
                    </l1>
                    <l1>
                        <a href="www.google.com"><p>Useful Email Contacts</p></a>
                    </l1>
                    <l1>
                        <a href="www.google.com"><p>B.Tech-Freshers_CompleteInfo</p></a>
                    </l1>
                </ul>
            </div>
        </div>
    </div>
     );
}
 
export default LargeCard;