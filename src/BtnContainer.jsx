const BtnContainer=({user,changeItem})=>{
return(
    <div className="btn-container">
        {user.map((item,index)=>{
           return(
            <button key={item.id} className="job-btn" onClick={()=>changeItem(index)} >
             {item.company}
            </button>
           )
        })}
    </div>
)
}
export default BtnContainer;