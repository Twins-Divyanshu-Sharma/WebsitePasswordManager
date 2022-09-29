<template>
    <br/><br/>
    <div id='Create'>
        <label>Website</label>
        <input type="text" v-model="siteName" id="" required/>
        <label>Link</label>
        <input type="text" v-model="link" id="" required/>
        <label>Password</label>
        <input type="text" v-model="password" id="" required/>
        <button @click="createWeb" id="buttonID"> create </button>
    </div>
</template>

<script charset="utf-8">
    import {vue_port, node_port} from '../ports.js';

    export default {
        name: 'Create',
        data(){
            return{
                siteName: "",
                link: "",
                password: ""
            }
        },
        methods: {

            createWeb(){
                let jsonObj = {site: this.siteName, link: this.link, password: this.password} ;
                if(jsonObj.site=="" || jsonObj.link=="" || jsonObj.password=="")
                {
                    console.log("Blank input is not allowed");
                    return;
                }
                let backendURL = "http://" + location.hostname + ":" + node_port;               
                let url = backendURL + "/createWeb";
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
                    console.log('successful creation of Web');
                }).catch(error => {
                    console.log('error while creating Web');
                });
                              
            },
 

       },


    }

</script>

<style scoped>
  
    #Create{
        color: white;   
        display: grid;
        grid-template-columns: repeat(1fr 2fr);
        justify-items: center;
        grid-gap: 0.75em;
    }

    #Create #buttonID{
        margin-top: 2em;
        grid-column: 1/3;
    }


</style>
