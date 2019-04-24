import React from 'react';
import {connect} from 'react-redux';
import selectedCategory from '../actions';
import {cat} from '../data/data'
//import Store from '../Store/store';

class CategoryList extends React.Component{
    constructor(){
        super();
        this.state={
            limit:2
        }
    }
   
   
    
    onLoad=()=>{
        this.setState({limit:this.state.limit+2});
    }

    render(){
        
        console.log("cat is",cat.categories,this.props.category);
        return(
          <div>{this.props.category.categories.slice(0,this.state.limit).map(val=><div><div style={{width:"900px",fontSize:"16px",fontWeight:'bold'}}>{val.name}</div><br/><div>{val.models.slice(0,this.state.limit).map(ne=><div><div><ul style={{alignContent:'center',float:'left'}}><img src={ne.thumb} height="330px" width="450px"/></ul></div></div>)}</div></div>)}
            <button className="myButton" onClick={this.onLoad}>Load</button>
          </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {category: state.category};
}
export default connect(mapStateToProps,{selectedCategory})(CategoryList);