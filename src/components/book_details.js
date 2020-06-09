
import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetails extends Component{
    render(){

        if(!this.props.bk) {
            return <div>Select a book to set Started</div>
         }
        return(
            
            <div>
                <h3>Book details are</h3>
                <div>Title: {this.props.bk.title}</div>
                <div>Pages: {this.props.bk.pages}</div>
                <div>Author: {this.props.bk.Author}</div>
            </div>
        )
    
}
}


function mapStateToProps(state){

    return{
        bk: state.activeBook
    }
}

export default connect (mapStateToProps)(BookDetails)