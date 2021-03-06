import Vue from 'vue';

export default function Skills() {
    function skillsInit() {
        const skill = {
            template: "#skill",
            props: ['skillPercent', 'skillTitle'],
            // props: {
            //     skillPercentage: Number,
            //     skillTitle: String
            // },
            methods: {
                drawCircleDependsOnPercentage(){
                    const circle = this.$refs['circle'];
                    const dashOffset = parseInt(
                        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
                    );
            
                    const percentDashoffset = (dashOffset / 100) * (100 - this.skillPercent);
                    const percentOpacity = this.skillPercent / 100;
                    circle.style.strokeDashoffset = percentDashoffset;
                    circle.style.opacity = percentOpacity;
                }
            },
            mounted(){
                this.drawCircleDependsOnPercentage();
            }
        }
        const skillsRow = {
            template: "#skills-item",
            props: ['skillsGroupObj'],
            // props: {
            //     skillsGroupObj: Object
            // },
            components: {
                skill
            }
        }
        
        new Vue({
            el: "#skills-component",
            components: {
                skillsRow
            },
            data() {
                return{
                    skills: []
                    // skills: {}
                }
            },
            created(){
                // this.skills = require('../../../data/skills.json');
        
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
                };
                receiveDataAjax(`https://webdev-api.loftschool.com/skills/65`)
                .then(function(response){
                    let skillPrepareDataFrontend = {};
                    skillPrepareDataFrontend.category = 'Frontend';
                    skillPrepareDataFrontend.key = 1;
                    skillPrepareDataFrontend.skills = [];
                    let skillPrepareDataBackend = {};
                    skillPrepareDataBackend.category = 'Backend';
                    skillPrepareDataBackend.key = 2;
                    skillPrepareDataBackend.skills = [];
                    let skillPrepareDataWorkflow = {};
                    skillPrepareDataWorkflow.category = 'Workflow';
                    skillPrepareDataWorkflow.key = 3;
                    skillPrepareDataWorkflow.skills = [];
            
                    response.forEach(function(item){
                        switch (item.category){
                            case 1: {
                                let skillsGroupsFrontend = {}
                                skillsGroupsFrontend.id = item.id;
                                skillsGroupsFrontend.title = item.title;
                                skillsGroupsFrontend.percents = item.percents;
                                skillPrepareDataFrontend.skills.push(skillsGroupsFrontend)
                                break;
                            }
                            case 2: {
                                let skillsGroupsBackend = {}
                                skillsGroupsBackend.id = item.id;
                                skillsGroupsBackend.title = item.title;
                                skillsGroupsBackend.percents = item.percents;
                                skillPrepareDataBackend.skills.push(skillsGroupsBackend)
                                break;
                            }
                            case 3:{
                                let skillsGroupsWorkflow = {}
                                skillsGroupsWorkflow.id = item.id;
                                skillsGroupsWorkflow.title = item.title;
                                skillsGroupsWorkflow.percents = item.percents;
                                skillPrepareDataWorkflow.skills.push(skillsGroupsWorkflow)
                                break;
                            }  
                        }
                    })
                    let skills = [];
                    skills.push(skillPrepareDataFrontend);
                    skills.push(skillPrepareDataBackend);
                    skills.push(skillPrepareDataWorkflow);
                    this.skills=skills;
                }.bind(this))
            },
            template: "#skills-list",
        });
    }
    return{
        init: skillsInit
    }
}