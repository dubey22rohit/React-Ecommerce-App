import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.style.scss'
const CollectionItem = (props)=>{
    return(
        <div className = "collection-item">
            <div className = "image" style = {{backgroundImage : `url(${props.imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{props.name}</span>
                <span className="price">{props.price}</span>
            </div>
            <CustomButton onClick = {()=>props.addItem(props.item)}inverted>Add To Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem : item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem)