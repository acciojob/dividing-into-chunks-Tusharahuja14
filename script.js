const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res=[];
	let temp=[];
	let sum=0;
	for(let i=0;i<arr.length;i++)
		{
			let count=0;
			
		if(sum+arr[i]<=n)
		{
		temp.push(arr[i]);	
		sum+=arr[i];	
		}
		else
		{
			res.push(temp);
			temp=[arr[i]];
			sum=arr[i];
		}
		}
	 if (temp.length > 0) {
    res.push(temp);
  }

	return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
