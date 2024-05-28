$("#login-form").submit(e=>{
	e.preventDefault();	
	const username = e.target.username.value;
	const password = e.target.password.value;
	$.post("http://localhost:8080/account/login", {
		username: username,
		password: password
	}, (data, status)=>{
		alert(JSON.stringify(data));
	});
});
