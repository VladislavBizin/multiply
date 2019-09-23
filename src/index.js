module.exports = function multiply(a, b) {
  // your solution
    let [str1, str2] = Number(a) > Number(b) ? [a, b] : [b, a];

    const makePolygon = (length = a.length + b.length, acc = []) => {
        if (length === 0) {
            return acc;
        }
        return makePolygon(length - 1, [...acc, []]);
    };

    const calculator = (arr) => {
        let res = 0;
        for (let i = 0; i < arr.length; i += 1) {
            res = res + arr[i];
        }
        return res;
    };

    let polygon = makePolygon();

    for (let i = 0; i < str1.length; i += 1) {
        for (let j = 0; j < str2.length; j += 1) {
            let res = Number(str1[i]) * Number(str2[j]);
            let resToStr = res.toString().split("");
            if (res > 9) {
                polygon[i + j].push(Number(resToStr[0]));
                polygon[j + i + 1].push(Number(resToStr[1]));
            } else {
                polygon[i + j].push(0);
                polygon[j + i + 1].push(Number(res));
            }
        }
    }

    let result = [];
    polygon.reverse().reduce((acc,elem) => {
        if(calculator([...elem, acc]) > 9){
            let res = calculator([...elem, acc]).toString();
            result = [Number(res.slice(res.length -1)), ...result];
            return Number(res.slice(0,res.length -1));
        }
        result = [calculator([...elem,acc]),...result];
        return 0;
    }, 0);

    let newResult = result.join("").toString();

    let resCount = 0;

    for (let i = 0; i < newResult.length; i += 1){
        if(resCount > 0){
            return newResult.slice(i-1);
        }
        resCount = resCount + Number(newResult[i]);
    }
};
