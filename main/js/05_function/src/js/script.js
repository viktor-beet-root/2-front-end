(function () {
    //if (confirm()) {
    fuc('Viktor');
    //}

    function fuc(userName, znak = '!', d) {
        //znak = znak ?? '!';
        //znak = znak || '!';
        console.log('Hello ' + userName + znak);
    }

    fuc('Viktor', '');

    /**
     * Sum a numebr
     * 
     * @param {number} a 
     * @param {number} b 
     * @return {number}
     */

    function sum(a = 0, b = 0) {
        //if (typeof a !== 'number') return;

        a = +a;
        b = +b;

        return a + b;
    }

    function miniCalc(num1 = 0, znak, num2 = 0) {
        num1 = +num1;
        num2 = +num2;

        if (!znak) {
            console.error("Нет знака");
            return NaN;
        }

        switch (znak) {
            case '+':
                return sum(num1, num2);
        }
    }

    console.log(console.log(0))

    console.log(sum());
    console.log(sum('1'));
    console.log(sum(1, 2));
    console.log(sum(2, 5));

    // fuc(
    //     prompt('sdf'),
    //     prompt('sdfdsf'),
    //     prompt('sdf')
    // );

    const d = sum(5, 10);

    console.log(d);

    function a(a, b, ...othe) {
        console.log(othe);

        baz(sum(4, 4));
        function s() {

        }
    }

    //a(1, 2, 3, 4, 5);

    const baz = function (a) {
        console.log(a)
        function ee() {

        }
    }
    a();

    const sum1 = (a, b) => {
        return a + b;
    }

    const sum2 = (a, b) => a + b;

    const sum3 = b => b * b;

    console.log(sum3(2));

    const sum4 = () => 50;
})();

(function () {
    const f = 'f';
})();


(function () {
    const f = 'f';
}());

console.log(2 ** 2);
