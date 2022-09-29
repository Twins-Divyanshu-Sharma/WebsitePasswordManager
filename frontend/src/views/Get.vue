<template>
    <br/>
    <br/>
    <div id='Get'>
        <label>Website</label>
        <input type="text" v-model="siteName" name="" id=""/>    
        <span id="result">{{result_link}}<br>{{result_pass}}<br></span> 
        <button @click="getResult" id="buttonID">get Result</button> 
    </div>
</template>

<script charset="utf-8">
    import {vue_port, node_port} from '../ports.js';

    export default {
        name: 'Get',
        data(){
            return{
                siteName: "",
                result_link: "-----------------------------------",
                result_pass: "----------------------",
            }
        },
        methods:{

            getResult(){
                
                let jsonObj = {site : this.siteName};
                let backendURL = "http://" + location.hostname + ":" + node_port;

                let url = backendURL + "/getResult";
                fetch (url, {
                            mode: 'cors',
                            method: 'post',
                            headers: {
                              // "Content-type": "getlication/x-www-form-urlencoded; charset=UTF-8",
                                "Accept": "application/json, text/plain, */*",
                                "Content-type":"application/json; charset=UTF-8",
                                "Access-Control-Allow-Origin":"*",  
                            },
                           body: JSON.stringify(jsonObj)
                }).then(res => res.json()).then(data => {
                    this.result_link = "link : "+data.link;
                    this.result_pass = "password : "+data.password;
                                                
                }).catch((error)  => {
                        console.log('failure'); 
                });
            },

        },
        
        

    }

</script>


<style scoped>
    main {
        display: grid;
    } 

    #Get {
        color: white;
        display: grid;
        grid-template-columns: repeat(1fr 2fr); 
        justify-items: center;
        grid-gap: 0.75em;
    }

    #Get #buttonID{
        margin-top: 2em;
        grid-column: 1/3;
    }


    #Get #result{
        margin-top: 1em;
        border-top: 12px solid #32aaff;
        border-bottom: 12px solid #32aaff;
        border-left: 4px solid #32aaff;
        border-right: 4px solid #32aaff;
        padding: 1em;
        color: white;
        grid-column: 1/3;
        transform: skew(-10deg);
    }

</style>

