function num_counter(flag){
    const nums = document.getElementById("count");
    let count = parseInt(nums.textContent);
    console.log(count)
    if(flag == 0){
        nums.textContent = 0;
        nums.style.color = "rgb(146, 146, 146)";
    }
    else if(flag == -1){
        count = count - 1;
        if(count < 0){
            nums.textContent = count;
            nums.style.color = "rgb(219, 42, 42)";
        }
        else if(count > 0){
            nums.textContent = count;
            nums.style.color = " rgb(33, 142, 33)";
        }
        else{
            nums.textContent = count;
            nums.style.color = "rgb(146, 146, 146)";
        }
    }
    else{
        count = count + 1;
        if(count < 0){
            nums.textContent = count;
            nums.style.color = "rgb(219, 42, 42)";
        }
        else if(count > 0){
            nums.textContent = count;
            nums.style.color = " rgb(33, 142, 33)";
        }
        else{
            nums.textContent = count;
            nums.style.color = "rgb(146, 146, 146)";
        }
    }
}
const decs = document.getElementById("b1");
const reset = document.getElementById("b2");
const incr = document.getElementById("b3") ;

decs.addEventListener("click", function() { num_counter(-1); });
reset.addEventListener("click", function() { num_counter(0); });
incr.addEventListener("click", function() { num_counter(1); });