const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res=[];
	let temp=[];
	for(let i=0;i<n;i++)
		{
			let count=0;
			let sum=0;
			let j=0;
			
		if(sum+arr[i]<=n)
		{
		temp.push(arr[i]);	
		sum+=arr[i];	
		}
		else
		{
			res.push(temp);
			sum=arr[i];
			temp=arr[i];
		}
		}
	return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
