import Vue from "vue";

export default function Slider() {
    function sliderInit() {

        const info = {
            template: "#slider-info",
            props: {
                work: Object
            }
        };
        
        const display = {
            template: "#slider-display",
            props: {
                work: Object
            }
        };
        
        const btns = {
            template: "#slider-btns",
            props: ['works', 'index'],
            // props: {
            //     works: Array,
            //     index: Number
            // },
            data() {
                return{
                    prevButtonWorks: [],
                    nextButtonWorks: []
                };
            },
            created() {
                this.prevButtonWorks = this.transformWorksArrForBtn('prev');
                this.nextButtonWorks = this.transformWorksArrForBtn('next');
            },
            watch: {
                works(){
                  this.prevButtonWorks = this.transformWorksArrForBtn('prev');
                  this.nextButtonWorks = this.transformWorksArrForBtn('next');
                }
            },
            methods: {
                slide(direction) {
                    this.$emit("slide", direction);
                },
                transformWorksArrForBtn(btnDirection) {
                    const worksArray = [...this.works];
                    const lastItem = worksArray[worksArray.length - 1];
        
                    switch (btnDirection) {
                        case 'next': 
                            worksArray.push(worksArray[0]);
                            worksArray.shift();
                            break;
                        
        
                        case 'prev': 
                            worksArray.unshift(lastItem);
                            worksArray.pop();
                            break
                        
                    }
        
                    return worksArray;
                }
            }
        };
        
        new Vue({
            el: "#slider-component",
            components: {
                info, display, btns
            },
            data: {
                works: [
                    {
                    title: "",
                    techs: "",
                    photo: ""
                    }
                ],
                currentIndex: 0
            },
            computed: {
                currentWork() {
                    return this.works[this.currentIndex]
                }
            },
            created(){
                // this.works = require('../../../data/works.json');
                // this.currentIndex = 0;
        
                let receiveDataAjax = function(url){
                    return new Promise(function(resolve){
                      let xhr = new XMLHttpRequest();
                      xhr.open('GET', url);
                      xhr.responseType = 'json';
                      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                      xhr.addEventListener('load', ()=>{
                          resolve(xhr.response);
                      })
                      xhr.send();
                    })
                }
            
                receiveDataAjax(`https://webdev-api.loftschool.com/works/65`)
                .then(function(response){
                    this.works = response;
                }.bind(this))
            },
            methods: {
                handleSlide(direction) {
                    const len = this.works.length - 1
        
                    switch(direction) {
                        case "next":
                            this.currentIndex === len ? this.currentIndex = 0 : this.currentIndex ++
                            break;
                        case "prev":
                            this.currentIndex === 0 ? this.currentIndex = len : this.currentIndex --
                            break;
                    }
                }
            },
            template: "#slider-root",
        });


    }
    return {
        init: sliderInit
    }
}

