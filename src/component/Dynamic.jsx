import React from "react";

export default class Dynamic extends React.Component{

    constructor(){
        super();
        this.state={
            type:'',
            name:''
        }
    }

    componentDidMount() {
        console.log(this.props);
        let pagetype = Object.values(this.props.match.params)[0];

        let page2=this.props.location.pathname.split(":")[1];
        let pageName=this.props.location.pathname.split(":")[0].replace("/","");

        //alert("Hello, My type is " + pagetype);
        this.setState({
            type:page2,
            page:pageName
        })
    }

    _getCurrentPage=()=>{
        switch(this.state.type){
            case "image":
                return (<h1>pageName: {this.state.page}  pagetype:{this.state.type}</h1>);
            case "formio":
                return (<h1>pageName: {this.state.page}  pagetype:{this.state.type}</h1>);
            case "jquery":
                return (<h1>pageName: {this.state.page}  pagetype:{this.state.type}</h1>);
            case "website":
                return (<h1>pageName: {this.state.page}  pagetype:{this.state.type}</h1>);
            default:
                return (<h1>No match</h1>);
                // return (<DynamicImageUpload></DynamicImageUpload>);
        }
    }

    render(){
       
        return(
           this._getCurrentPage()
        )
    }
}