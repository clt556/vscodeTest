//API = application programming interface
//사용자 요청을 처리해서 데이터를 찾고 가공해서 사용자에게 다시 전달하게 해주는 방법의 기술

//https://jsonplaceholder.typicode.com/ 로부터 무작위 api 요청을 받아 처리해보자

async function getData(){
    let rawResponse = await fetch(`https://eldenring.fanapis.com/api/items?limit=2`);

    let jsonResponse = await rawResponse.json();
    
    console.log(jsonResponse);

}

fetch("https://eldenring.fanapis.com/api/bosses?limit=20&page=3").then((response)=> response.json()).then((data)=>{
    console.log(data);
    const dataArray = data.data;
    dataArray.forEach(element => {
        console.log(element);
    });
});


//fetch는 내장 함수임. 엘든링 프로젝트도 이거대로 하면 될듯
//이 fetch는 promise 객체를 반환하므로, then이나 catch를 사용할 것

