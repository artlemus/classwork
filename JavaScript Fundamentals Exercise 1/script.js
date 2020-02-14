{

    let numbers = [19, 15, 20, 40, 90,45,89,94,1,15,16];
    numbers.length = 11;

    let array = 0;
    let total = 0;
    alert("the average of the listed numbers: "+ numbers);
    
    for (let i = 0; i<numbers.length; i++){
        if (numbers[i] !== undefined) {
            array++;
            total += numbers[i];
        }
    }
    let avg = total / array;
        alert(avg);
    }