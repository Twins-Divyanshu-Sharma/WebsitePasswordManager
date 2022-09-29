<template>
    <br/>
    <br/>
    <div id='Update'>
        <label>Website</label>
        <input type="text" v-model="siteName" name="" id=""/>    
        <label>New password</label>
        <input type="text" v-model="up_pass" />
        <button @click="updateResult" id="buttonID"> update </button>
    </div>
</template>

<script charset="utf-8">
  
    import {vue_port, node_port} from '../ports.js';
    export default {
        name: 'Update',
        data(){
            return{
                siteName: "",
                up_pass: "",
            }
        },
        methods:{
           updateResult(){
                
                let jsonObj = {site : this.siteName, password : this.up_pass};
                let backendURL = "http://" + location.hostname + ":" + node_port;
                let url = backendURL + "/updateResult";
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
                }).then(res => res.json())
                    .then(data => {
                        console.log('success');

                       }).catch((error)  => {
                        console.log('failure'); 
                    });
            },


        },



    }

</script>


<style scoped>

    #Update{
        color: white;   
        display: grid;
        grid-template-columns: repeat(1fr 2fr);
        justify-items:center;
        grid-gap: 0.75em; 
    }

    #Update #buttonID{
       margin-top: 2em;
       grid-column: 1/3;
    }


</style>

