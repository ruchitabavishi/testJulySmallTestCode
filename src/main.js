var items = [
    []
]



const MAX = 100; 

  
// This function basically finds largest 0 
// sum aubarray in temp[0..n-1]. If 0 sum 
// does't exist, then it returns false. Else 
// it returns true and sets starting and 
// ending indexes as starti and endj. 

function sumZero(temp, starti, endj,  n) 
{ 
    map<int, int> presum; 

    var sum = 0; // Initialize sum of elements 


    var max_length = 0; 


    for (let i = 0; i < n; i++) 

    { 


        sum += temp[i]; 

        if (temp[i] == 0 && max_length == 0) 

        { 
            starti = i; 

            endj = i; 

            max_length = 1; 

        } 

        if (sum == 0) 

        { 

            if (max_length < i + 1) 

            { 

                starti = 0; 

                endj = i; 

            } 

            max_length = i + 1; 

        } 

  

        // Look for this sum in Hash table 

        if (presum.find(sum) != presum.end()) 

        { 

            // store previous max_length so 

            // that we can check max_length 

            // is updated or not 

            var old = max_length; 

  

            // If this sum is seen before, 

            // then update max_len 

            max_length = max(max_length, i - presum[sum]); 

  

            if (old < max_length) 

            { 

                // If max_length is updated then 

                // enter and update start and end 

                // point of array 

                endj = i; 

                starti = presum[sum] + 1; 

            } 

        } 

        else

  

            // Else insert this sum with 

            // index in hash table 

            presum[sum] = i; 

    } 

  

    // Return true if max_length is non-zero 

    return (max_length != 0); 
} 

  
// The main function that finds Largest rectangle 
// sub-matrix in a[][] whose sum is 0. 

void sumZeroMatrix( a,  row,  col) 
{ 

    let temp; 

  

    // Variables to store the final output 

    var fup = 0, fdown = 0, fleft = 0, fright = 0; 

    var sum; 

    var up, down; 

    var maxl = INT_MIN; 

  

    // Set the left column 

    for (let left = 0; left < col; left++) 

    { 

        // Initialize all elements of temp as 0 

        memset(temp, 0, sizeof(temp)); 

  

        // Set the right column for the left column 

        // set by outer loop 

        for (let right = left; right < col; right++) 

        { 

            // Calculate sum between current left 

            // and right for every row 'i' 

            for (let i = 0; i < row; i++) 

                temp[i] += a[i][right]; 


            var sum = sumZero(temp, up, down, row); 

            var ele = (down - up + 1) * (right - left + 1); 

  

            if (sum && ele > maxl) 

            { 

                fup = up; 

                fdown = down; 

                fleft = left; 

                fright = right; 

                maxl = ele; 

            } 

        } 

    } 



    if (fup == 0 && fdown == 0 && fleft == 0 && 

            fright == 0 && a[0][0] != 0) { 

       console.log("No zero-sum sub-matrix exists"); 

        return; 

    } 

  

    // Print final values 

    for (let j = fup; j <= fdown; j++) 

    { 

        for (let i = fleft; i <= fright; i++) 

            console.log(  a[j][i] + " ")

        console.log( endl); 

    } 
} 

  
// Driver program to test above functions 

function main() 
{ 

    var a = [ [ 9, 7, 16, 5 ], [ 1, -6, -7, 3 ], 

                      [ 1, 8, 7, 9 ], [ 7, -2, 0, 10 ] ]; 

   

    var row = 4, col = 4; 

    sumZeroMatrix(a, row, col); 

    return 0; 
} 