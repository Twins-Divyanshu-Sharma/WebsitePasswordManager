<template>
    <br/>
    <br/>
    <nav class='nav_bar'>
        <span class='invi'> ____ </span>
        <router-link :to="{name: 'Get'}"   class="nav_links" > Get </router-link>
        <router-link :to="{name: 'Update'}" class="nav_links" > Update </router-link>
        <router-link :to="{name: 'Create'}" class="nav_links" > Create </router-link>
        <router-link :to="{name: 'Delete'}" class="nav_links" > Delete </router-link>
        <span class='invi'> ____ </span>
   </nav>         
    <br/>
    <br/>
    <router-view/>
</template>


<script charset="utf-8">
    export default {
        name: 'App',
        data(){
            return{
                color: "#32aaff",
                border: "0.125em solid #18181a",
                borderBottom: "0.125em solid #32aaff",
            }
        },
        methods:{
            updateStyle(styleObj){
                this.color = styleObj.color;
                this.border = styleObj.border;
                this.borderBottom = styleObj.borderBottom;
            }
        },
        computed:{
            computedColor() {
                return this.color;
            },
            computedBorder() {
                return this.border;
            },
            computedBorderBottom() {
                return this.borderBottom;
            },
        }
    }
</script>


<style>

html{
   background-color: #18181a;
   display: table;
   margin: auto;
}

body {
    display: table-cell;
    vertical-align: middle;
}

#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

.nav_bar{
}

.invi{
    font-size: 1.5em;
    text-decoration: none;
    border-bottom: 0.125em solid #32aaff;
    text-shadow: 1 1 2em #32aaff;
    color: #18181a;
    padding: 0.5em;
}

.nav_links {
    font-size: 1.5em;
    text-decoration: none;
    border-bottom: 0.125em solid #32aaff;
    text-shadow: 1 1 2em #32aaff;
    color: #32aaff;
    padding: 0.5em;
    
}

.nav_links_selected {
    font-size: 1.5em;
    text-decoration: none;
    border: 0.125em solid #32aaff;
    border-bottom:0.125em solid #18181a;
    color: #32aaff; 

}

input {
    font-size: 1.15em;
    background-color: rgba(0,0,0,0);
    text-decoration: none;
    border: 0.125em solid #32aaff;
    border-radius: 0.25em;
    text-align: center;
    position: relative;
    color: #32aaff;
}



input:focus {

    font-size: 1.15em;
    background-color: rgba(0,0,0,0);
    text-decoration: none;
    border: 0.125em solid #32aaff;
    border-radius: 0.25em;
    text-shadow: 1 1 2em #32aaff;
    box-shadow: inset 0 0 0.5em 0 #32aaff, 0 0 0.5em 0 #32aaff ;
    text-align: center;
    position: relative;
}

button {
    height: 3.3em;
    width: 8em;
    color: #32aaff;
    font-size: 1.25em;
    background-color: rgba(0,0,0,0);
    text-decoration: none;
    border: 0.125em solid #32aaff;
    border-radius: 0.25em;

    text-shadow: 0 0 2em #32aaff;
    box-shadow: inset 0 0 0.5em 0 #32aaff, 0 0 0.5em 0 #32aaff ;

    position: relative;
    transition: 1s linear;
}

button::before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: #32aaff;
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(20deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.4;

    transition: opacity 1s linear;
}

button::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 1em 0.5em #32aaff;
    opacity: 0;
    transition: opacity 1s linear;
}

button:hover {
    background: #32aaff;
    color: #18181a; 
    text-shadow: none;
    transition: 1s linear;
}

button:hover::after {
    opacity: 1;
}

button:hover::before {
    opacity: 1;
}

button:active {
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 1em 0.5em #32aaff;
    opacity: 0;
} 



</style>
