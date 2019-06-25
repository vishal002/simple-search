
// get data call to fetch data from api
let count = 0;
let element = document.getElementById('display');
let ele = '';
function getData (param) {
    if(param){
        //console.log("Fetching Data "+ param +"  "+ count++);
        ele =  ele + `Fetch Data Call for "${param}" and api count is ${count++}` +  '<br/>';
        element.innerHTML = ele;
    }
};
const debounce = function(fn, delay){
    let timer;
    return function(){
        let context = this,
            arg = arguments;
        clearTimeout(timer);

        timer = setTimeout(function(){
            fn.apply(context, arg);
        }, delay);
    }
}
const betterSearch = debounce(getData, 1000);




function doThrottling(){
    console.log(`this is throttling`);
    ele = ele + `this is throttling ${count++}` + '<br/>';
    element.innerHTML = ele;
}

function throttle(fn, limit){
    let flag = true;
    return function () {
        let context = this, arg = arguments;
        if(flag){
            fn.apply(context, arg);
            flag = false;
            setTimeout(function(){
                flag= true;
            }, limit)
        }
    }
}

const betterFun = throttle(doThrottling, 2000);

window.addEventListener('resize', betterFun);


function normalFunction(){
    ele = ele + `this is normal call ${count++}` + '<br/>';
    element.innerHTML = ele;
}

window.addEventListener('resize', normalFunction);