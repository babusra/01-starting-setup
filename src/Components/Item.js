import "./Item.css"

function Item(props){
    const title=props?.title;
    const subtitle=props?.subtitle;
    const date=props?.date.toLocaleString('tr');
    const description=props?.description;
    const link=props?.link;
    const linkText=props?.linkText;



    return(
        <div className="item">
        <div className="title">
            <h3>{title}</h3>
        </div>
        <div className="subt_date">
            <div className="subtitle">{subtitle}</div>
            <div className="date">{date}</div>
        </div>
        <div className="description">
            <p>{description}</p>
        </div>
        <div className="link">
        <a href={link}>{linkText}</a>
        </div>
        </div>
    )
}
export default Item;