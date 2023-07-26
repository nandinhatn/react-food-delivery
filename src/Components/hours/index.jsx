import React from "react";
import moment from "moment";
import infos from "../../dates/info";

 const Hours = (props)=>{

    moment.locale();         // pt-br
 
    console.log("&&&&&&&&&",moment().format('HH:MM') )
    console.log(props)
    const hourNow = moment().format('HH:MM')
    const beginTime = moment(infos.hours.initial)
    const finalTime = moment(infos.hours.final)
    console.log(beginTime.isBefore(hourNow))//false
    console.log(moment().isAfter(finalTime))
    if(!beginTime.isBefore(hourNow)){
        console.log('fora do horario ')
        props.changecontent(4)
    props.out()
    }
    if(moment().isAfter(finalTime)){
        console.log('passou do horario')
        props.changecontent(5)
    props.out()
    }
    
    /*  props.changecontent(4)
    props.out() */

   
    return(<></>)
}

export default Hours