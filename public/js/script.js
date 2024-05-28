


$("#login-form").submit(e=>{
	e.preventDefault();	
	const username = e.target.username.value;
	const password = e.target.password.value;
	$.post("http://127.0.0.1:8080/login", {
		username: username,
		password: password
	}, (data, status)=>{
		alert(JSON.stringify(data));
	});
});
