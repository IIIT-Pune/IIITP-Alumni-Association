import React from 'react';
import { WiredCard } from "wired-card";
 
export default function News () {
    return (
        <div>
            <div style={{textAlign: "center", backgroundColor:"rgb(40,40,40)", padding:40, color: "white"}}>
                <h1>
                    NEWS & ANNOUNCEMENTS
                </h1>
            </div>
            <div  style= {{display:"flex", margin: 60, justifyContent: "center", flexFlow: "row wrap"}}>
            <Card elevation="3" datepublished="date" contentl1="card with elevation is here," contentl2="i thjink rhis wil look good thaj n venro veonmorv roinvoer pne" contentl3="hworub fsobfoiwr km"/>
            <Card elevation="2" datepublished="date" contentl1="card with elevation is here," contentl2="i t"/>
            <Card elevation="3" datepublished="date" contentl1="card with elevation is here," contentl2="i thjink rhis wil look good thaj n venro veonmorv roinvoer pne" contentl3="hworub fsobfoiwr fpijewp eptk woqrkmpr uptkm"/>
            <Card elevation="3" datepublished="date" contentl1="card with elevation is here," contentl2="i thjink rhis wil look good thaj n venro veonmorv roinvoer pne" contentl3="hworub fsobfoiwr fpijewp eptk woqrkmpr uptkm"/>
            <Card elevation="3" datepublished="date" contentl1="card with elevation is here,"/>
            <Card elevation="3" datepublished="date" contentl1="card with elevation is here," contentl2="i thjink rhis wil look" contentl3="hworub fsobfoiwr fpijewp eptk" contentl4="ivva kbe lewojp wp4hnfp["/>
            </div>
        </div>
    );
}

function Card(props){
    return (
        <wired-card elevation={props.elevation} style={{margin: 30}} >
            <div>
                <h4> {props.contentl1} </h4>
                <h4> {props.contentl2} </h4>
                <h4> {props.contentl3} </h4>
                <h4> {props.contentl4} </h4>
                <h4> {props.contentl5} </h4>
                <p style={{float: "bottom"}}> {props.datepublished} </p>

            </div>
        </wired-card>
    );
}