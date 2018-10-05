function createXhr(){
    var xhr=null;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject("Micrsoft.XMLHttp");
    }
    return xhr;
}