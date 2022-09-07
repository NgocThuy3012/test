function Brand(props){
    return(
        <div className="brand">
            <div className={props.title === "d brand" ? "brand-title orange" :"brand-title"}>{props.title}</div>
            <img className="brand-image" src={props.img} alt=""/>
        </div>
    )
}
export default Brand