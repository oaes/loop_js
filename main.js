//sum of 1-50 number using for-loops



var sum =0
for(i =1; i<=50;i++){
    var result = sum + i
    console.log(sum + '+' + i + '=' + (sum+i))
    sum +=i
}
console.log('result =' + sum);