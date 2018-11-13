import React from "react";
import { Link, Route,Redirect,Switch } from "react-router-dom";
import Dynamic from "./Dynamic.jsx";
import '../App.css';

let dashboardRoutes = [{"id":9,"orderId":0,"path":"/applicationsheader","pathTo":null,"name":"Applications","icon":null,"component":null,"isHeader":true,"redirect":false,"collapse":false,"type":null,"parentName":null,"mini":null,"level":null,"views":[]},{"id":10,"orderId":1,"path":"/tables","pathTo":null,"name":"Application 1","icon":"GridOn","component":null,"isHeader":false,"redirect":false,"collapse":true,"type":null,"parentName":"Applications","mini":null,"level":null,"views":[{"id":21,"orderId":1,"path":"/page1","pathTo":null,"name":"Page 1","icon":null,"component":null,"isHeader":false,"redirect":false,"collapse":false,"type":null,"parentName":null,"mini":"RT","level":null,"views":null},{"id":22,"orderId":2,"path":"/page2","pathTo":null,"name":"Page 2","icon":null,"component":null,"isHeader":false,"redirect":false,"collapse":false,"type":null,"parentName":null,"mini":"ET","level":null,"views":null},{"id":23,"orderId":3,"path":"/page3","pathTo":null,"name":"Page 3","icon":null,"component":null,"isHeader":false,"redirect":false,"collapse":false,"type":null,"parentName":null,"mini":"RT","level":null,"views":null},{"id":24,"orderId":4,"path":"/page4","pathTo":null,"name":"Page 4","icon":null,"component":null,"isHeader":false,"redirect":false,"collapse":false,"type":null,"parentName":null,"mini":"RT","level":null,"views":null}]},{"id":14,"orderId":0,"path":"/","pathTo":"/dashboard","name":"Dashboard","icon":null,"component":null,"isHeader":false,"redirect":true,"collapse":false,"type":null,"parentName":null,"mini":null,"level":null,"views":null},{"id":52,"orderId":3,"path":"/img:image","pathTo":null,"name":"img","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Image","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":53,"orderId":4,"path":"/jquery:jquery","pathTo":null,"name":"jquery","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Jquery","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":54,"orderId":5,"path":"/form:formio","pathTo":null,"name":"form","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"FormIO","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":55,"orderId":6,"path":"/web:website","pathTo":null,"name":"web","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Website","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":56,"orderId":6,"path":"/testimage:image","pathTo":null,"name":"Test Image","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Image","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":57,"orderId":7,"path":"/sadfasdf:image","pathTo":null,"name":"sadfasdf","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Image","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":58,"orderId":8,"path":"/r:website","pathTo":null,"name":"r","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Website","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":59,"orderId":9,"path":"/g:jquery","pathTo":null,"name":"g","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Jquery","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":60,"orderId":10,"path":"/f:formio","pathTo":null,"name":"f","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"FormIO","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":61,"orderId":11,"path":"/f:image","pathTo":null,"name":"f","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Image","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":62,"orderId":12,"path":"/gj:jquery","pathTo":null,"name":"gj","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Jquery","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":63,"orderId":13,"path":"/ghj:jquery","pathTo":null,"name":"ghj","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Jquery","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":64,"orderId":14,"path":"/ljk:website","pathTo":null,"name":"ljk","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Website","parentName":"Applications","mini":"RT","level":"2","views":null},{"id":65,"orderId":15,"path":"/tyr:image","pathTo":null,"name":"tyr","icon":"DashboardIcon","component":"Dynamic","isHeader":false,"redirect":false,"collapse":false,"type":"Image","parentName":"Applications","mini":"RT","level":"2","views":null}];
export default class Test extends React.Component {
    constructor(){
        super();
        this.state={
            isFetch:false
        }
    }
    // componentDidMount() {
    //     fetch("http://localhost:53982/api/Admin/GetRouteLinks")
    //         .then(res => { return res.json() })
    //         .then(json => {
    //             //dashboardRoutes.push(json.Data);
    //             let data = JSON.parse(json.Data);
    //             var len = data.length;

    //             data.forEach((value, index) => {
    //                 let obj = value;

    //                 //component
    //                 if (value.component !== null) {
    //                     obj.component = Dynamic;
    //                 }

    //                 dashboardRoutes.push(obj);
    //                 if(index===len-1){
    //                     this.setState({isFetch:true});
    //                 }
    //             });
    //         });
    // }

    render(){
        console.log(dashboardRoutes);
        return(
            <div >
            <div className="sidebar">
                <ul>
                {
                   dashboardRoutes.map((value,index)=>{
                        if(value.redirect)
                            return <li  key={index}><Link to={value.path}><label>{value.name}</label></Link></li>;
                        if(value.collapse)
                        {
                            return (<ul   key={index}>
                                {
                            value.views.map((val,key)=>{
                                return <li key={key}><Link to={val.path}>{val.name}</Link></li>
                            })
                        }
                            </ul>)
                        }
                        return <li  key={index}><Link to={value.path}>{value.name}</Link></li>
                   })
                }
                </ul>
                </div>
                <div className="container">
                {
                   dashboardRoutes.map((value,index)=>{
                        if(value.redirect)
                            return <Redirect from={value.path} to={value.pathTo} key={index}/>;
                        if(value.collapse)
                        {
                           return value.views.map((val,i)=>{
                                return <Route path={val.path} exact={true} component={Dynamic} key={i}></Route>
                            })
                        }
                        return <Route path={value.path} exact={true} component={Dynamic} key={index}></Route>
                   })
                }
                </div>
            </div>
        )
    }

}