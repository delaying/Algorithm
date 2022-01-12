//n값만 입력받으면 끝!!

let arr=[];
let n = 6;

for(let i=0; i<=n; i++){
    if(i<3){
        arr[i]=i;
    }else{
        arr[i] = arr[i-1]+arr[i-2];
    }
}

console.log(arr[n]);