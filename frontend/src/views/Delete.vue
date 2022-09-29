<template>
    <br/>
    <br/>
    <div id='Delete'>
        <label>Website</label>
        <input type="text" v-model="siteName" id=""/>

        <button @click="deleteWeb" id="buttonID"> delete </button>
    </div>
</template>

<script charset="utf-8">

    import {vue_port, node_port} from '../ports.js';    
    export default {

        name: 'Delete',
        data(){
            return{
                siteName: "",
            }
        },
        methods: {
            deleteWeb(){
                let jsonObj = {site: this.siteName} ;
                let backendURL = "http://" + location.hostname + ":" + node_port;
                let url = backendURL + "/deleteWeb";
                fetch(url,{
                    mode: 'cors',
                    method: 'post',
                    headers: {
                        "Accept": "application/json, text/plain, */*",
                        "Content-type":"application/json; charset=UTF-8",
                        "Access-Control-Allow-Origin":"*",  
                    },
                    body: JSON.stringify(jsonObj)
                }).then(res => res.json()).then(data => {
                    console.log('successful deletion of Web');
                }).catch(error => {
                    console.log('error while deleting Web');
                });
 
             },
        },


    }

</script>

<style scoped>
  
    #Delete{
        color: white;   
        display: grid;
        grid-template-columns: repeat(1fr 2fr);
        justify-items:center;
        grid-gap: 0.75em; 
    }

    #Delete #buttonID{
       margin-top: 2em;
       grid-column: 1/3;
    }

</style>
