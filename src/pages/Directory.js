import React from 'react';
import { TreeView, processTreeViewItems, handleTreeViewCheckChange, moveTreeViewItem, TreeViewDragAnalyzer, TreeViewDragClue } from '@progress/kendo-react-treeview'
import '@progress/kendo-react-animation'

import Header from '../secondaryComponents/Header'
import NavbarPage from '../secondaryComponents/NavBar'
import SideNav from '../secondaryComponents/SideNav'
import Slider from '../secondaryComponents/Slider'
import Signup from '../secondaryComponents/Signup'
import CardContainer from '../secondaryComponents/CardContainer'
import MapContainer from '../secondaryComponents/MapContainer'
import Footer from '../secondaryComponents/Footer'
import Socialhandle from '../primaryComponents/Socialhandle';


    const Btree = [{
        text: 'Btech', expanded: false, items: [
            { text: '2016-2020', expanded: false, items: [
                {text: 'CSE'},
                {text: 'ECE'}
            ] },
            { text: '2017-2021', expanded: false, items: [
                {text: 'CSE'},
                {text: 'ECE'}
            ] },
            { text: '2018-2022', expanded: false, items: [
                {text: 'CSE'},
                {text: 'ECE'}
            ] },
            { text: '2019-2023', expanded: false, items: [
                {text: 'CSE'},
                {text: 'ECE'}
            ] },
            { text: '2019-2023', expanded: false, items: [
                {text: 'CSE'},
                {text: 'ECE'}
            ] },
            ]
        },
        ];

    const Mtree = [{
            text: 'Mtech', expanded: false, items: [
                { text: '2016-2020', expanded: false, items: [
                    {text: 'CSE'},
                    {text: 'ECE'}
                ] },
                { text: '2017-2021', expanded: false, items: [
                    {text: 'CSE'},
                    {text: 'ECE'}
                ] },
                { text: '2018-2022', expanded: false, items: [
                    {text: 'CSE'},
                    {text: 'ECE'}
                ] },
                { text: '2019-2023', expanded: false, items: [
                    {text: 'CSE'},
                    {text: 'ECE'}
                ] },
                { text: '2019-2023', expanded: false, items: [
                    {text: 'CSE'},
                    {text: 'ECE'}
                ] },
                ]
            },
            ];

    const Ptree = [{
                text: 'Phd', expanded: false, items: [
                    { text: '2016-2020', expanded: false, items: [
                        {text: 'CSE'},
                        {text: 'ECE'}
                    ] },
                    { text: '2017-2021', expanded: false, items: [
                        {text: 'CSE'},
                        {text: 'ECE'}
                    ] },
                    { text: '2018-2022', expanded: false, items: [
                        {text: 'CSE'},
                        {text: 'ECE'}
                    ] },
                    { text: '2019-2023', expanded: false, items: [
                        {text: 'CSE'},
                        {text: 'ECE'}
                    ] },
                    { text: '2019-2023', expanded: false, items: [
                        {text: 'CSE'},
                        {text: 'ECE'}
                    ] },
                    ]
                },
                ];

    export default function Directory(){
        return(
            <div>
                < Header/>
                < NavbarPage/>
                <div style={{textAlign: "center", backgroundColor:"rgb(40,40,40)", padding:40, color: "white"}}>
                    <h1>
                        ALUMNI DIRECTORY
                    </h1>
                </div>
                <div style= {{margin: 90, display: "flex", justifyContent: "center", flexFlow: "row wrap"}}>
                    <div class="card" style={{height: 350, width:"28%", alignItems: "center"}}>
                        <App tree={Btree}/>
                    </div>
                    <div class="card" style={{height: 350, width:"28%", alignItems: "center"}}>
                        <App tree={Mtree}/>
                    </div>
                    <div class="card" style={{height: 350, width:"28%", alignItems: "center"}}>
                        <App tree={Ptree}/>
                    </div>
                </div>
                < Footer/>
            </div>
        );
    }
    class App extends React.Component {
        render() {
            return (
                <TreeView
                    data={this.props.tree}
                    expandIcons={true}
                    onExpandChange={this.onExpandChange}
                    onItemClick={this.onItemClick}
                    aria-multiselectable={true}
                />
            );
        }
        onItemClick = (event) => {
            event.item.selected = !event.item.selected;
            this.forceUpdate();
        }
        onExpandChange = (event) => {
            event.item.expanded = !event.item.expanded;
            this.forceUpdate();
        }
    }

