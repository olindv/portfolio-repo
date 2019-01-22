import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './store';

Vue.use(VueRouter);

import skills from './components/skills.vue';
import blog from './components/blog.vue';
import works from './components/works.vue';

const routes = [
  {
    path: '/admin',
    component: skills
  },
  {
    path: '/admin/blog',
    component: blog
  },
  {
    path: '/admin/works',
    component: works
  }
];

const router = new VueRouter({ routes, mode: 'history' });

router.beforeEach((to, from, next) => {
    let receiveAjax = function(url, method, token){
      return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("Authorization", 'Bearer ' + token);
        xhr.addEventListener('load', ()=>{
            resolve(xhr.response);
        })
        xhr.addEventListener('readystatechange', ()=>{
            if(xhr.readyState === 4){
              if(xhr.status >= 400){
                reject(xhr.response);
              }
            }
        })
        xhr.send();
      })
    }

    let token = localStorage.getItem('token');
    receiveAjax(`https://webdev-api.loftschool.com/user`, 'GET', token)
    .then(function(response){
      return response;
    }, function(){
      return receiveAjax('https://webdev-api.loftschool.com/refreshToken', 'POST', token);
    })
    .then(function(response){
      if(response.token){ 
        localStorage.setItem('token', response.token); 
        let newToken = localStorage.getItem('token');
        return receiveAjax(`https://webdev-api.loftschool.com/user`, 'GET', newToken) 
      }else{
        return response;
      }
    }, function(){
      document.location.replace("https://olindv.github.io/"); 
      // document.location.replace("http://localhost:8080/admin"); 
    })
    .then(function(response){
      if(response){
        store.commit('updateUserId', response.user.id);
        next();
      }
    })
});


export default router;