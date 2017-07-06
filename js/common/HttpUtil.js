/**
 * Created by wtao on 2017/7/6.
 */
export default class HttpUtil{
    static get(url){
        return new Promise(((resolve,reject)=>{
            fetch(url)
                .then(response=>response.json())
                .then(result=>{
                    resolve(result);
                })
                .catch(error=>{
                    reject(error);
                })
        }))
    }

    static post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'post',
                header:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(response=>response.json())
                .then(result=>{
                    resolve(result)
                })
                .catch(error=>{
                    reject(error)
                })
        })
    }
}